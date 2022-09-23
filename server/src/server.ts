import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHourToMinutes } from './utils/convert-hour';
import { convertMinutesToHour } from './utils/convert-minute';

const app = express();

// Middlewares for POST Requests
// application/json
app.use(express.json());

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Database connection
const prisma = new PrismaClient({
  log: ['query'], // log queries on console
});

// List games with ads count
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

// Create new ad
app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const { body } = request;

  const newAd = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: +body.yearsPlaying, // parse to Number/Int
      discord: body.discord,
      weekDays: body.weekDays.join(','), // [0, 1] => '0, 1, 3'
      hourStart: convertHourToMinutes(body.hourStart), // '13:00' => 780
      hourEnd: convertHourToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return response.json(newAd);
});

// List ads by game
app.get('/games/:id/ads', async (request, response) => {
  const ads = await prisma.ad.findMany({
    where: {
      gameId: request.params.id,
    },
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return response.json(
    ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(','), // '0,5,6' => ['0','5','6'],
      hourStart: convertMinutesToHour(ad.hourStart), // 780 => '13:00'
      hourEnd: convertMinutesToHour(ad.hourEnd),
    }))
  );
});

// Find Discord by Ad ID
app.get('/ads/:id/discord', async (request, response, next) => {
  try {
    const username = await prisma.ad.findFirstOrThrow({
      where: {
        id: { equals: request.params.id },
      },
      select: {
        discord: true,
      },
    });

    return response.json(username);
  } catch (error: any) {
    response.status(404).json({
      name: error.name,
      message: error.message,
      stack: error.stack // only in development mode
    });
  }
});

app.listen(3000, () => console.log('Server running on localhost:3000'));

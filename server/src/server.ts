import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

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
app.post('/ads', (request, response) => {
  return response.json([]);
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
      weekDays: ad.weekDays.split(','), // ['0','5','6']
    }))
  );
});

// Find Discord by Ad ID
app.get('/ads/:id/discord', async (request, response) => {
  const username = await prisma.ad.findFirstOrThrow({
    where: {
      id: request.params.id,
    },
    select: {
      discord: true,
    },
  });

  return response.json(username);
});

app.listen(3000, () => console.log('Server running on localhost:3000'));

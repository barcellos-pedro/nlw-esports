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
app.get('/games/:id/ads', (request, response) => {
  return response.send(request.params.id);
});

// Find Discord by Ad ID
app.get('/ads/:id/discord', (request, response) => {
  return response.send(request.params.id);
});

app.listen(3000, () => console.log('Server running on localhost:3000'));

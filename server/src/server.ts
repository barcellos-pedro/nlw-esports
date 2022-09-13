import express from 'express';

const app = express();

// List games with ads count
app.get('/games', (request, response) => {
  return response.json({});
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

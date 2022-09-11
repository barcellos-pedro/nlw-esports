import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({
    id: 1,
    message: 'hello world!',
    status: true
  });
});

app.listen(3000, () => console.log('Server running on localhost:3000'));

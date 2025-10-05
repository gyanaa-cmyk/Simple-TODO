import express from 'express';

const app = express();
const port = 3000;

app.get('/api/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});
app.get('/status', (req, res) =>
  res.json({
    status: 'ok',
    uptime: process.uptime()
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

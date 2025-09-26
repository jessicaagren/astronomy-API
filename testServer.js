import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('✅ Root route works!');
});

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello planets!' });
});

app.listen(PORT, () => {
  console.log(`🌍 Test server running on http://localhost:${PORT}`);
});

import express from 'express';
import astronomyRouter from './routes/astronomyRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// root route
app.get('/', (req, res) => {
  res.send('🌌 Welcome to Astronomy API');
});

// planets route
app.use('/api/planets', astronomyRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

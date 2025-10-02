import express from 'express';
import planetRouter from './routes/planetRoutes.js';
import moonRouter from './routes/moonRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Astronomy API');
});

app.use('/api/planets', planetRouter);
app.use('/api/moons', moonRouter);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
const shutdown = () => {
  console.log('\n🛑 Stänger av servern...');
  server.close(() => {
    console.log('✅ Server avstängd');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

import express from 'express';
// @ts-ignore
import planetRouter from './routes/planetRoutes';
// @ts-ignore
import moonRouter from './routes/moonRoutes';
// @ts-ignore
import { errorHandler } from './middlewares/errorHandler';
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
    console.log('\n🛑 Closing server...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
//# sourceMappingURL=server.js.map
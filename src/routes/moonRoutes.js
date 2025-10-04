import express from 'express';
import * as moonService from '../services/moonService';
import { logSuccess, logError, logWarn } from '../utils/logHelpers.js';

const router = express.Router();

// GET /api/moons
router.get('/', async (req, res, next) => {
  try {
    const moons = await moonService.getAllMoons();
    res.json(moons);
    logSuccess(req);
  } catch (err) {
    logError(req, err, 'Failed to fetch moons');
    next(err);
  }
});

// GET /api/moons/:id
router.get('/:id', async (req, res, next) => {
  try {
    const moon = await moonService.getMoonById(req.params.id);
    if (!moon) {
      logWarn(req, 'Moon not found');
      return res.status(404).json({ error: 'Moon not found' });
    }
    res.json(moon);
    logSuccess(req);
  } catch (err) {
    logError(req, err, 'Failed to fetch moon');
    next(err);
  }
});

export default router;

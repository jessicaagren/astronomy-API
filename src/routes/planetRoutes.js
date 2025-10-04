import express from 'express';
import * as planetService from '../services/planetService';
import { logSuccess, logError, logWarn } from '../utils/logHelpers.js';

const router = express.Router();

// GET /api/planets
router.get('/', async (req, res, next) => {
  try {
    const planets = await planetService.getAllPlanets();
    res.json(planets);
    logSuccess(req);
  } catch (err) {
    logError(req, err, 'Failed to fetch planets');
    next(err);
  }
});

// GET /api/planets/regular-planets
router.get('/regular-planets', async (req, res, next) => {
  try {
    const planets = await planetService.getRegularPlanets();
    res.json(planets);
    logSuccess(req);
  } catch (err) {
    logError(req, err, 'Failed to fetch regular planets');
    next(err);
  }
});

// GET /api/planets/dwarf-planets
router.get('/dwarf-planets', async (req, res, next) => {
  try {
    const planets = await planetService.getDwarfPlanets();
    res.json(planets);
    logSuccess(req);
  } catch (err) {
    logError(req, err, 'Failed to fetch dwarf planets');
    next(err);
  }
});

// GET /api/planets/:id
router.get('/:id', async (req, res, next) => {
  try {
    const planet = await planetService.getPlanetById(req.params.id);
    if (!planet) {
      logWarn(req, 'Planet not found');
      return res.status(404).json({ error: 'Planet not found' });
    }
    res.json(planet);
    logSuccess(req);
  } catch (err) {
    logError(req, err, 'Failed to fetch planet');
    next(err);
  }
});

// GET /api/planets/:id/moons
router.get('/:id/moons', async (req, res, next) => {
  try {
    const moons = await planetService.getMoonsByPlanetId(req.params.id);
    if (!moons || moons.moons.length === 0) {
      logWarn(req, 'No moons found');
      return res.status(404).json({ error: 'No moons found for this planet' });
    }
    res.json(moons);
    logSuccess(req);
  } catch (err) {
    logError(req, err, 'Failed to fetch moons');
    next(err);
  }
});

export default router;

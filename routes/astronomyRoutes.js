import express from 'express';
import * as astronomyService from '../services/astronomyService.js';

console.log('✅ astronomyRoutes loaded');

const router = express.Router();

// Debug log varje gång routern laddas
console.log('✅ astronomyRoutes.js loaded');

// GET /api/planets - alla planeter
router.get('/', async (req, res) => {
  console.log('📡 GET /api/planets called');
  try {
    const planets = await astronomyService.getAllPlanets();
    console.log('✅ planets fetched:', planets?.length || 0);
    res.json(planets);
  } catch (error) {
    console.error('❌ Error fetching planets:', error.message);
    res
      .status(500)
      .json({ error: 'Failed to fetch planets', details: error.message });
  }
});

// GET /api/planets/test - för att se om routern funkar alls
router.get('/test', (req, res) => {
  console.log('📡 GET /api/planets/test called');
  res.json({ message: 'Planets router is alive 🚀' });
});

// GET /api/planets/:id - en specifik planet
router.get('/:id', async (req, res) => {
  console.log(`📡 GET /api/planets/${req.params.id} called`);
  try {
    const planet = await astronomyService.getPlanetById(req.params.id);
    if (!planet) {
      console.log('⚠️ Planet not found');
      return res.status(404).json({ error: 'Planet not found' });
    }
    console.log('✅ planet fetched:', planet.name || planet.namn);
    res.json(planet);
  } catch (error) {
    console.error('❌ Error fetching planet:', error.message);
    res
      .status(500)
      .json({ error: 'Failed to fetch planet', details: error.message });
  }
});

export default router;

// import express from 'express';
// import * as astronomyService from '../services/astronomyService.js';

// const router = express.Router();

// // GET /api/planets - Alla planeter
// router.get('/', async (req, res) => {
//   try {
//     const planets = await astronomyService.getAllPlanets();
//     res.json(planets);
//   } catch (error) {
//     console.error('Error fetching planets:', error.message);
//     res.status(500).json({
//       error: 'Failed to fetch planets',
//       details: error.message,
//     });
//   }
// });

// // // GET /api/animals/stats/continent - Statistik per kontinent
// // router.get('/stats/continent', async (req, res) => {
// //   try {
// //     const stats = await animalService.getContinentStats();
// //     res.json(stats);
// //   } catch (error) {
// //     console.error('Error fetching continent stats:', error.message);
// //     res.status(500).json({
// //       error: 'Failed to fetch continent statistics',
// //       details: error.message,
// //     });
// //   }
// // });

// // GET /api/planets/:id - En specifik planet
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const planet = await astronomyService.getPlanetById(id);

//     if (!planet) {
//       return res.status(404).json({ error: 'Planet not found' });
//     }

//     res.json(planet);
//   } catch (error) {
//     console.error('Error fetching planet:', error.message);
//     res.status(500).json({
//       error: 'Failed to fetch planet',
//       details: error.message,
//     });
//   }
// });

// export default router;

import * as moonData from '../data/moonData.js';
import { formatMoon } from '../utils/moonHelpers.js';
import { withErrorHandling } from '../utils/errorHelpers.js';

export const getAllMoons = () =>
  withErrorHandling(async () => {
    const moons = await moonData.findAllMoons();
    return {
      total_amount: moons.length,
      moons: moons.map(formatMoon),
    };
  }, 'Failed to fetch moons');

export const getMoonById = (id) =>
  withErrorHandling(async () => {
    const moon = await moonData.findMoonById(id);
    return formatMoon(moon);
  }, 'Failed to fetch moon');

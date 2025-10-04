import * as planetData from '../data/planetData.js';
import { formatPlanet, categorizeSize } from '../../utils/planetHelpers.js';
import { withErrorHandling } from '../../utils/errorHelpers.js';

export const getAllPlanets = () =>
  withErrorHandling(async () => {
    const planets = await planetData.findAllPlanets();
    return {
      total_amount: planets.length,
      planets: planets.map(formatPlanet),
    };
  }, 'Failed to fetch planets');

export const getRegularPlanets = () =>
  withErrorHandling(async () => {
    const planets = await planetData.findAllPlanets();
    const regularPlanets = planets.filter(
      (p) => categorizeSize(p.diameter_km) === 'regular planet'
    );
    return {
      total_amount: regularPlanets.length,
      planets: regularPlanets.map(formatPlanet),
    };
  }, 'Failed to fetch regular planets');

export const getDwarfPlanets = () =>
  withErrorHandling(async () => {
    const planets = await planetData.findAllPlanets();
    const dwarfPlanets = planets.filter(
      (p) => categorizeSize(p.diameter_km) === 'dwarf planet'
    );
    return {
      total_amount: dwarfPlanets.length,
      planets: dwarfPlanets.map(formatPlanet),
    };
  }, 'Failed to fetch dwarf planets');

export const getPlanetById = (id) =>
  withErrorHandling(async () => {
    const planet = await planetData.findPlanetById(id);
    return formatPlanet(planet);
  }, 'Failed to fetch planet');

export const getMoonsByPlanetId = (planetId) =>
  withErrorHandling(async () => {
    const planet = await planetData.findPlanetById(planetId);
    if (!planet) {
      return { error: `Planet with id ${planetId} not found` };
    }
    const moons = await planetData.findMoonsByPlanetId(planetId);
    return {
      planet: { id: planet.id, name: planet.name },
      amount_of_moons: moons.length,
      moons,
    };
  }, 'Failed to fetch moons for planet');

import { Planet, PlanetSize } from '../types/PlanetType.js';

export const categorizeSize = (planet: Planet): PlanetSize => {
  if (planet.diameter_km < 2400) return 'dwarf planet';
  return 'regular planet';
};

export const formatPlanet = (
  planet: Planet | null | undefined
): (Planet & { type_of_planet: PlanetSize }) | null => {
  if (!planet) return null;

  return {
    ...planet,
    type_of_planet: categorizeSize(planet),
  };
};

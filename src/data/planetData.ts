import { getConnection } from '../config/database';
import { Planet } from '../types/PlanetType';
import { Moon } from '../types/MoonType';

export const findAllPlanets = async (): Promise<Planet[]> => {
  const db = await getConnection();
  const [rows] = await db.execute('SELECT * FROM planets ORDER BY id');
  return rows as Planet[];
};

export const findPlanetById = async (id: number): Promise<Planet | null> => {
  const db = await getConnection();
  const [rows] = await db.execute(`SELECT * FROM planets WHERE id = ?`, [id]);
  const planets = rows as Planet[];
  return planets[0] ?? null;
};

export const findMoonsByPlanetId = async (
  planetId: number
): Promise<Moon[]> => {
  const db = await getConnection();
  const [rows] = await db.execute(
    `SELECT m.id, m.planet_id, m.name, m.distance_from_planet_km, m.diameter_km,
            m.year_of_discovery, m.notes,
            p.name AS planet_name
     FROM moons m
     JOIN planets p ON m.planet_id = p.id
     WHERE m.planet_id = ?
     ORDER BY m.id`,
    [planetId]
  );
  return rows as Moon[];
};

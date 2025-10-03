import { getConnection } from '../config/database.js';

export const findAllMoons = async () => {
  const db = await getConnection();
  const [rows] = await db.execute(`
    SELECT m.id, m.planet_id, m.name, m.distance_from_planet_km, m.diameter_km,
           m.year_of_discovery, m.notes,
           p.name AS planet_name
    FROM moons m
    JOIN planets p ON m.planet_id = p.id
    ORDER BY m.id
  `);
  return rows;
};

export const findMoonById = async (id) => {
  const db = await getConnection();
  const [rows] = await db.execute(
    `SELECT m.id, m.planet_id, m.name, m.distance_from_planet_km, m.diameter_km,
              m.year_of_discovery, m.notes,
              p.name AS planet_name
       FROM moons m
       JOIN planets p ON m.planet_id = p.id
       WHERE m.id = ?`,
    [id]
  );
  return rows[0];
};

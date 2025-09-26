import { getConnection } from '../config/database.js';

// Pure data access - bara SQL queries
export const findAllPlanets = async () => {
  const db = await getConnection();
  const [rows] = await db.execute(
    // 'SELECT id, name, avg_distance_from_sun_km, diameter_km, day_length, orbital_period, gravity_relative_to_earth, avg_temperature_celsius, atmosphere, year_of_discovery, number_of_moons, fun_fact FROM animals'
    'SELECT * FROM planets'
  );
  return rows;
};

export const findPlanetById = async (id) => {
  const db = await getConnection();
  const [rows] = await db.execute(
    // 'SELECT id, name, avg_distance_from_sun_km, diameter_km, day_length, orbital_period, gravity_relative_to_earth, avg_temperature_celsius, atmosphere, year_of_discovery, number_of_moons, fun_fact FROM planets WHERE id = ?',
    // [id]
    'SELECT * FROM planets WHERE id = ?',
    [id]
  );
  return rows[0];
};

export const findAllMoons = async () => {
  const db = await getConnection();
  const [rows] = await db.execute(
    'SELECT id, planet_id, name, distance_from_planet_km, diameter_km, year_of_discovery, notes FROM moons'
  );
  return rows;
};

export const findMoonById = async (id) => {
  const db = await getConnection();
  const [rows] = await db.execute(
    'SELECT id, planet_id, name, distance_from_planet_km, diameter_km, year_of_discovery, notes FROM moons WHERE id = ?',
    [id]
  );
  return rows[0];
};

// export const getStatsByContinent = async () => {
//   const db = await getConnection();
//   const [rows] = await db.execute(`
//     SELECT kontinent, COUNT(*) as antal
//     FROM animals
//     GROUP BY kontinent
//     ORDER BY antal DESC
//   `);
//   return rows;
// };

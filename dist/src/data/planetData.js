import { getConnection } from '../config/database';
export const findAllPlanets = async () => {
    const db = await getConnection();
    const [rows] = await db.execute('SELECT * FROM planets ORDER BY id');
    return rows;
};
export const findPlanetById = async (id) => {
    const db = await getConnection();
    const [rows] = await db.execute(`SELECT * FROM planets WHERE id = ?`, [id]);
    const planets = rows;
    return planets[0] ?? null;
};
export const findMoonsByPlanetId = async (planetId) => {
    const db = await getConnection();
    const [rows] = await db.execute(`SELECT m.id, m.planet_id, m.name, m.distance_from_planet_km, m.diameter_km,
            m.year_of_discovery, m.notes,
            p.name AS planet_name
     FROM moons m
     JOIN planets p ON m.planet_id = p.id
     WHERE m.planet_id = ?
     ORDER BY m.id`, [planetId]);
    return rows;
};
//# sourceMappingURL=planetData.js.map
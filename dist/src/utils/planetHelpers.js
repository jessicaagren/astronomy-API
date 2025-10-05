export const categorizeSize = (planet) => {
    if (planet.diameter_km < 2400)
        return 'dwarf planet';
    return 'regular planet';
};
export const formatPlanet = (planet) => {
    if (!planet)
        return null;
    return {
        ...planet,
        type_of_planet: categorizeSize(planet),
    };
};
//# sourceMappingURL=planetHelpers.js.map
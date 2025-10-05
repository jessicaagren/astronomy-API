import { Planet, PlanetSize } from '../types/PlanetType.js';
export declare const categorizeSize: (planet: Planet) => "dwarf planet" | "regular planet";
export declare const formatPlanet: (planet: Planet | null | undefined) => (Planet & {
    type_of_planet: PlanetSize;
}) | null;
//# sourceMappingURL=planetHelpers.d.ts.map
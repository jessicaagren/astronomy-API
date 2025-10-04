import { Planet } from '../types/PlanetType.js';
import { Moon } from '../types/MoonType.js';
export declare const findAllPlanets: () => Promise<Planet[]>;
export declare const findPlanetById: (id: number) => Promise<Planet | null>;
export declare const findMoonsByPlanetId: (planetId: number) => Promise<Moon[]>;
//# sourceMappingURL=planetData.d.ts.map
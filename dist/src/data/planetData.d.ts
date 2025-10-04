import { Planet } from '../types/PlanetType';
import { Moon } from '../types/MoonType';
export declare const findAllPlanets: () => Promise<Planet[]>;
export declare const findPlanetById: (id: number) => Promise<Planet | null>;
export declare const findMoonsByPlanetId: (planetId: number) => Promise<Moon[]>;
//# sourceMappingURL=planetData.d.ts.map
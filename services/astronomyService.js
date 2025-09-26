import * as astronomyData from '../data/astronomyData.js';

export const getAllPlanets = async () => {
  const planets = await astronomyData.findAllPlanets();
  return planets.map((planet) => ({
    ...planet,
    displayName: planet.name, // använder "name" från SQL
  }));
};

export const getPlanetById = async (id) => {
  const planet = await astronomyData.findPlanetById(id);
  if (!planet) return null;

  return {
    ...planet,
    displayName: planet.name,
  };
};

// import * as astronomyData from '../data/astronomyData.js';

// // Business logic och data transformation
// export const getAllPlanets = async () => {
//   const planets = await astronomyData.findAllPlanets();

//   // Lägg till displayName för presentation
//   return planets.map((planet) => ({
//     ...planet,
//     displayName: `${planet.namn}`,
//     // weightCategory: categorizeWeight(animal.vikt),
//   }));
// };

// export const getPlanetById = async (id) => {
//   const planet = await astronomyData.findPlanetById(id);

//   if (!planet) {
//     return null;
//   }

//   return {
//     ...planet,
//     displayName: `${planet.namn}`,
//     // weightCategory: categorizeWeight(animal.vikt),
//   };
// };

// // export const getContinentStats = async () => {
// //   const stats = await animalData.getStatsByContinent();
// //   const total = stats.reduce((sum, stat) => sum + stat.antal, 0);

// //   return {
// //     data: stats,
// //     total,
// //     summary: `Animals distributed across ${stats.length} continents`,
// //   };
// // };

// // // Helper function - pure function
// // const categorizeWeight = (weight) => {
// //   if (weight < 20) return 'Small';
// //   if (weight < 100) return 'Medium';
// //   if (weight < 500) return 'Large';
// //   return 'Huge';
// // };

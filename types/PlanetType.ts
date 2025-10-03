export interface Planet {
  id: number;
  name: string;
  avg_distance_from_sun_km: bigint;
  diameter_km: number;
  day_length: string | null;
  orbital_period: string | null;
  gravity_relative_to_earth: number | null;
  avg_temperature_celsius: string | null;
  atmosphere: string | null;
  year_of_discovery: number | null;
  number_of_moons: number | null;
  fun_fact: string | null;
}

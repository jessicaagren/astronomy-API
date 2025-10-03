export interface Moon {
  id: number;
  planet_id: number;
  name: string;
  distance_from_planet_km: number | null;
  diameter_km: number | null;
  year_of_discovery: number | null;
  notes: string | null;
}

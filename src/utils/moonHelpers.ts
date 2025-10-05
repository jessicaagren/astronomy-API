import { Moon } from '../types/MoonType.js';

export const formatMoon = (moon: Moon | null | undefined): Moon | null => {
  if (!moon) return null;
  return { ...moon };
};

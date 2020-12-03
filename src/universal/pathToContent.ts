import { EChildRoutes, EMainRoutes } from '../__types__/ERoutes';
import { capitalizeString } from './capitalizeString';

export const patToContent = (path: EChildRoutes | EMainRoutes, capitalized: boolean) => {

  if (path.length === 0) return '';

  const replaced = path.slice(1).replace(/-/g, ' ');

  return capitalized ? capitalizeString(replaced) : replaced;
}
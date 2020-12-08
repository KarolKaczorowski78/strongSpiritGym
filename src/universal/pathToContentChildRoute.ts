import { EChildRoutes } from "../__types__/ERoutes";
import { pathToContent } from './pathToContent';

export const pathToContentChildRoute = (path: EChildRoutes) => {
  const childPath = path.slice(path.lastIndexOf('/'));
  return pathToContent(childPath, true);
}
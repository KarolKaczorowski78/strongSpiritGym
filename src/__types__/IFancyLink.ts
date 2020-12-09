import { EChildRoutes, EMainRoutes } from "./ERoutes";

export default interface IFancyLink {
  linkContent: string,
  linkPath: EChildRoutes | EMainRoutes,
}
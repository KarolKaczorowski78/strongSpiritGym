import IContent from './IContent';
import { EChildRoutes, EMainRoutes } from './ERoutes';

export default interface IOffer {
  headling: IContent,
  p: IContent;
  linkContent: IContent;
  linkPath: EChildRoutes | EMainRoutes;
  imgSrc: string;
}

export interface IOfferAdvertisement {
  headling: string,
  p: string,
  linkContent: string,
  linkPath: EChildRoutes | EMainRoutes,
  imgSrc: string,
}
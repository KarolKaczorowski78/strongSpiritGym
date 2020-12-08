import IContent from './IContent';

export default interface IOffer {
  headling: IContent,
  p: IContent;
  linkContent: IContent;
  linkPath: string;
  imgSrc: string;
}
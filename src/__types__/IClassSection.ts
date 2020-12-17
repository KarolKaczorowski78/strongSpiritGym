import IContent from "./IContent";

export default interface IClassSection {
  id: string,
  img: string,
  strengths: IContent[],
  headling: IContent,
  p: IContent,
  word: string,
}
import IContent from "./IContent";

export default interface IStatisticCounter extends IContent {
  count: number,
}

export interface IStatisticCounterComponent {
  count: number,
  text: string,
}
import IChildRoute from './IChildRoute';

export default interface IRoute extends IChildRoute {
  subTopics?: IChildRoute[],
}
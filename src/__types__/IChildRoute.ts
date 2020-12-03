import { RouteProps } from 'react-router';

export default interface IChildRoute extends RouteProps {
  engName: string,
  plName: string,
}
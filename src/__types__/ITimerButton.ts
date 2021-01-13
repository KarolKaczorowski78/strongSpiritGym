import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default interface ITimerButton {
  icon: IconProp,
  action: () => void,
}
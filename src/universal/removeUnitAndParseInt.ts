import { ECssUnits } from '../__types__/ECssUnits';

export const removeUnitAndParseInt = (valueWithUnit: string, unit: ECssUnits) => {
  return parseInt(valueWithUnit.slice(0, -unit.length));
}
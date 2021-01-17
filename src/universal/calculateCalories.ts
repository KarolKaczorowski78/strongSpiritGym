import ICalculatorParams from '../__types__/ICalculatorParams'

export const calculateCalories: (params: ICalculatorParams) => number = ({ age, height, weight, gender, palFactor }) => {
  return (10 * weight + 6.25 * height - 5 * age + (gender === 'WOMAN' ? -161 : 5)) * palFactor;
}

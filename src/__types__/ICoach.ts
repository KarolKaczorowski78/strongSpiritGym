import { EIndividualProgramSports } from './EIndividualProgramSports';

export default interface ICoach {
  id: number,
  locationId: number,
  first_name: string,
  last_name: string,
  email: string,
  specializations: EIndividualProgramSports,
}
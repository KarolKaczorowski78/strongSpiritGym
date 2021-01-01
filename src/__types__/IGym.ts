import { ECountries } from "./ECountries";

export default interface IGym {
  id: number,
  country: ECountries,
  city: string,
  adress: string,
  phone: string,
  email: string,
}
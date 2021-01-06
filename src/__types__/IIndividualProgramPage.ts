import IContent from "./IContent";

export default interface IIndividualProgramPage {
  backgroundImg: string,
  homeSection: {
    headling: IContent,
  },
  aboutSection: {
    aboutDiscipline: {
      headling: IContent,
      content: IContent,
    } ,
    aboutProgram: {
      headling: IContent,
      content: IContent,
    },
  }
}
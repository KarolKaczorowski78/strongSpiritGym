import IIndividualProgramPage from '../__types__/IIndividualProgramPage';
import TestImg from '../img/individualProgram/test.jpg';
import { loremIpsumLongest } from './loremIpsum';

export const individualProgramPages: IIndividualProgramPage[] = [
  {
    backgroundImg: TestImg,
    homeSection: {
      headling: {
        eng: 'Learn how to fight in every area',
        pl: 'Naucz sie walki w kazdej plaszczyznie',
      },
    },
    aboutSection: {
      aboutDiscipline: {
        headling: {
          eng: 'Mixed martial arts',
          pl: 'Mieszane sztuki walki',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest,
        },
      },
      aboutProgram: {
        headling: {
          eng: 'About MMA program',
          pl: 'O programie MMA',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest,
        }
      }
    }
  },
  {
    backgroundImg: TestImg,
    homeSection: {
      headling: {
        eng: 'Develop strength and great physique',
        pl: 'Zbuduj siłe i wspaniala sylwetke',
      },
    },
    aboutSection: {
      aboutDiscipline: {
        headling: {
          eng: 'Powerlifting - for those who love iron',
          pl: 'Powerlifting - dla miłosnikow żelaza',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest,
        },
      },
      aboutProgram: {
        headling: {
          eng: 'About powerlifting program',
          pl: 'O programie',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest,
        }
      }
    }
  },
  {
    backgroundImg: TestImg,
    homeSection: {
      headling: {
        eng: 'Learn how to strike with incredible precision',
        pl: 'Naucz sie uderzac z nadludzka precyzja',
      },
    },
    aboutSection: {
      aboutDiscipline: {
        headling: {
          eng: 'The art of striking',
          pl: 'Sztuka uderzania',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest,
        },
      },
      aboutProgram: {
        headling: {
          eng: 'About stand up program',
          pl: 'O programie',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest,
        }
      }
    }
  },
  {
    backgroundImg: TestImg,
    homeSection: {
      headling: {
        eng: 'Master the art of the ground fight',
        pl: 'Zostan mistrzem walki w parterze',
      },
    },
    aboutSection: {
      aboutDiscipline: {
        headling: {
          eng: 'Ground game - the human chess',
          pl: 'Walka w parterze - ludzkie szachy',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest,
        },
      },
      aboutProgram: {
        headling: {
          eng: 'About ground game program',
          pl: 'O programie parterowym',
        },
        content: {
          eng: loremIpsumLongest,
          pl: loremIpsumLongest + 'Fuk u',
        }
      }
    }
  },
]
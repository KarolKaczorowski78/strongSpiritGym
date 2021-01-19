import { lazy } from 'react';
import { Locations as LocationsArray } from '../websiteTextContent/Location';
import IRoute from '../__types__/IRoute';
import { EMainRoutes, EChildRoutes } from '../__types__/ERoutes';
import { individualProgramPages } from '../websiteTextContent/IndividualProgram';

const Home = lazy(() => import('../views/home'));
const Locations = lazy(() => import('../views/locations'));
const GroupTrainings = lazy(() => import('../views/groupTrainings'));
const IndividualPrograms = lazy(() => import('../views/individualPrograms'));
const FreePerks = lazy(() => import('../views/freePerks'));
const NotFound = lazy(() => import('../views/404'));
const JoinUs = lazy(() => import('../views/joinUs'));
const Schedule = lazy(() => import('../views/schedule'));
const Pricing = lazy(() => import('../views/pricing'));
const IndividualProgram = lazy(() => import('../views/individualProgram'));
const Timer = lazy(() => import('../views/timer'));
const Calculator = lazy(() => import('../views/calculator'));
const Advisor = lazy(() => import('../views/advisor'));
const Location = lazy(() => import('../views/location'));

export const Routes: IRoute[] = [
  {
      engName: '',
      plName: '',
      path: EMainRoutes.HOME,
      exact: true,
      render: () => <Home />,
  },
  {
      engName: 'group training',
      plName: 'Grupowe treningi',
      path: EMainRoutes.GROUP_TRAININGS,
      exact: true,
      render: () => <GroupTrainings />,
      subTopics: [
          {
              engName: 'Schedule',
              plName: 'Grafik',
              path: EChildRoutes.SCHEDULE,
              exact: true,
              render: () => <Schedule />,
          },
          {
              engName: 'Pricing',
              plName: 'Cennik',
              path: EChildRoutes.PRICING,
              exact: true,
              render: () => <Pricing />,
          },
      ],
  },
  {
      engName: 'Locations',
      plName: 'Lokalizacje',
      path: EMainRoutes.LOCATIONS,
      exact: true,
      render: () => <Locations />,
      subTopics: [
          {
              engName: 'Poland',
              plName: 'Polska',
              path: EChildRoutes.POLAND,
              exact: true,
              render: () => <Location { ...LocationsArray[0] } />,
          },
          {
              engName: 'UK',
              plName: 'UK',
              path: EChildRoutes.UK,
              exact: true,
              render: () => <Location { ...LocationsArray[1] } />,
          },
          {
              engName: 'USA',
              plName: 'USA',
              path: EChildRoutes.USA,
              exact: true,
              render: () => <Location { ...LocationsArray[2] } />,
          }
      ],
  },
  {
      engName: 'Individual programs',
      plName: 'Programy indywidualne',
      path: EMainRoutes.INDIVIDUAL_PROGRAMS,
      exact: true,
      render: () => <IndividualPrograms />,
      subTopics: [
          {
              engName: 'MMA',
              plName: 'MMA',
              path: EChildRoutes.MMA,
              exact: true,
              render: () => <IndividualProgram { ...individualProgramPages[0] } />,
          },
          {
              engName: 'Powerlifting',
              plName: 'Powerlifting',
              path: EChildRoutes.POWERLIFTING,
              exact: true,
              render: () => <IndividualProgram { ...individualProgramPages[1] } />,
              // component: IndividualProgram,
          },
          {
              engName: 'Stand up',
              plName: 'Stójka',
              path: EChildRoutes.STAND_UP,
              exact: true,
              render: () => <IndividualProgram { ...individualProgramPages[2] } />,
          },
          {
              engName: 'Ground game',
              plName: 'Parter',
              path: EChildRoutes.GROUND_GAME,
              exact: true,
              render: () => <IndividualProgram { ...individualProgramPages[3] } />,
          }
      ],
  },
  {
      engName: 'Training perks',
      plName: 'Darmowe dodatki',
      path: EMainRoutes.TRAINING_PERKS,
      exact: true,
      render: () => <FreePerks />,
      subTopics: [
          {
              engName: 'Training timer',
              plName: 'Stoper treningowy',
              path: EChildRoutes.TIMER,
              exact: true,
              render: () => <Timer />,
          },
          {
              engName: 'Kcal calculator',
              plName: 'Kalkulator kcal',
              path: EChildRoutes.KCAL_CALC,
              exact: true,
              render: () => <Calculator />,
          },
          {
              engName: 'Sport adviser',
              plName: 'Doradca sportowy',
              path: EChildRoutes.ADVISOR,
              exact: true,
              render: () => <Advisor />,
          }
      ],
  },
  {
      engName: 'Join us',
      plName: 'Dołącz do nas',
      path: EMainRoutes.JOIN_US,
      exact: true,
      render: () => <JoinUs />,
  },
  {
      engName: '',
      plName: '',
      path: '',
      exact: false,
      render: () => <NotFound />,
  }
]

export const RoutesFlattenArray = Routes.map(({ subTopics, ...route }) => 
    subTopics ? [...subTopics, route] : [route]).flat();
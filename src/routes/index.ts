import Home from '../views/home';
import Locations from '../views/locations';
import GroupTrainings from '../views/groupTrainings';
import IndividualPrograms from '../views/individualPrograms';
import FreePerks from '../views/freePerks';
import NotFound from '../views/404';
import JoinUs from '../views/joinUs';
import Schedule from '../views/schedule';
import Classes from '../views/classes';
import Pricing from '../views/pricing';
import IndividualProgram from '../views/individualProgram';
import Timer from '../views/timer';
import Calculator from '../views/calculator';
import Advisor from '../views/advisor';
import Location from '../views/location';
import IRoute from '../__types__/IRoute';
import { EChildRoutes, EMainRoutes } from '../__types__/ERoutes';

export const Routes: IRoute[] = [
    {
        engName: '',
        plName: '',
        path: EMainRoutes.HOME,
        exact: true,
        component: Home,
    },
    {
        engName: 'group training',
        plName: 'Grupowe treningi',
        path: EMainRoutes.GROUP_TRAININGS,
        exact: true,
        component: GroupTrainings,
        subTopics: [
            {
                engName: 'Schedule',
                plName: 'Grafik',
                path: EChildRoutes.SCHEDULE,
                exact: true,
                component: Schedule,
            },
            {
                engName: 'Classes',
                plName: 'Zajęcia',
                path: EChildRoutes.CLASSES,
                exact: true,
                component: Classes,
            },
            {
                engName: 'Pricing',
                plName: 'Cennik',
                path: EChildRoutes.PRICING,
                exact: true,
                component: Pricing,
            },
        ],
    },
    {
        engName: 'Locations',
        plName: 'Lokalizacje',
        path: EMainRoutes.LOCATIONS,
        exact: true,
        component: Locations,
        subTopics: [
            {
                engName: 'Poland',
                plName: 'Polska',
                path: EChildRoutes.POLAND,
                exact: true,
                component: Location,
            },
            {
                engName: 'UK',
                plName: 'UK',
                path: EChildRoutes.UK,
                exact: true,
                component: Location,
            },
            {
                engName: 'USA',
                plName: 'USA',
                path: EChildRoutes.USA,
                exact: true,
                component: Location,
            }
        ],
    },
    {
        engName: 'Individual programs',
        plName: 'Programy indywidualne',
        path: EMainRoutes.INDIVIDUAL_PROGRAMS,
        exact: true,
        component: IndividualPrograms,
        subTopics: [
            {
                engName: 'MMA',
                plName: 'MMA',
                path: EChildRoutes.MMA,
                exact: true,
                component: IndividualProgram,
            },
            {
                engName: 'Powerlifting',
                plName: 'Powerlifting',
                path: EChildRoutes.POWERLIFTING,
                exact: true,
                component: IndividualProgram,
            },
            {
                engName: 'Stand up',
                plName: 'Stójka',
                path: EChildRoutes.STAND_UP,
                exact: true,
                component: IndividualProgram,
            },
            {
                engName: 'Ground game',
                plName: 'Parter',
                path: EChildRoutes.GROUND_GAME,
                exact: true,
                component: IndividualProgram,
            }
        ],
    },
    {
        engName: 'Training perks',
        plName: 'Darmowe dodatki',
        path: EMainRoutes.TRAINING_PERKS,
        exact: true,
        component: FreePerks,
        subTopics: [
            {
                engName: 'Training timer',
                plName: 'Stoper treningowy',
                path: EChildRoutes.TIMER,
                exact: true,
                component: Timer,
            },
            {
                engName: 'Kcal calculator',
                plName: 'Kalkulator kcal',
                path: EChildRoutes.KCAL_CALC,
                exact: true,
                component: Calculator,
            },
            {
                engName: 'Sport adviser',
                plName: 'Doradca sportowy',
                path: EChildRoutes.ADVISOR,
                exact: true,
                component: Advisor,
            }
        ],
    },
    {
        engName: 'Join us',
        plName: 'Dołącz do nas',
        path: EMainRoutes.JOIN_US,
        exact: true,
        component: JoinUs,
    },
    {
        engName: '',
        plName: '',
        path: '',
        exact: false,
        component: NotFound,
    }
]

export const RoutesFlattenArray = Routes.map(({ subTopics, ...route }) => 
    subTopics ? [...subTopics, route] : [route]).flat();
import Img1 from '../img/pricing/pricing1.jpg';
import Img2 from '../img/pricing/pricing2.jpg';
import Img3 from '../img/pricing/pricing3.jpg';
import Img4 from '../img/pricing/pricing4.jpg';

export const headling = {
  eng: 'Try one of programs now and change Your life forever!',
  pl: 'Wyproboj jeden z programow i zmien swoje zycie na zawsze!',
}

export const Pricing = [
  {
    headling: '1/3 open',
    p: {
      eng: 'Three entries per week for various classes',
      pl: 'Trzy wejscia tygodniowo na rozne grupy',
    },
    img: Img1,
    price: {
      eng: 70,
      pl: 210,
    },
  },
  {
    headling: '1/3 open signle',
    p: {
      eng: 'Three entries per week for particular class',
      pl: 'Trzy wejscia tygodniowo na jedna z grup',
    },
    img: Img2,
    price: {
      eng: 50,
      pl: 160,
    },
  },
  {
    headling: 'Open single',
    p: {
      eng: 'Unlimited access for particular class',
      pl: 'Nielimitowane wejscie na jedna grupe',
    },
    img: Img3,
    price: {
      eng: 100,
      pl: 260,
    },
  },
  {
    headling: 'Open',
    p: {
      eng: 'Unlimited access for various classes',
      pl: 'Nielimitowane wejscie na wszystkie grupy',
    },
    img: Img4,
    price: {
      eng: 120,
      pl: 300,
    },
  }
]
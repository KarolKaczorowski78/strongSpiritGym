import React, { useContext } from 'react';
import { Container } from './styles';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import StatisticCounter from '../../molecues/StatisticsCounter';
import { StatisticsCounter } from '../../../websiteTextContent/HomePage';

const StatisticCounterContainer = () => {

  const { currentLanguage } = useContext(PrimitivesContext);

  return (
    <Container>
      { StatisticsCounter.map(({ count, eng, pl }) => 
        <StatisticCounter 
          text={ currentLanguage === 'ENGLISH' ? eng : pl } 
          count={ count } 
        />) 
      }
    </Container>
  )
}

export default StatisticCounterContainer;
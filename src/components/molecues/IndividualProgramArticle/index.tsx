import React, { FC } from 'react';
import IIndividualProgramArticle from '../../../__types__/IIndividualProgramArticle';
import { Article, H2 } from './styles';
import P from '../../atoms/p';

const IndividualProgramArticle: FC<IIndividualProgramArticle> = ({ headling, content }) => {
  return (
    <Article>
      <H2>{ headling }</H2>
      <P>{ content }</P>
    </Article>
  )
}

export default IndividualProgramArticle;
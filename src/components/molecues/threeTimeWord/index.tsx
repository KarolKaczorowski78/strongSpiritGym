import React, { FC } from 'react';
import { Container, Word } from './styles';

const ThreeTimeWord: FC<{ word: string }> = ({ word }) => {
  return (
    <Container>
      {
        [word, word, word].map((w, i) => <Word transformXValue={ (i - 1) * (-20) }>{ w }</Word>)
      }
    </Container>
  )
}

export default ThreeTimeWord;
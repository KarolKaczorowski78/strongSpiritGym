import React, { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const Img = styled.img<{ styling?: FlattenSimpleInterpolation }>`
  ${({ styling }) => styling ? styling : ''};
`;

export const LazyImg: FC<{ styling: FlattenSimpleInterpolation, src: string }> = ({ styling, src }) => {
  
  const { ref, inView } = useInView({ threshold: .5, triggerOnce: true, });
  const [srcState, setSrcState] = useState<string>('');

  useEffect(() => {
    inView && setSrcState(() => src);
  }, [inView]);
  
  return (
    <Img src={ srcState } alt="" styling={ styling } ref={ ref } />
  )
}


export default Img;
import React, { FC, useState, useRef, useEffect } from 'react';
import { Span, Container } from './styles';
import gsap from 'gsap';

const WordSwitcher: FC<{ words: string[] }> = ({ words }) => {

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.timeline().to(ref.current, { 
        autoAlpha: 0, y: 10, 
        onComplete: () => { setCurrentWordIndex(prev => prev === words.length - 1 ? 0 : prev + 1) } 
      }).to(ref.current, { autoAlpha: 1, y: 0, delay: .5 });
    }, 4000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <Container>
      <Span ref={ ref }>
        { words[currentWordIndex] }
      </Span>
    </Container>
  )
}

export default WordSwitcher;
import { FC, useEffect } from 'react';
import { scrollToSection } from '../universal/galleryPageTemplateMethods';
import IGalleryPage from '../__types__/IGalleryPage';

const GalleryPageWheel: FC<IGalleryPage> = ({ sectionsIds, currSectionIndex, setCurrSectionIndex }) => {

  const handleWheel = (e: WheelEvent) => {
    window.removeEventListener('wheel', handleWheel);
    const direction = e.deltaY > 0 ? 1 : -1;

    finish(direction, 'wheel');
  }

  const handleKeyDown = ({ code }: KeyboardEvent) => {
    if (code === 'ArrowUp' || code === 'ArrowDown') {
      window.removeEventListener('keydown', handleKeyDown);
      const direction = code === 'ArrowUp' ? -1 : 1;

      finish(direction, 'keydown');
    }
  }

  const finish = (direction: -1 | 1, event: 'wheel' | 'keydown') => {
    const scrollTargetIndex = (direction === - 1 && currSectionIndex === 0) || (direction === 1 && currSectionIndex === sectionsIds.length - 1) ? currSectionIndex : currSectionIndex + direction;

    if (scrollTargetIndex !== currSectionIndex) {
      setCurrSectionIndex(() => scrollTargetIndex)  
    } else {
      event === 'keydown' ? window.addEventListener('keydown', handleKeyDown) : window.addEventListener('wheel', handleWheel);
    }
  }

  useEffect(() => {
    scrollToSection(sectionsIds[currSectionIndex]);
    
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
  }, [currSectionIndex])

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    }
  }, [])

  return (
    <></>
  )
}

export default GalleryPageWheel;
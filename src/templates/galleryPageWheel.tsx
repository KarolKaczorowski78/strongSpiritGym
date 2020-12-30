import { FC, useEffect, useState } from 'react';
import { ESectionIds } from '../__types__/ESectionsIds';
import { scrollToSection } from '../universal/galleryPageTemplateMethods';

const GalleryPageWheel: FC<{ sectionsIds: ESectionIds[] }> = ({ sectionsIds }) => {

  const [currSectionIndex, setCurrSectionIndex] = useState<number>(0);

  const handleWheel = (e: WheelEvent) => {
    window.removeEventListener('wheel', handleWheel);
    const direction = e.deltaY > 0 ? 1 : -1;

    const scrollTargetIndex = (direction === - 1 && currSectionIndex === 0) || (direction === 1 && currSectionIndex === sectionsIds.length - 1) ? currSectionIndex : currSectionIndex + direction;
    
    scrollTargetIndex !== currSectionIndex ? setCurrSectionIndex(() => scrollTargetIndex) : window.addEventListener('wheel', handleWheel);

  }

  useEffect(() => {
    scrollToSection(sectionsIds[currSectionIndex]);
    window.addEventListener('wheel', handleWheel);
  }, [currSectionIndex])

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('wheel', handleWheel);
    }
  }, [])

  return (
    <></>
  )
}

export default GalleryPageWheel;
import { FC, useEffect, useState } from 'react';
import { scrollToSection } from '../universal/galleryPageTemplateMethods';
import IGalleryPage from '../__types__/IGalleryPage';


const GalleryPageTouch: FC<IGalleryPage> = ({ sectionsIds, setCurrSectionIndex, currSectionIndex }) => {

  const [touchStartY, setTouchStartY] = useState<number>(0)

  const handleTouchStart = (e: TouchEvent) => {
    const newTouchStartY = e.changedTouches[0].clientY;

    setTouchStartY(() => newTouchStartY);
  }

  const handleTouchEnd = (e: TouchEvent) => {
    const direction = e.changedTouches[0].clientY > touchStartY ? -1 : 1;
    const scrollTargetIndex = (direction === - 1 && currSectionIndex === 0) || (direction === 1 && currSectionIndex === sectionsIds.length - 1) ? currSectionIndex : currSectionIndex + direction;

    scrollTargetIndex !== currSectionIndex && setCurrSectionIndex(() => scrollTargetIndex);
  }

  useEffect(() => {
    scrollToSection(sectionsIds[currSectionIndex])
  }, [currSectionIndex])

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    }
  })

  return (
    <></>
  )
}

export default GalleryPageTouch;
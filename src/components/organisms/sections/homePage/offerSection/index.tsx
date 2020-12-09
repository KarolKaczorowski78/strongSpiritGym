import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId }  from '../../../../atoms/section';
import { Offers } from '../../../../../websiteTextContent/HomePage';
import OfferAdvertisement from '../../../../molecues/OfferAdvertisement';

export default function OfferSection() {
  
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id="offer-section">
      {/* 1. Mapped offers */}
      { Offers.map(({ headling, p, linkContent, ...rest }) => 
        <OfferAdvertisement 
          headling={ isEnglish ? headling.eng : headling.pl }
          p={ isEnglish ? p.eng : p.pl }
          linkContent={ isEnglish ? linkContent.eng : linkContent.pl }
          { ...rest }
        />) 
      }
    </SectionWithId>
  )
}

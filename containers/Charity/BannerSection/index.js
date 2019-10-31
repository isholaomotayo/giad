import React, { Fragment } from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Image from '../../../reusecore/src/elements/Image';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText
} from './bannerSection.style';

import { bannerSlides } from '../../../common/src/data/Charity';

const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
    autoplay: 5000
  };

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          {/* <HighlightedText className="highlighted_text">
            <strong>NEWS</strong> 1 year. 100 Forever Families.
            <Icon icon={chevronRight} />
          </HighlightedText> */}
          <Heading content="Mitigating Disasters on a Global Scale." />
          <Heading
            as="h4"
            content="Global Initiative Against Disasters (GIAD), an NGO was registered on 23rd of July, 2007"
          />
          <Text content="GIAD was a brain child of the personalities of some selected Nigerians with the aim of fronting a common platform to mitigate against disasters in Nigeria by whatever legitimate means possible. " />
          <Link href="#work">
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text"> Our Objectives</span>
            </a>
          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {bannerSlides.map(slide => (
                <GlideSlide key={slide.id}>
                  <Image src={slide.thumb_url} alt="Charity Landing" />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;

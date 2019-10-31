import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Box from '../../../reusecore/src/elements/Box';
import Image from '../../../reusecore/src/elements/Image';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Container from '../../../common/src/components/UI/Container';
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper
} from './promotionBlock.style';

import { promotionData } from '../../../common/src/data/Charity';

const PromotionBlock = ({ row, col }) => {
  const { slogan, title, text1, text2, lists, image } = promotionData;
  return (
    <BlockWrapper id="ourCommunity">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={slogan} />
              <Heading content={title} />
              <Text content={text1} />
              <Text content={text2} />
            </ContentWrapper>
          </Box>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image} alt="Manufacturing city" />
            </ImageWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// PromotionBlock style props
PromotionBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object
};

// PromotionBlock default style
PromotionBlock.defaultProps = {
  // PromotionBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // PromotionBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};

export default PromotionBlock;

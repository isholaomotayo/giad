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
} from './humanityBlock.style';

import { humanityData } from '../../../common/src/data/Charity';

const HumanityBlock = ({ row, col }) => {
  const { slogan, title, text, lists, image } = humanityData;
  return (
    <BlockWrapper id="socialFundraising">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={slogan} />
              <Heading content={title} />
              <Text content={text} />
              <List>
                {lists.map(item => (
                  <Item key={`list_key${item.id}`}>{item.text}</Item>
                ))}
              </List>
              <Link href="/join#signup">
                <a className="learn__more-btn">
                  <span className="hyphen" />
                  <span className="btn_text">Get started </span>
                </a>
              </Link>
            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// HumanityBlock style props
HumanityBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // HumanityBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};

export default HumanityBlock;

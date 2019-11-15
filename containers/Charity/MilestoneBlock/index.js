import React from 'react';
import Link from 'next/link';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Container from '../../../common/src/components/UI/Container';
import BlockWrapper, {
  MilestoneCard,
  CounterWrapper,
  CounterItem
} from './milestoneBlock.style';

import { milestoneData } from '../../../common/src/data/Charity';

const MilestoneBlock = () => {
  const { title, amount, text, counterItems } = milestoneData;
  return (
    <Container id="milestone" width="1260px">
      <BlockWrapper>
        <MilestoneCard>
          <Text content={title} />
          <Heading content={amount} />
          <Text content={text} />
          <Link href="/join#signup">
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">Join the Initiative</span>
            </a>
          </Link>
        </MilestoneCard>
      </BlockWrapper>
      <CounterWrapper>
        {counterItems.map(item => (
          <CounterItem key={`counter_key${item.id}`}>
            <Heading as="h3" content={item.amount} />
            <ul style={{ fontSize: '13px' }}>
              {item.title.map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </CounterItem>
        ))}
      </CounterWrapper>
    </Container>
  );
};

export default MilestoneBlock;

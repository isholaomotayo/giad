import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Image from '../../../reusecore/src/elements/Image';
import Container from '../../../common/src/components/UI/Container';
import Input from '../../../common/src/components/Input';
import RadioGroup from '../../../common/src/components/RadioGroup';
import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  DonationForm,
  DonateButton
} from './donateSection.style';

import {
  paymentPolicy,
  currencyOptions
} from '../../../common/src/data/Charity';
import heartImage from '../../../common/src/assets/image/charity/heart-alt.svg';

const DonateSection = ({ row, col }) => {
  const [state, setState] = useState({
    price: '',
    currency: 'ngn',
    policy: 'oneTime',
    email: '',
    password: ''
  });

  const handleFormData = (value, name) => {
    setState({
      ...state,
      [name]: value
    });
  };

  const handleDonation = e => {
    e.preventDefault();
    console.log('Donation form data: ', state);

    setState({
      ...state,
      price: ''
    });
  };

  return (
    <SectionWrapper id="signup">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentArea>
              <Heading>
                Create an account{' '}
                <span>or Sigin in with your exisiting account</span>
              </Heading>

              <ButtonGroup>
                <Link href="#">
                  <a className="learn__more-btn alt">
                    <span className="hyphen" />
                    <span className="btn_text">Create an Account</span>
                  </a>
                </Link>
                <Text content="or" />
                <Link href="#">
                  <a className="learn__more-btn alt">
                    <span className="hyphen" />
                    <span className="btn_text">Singin with your acount</span>
                  </a>
                </Link>
              </ButtonGroup>
            </ContentArea>
          </Box>
          <Box className="col" {...col}>
            <DonationForm onSubmit={e => handleDonation(e)}>
              <Input
                inputType="text"
                placeholder="E-mail address"
                inputValue={state.email}
                inputOnChange={e => handleFormData(e.target.value, 'email')}
              />
              <div>&nbsp;</div>
              <Input
                inputType="password"
                placeholder="password"
                inputValue={state.password}
                inputOnChange={e => handleFormData(e.target.value, 'password')}
              />
              <DonateButton type="submit">Login </DonateButton>
            </DonationForm>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

// DonateSection style props
DonateSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textStyle: PropTypes.object
};

// DonateSection default style
DonateSection.defaultProps = {
  // DonateSection row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // DonateSection col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};

export default DonateSection;

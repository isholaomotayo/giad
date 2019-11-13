import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from '../common/src/theme/charity';
import { ResetCSS } from '../common/src/assets/css/style';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import HumanityBlock from '../containers/Charity/HumanityBlock';
import DonateSection from '../containers/Charity/DonateSection';

import Footer from '../containers/Charity/Footer';

import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';
import styled from 'styled-components';

import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper
} from '../containers/Charity/charity.style';

const Join = props => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>GIAD | Global Initiative Axgainst Disasters</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#0071bc" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of charity head section */}
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <br />
            <br />
            <br />
            <HumanityBlock />
            <center>
              <h4>{props && props.alertText}</h4>
            </center>

            <Signin {...props} />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};

// Index.getInitialProps = async function({ ctx }) {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

export default Join;

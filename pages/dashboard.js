import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from '../common/src/theme/charity';
import { ResetCSS } from '../common/src/assets/css/style';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import Signout from '../components/Signout';
import PleaseSignIn from '../components/PleaseSignIn';
import Profile from './register';
import User from '../components/User';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper
} from '../containers/Charity/charity.style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={charityTheme}>
      <>
        <PleaseSignIn>
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
              <div className={classes.root} style={{ marginTop: '150px' }}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Investments" {...a11yProps(1)} />
                    <Tab label="Resources" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <Profile />
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <h3>Investments</h3>
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <h3>Resources</h3>
                    <a
                      href="https://dwln.s3-us-west-2.amazonaws.com/CONSTITUTION+OF+THE+GLOBAL+INITIATIVE+AGAINST+DISASTERS++the+rest.pdf"
                      target="_blank"
                    >
                      CONSTITUTION OF THE GLOBAL INITIATIVE AGAINST DISASTERS
                    </a>
                  </TabPanel>
                </SwipeableViews>
              </div>
            </ContentWrapper>
          </CharityWrapper>
        </PleaseSignIn>
      </>
    </ThemeProvider>
  );
}

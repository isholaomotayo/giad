import React, { Fragment, Component } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from '../common/src/theme/charity';
import { ResetCSS } from '../common/src/assets/css/style';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import BannerSection from '../containers/Charity/BannerSection';
import FeatureSection from '../containers/Charity/FeatureSection';
import BranchSection from '../containers/Charity/BranchSection';
import WorkSection from '../containers/Charity/WorkSection';
import PromotionBlock from '../containers/Charity/PromotionBlock';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Footer from '../containers/Charity/Footer';
import Container from '../common/src/components/UI/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import PaystackButton from 'react-paystack';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper
} from '../containers/Charity/charity.style';
import states from '../components/StatesAndLGA';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const Register = ({ row, col }, shows) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstname: '',
    middlename: '',
    lastname: '',
    dob: new Date(),
    email: '',
    phone: '',
    stateOfOrigin: '',
    residence: '',
    lga: ''
  });
  const lgaList =
    values.stateOfOrigin !== ''
      ? states[values.stateOfOrigin]
      : states['Abia State'];
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDateChange = date => date => {
    setValues({ ...values, dob: date });
  };
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>GIAD | Global Initiative Axgainst Disasters</title>
          <meta
            name="Description"
            content="GIAD | Global Initiative Against Disasters"
          />
          <meta name="theme-color" content="#0071bc" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Load google fonts */}
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
            <PromotionBlock />
            <Container width="1260px">
              <form className={classes.container} autoComplete="off">
                <Box width="30%" m={2}>
                  {' '}
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="First Name"
                    className={classes.textField}
                    value={values.firstname}
                    onChange={handleChange('firstname')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Middle Name"
                    className={classes.textField}
                    value={values.middlename}
                    onChange={handleChange('middlename')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Last Name"
                    className={classes.textField}
                    value={values.lastname}
                    onChange={handleChange('lastname')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Phone Number"
                    className={classes.textField}
                    value={values.phone}
                    onChange={handleChange('phone')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="email"
                    className={classes.textField}
                    value={values.email}
                    onChange={handleChange('email')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" m={2}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Date of Birth"
                      inputVariant="outlined"
                      format="dd/MM/yyyy"
                      value={values.dob}
                      onChange={handleDateChange('dob')}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Box>
                <Box width="90%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-full-width"
                    label="Permanent Residential address"
                    style={{ margin: 8 }}
                    placeholder="Permanent Residential address"
                    value={values.residence}
                    onChange={handleChange('residence')}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-select-state-of-origin"
                    select
                    label="State of origin"
                    className={classes.textField}
                    value={values.stateOfOrigin}
                    onChange={handleChange('stateOfOrigin')}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    helperText="Please select your state of origin"
                    margin="normal"
                    variant="outlined"
                  >
                    {Object.keys(states).map(state => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-select-state-lga"
                    select
                    label="Local Government"
                    className={classes.textField}
                    value={values.lga}
                    onChange={handleChange('lga')}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                    helperText="Please select your Local Government"
                    margin="normal"
                    variant="outlined"
                  >
                    {lgaList.map(lga => (
                      <MenuItem key={lga} value={lga}>
                        {lga}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Means of Identification"
                    className={classes.textField}
                    value={values.identification}
                    onChange={handleChange('identification')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="ID Number"
                    className={classes.textField}
                    value={values.idNumber}
                    onChange={handleChange('idNumber')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>

                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Nationality at Birth"
                    className={classes.textField}
                    value={values.nationalityAtBirth}
                    onChange={handleChange('nationalityAtBirth')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" m={2}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Current Nationality"
                    className={classes.textField}
                    value={values.currentNationality}
                    onChange={handleChange('currentNationality')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" margin={2}>
                  <TextField
                    fullWidth
                    id="outlined-name-intro"
                    label="Who Introduced you to this project"
                    className={classes.textField}
                    value={values.referee}
                    onChange={handleChange('referee')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" margin={2}>
                  {' '}
                  <TextField
                    fullWidth
                    id="outlined-name-intro"
                    label="Phone number of referrer"
                    className={classes.textField}
                    value={values.referee}
                    onChange={handleChange('refereePhone')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" margin={2}>
                  {' '}
                  <TextField
                    fullWidth
                    id="outlined-name-intro"
                    label="Bank  of referrer"
                    className={classes.textField}
                    value={values.referee}
                    onChange={handleChange('refereeBank')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="30%" margin={2}>
                  {' '}
                  <TextField
                    fullWidth
                    id="outlined-name-intro"
                    label="Account Number  of referrer"
                    className={classes.textField}
                    value={values.referee}
                    onChange={handleChange('refereeAccount')}
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
                <Box width="100%" margin={2}>
                  ATTESTATION: Voluntarily, I do hereby agree to the rules
                  guiding the respective investment as a law abiding and
                  progressive citizen who love development in Nigeria.
                </Box>
              </form>
              <Box width="30%" m={3}>
                <Payment />
              </Box>
              {/* {JSON.stringify(values)} */}
            </Container>
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

// PromotionBlock style props
Register.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object
};

// PromotionBlock default style
Register.defaultProps = {
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
export default Register;

class Payment extends Component {
  state = {
    key: 'pk_live_efd0e8585b6a1467dfd3f439385842a18223080b', //PAYSTACK PUBLIC KEY
    email: 'user@pacmgiad.com', // customer email
    amount: 5000000 //equals NGN100,
  };

  callback = response => {
    console.log(response); // card charged successfully, get reference here
  };

  close = () => {
    console.log('Payment closed');
  };

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    return (
      <div>
        <PaystackButton
          class="butn"
          text="Register"
          callback={this.callback}
          close={this.close}
          disabled={false}
          embed={false}
          reference={this.getReference()}
          email={this.state.email}
          amount={this.state.amount}
          paystackkey={this.state.key}
          tag="button"
        ></PaystackButton>
      </div>
    );
  }
}

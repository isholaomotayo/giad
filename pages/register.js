import NoSsr from '@material-ui/core/NoSsr';
import React, { Fragment, Component } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import PleaseSignIn from '../components/PleaseSignIn';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import * as JivoSite from 'react-jivosite';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from '../common/src/theme/charity';
import { ResetCSS } from '../common/src/assets/css/style';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import PromotionBlock from '../containers/Charity/PromotionBlock';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import LoadingBar from 'react-top-loading-bar';
import PropTypes from 'prop-types';
import Footer from '../containers/Charity/Footer';
import Container from '../common/src/components/UI/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import PaystackButton from 'react-paystack';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import Error from '../components/ErrorMessage';
import User from '../components/User';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper
} from '../containers/Charity/charity.style';
import states from '../components/StatesAndLGA';

import { DonateButton } from '../containers/Charity/DonateSection/donateSection.style';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION(
    $investmentSize: String!
    $firstname: String!
    $middlename: String
    $lastname: String!
    $sex: String!
    $phone: String!
    $dateOfBirth: DateTime
    $nextOfKin1_name: String
    $nextOfKin1_relationship: String
    $nextOfKin1_email: String
    $nextOfKin2_name: String
    $nextOfKin2_relationship: String
    $nextOfKin2_email: String
    $permanentResidentialAddress: String!
    $stateOfOrigin: String
    $LGA: String
    $meansOfIdentification: String!
    $IDNumber: String!
    $nationalityAtBirth: String
    $currentNationality: String
    $passportNumber: String
    $passportExpirtDate: String
    $investmentOption: String
    $refereeName: String
    $refereePhone: String
  ) {
    createUserProfile(
      investmentSize: $investmentSize
      firstname: $firstname
      middlename: $middlename
      lastname: $lastname
      sex: $sex
      phone: $phone
      dateOfBirth: $dateOfBirth
      nextOfKin1_name: $nextOfKin1_name
      nextOfKin1_relationship: $nextOfKin1_relationship
      nextOfKin1_email: $nextOfKin1_email
      nextOfKin2_name: $nextOfKin2_name
      nextOfKin2_relationship: $nextOfKin2_relationship
      nextOfKin2_email: $nextOfKin2_email
      permanentResidentialAddress: $permanentResidentialAddress
      stateOfOrigin: $stateOfOrigin
      LGA: $LGA
      meansOfIdentification: $meansOfIdentification
      IDNumber: $IDNumber
      nationalityAtBirth: $nationalityAtBirth
      currentNationality: $currentNationality
      passportNumber: $passportNumber
      passportExpirtDate: $passportExpirtDate
      investmentOption: $investmentOption
      refereeName: $refereeName
      refereePhone: $refereePhone
    ) {
      firstname
      middlename
      lastname
    }
  }
`;

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
    investmentSize: '',
    firstname: '',
    middlename: '',
    lastname: '',
    sex: '',
    phone: '',
    investmentOptionValues: {
      options: [
        { id: 1, value: 'Edupark', checked: false },
        { id: 2, value: 'Health park', checked: false },
        { id: 3, value: 'Skills', checked: false },
        { id: 4, value: 'Manufacturing/ICT', checked: false },
        { id: 5, value: 'Sports', checked: false },
        { id: 6, value: 'Aviation', checked: false },
        { id: 7, value: 'Mining', checked: false },
        { id: 8, value: 'Agro—Allied', checked: false },
        { id: 9, value: 'Tourism/Others', checked: false }
      ],

      values: []
    },
    investmentOption: '',
    email: '',
    phone: '',
    nextOfKin1_name: '',
    nextOfKin1_relationship: '',
    nextOfKin1_email: '',
    nextOfKin2_name: '',
    nextOfKin2_relationship: '',
    nextOfKin2_email: '',
    permanentResidentialAddress: '',
    stateOfOrigin: '',
    LGA: '',
    meansOfIdentification: '',
    IDNumber: '',
    nationalityAtBirth: '',
    currentNationality: '',
    passportNumber: '',
    passportExpirtDate: '',
    refereeName: '',
    refereePhone: '',
    dateOfBirth: new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  });
  const complete = () => {
    setValues({ loadingBarProgress: 100 });
  };

  const add = value => {
    setValues({
      loadingBarProgress: values.loadingBarProgress + value
    });
  };
  const onLoaderFinished = () => {
    setValues({ loadingBarProgress: 0 });
  };
  const handleCheckboxChange = name => event => {
    let io = values.investmentOptionValues.options;
    io.forEach(io => {
      if (io.value === event.target.value) io.checked = event.target.checked;
    });

    let investmentOptionsVals = values['investmentOptionValues']['options']
      .filter(o => o.checked)
      .map(o => o.value)
      .toString();

    setValues(preValue => ({
      ...values,
      investmentOption: investmentOptionsVals,
      investmentOptionValues: {
        ...preValue.investmentOptionValues,
        [name]: event.target.checked
      }
    }));
  };

  const lgaList =
    values.stateOfOrigin !== ''
      ? states[values.stateOfOrigin]
      : states['Abia State'];

  const handleChange2 = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDateChange = date => date => {
    setValues({ ...values, dateOfBirth: date });
  };
  return (
    <>
      <PleaseSignIn>
        <Mutation
          mutation={REGISTER_MUTATION}
          variables={values}
          //refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(register, { error, loading }) => (
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
                  <ContentWrapper>
                    <PromotionBlock />
                    <JivoSite.Widget id="fsXjkaUAe1" />
                    <NoSsr>
                      <Container width="1260px">
                        <LoadingBar
                          progress={values.loadingBarProgress}
                          height={3}
                          color="red"
                          onLoaderFinished={() => onLoaderFinished()}
                        />

                        <form
                          className={classes.container}
                          autoComplete="off"
                          method="post"
                          onSubmit={async e => {
                            e.preventDefault();
                            //LoadingBar.add(20);
                            await register();
                            //Router.push('/register');
                          }}
                        >
                          <Box width="40%" m={3}>
                            <FormControl
                              component="fieldset"
                              className={classes.formControl}
                              required={true}
                            >
                              <FormLabel component="legend">
                                investment Size
                              </FormLabel>
                              <RadioGroup
                                aria-label="HIGH-NET-WORTH-INVESTOR"
                                name="HIGH-NET-WORTH-INVESTOR"
                                value={values.investmentSize}
                                onChange={handleChange('investmentSize')}
                              >
                                <FormControlLabel
                                  value="HIGH NET-WORTH INVESTOR (HNI) — 10 units and above"
                                  control={<Radio color="primary" />}
                                  label="HIGH NET-WORTH INVESTOR (HNI) — 10 units and above"
                                />
                                <FormControlLabel
                                  value="INVESTOR (SINGLE UNIT)"
                                  control={<Radio color="primary" />}
                                  label="INVESTOR (SINGLE UNIT)"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Box>
                          <Box width="40%" m={3}>
                            <FormControl
                              component="fieldset"
                              className={classes.formControl}
                              required={true}
                            >
                              <FormLabel component="legend">Sex</FormLabel>
                              <RadioGroup
                                aria-label="Sex"
                                name="Sex"
                                value={values.sex}
                                onChange={handleChange('sex')}
                              >
                                <FormControlLabel
                                  value="Male"
                                  control={<Radio color="primary" />}
                                  label="Male"
                                />
                                <FormControlLabel
                                  value="Female"
                                  control={<Radio color="primary" />}
                                  label="Female"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Box>

                          <Box width="30%" m={2}>
                            {' '}
                            <Error error={error} />
                            <TextField
                              required={true}
                              fullWidth
                              id="outlined-name"
                              label="First Name"
                              className={classes.textField}
                              value={values.firstname}
                              onChange={handleChange('firstname')}
                              margin="normal"
                              variant="outlined"
                              //error={values.firstname === ''}
                            />
                          </Box>
                          <Box width="30%" m={2}>
                            <TextField
                              required={true}
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
                              required={true}
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
                              required={true}
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
                              required={true}
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
                                fullWidth
                                id="date-picker-dialog"
                                label="Date of Birth"
                                inputVariant="outlined"
                                format="dd/MM/yyyy"
                                value={values.dateOfBirth}
                                onChange={handleDateChange('dateOfBirth')}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date'
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          </Box>
                          <Box width="95%" m={2}>
                            <TextField
                              required={true}
                              fullWidth
                              multiline
                              rows="2"
                              id="outlined-full-width"
                              label="Permanent Residential address"
                              style={{ margin: 8 }}
                              placeholder="Permanent Residential address"
                              value={values.permanentResidentialAddress}
                              onChange={handleChange(
                                'permanentResidentialAddress'
                              )}
                              margin="normal"
                              variant="outlined"
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                          </Box>
                          <Box width="30%" m={2}>
                            <TextField
                              required={true}
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
                              required={true}
                              fullWidth
                              id="outlined-select-state-lga"
                              select
                              label="Local Government"
                              className={classes.textField}
                              value={values.LGA}
                              onChange={handleChange('LGA')}
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
                              required={true}
                              fullWidth
                              id="outlined-name"
                              label="Means of Identification"
                              className={classes.textField}
                              value={values.meansOfIdentification}
                              onChange={handleChange('meansOfIdentification')}
                              margin="normal"
                              variant="outlined"
                            />
                          </Box>
                          <Box width="30%" m={2}>
                            <TextField
                              required={true}
                              fullWidth
                              id="outlined-name"
                              label="ID Number"
                              className={classes.textField}
                              value={values.IDNumber}
                              onChange={handleChange('IDNumber')}
                              margin="normal"
                              variant="outlined"
                            />
                          </Box>

                          <Box width="30%" m={2}>
                            <TextField
                              required={true}
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
                              required={true}
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
                          <Box width="90%" m={3}>
                            <FormControl
                              component="fieldset"
                              className={classes.formControl}
                            >
                              <FormLabel component="legend">
                                Investment Options
                              </FormLabel>
                              <FormGroup>
                                {values.investmentOptionValues.options.map(
                                  io => (
                                    <FormControlLabel
                                      key={io.value}
                                      control={
                                        <Checkbox
                                          checked={io.checked}
                                          onChange={handleCheckboxChange(
                                            io.value
                                          )}
                                          value={io.value}
                                        />
                                      }
                                      label={io.value}
                                    />
                                  )
                                )}
                              </FormGroup>
                            </FormControl>
                          </Box>
                          <Box width="30%" margin={2}>
                            <TextField
                              required={true}
                              fullWidth
                              id="outlined-name-intro"
                              label="Who Introduced you to this project"
                              className={classes.textField}
                              value={values.refereeName}
                              onChange={handleChange('refereeName')}
                              margin="normal"
                              variant="outlined"
                            />
                          </Box>
                          <Box width="30%" margin={2}>
                            {' '}
                            <TextField
                              required={true}
                              fullWidth
                              id="outlined-name-intro"
                              label="Phone number of referrer"
                              className={classes.textField}
                              value={values.refereePhone}
                              onChange={handleChange('refereePhone')}
                              margin="normal"
                              variant="outlined"
                            />
                          </Box>
                          <Box width="30%" margin={2}>
                            {' '}
                            <TextField
                              required={true}
                              fullWidth
                              id="outlined-name-intro"
                              label="Bank  of referrer"
                              className={classes.textField}
                              value={values.refereeBank}
                              onChange={handleChange('refereeBank')}
                              margin="normal"
                              variant="outlined"
                            />
                          </Box>
                          <Box width="30%" margin={2}>
                            {' '}
                            <TextField
                              required={true}
                              fullWidth
                              id="outlined-name-intro"
                              label="Account Number  of referrer"
                              className={classes.textField}
                              value={values.refereeAccount}
                              onChange={handleChange('refereeAccount')}
                              margin="normal"
                              variant="outlined"
                            />
                          </Box>
                          <Box width="100%" margin={2}>
                            ATTESTATION: Voluntarily, I do hereby agree to the
                            rules guiding the respective investment as a law
                            abiding and progressive citizen who love development
                            in Nigeria.
                          </Box>
                          <DonateButton type="submit">
                            Save Profile{' '}
                          </DonateButton>
                        </form>
                        <Box width="30%" m={3}>
                          <Payment />
                        </Box>
                      </Container>
                    </NoSsr>
                  </ContentWrapper>
                  <Footer />
                </CharityWrapper>
                {/* End of charity wrapper section */}
              </Fragment>
            </ThemeProvider>
          )}
        </Mutation>
      </PleaseSignIn>
    </>
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
          text="Make Payment"
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

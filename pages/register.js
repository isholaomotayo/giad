import NoSsr from '@material-ui/core/NoSsr';
import React, { Fragment, Component } from 'react';
import Head from 'next/head';

import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { ThemeProvider } from 'styled-components';
import { charityTheme } from '../common/src/theme/charity';
import { ResetCSS } from '../common/src/assets/css/style';
import PromotionBlock from '../containers/Charity/PromotionBlock';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import LoadingBar from 'react-top-loading-bar';
import PropTypes from 'prop-types';
import Footer from '../containers/Charity/Footer';
import Container from '../common/src/components/UI/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import FileSize from '../lib/fileSize';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import Error from '../components/ErrorMessage';
import User, { CURRENT_USER_QUERY } from '../components/User';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper
} from '../containers/Charity/charity.style';
import states from '../components/StatesAndLGA';
import Payment from '../components/Payments';
import { DonateButton } from '../containers/Charity/DonateSection/donateSection.style';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const UPDATE_PAYMENT_STATUS_MUTATION = gql`
  mutation UPDATE_PAYMENT_STATUS_MUTATION(
    $id: ID!
    $profilePaymentMade: Boolean!
    $ref: String!
  ) {
    updateUserPaymentStatus(
      id: $id
      profilePaymentMade: $profilePaymentMade
      ref: $ref
    ) {
      email
      profilePaymentMade
    }
  }
`;

import REGISTER_MUTATION from '../lib/registerMutation';
import FileUpload from '../components/FileUpload';

const styles = theme => ({
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
});

class Register extends React.PureComponent {
  state = {
    files: [],
    investmentSize: this.props.me.profile.investmentSize || '',
    firstname: this.props.me.profile.firstname || '',
    middlename: this.props.me.profile.middlename || '',
    lastname: this.props.me.profile.lastname || '',
    sex: this.props.me.profile.sex || '',
    phone: this.props.me.profile.phone || '',
    investmentOptionValues: [
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
    investmentOption: this.props.me.profile.investmentOption || '',
    email: this.props.me.email || '',
    phone: this.props.me.profile.phone || '',
    nextOfKin1_name: this.props.me.profile.nextOfKin1_name || '',
    nextOfKin1_relationship:
      this.props.me.profile.nextOfKin1_relationship || '',
    nextOfKin1_email: this.props.me.profile.nextOfKin1_email || '',
    nextOfKin2_name: this.props.me.profile.nextOfKin2_name || '',
    nextOfKin2_relationship:
      this.props.me.profile.nextOfKin2_relationship || '',
    nextOfKin2_email: this.props.me.profile.nextOfKin2_email || '',
    permanentResidentialAddress:
      this.props.me.profile.permanentResidentialAddress || '',
    stateOfOrigin: this.props.me.profile.stateOfOrigin || '',
    LGA: this.props.me.profile.LGA || '',
    meansOfIdentification: this.props.me.profile.meansOfIdentification || '',
    IDNumber: this.props.me.profile.IDNumber || '',
    nationalityAtBirth: this.props.me.profile.nationalityAtBirth || '',
    currentNationality: this.props.me.profile.currentNationality || '',
    passportNumber: this.props.me.profile.passportNumber || '',
    passportExpiryDate: this.props.me.profile.passportExpiryDate || '',
    refereeName: this.props.me.profile.refereeName || '',
    refereePhone: this.props.me.profile.refereePhone || '',
    refereeBank: this.props.me.profile.refereeBank || '',
    refereeAccountNumber: this.props.me.profile.refereeAccountNumber || '',

    dateOfBirth:
      this.props.me.profile.dateOfBirth ||
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
    userImage: this.props.me.profile.userImage || '',
    IDImage: this.props.me.profile.IDImage || '',
    nextOfKin1_name: this.props.me.profile.nextOfKin1_name || '',
    nextOfKin1_relationship:
      this.props.me.profile.nextOfKin1_relationship || '',
    nextOfKin1_email: this.props.me.profile.nextOfKin1_email || '',
    nextOfKin1_phone: this.props.me.profile.nextOfKin1_phone || '',
    nextOfKin2_name: this.props.me.profile.nextOfKin2_name || '',
    nextOfKin2_relationship:
      this.props.me.profile.nextOfKin2_relationship || '',
    nextOfKin2_email: this.props.me.profile.nextOfKin2_email || '',
    nextOfKin2_phone: this.props.me.profile.nextOfKin2_phone || '',
    permanentResidentialAddress:
      this.props.me.profile.permanentResidentialAddress || '',
    POBox: this.props.me.profile.POBox || '',
    PMBag: this.props.me.profile.PMBag || '',
    PO_State: this.props.me.profile.PO_State || '',
    PO_Town: this.props.me.profile.PO_Town || '',
    userImageSize: 0,
    IDImageSize: 0
  };

  newInvestmentCheckedValues = this.state.investmentOptionValues.map(
    opt =>
      (opt.checked = Boolean(
        Math.sign(this.state.investmentOption.split(',').indexOf(opt.value)) !==
          -1
          ? 1
          : 0
      ))
  );

  IDImageSizegetter = async url => {
    let newImageSize = await FileSize(url);
    this.setState({ IDImageSize: newImageSize });
    //console.log('image size updated', newImageSize);
  };
  userImageSizegetter = async url => {
    let newImageSize = await FileSize(url);
    this.setState({ userImageSize: newImageSize });
    //console.log('image size updated', newImageSize);
  };

  handleCheckboxChange = name => event => {
    let io = this.state.investmentOptionValues;
    io.forEach(io => {
      if (io.value === event.target.value) io.checked = event.target.checked;
    });

    let investmentOptionsVals = this.state['investmentOptionValues']
      .filter(o => o.checked)
      .map(o => o.value)
      .toString();

    this.setState({
      investmentOption: investmentOptionsVals
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleDateChange = date => date => {
    this.setState({ dateOfBirth: date });
  };

  render() {
    let IDsize = this.IDImageSizegetter(this.state.IDImage);
    let userISize = this.userImageSizegetter(this.state.userImage);
    let lgaList =
      this.state.stateOfOrigin !== ''
        ? states[this.state.stateOfOrigin]
        : states['Abia State'];
    const classes = this.props.classes;

    const { me } = this.props;
    return (
      <>
        <LoadingBar onRef={ref => (this.LoadingBar = ref)} />

        <Mutation
          mutation={REGISTER_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
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

                    <NoSsr>
                      <Container width="1260px">
                        <br />
                        {!me.profilePaymentMade && (
                          <Box width="40%" m={3}>
                            {console.log(me)}
                            <Mutation
                              mutation={UPDATE_PAYMENT_STATUS_MUTATION}
                              variables={{
                                id: me.id,
                                profilePaymentMade: true
                              }}
                              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                            >
                              {(
                                updateUserPaymentStatus,
                                { error, loading, data }
                              ) => (
                                <Payment
                                  amount={5000000}
                                  email={me.email}
                                  callback={async data => {
                                    console.log('data from payment is', data);
                                    await updateUserPaymentStatus({
                                      variables: {
                                        ref: data.reference
                                      }
                                    });
                                  }}
                                />
                              )}
                            </Mutation>
                          </Box>
                        )}
                        {me.profilePaymentMade && (
                          <form
                            className={classes.container}
                            autoComplete="off"
                            method="post"
                            onSubmit={async e => {
                              e.preventDefault();
                              this.LoadingBar.continuousStart();
                              let data = await register();
                              this.props.addToast(
                                'Profie has been successfully saved',
                                {
                                  appearance: 'info',
                                  autoDismiss: true,
                                  placement: 'top-center'
                                }
                              );
                              //console.log(data);
                              this.LoadingBar.complete();
                            }}
                          >
                            <Box width="40%" m={3}>
                              <FileUpload
                                me={me}
                                imageSize={this.state.userImageSize}
                                imageUrl={this.state.userImage}
                                label="click here to upload your passport photo"
                                imageName="Profile Image (Passport Photo)"
                              />
                            </Box>
                            <Box width="40%" m={3}>
                              <FileUpload
                                me={me}
                                imageSize={this.state.IDImageSize}
                                imageUrl={this.state.IDImage}
                                label="click here to upload your government issued ID photo"
                                imageName="Government Issued ID card Image"
                              />
                            </Box>
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
                                  value={this.state.investmentSize}
                                  onChange={this.handleChange('investmentSize')}
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
                                  value={this.state.sex}
                                  onChange={this.handleChange('sex')}
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
                                value={this.state.firstname}
                                onChange={this.handleChange('firstname')}
                                margin="normal"
                                variant="outlined"
                                //error={this.state.firstname === ''}
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Middle Name"
                                className={classes.textField}
                                value={this.state.middlename}
                                onChange={this.handleChange('middlename')}
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
                                value={this.state.lastname}
                                onChange={this.handleChange('lastname')}
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
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
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
                                value={this.state.email}
                                onChange={this.handleChange('email')}
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
                                  value={this.state.dateOfBirth}
                                  onChange={this.handleDateChange(
                                    'dateOfBirth'
                                  )}
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
                                value={this.state.permanentResidentialAddress}
                                onChange={this.handleChange(
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
                                value={this.state.stateOfOrigin}
                                onChange={this.handleChange('stateOfOrigin')}
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
                                value={this.state.LGA}
                                onChange={this.handleChange('LGA')}
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
                                value={this.state.meansOfIdentification}
                                onChange={this.handleChange(
                                  'meansOfIdentification'
                                )}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>

                            {/* 8stuff starts  */}
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of Kin Name"
                                className={classes.textField}
                                value={this.state.nextOfKin1_name}
                                onChange={this.handleChange('nextOfKin1_name')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of  Kin Relationship"
                                className={classes.textField}
                                value={this.state.nextOfKin1_relationship}
                                onChange={this.handleChange(
                                  'nextOfKin1_relationship'
                                )}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of Kin Email"
                                className={classes.textField}
                                value={this.state.nextOfKin1_email}
                                onChange={this.handleChange('nextOfKin1_email')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of Kin Phone Number"
                                className={classes.textField}
                                value={this.state.nextOfKin1_phone}
                                onChange={this.handleChange('nextOfKin1_phone')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>

                            <hr />
                            <div>Second Next of Kin</div>
                            <hr />

                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of Kin Name"
                                className={classes.textField}
                                value={this.state.nextOfKin2_name}
                                onChange={this.handleChange('nextOfKin2_name')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of  Kin Relationship"
                                className={classes.textField}
                                value={this.state.nextOfKin2_relationship}
                                onChange={this.handleChange(
                                  'nextOfKin2_relationship'
                                )}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of Kin Email"
                                className={classes.textField}
                                value={this.state.nextOfKin2_email}
                                onChange={this.handleChange('nextOfKin2_email')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Next of Kin Phone Number"
                                className={classes.textField}
                                value={this.state.nextOfKin2_phone}
                                onChange={this.handleChange('nextOfKin2_phone')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            {/* // Next of kin ends */}

                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="PO Box"
                                className={classes.textField}
                                value={this.state.POBox}
                                onChange={this.handleChange('POBox')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="PM Bag"
                                className={classes.textField}
                                value={this.state.PMBag}
                                onChange={this.handleChange('PMBag')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Post Office State"
                                className={classes.textField}
                                value={this.state.PO_State}
                                onChange={this.handleChange('PO_State')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="Post office Town"
                                className={classes.textField}
                                value={this.state.PO_Town}
                                onChange={this.handleChange('PO_Town')}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>

                            {/* //8 stuff */}

                            <Box width="30%" m={2}>
                              <TextField
                                required={true}
                                fullWidth
                                id="outlined-name"
                                label="ID Number"
                                className={classes.textField}
                                value={this.state.IDNumber}
                                onChange={this.handleChange('IDNumber')}
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
                                value={this.state.nationalityAtBirth}
                                onChange={this.handleChange(
                                  'nationalityAtBirth'
                                )}
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
                                value={this.state.currentNationality}
                                onChange={this.handleChange(
                                  'currentNationality'
                                )}
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
                                  {this.state.investmentOptionValues.map(io => (
                                    <FormControlLabel
                                      key={io.value}
                                      control={
                                        <Checkbox
                                          checked={io.checked}
                                          onChange={this.handleCheckboxChange(
                                            io.value
                                          )}
                                          value={io.value}
                                        />
                                      }
                                      label={io.value}
                                    />
                                  ))}
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
                                value={this.state.refereeName}
                                onChange={this.handleChange('refereeName')}
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
                                value={this.state.refereePhone}
                                onChange={this.handleChange('refereePhone')}
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
                                value={this.state.refereeBank}
                                onChange={this.handleChange('refereeBank')}
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
                                value={this.state.refereeAccountNumber}
                                onChange={this.handleChange(
                                  'refereeAccountNumber'
                                )}
                                margin="normal"
                                variant="outlined"
                              />
                            </Box>
                            <Box width="100%" margin={2}>
                              ATTESTATION: Voluntarily, I do hereby agree to the
                              rules guiding the respective investment as a law
                              abiding and progressive citizen who love
                              development in Nigeria.
                            </Box>
                            <DonateButton type="submit">
                              Save Profile{' '}
                            </DonateButton>
                          </form>
                        )}
                        <Box width="30%" m={3}></Box>
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
      </>
    );
  }
}

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
export default withStyles(styles)(Register);

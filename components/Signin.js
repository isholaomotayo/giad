import React, { Component, useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import LoadingBar from 'react-top-loading-bar';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '../reusecore/src/elements/Box';
import Text from '../reusecore/src/elements/Text';

import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  DonationForm,
  DonateButton
} from '../containers/Charity/DonateSection/donateSection.style';

import Container from '../common/src/components/UI/Container';
import Input from '../common/src/components/Input';
const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    active: 'signin'
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormData = (value, name) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleDonation = e => {
    e.preventDefault();
    console.log('Donation form data: ', state);
  };

  render() {
    const { row, col } = this.props;
    return (
      <>
        <LoadingBar
          height={3}
          color="#f11946"
          onRef={ref => (this.LoadingBar = ref)}
        />

        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signin, { error, loading }) => (
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
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={e => {
                            e.preventDefault;

                            this.setState({ active: 'signup' });
                          }}
                        >
                          <a className="learn__more-btn alt">
                            <span className="hyphen" />
                            <span className="btn_text">Create an Account</span>
                          </a>
                        </div>
                        <Text content="or" />
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={e => {
                            e.preventDefault;
                            this.setState({ active: 'signin' });
                          }}
                        >
                          <a className="learn__more-btn alt">
                            <span className="hyphen" />
                            <span className="btn_text">
                              Signin with your account
                            </span>
                          </a>
                        </div>
                      </ButtonGroup>
                    </ContentArea>
                  </Box>
                  <Box className="col" {...col}>
                    <DonationForm
                      style={
                        this.state.active === 'signin'
                          ? { display: 'block' }
                          : { display: 'none' }
                      }
                      method="post"
                      onSubmit={async e => {
                        e.preventDefault();
                        this.LoadingBar.continuousStart();
                        await signin();
                        this.LoadingBar.complete();
                        Router.push('/dashboard');
                        this.setState({ name: '', email: '', password: '' });
                      }}
                    >
                      <h4>Login to your account</h4> <Error error={error} />
                      <Input
                        inputType="email"
                        placeholder="E-mail address"
                        inputValue={this.state.email}
                        inputOnChange={e =>
                          this.handleFormData(e.target.value, 'email')
                        }
                      />
                      <div>&nbsp;</div>
                      <Input
                        inputType="password"
                        placeholder="password"
                        inputValue={this.state.password}
                        inputOnChange={e =>
                          this.handleFormData(e.target.value, 'password')
                        }
                      />
                      <DonateButton type="submit">Login </DonateButton>
                    </DonationForm>
                    <Mutation
                      mutation={SIGNUP_MUTATION}
                      variables={this.state}
                      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                    >
                      {(signup, { error, loading }) => (
                        <DonationForm
                          style={
                            this.state.active === 'signup'
                              ? { display: 'block' }
                              : { display: 'none' }
                          }
                          method="post"
                          onSubmit={async e => {
                            e.preventDefault();
                            await signup();
                            Router.push('/dashboard');
                            this.setState({
                              name: '',
                              email: '',
                              password: ''
                            });
                          }}
                        >
                          {' '}
                          <h4>Create a new account</h4>
                          <Error error={error} />
                          <Input
                            inputType="name"
                            placeholder="Full name"
                            inputValue={this.state.name}
                            inputOnChange={e =>
                              this.handleFormData(e.target.value, 'name')
                            }
                          />
                          <div>&nbsp;</div>
                          <Input
                            inputType="email"
                            placeholder="E-mail address"
                            inputValue={this.state.email}
                            inputOnChange={e =>
                              this.handleFormData(e.target.value, 'email')
                            }
                          />
                          <div>&nbsp;</div>
                          <Input
                            inputType="password"
                            placeholder="password"
                            inputValue={this.state.password}
                            inputOnChange={e =>
                              this.handleFormData(e.target.value, 'password')
                            }
                          />
                          <DonateButton type="submit">
                            Create Account{' '}
                          </DonateButton>
                        </DonationForm>
                      )}
                    </Mutation>
                    ;
                  </Box>
                </Box>
              </Container>
            </SectionWrapper>
          )}
        </Mutation>
      </>
    );
  }
}

// DonateSection style props
Signin.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textStyle: PropTypes.object
};

// DonateSection default style
Signin.defaultProps = {
  // Signin row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Signin col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};

export default Signin;

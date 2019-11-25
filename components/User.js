import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      profilePaymentMade
      profile {
        investmentSize
        firstname
        middlename
        lastname
        sex
        phone
        dateOfBirth
        nextOfKin1_name
        nextOfKin1_relationship
        nextOfKin1_email
        nextOfKin2_name
        nextOfKin2_relationship
        nextOfKin2_email
        permanentResidentialAddress
        stateOfOrigin
        LGA
        meansOfIdentification
        IDNumber
        nationalityAtBirth
        currentNationality
        passportNumber
        passportExpiryDate
        investmentOption
        refereeName
        refereePhone
        refereeBank
        refereeAccountNumber
        userImage
        IDImage
      }
      permissions
      payment {
        userEmail
        description
        ip_address
        currency
        channel
        created_at
        paid_at
        gateway_response
        message
        amount
        reference
        status
      }
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
export { CURRENT_USER_QUERY };

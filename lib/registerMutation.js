import gql from 'graphql-tag';
export default gql`
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
    $passportExpiryDate: String
    $investmentOption: String
    $refereeName: String
    $refereePhone: String
    $refereeBank: String
    $refereeAccountNumber: String
    $userImage: String
    $IDImage: String
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
      passportExpiryDate: $passportExpiryDate
      investmentOption: $investmentOption
      refereeName: $refereeName
      refereePhone: $refereePhone
      refereeBank: $refereeBank
      refereeAccountNumber: $refereeAccountNumber
      userImage: $userImage
      IDImage: $IDImage
    ) {
      firstname
      middlename
      lastname
    }
  }
`;

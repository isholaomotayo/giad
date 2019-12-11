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
    $nextOfKin1_relationship: String
    $nextOfKin1_name: String
    $nextOfKin1_email: String
    $nextOfKin1_phone: String
    $nextOfKin2_name: String
    $nextOfKin2_relationship: String
    $nextOfKin2_email: String
    $nextOfKin2_phone: String
    $permanentResidentialAddress: String
    $POBox: String
    $PMBag: String
    $PO_State: String
    $PO_Town: String
    $Type_Of_Capital_Contribution: String
    $worthOfInvestment: String
    $worthOfInvestment_words: String
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
      nextOfKin1_name: $nextOfKin1_name
      nextOfKin1_relationship: $nextOfKin1_relationship
      nextOfKin1_email: $nextOfKin1_email
      nextOfKin1_phone: $nextOfKin1_phone
      nextOfKin2_name: $nextOfKin2_name
      nextOfKin2_relationship: $nextOfKin2_relationship
      nextOfKin2_email: $nextOfKin2_email
      nextOfKin2_phone: $nextOfKin2_phone
      permanentResidentialAddress: $permanentResidentialAddress
      POBox: $POBox
      PMBag: $PMBag
      PO_State: $PO_State
      PO_Town: $PO_Town
      Type_Of_Capital_Contribution: $Type_Of_Capital_Contribution
      worthOfInvestment: $worthOfInvestment
      worthOfInvestment_words: $worthOfInvestment_words
      userImage: $userImage
      IDImage: $IDImage
    ) {
      firstname
      middlename
      lastname
    }
  }
`;

import React, { Component } from 'react';
//import the library
import PaystackButton from 'react-paystack';

class Payment extends Component {
  state = {
    key: 'pk_test_58c81e562de583ea35a609e1b5cbe0a13d647923', //PAYSTACK PUBLIC KEY
    email: 'foobar@example.com', // customer email
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
        />
      </div>
    );
  }
}

export default Payment;

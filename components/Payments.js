import PaystackButton from 'react-paystack';
import User from './User';

class Payment extends React.Component {
  state = {
    key: 'pk_live_efd0e8585b6a1467dfd3f439385842a18223080b', //PAYSTACK PUBLIC KEY  pk_live_efd0e8585b6a1467dfd3f439385842a18223080b  pk_test_58c81e562de583ea35a609e1b5cbe0a13d647923
    // key: 'pk_test_58c81e562de583ea35a609e1b5cbe0a13d647923', //PAYSTACK PUBLIC KEY  pk_live_efd0e8585b6a1467dfd3f439385842a18223080b  pk_test_58c81e562de583ea35a609e1b5cbe0a13d647923
    //email: this.props.email, // customer email
    amount: this.props.amount //equals NGN 50k,
  };

  callback = this.props.callback
    ? response => this.props.callback(response)
    : response => {
        console.log(' ok payment went through hinding ersponse'); // card charged successfully, get reference here
      };

  close =
    this.props.close ||
    (() => {
      console.log('Payment closed');
    });

  getReference = () =>
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Date.now().toString(36);

  render() {
    return (
      <div>
        <User>
          {({ data }) => {
            const me = data ? data.me : null;
            return (
              <div>
                {me && (
                  <>
                    <PaystackButton
                      metadata={{ userId: me.id }}
                      class="butn"
                      text="Make Payment"
                      callback={this.callback}
                      close={this.close}
                      disabled={false}
                      embed={false}
                      reference={this.getReference()}
                      email={me.email}
                      amount={this.props.amount}
                      paystackkey={this.state.key}
                      tag="button"
                    />
                  </>
                )}
                {!me && <div>Please login to make payments </div>}
              </div>
            );
          }}
        </User>
      </div>
    );
  }
}

export default Payment;

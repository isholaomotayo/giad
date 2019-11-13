import PaystackButton from 'react-paystack';
import User from './User';

class Payment extends React.Component {
  state = {
    key: 'pk_live_efd0e8585b6a1467dfd3f439385842a18223080b', //PAYSTACK PUBLIC KEY
    email: this.props.email, // customer email
    amount: this.props.amount //equals NGN 50k,
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

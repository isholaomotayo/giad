import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';
import Join from '../pages/join';
const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading)
        return (
          <div>
            <div
              style={{
                textAlign: 'center',
                position: 'absolute',
                left: '45%',
                top: '45%'
              }}
            >
              <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <br />
              Loading...
            </div>
            <style jsx>
              {`
                .lds-grid {
                  display: inline-block;
                  position: relative;
                  width: 64px;
                  height: 64px;
                }
                .lds-grid div {
                  position: absolute;
                  width: 13px;
                  height: 13px;
                  border-radius: 50%;
                  background: #116cbb;
                  animation: lds-grid 1.2s linear infinite;
                }
                .lds-grid div:nth-child(1) {
                  top: 6px;
                  left: 6px;
                  animation-delay: 0s;
                }
                .lds-grid div:nth-child(2) {
                  top: 6px;
                  left: 26px;
                  animation-delay: -0.4s;
                }
                .lds-grid div:nth-child(3) {
                  top: 6px;
                  left: 45px;
                  animation-delay: -0.8s;
                }
                .lds-grid div:nth-child(4) {
                  top: 26px;
                  left: 6px;
                  animation-delay: -0.4s;
                }
                .lds-grid div:nth-child(5) {
                  top: 26px;
                  left: 26px;
                  animation-delay: -0.8s;
                }
                .lds-grid div:nth-child(6) {
                  top: 26px;
                  left: 45px;
                  animation-delay: -1.2s;
                }
                .lds-grid div:nth-child(7) {
                  top: 45px;
                  left: 6px;
                  animation-delay: -0.8s;
                }
                .lds-grid div:nth-child(8) {
                  top: 45px;
                  left: 26px;
                  animation-delay: -1.2s;
                }
                .lds-grid div:nth-child(9) {
                  top: 45px;
                  left: 45px;
                  animation-delay: -1.6s;
                }
                @keyframes lds-grid {
                  0%,
                  100% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0.5;
                  }
                }
              `}
            </style>
          </div>
        );
      if (!data.me) {
        return (
          <>
            <h3>Please signin before you proceed</h3>
            <Join />
          </>
        );
      }

      localStorage.setItem('data', JSON.stringify(data));

      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;

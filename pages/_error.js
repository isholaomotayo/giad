import React from 'react';
import Head from 'next/head';
import ErrorSec from '../containers/Error';
import { ResetCSS } from '../common/src/assets/css/style';
import { withRouter } from 'next/router';
import Link from 'next/link';

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  render() {
    var response;
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <>
            <Head>
              <title>404: Not found</title>
              {/* Load google fonts */}
              <link
                href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
                rel="stylesheet"
              />
            </Head>
            <ResetCSS />
            <div>
              {this.props.statusCode ? (
                `An error ${this.props.statusCode} occurred on server`
              ) : (
                <ErrorSec></ErrorSec>
              )}
            </div>
          </>
        );
        break;
      case 500:
        response = (
          <>
            <Head>
              <title>500: Not found</title>
              {/* Load google fonts */}
              <link
                href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
                rel="stylesheet"
              />
            </Head>
            <ResetCSS />
            <div>
              {this.props.statusCode ? (
                `An error ${this.props.statusCode} occurred on server`
              ) : (
                <ErrorSec></ErrorSec>
              )}
            </div>
          </>
        );
        break;
      default:
        response = (
          <div>
            <Head></Head>
            <Container className="pt-5 text-center">
              <h1 className="display-4">HTTP {this.props.errorCode} Error</h1>
              <p>
                An <strong>HTTP {this.props.errorCode}</strong> error occurred
                while trying to access{' '}
                <strong>{this.props.router.pathname}</strong>
              </p>
            </Container>
          </div>
        );
    }

    return response;
  }
}

export default withRouter(ErrorPage);

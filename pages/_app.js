import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import App, { Container } from 'next/app';

// const App = ({ Component, pageProps }) => {
//   return (
//     <Fragment>
//       <Modal />
//       <Component {...pageProps} />
//     </Fragment>
//   );
// };

// App.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps };
// };

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Fragment>
            <Modal />
            <Component {...pageProps} />
          </Fragment>
        </ApolloProvider>
      </Container>
    );
  }
}
export default withData(MyApp);

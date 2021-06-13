import { Fragment } from 'react';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyle } from '../styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;

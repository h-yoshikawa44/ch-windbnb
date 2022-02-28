import { Fragment, useState } from 'react';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import 'focus-visible';
import 'wicg-inert';
import { DrawerMenuProvider } from '@/components/context/DrawerMenuContext';
import { globalStyle } from '@/styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Global styles={globalStyle} />
      <DrawerMenuProvider>
        <Component {...pageProps} />
      </DrawerMenuProvider>
    </Fragment>
  );
};

export default MyApp;

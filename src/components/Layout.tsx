import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Logo from '@/components/logo';
import Footer from '@/components/footer';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Windbnb</title>
        <meta
          name="description"
          content="devChallenges.io - Windbnb | by h-yoshikawa44"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={container}>
        <Logo />
        {children}
        <Footer />
      </div>
    </div>
  );
};

const container = css`
  padding: 48px 96px;
`;

export default Layout;

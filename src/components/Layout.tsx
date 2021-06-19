import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Footer from '@/components/Footer';

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
        {children}
        <Footer />
      </div>
    </div>
  );
};

const container = css`
  max-width: 1280px;
  padding: 0 4%;
  margin: 0 auto;
`;

export default Layout;

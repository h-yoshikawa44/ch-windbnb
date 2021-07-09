import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Footer from '@/components/Footer';

type Props = {
  inertFlg: boolean;
};

const Layout: FC<Props> = ({ inertFlg, children }) => {
  return (
    <div>
      <Head>
        <title>Windbnb</title>
        <meta
          name="description"
          content="devChallenges.io - Windbnb | by h-yoshikawa44"
        />
      </Head>
      <div
        css={container}
        ref={(node) =>
          node &&
          (inertFlg
            ? node.setAttribute('inert', '')
            : node.removeAttribute('inert'))
        }
      >
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

import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Footer from '@/components/Footer';

type Props = {
  inertFlg: boolean;
};

const Layout: FC<Props> = ({ inertFlg, children }) => {
  return (
    <div
      css={globalLayout}
      ref={(node) =>
        node &&
        (inertFlg
          ? node.setAttribute('inert', '')
          : node.removeAttribute('inert'))
      }
    >
      <Head>
        <title>Windbnb</title>
        <meta
          name="description"
          content="devChallenges.io - Windbnb | by h-yoshikawa44"
        />
      </Head>
      <div css={contents}>{children}</div>
      <Footer css={customFooter} />
    </div>
  );
};

const globalLayout = css`
  display: grid;
  grid-template: 'contents' 1fr 'footer' auto/100%;
  min-height: 100vh;
`;

const contents = css`
  grid-area: contents;
`;

const customFooter = css`
  grid-area: footer;
`;

export default Layout;

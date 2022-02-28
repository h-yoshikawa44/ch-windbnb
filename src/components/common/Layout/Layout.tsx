import { FC } from 'react';
import { css } from '@emotion/react';
import Footer from '@/components/common/Footer';

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
      <div css={contents}>{children}</div>
      <Footer />
    </div>
  );
};

const globalLayout = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const contents = css`
  flex: 1 0 auto;
`;

export default Layout;

import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import Footer from '@/components/common/Footer';

type Props = {
  inertFlg: boolean;
  children: ReactNode;
};

const Layout: FC<Props> = ({ inertFlg, children }) => {
  return (
    <div css={globalLayout} inert={inertFlg}>
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

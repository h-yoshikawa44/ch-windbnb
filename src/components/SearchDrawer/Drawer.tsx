import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
};

const Drawer: FC<Props> = ({ open, children }) => {
  return <div css={[searchDrawer, !open && hiddenVisibility]}>{children}</div>;
};

const searchDrawer = css`
  position: fixed;
  z-index: 1300;
  inset: 0;
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

export default Drawer;

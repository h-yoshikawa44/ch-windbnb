import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
};

const Backdrop: VFC<Props> = ({ open, onClick, ...props }) => {
  return (
    <div
      css={[drawerBackdrop, !open && hiddenVisibility]}
      onClick={onClick}
      {...props}
    />
  );
};

const drawerBackdrop = css`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0;
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

export default Backdrop;

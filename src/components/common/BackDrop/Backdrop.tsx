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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

export default Backdrop;

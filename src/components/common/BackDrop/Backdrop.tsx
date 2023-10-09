import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
};

const Backdrop: FC<Props> = ({ open, onClick, ...props }) => {
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
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

export default Backdrop;

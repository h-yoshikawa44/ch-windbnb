import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
};

const Backdrop: VFC<Props> = ({ open, onClick }) => {
  return (
    <div css={[drawerBackdrop, !open && hiddenVisibility]} onClick={onClick} />
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

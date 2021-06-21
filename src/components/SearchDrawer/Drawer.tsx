import { FC, ComponentPropsWithRef, MouseEventHandler } from 'react';
import { css } from '@emotion/react';
import Backdrop from '@/components/SearchDrawer/Backdrop';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
};

const Drawer: FC<Props> = ({ open, onClose, children }) => {
  return (
    <div css={[searchDrawer, !open && hiddenVisibility]}>
      <Backdrop open={open} onClick={onClose} />
      <div css={[!open && hiddenVisibility, drawerAnimation(open)]}>
        {children}
      </div>
    </div>
  );
};

const searchDrawer = css`
  position: fixed;
  z-index: 1300;
  inset: 0;
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

// TODO 戻りのアニメーションが動作しない？
const drawerAnimation = (open: boolean) => {
  if (open) {
    return css`
      transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      transform: none;
    `;
  } else {
    return css`
      transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      transform: translateY(-470px);
    `;
  }
};

export default Drawer;

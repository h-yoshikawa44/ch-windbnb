import { FC, ComponentPropsWithRef, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import Backdrop from '@/components/common/BackDrop';
import { zIndex } from '@/styles/constants';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
};

const DrawerBase: FC<Props> = ({ open, onClose, children, ...props }) => {
  return (
    <div css={[searchDrawer, !open && hiddenVisibility]} {...props}>
      <Backdrop open={open} onClick={onClose} />
      <div css={[!open && hiddenVisibility, drawerAnimation(open)]}>
        {children}
      </div>
    </div>
  );
};

const Drawer: FC<Props> = ({ open, onClose, children, ...props }) => {
  // クライアント側の処理になるので、Next.jsでのサーバ側ではポータルを使わないようにする
  if (typeof window === 'undefined') {
    return (
      <DrawerBase open={open} onClose={onClose} {...props}>
        {children}
      </DrawerBase>
    );
  }

  return createPortal(
    <DrawerBase open={open} onClose={onClose} {...props}>
      {children}
    </DrawerBase>,
    document.body
  );
};

const searchDrawer = css`
  position: fixed;
  z-index: ${zIndex.menu};
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

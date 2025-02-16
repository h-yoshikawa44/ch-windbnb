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
    <div {...props}>
      <Backdrop open={open} onClick={onClose} />
      <div css={[searchDrawer, open && searchDrawerOpen]}>{children}</div>
    </div>
  );
};

const searchDrawer = css`
  position: fixed;
  inset: 0;
  z-index: ${zIndex.menu};
  visibility: hidden;
  width: 100%;
  overflow-y: auto;
  opacity: 0;
  transform: translateY(-100%);
  transition:
    opacity 0.3s,
    visibility 0.3s ease 0.3s,
    transform 0.3s;
`;

const searchDrawerOpen = css`
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0s;
`;

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
    document.body,
  );
};

export default Drawer;

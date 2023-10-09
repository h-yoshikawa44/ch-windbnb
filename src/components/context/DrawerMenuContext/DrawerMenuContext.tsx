import { FC, ReactNode, createContext } from 'react';
import { useDrawerMenu } from '@/hooks/common';

type Props = {
  children: ReactNode;
};

const DrawerMenuContext = createContext({} as ReturnType<typeof useDrawerMenu>);

const DrawerMenuProvider: FC<Props> = ({ children }) => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } = useDrawerMenu();

  return (
    <DrawerMenuContext.Provider
      value={{
        isDrawerOpen,
        handleDrawerOpen,
        handleDrawerClose,
      }}
    >
      {children}
    </DrawerMenuContext.Provider>
  );
};

export { DrawerMenuContext, DrawerMenuProvider };

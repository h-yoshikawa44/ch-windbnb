import { FC, createContext } from 'react';
import { useDrawerMenu } from '@/hooks/common';

const DrawerMenuContext = createContext({} as ReturnType<typeof useDrawerMenu>);

const DrawerMenuProvider: FC = ({ children }) => {
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

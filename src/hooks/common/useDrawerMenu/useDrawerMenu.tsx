import { useState, useCallback } from 'react';

const useDrawerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return { isDrawerOpen, handleDrawerOpen, handleDrawerClose };
};

export default useDrawerMenu;

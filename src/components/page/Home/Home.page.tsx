import { useContext } from 'react';
import { DrawerMenuContext } from '@/components/context/DrawerMenuContext';
import Layout from '@/components/common/Layout';
import Home from './Home';

const HomePage = () => {
  const { isDrawerOpen } = useContext(DrawerMenuContext);
  return (
    <Layout inertFlg={isDrawerOpen}>
      <Home />
    </Layout>
  );
};

export default HomePage;

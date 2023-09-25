import { Fragment } from 'react';
import Head from 'next/head';
import HomePage from '@/components/page/Home';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Windbnb</title>
        <meta
          name="description"
          content="devChallenges.io(legacy) - Windbnb | by h-yoshikawa44"
        />
      </Head>
      <HomePage />
    </Fragment>
  );
};

export default Home;

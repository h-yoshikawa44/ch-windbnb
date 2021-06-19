import { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import SearchBox from '@/components/SearchBox';
import StayCard from '@/components/StayCard';
import SearchDrawer from '@/components/SearchDrawer';
import { stayListPrefetchQuery, useGetStayListQuery } from '@/hooks/stay';
import { useStaySearchForm } from '@/hooks/stay';

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);
  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const {
    location,
    guests,
    handleSelectLocation,
    handlePlusGuests,
    handleMinusGuests,
  } = useStaySearchForm();

  const { data } = useGetStayListQuery();

  return (
    <Layout>
      <header css={header}>
        <h1>
          <Logo />
        </h1>
        <SearchBox onClick={handleDrawerOpen} />
      </header>
      <main>
        <div css={subHeader}>
          <h2 css={pageTitle}>Stays in Finland</h2>
          <p>{`${data?.length}+ stays`}</p>
        </div>
        <div css={stayCardGrid}>
          {data?.map((stay, index) => {
            return (
              <StayCard
                key={`${index}-${stay.title}`}
                city={stay.city}
                country={stay.country}
                superHost={stay.superHost}
                title={stay.title}
                rating={stay.rating}
                maxGuests={stay.maxGuests}
                type={stay.type}
                beds={stay.beds}
                photo={stay.photo}
              />
            );
          })}
        </div>
      </main>
      <SearchDrawer
        open={isDrawerOpen}
        location={location}
        guests={guests}
        onClose={handleDrawerClose}
        onSelectLocation={handleSelectLocation}
        onPlusGuests={handlePlusGuests}
        onMinusGuests={handleMinusGuests}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await stayListPrefetchQuery(queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const header = css`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
`;

const subHeader = css`
  display: flex;
  justify-content: space-between;
  padding-top: 64px;
  padding-bottom: 32px;
`;

const pageTitle = css`
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;

const stayCardGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  row-gap: 48px;
  column-gap: 32px;
  padding-bottom: 40px;
`;

export default Home;

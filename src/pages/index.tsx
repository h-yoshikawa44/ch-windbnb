import { Fragment, useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import MiniSearchBox from '@/components/MiniSearchBox';
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
    handleClear,
  } = useStaySearchForm();

  const { data, refetch } = useGetStayListQuery(
    { location: location, guests: guests },
    { enabled: false }
  );

  const handleSearch = useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      refetch();
      setIsDrawerOpen(false);
    },
    [refetch]
  );

  return (
    <Fragment>
      <Layout inertFlg={isDrawerOpen}>
        <header css={container}>
          <div css={headerContentsBox}>
            <h1>
              <Logo />
            </h1>
            <div css={searchBoxMargin}>
              <MiniSearchBox
                location={location}
                guests={guests}
                isDrawerOpen={isDrawerOpen}
                onDrawerOpen={handleDrawerOpen}
                onSearch={handleSearch}
              />
            </div>
          </div>
        </header>
        <main css={container}>
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
      </Layout>
      <SearchDrawer
        open={isDrawerOpen}
        location={location}
        guests={guests}
        onClose={handleDrawerClose}
        onSelectLocation={handleSelectLocation}
        onPlusGuests={handlePlusGuests}
        onMinusGuests={handleMinusGuests}
        onSearch={handleSearch}
        onClear={handleClear}
      />
    </Fragment>
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

const container = css`
  max-width: 1280px;
  padding: 0 4%;
  margin: 0 auto;
`;

const headerContentsBox = css`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  @media (max-width: 600px) {
    display: block;
    margin-top: 24px;
  }
`;

const searchBoxMargin = css`
  @media (max-width: 600px) {
    width: fit-content;
    margin: 32px auto 0;
  }
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
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  row-gap: 32px;
  column-gap: 32px;
  padding-bottom: 40px;
`;

export default Home;

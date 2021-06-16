import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import StayCard from '@/components/StayCard';
import { useGetStayListQuery } from '@/hooks';

const Home = () => {
  const { data } = useGetStayListQuery();

  return (
    <Layout>
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
    </Layout>
  );
};

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

import { Fragment, useContext } from 'react';
import { css } from '@emotion/react';
import { DrawerMenuContext } from '@/components/context/DrawerMenuContext';
import Logo from '@/components/common/Logo';
import MiniSearchBox from '@/components/model/Stay/StayMiniSearchBox';
import StayCard from '@/components/model/Stay/StayCard';
import SearchDrawer from '@/components/model/Stay/StaySearchDrawer';
import { breakPoint } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';
import { useStays } from '@/hooks/stay';

const Home = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useContext(DrawerMenuContext);

  const {
    location,
    guests,
    stays,
    handleSelectLocation,
    handlePlusGuests,
    handleMinusGuests,
    handleClear,
    handleSearch,
  } = useStays();

  return (
    <Fragment>
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
          <p>{`${stays?.length}+ stays`}</p>
        </div>
        <div css={stayCardGrid}>
          {stays?.map((stay, index) => {
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
        onSearch={handleSearch}
        onClear={handleClear}
      />
    </Fragment>
  );
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

  @media (max-width: ${breakPoint.sm - 1}px) {
    display: block;
    margin-top: 24px;
  }
`;

const searchBoxMargin = css`
  @media (max-width: ${breakPoint.sm - 1}px) {
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
  font-family: ${montserrat.style.fontFamily};
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

import { FC, ComponentPropsWithRef, useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { Close } from '@emotion-icons/material-rounded/Close';
import Drawer from '@/components/common/Drawer';
import ClearButton from '@/components/common/ClearButton';
import SearchInput from '@/components/common/Input';
import SearchButton from '@/components/common/SearchButton';
import StaySelectLocationList from '@/components/model/Stay/StaySelectLocationList';
import StayCalcGuests from '@/components/model/Stay/StayCalcGuests';
import { Guests } from '@/models/Stay';
import { breakPoint, colors } from '@/styles/constants';
import { mulish } from '@/styles/fonts';

type Tab = 'location' | 'guests';

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
  location: string;
  guests: Guests;
  onClose: VoidFunction;
  onSelectLocation: (selectLocation: string) => void;
  onPlusGuests: (prop: keyof Guests) => void;
  onMinusGuests: (prop: keyof Guests) => void;
  onSearch: (ev: React.FormEvent<HTMLFormElement>) => void;
  onClear: VoidFunction;
};

const StaySearchDrawer: FC<Props> = ({
  open = false,
  location,
  guests,
  onClose,
  onSelectLocation,
  onPlusGuests,
  onMinusGuests,
  onSearch,
  onClear,
}) => {
  const [tab, setTab] = useState<Tab>('location');
  const handleSelectTab = useCallback((tabType: Tab) => {
    setTab(tabType);
  }, []);

  const formId = 'drawer-search-form';

  return (
    <Drawer id="search-drawer-menu" open={open} onClose={onClose}>
      <div css={[drawerContent, container]}>
        <div css={drawerHeader}>
          <p css={drawerHeaderText}>Edit your search</p>
          <ClearButton form={formId} type="reset" />
          <button css={drawerCloseButton} onClick={onClose}>
            <Close size={18} />
          </button>
        </div>
        <form
          id={formId}
          onSubmit={onSearch}
          onReset={(ev) => {
            ev.preventDefault();
            onClear();
          }}
        >
          <div css={searchBox}>
            <div
              css={[searchInputBox, tab === 'location' && searchInputBoxSelect]}
              tabIndex={0}
              onClick={() => handleSelectTab('location')}
              onKeyPress={(ev) => {
                ev.preventDefault();
                if (ev.key === 'Enter') {
                  handleSelectTab('location');
                }
              }}
            >
              <SearchInput
                label="LOCATION"
                placeholder="Add location"
                value={location}
                readOnly
                tabIndex={-1}
              />
            </div>
            <div
              css={[searchInputBox, tab === 'guests' && searchInputBoxSelect]}
              tabIndex={0}
              onClick={() => handleSelectTab('guests')}
              onKeyPress={(ev) => {
                ev.preventDefault();
                if (ev.key === 'Enter') {
                  handleSelectTab('guests');
                }
              }}
            >
              <SearchInput
                label="GUESTS"
                placeholder="Add guests"
                value={guests.adults + guests.children}
                readOnly
                tabIndex={-1}
              />
            </div>
            <div css={desktopDisplay}>
              <SearchButton type="submit">Search</SearchButton>
            </div>
          </div>
          <div css={searchContentBox}>
            <div css={tab !== 'location' && hiddenDisplay}>
              <StaySelectLocationList onSelectLocation={onSelectLocation} />
            </div>
            <div css={tab !== 'guests' && hiddenDisplay}>
              <StayCalcGuests
                adultsNum={guests.adults}
                childrenNum={guests.children}
                onPlusGuests={onPlusGuests}
                onMinusGuests={onMinusGuests}
              />
            </div>
            <div />
          </div>
          <div css={mobileSearchButton}>
            <SearchButton type="submit">Search</SearchButton>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

const drawerContent = css`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 460px;
  background-color: ${colors.white};
`;

const container = css`
  padding: 0 4%;
  margin: 0 auto;
`;

const hiddenDisplay = css`
  visibility: hidden;

  @media (max-width: ${breakPoint.sm - 1}px) {
    display: none;
  }
`;

const desktopDisplay = css`
  display: inherit;

  @media (max-width: ${breakPoint.sm - 1}px) {
    display: none;
  }
`;

const drawerHeader = css`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

const drawerHeaderText = css`
  flex: 1;
  font-family: ${mulish.style.fontFamily};
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
`;

const drawerCloseButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  background-color: ${colors.white};
  border: none;

  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 4%);
    border-radius: 16px;
  }

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

const searchBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 48px;
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);

  input {
    border-right: 1px solid ${colors.white2};
  }

  @media (max-width: ${breakPoint.sm - 1}px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    margin-top: 16px;
  }
`;

const searchInputBox = css`
  padding: 16px 24px 8px;
  pointer-events: auto;
  cursor: pointer;
  border-right: 1px solid ${colors.white2};

  &:hover,
  &:focus,
  &:focus-within {
    background-color: rgb(0 0 0 / 4%);
  }

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

const searchInputBoxSelect = css`
  padding: 15px 23px 7px;
  border: 1px solid ${colors.black};
  border-radius: 16px;
`;

const searchContentBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 42px 0;

  @media (max-width: ${breakPoint.sm - 1}px) {
    display: block;
  }
`;

const mobileSearchButton = css`
  display: none;
  width: fit-content;
  margin: 160px auto 40px;

  @media (max-width: ${breakPoint.sm - 1}px) {
    display: block;
  }
`;

export default StaySearchDrawer;

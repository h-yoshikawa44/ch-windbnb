import { FC, ComponentPropsWithRef, useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { Close } from '@emotion-icons/material-rounded/Close';
import Drawer from '@/components/SearchDrawer/Drawer';
import SearchInput from '@/components/SearchDrawer/SearchInput';
import SearchButton from '@/components/SearchDrawer/SearchButton';
import SelectLocationList from '@/components/SearchDrawer/SelectLocationList';
import CalcGuests from '@/components/SearchDrawer/CalcGuests';

import { Guests } from '@/hooks/stay';

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
};

const SearchDrawer: FC<Props> = ({
  open = false,
  location,
  guests,
  onClose,
  onSelectLocation,
  onPlusGuests,
  onMinusGuests,
  onSearch,
}) => {
  const [tab, setTab] = useState<Tab>('location');
  const handleSelectTab = useCallback((tabType: Tab) => {
    setTab(tabType);
  }, []);

  return (
    <Drawer id="search-drawer-menu" open={open} onClose={onClose}>
      <div css={[drawerContent, container, !open && hiddenVisibility]}>
        <div css={drawerHeader}>
          <p css={drawerHeaderText}>Edit your search</p>
          <button css={drawerCloseButton} onClick={onClose}>
            <Close size={18} />
          </button>
        </div>
        <form onSubmit={onSearch}>
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
              <SelectLocationList onSelectLocation={onSelectLocation} />
            </div>
            <div css={tab !== 'guests' && hiddenDisplay}>
              <CalcGuests
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
  background-color: #fff;
`;

const container = css`
  padding: 0 4%;
  margin: 0 auto;
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

const hiddenDisplay = css`
  visibility: hidden;

  @media (max-width: 600px) {
    display: none;
  }
`;

const desktopDisplay = css`
  display: inherit;

  @media (max-width: 600px) {
    display: none;
  }
`;

const drawerHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
`;

const drawerHeaderText = css`
  font-family: Mulish, sans-serif;
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
  background-color: #fff;
  border: none;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 16px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const searchBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 48px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

  input {
    border-right: 1px solid #f2f2f2;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    margin-top: 16px;
  }
`;

const searchInputBox = css`
  padding: 16px 24px 8px;
  pointer-events: auto;
  cursor: pointer;
  border-right: 1px solid #f2f2f2;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const searchInputBoxSelect = css`
  padding: 15px 23px 7px;
  border: 1px solid #333;
  border-radius: 16px;
`;

const searchContentBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 42px 0;

  @media (max-width: 600px) {
    display: block;
  }
`;

const mobileSearchButton = css`
  display: none;
  width: fit-content;
  margin: 160px auto 40px;

  @media (max-width: 600px) {
    display: block;
  }
`;

export default SearchDrawer;

import { FC, ComponentPropsWithRef, MouseEventHandler } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import Drawer from '@/components/SearchDrawer/Drawer';
import Backdrop from '@/components/SearchDrawer/Backdrop';
import SelectLocationList from '@/components/SearchDrawer/SelectLocationList';
import CalcGuests from '@/components/SearchDrawer/CalcGuests';

type Guests = {
  adults: number;
  children: number;
};

type Props = ComponentPropsWithRef<'div'> & {
  open: boolean;
  location: string;
  guests: Guests;
  onClose: MouseEventHandler<HTMLDivElement>;
  onSelectLocation: (selectLocation: string) => void;
  onPlusGuests: (prop: keyof Guests) => void;
  onMinusGuests: (prop: keyof Guests) => void;
};

const SearchDrawer: FC<Props> = ({
  open = false,
  location,
  guests,
  onClose,
  onSelectLocation,
  onPlusGuests,
  onMinusGuests,
}) => {
  return (
    <Drawer open={open}>
      <Backdrop open={open} onClick={onClose} />
      <div css={[drawerContent, container, !open && hiddenVisibility]}>
        <div css={searchBox}>
          <div css={searchInputBox}>
            <label>
              <span css={searchInputLabel}>LOCATION</span>
              <input
                css={searchInput}
                placeholder="Add location"
                value={location}
                readOnly
              />
            </label>
          </div>
          <div css={searchInputBox}>
            <label>
              <span css={searchInputLabel}>GUESTS</span>
              <input
                css={searchInput}
                placeholder="Add guests"
                value={guests.adults + guests.children}
                readOnly
              />
            </label>
          </div>
          <button css={searchButton}>
            <Search css={searchButtonIcon} size={18} />
          </button>
        </div>
        <div css={searchContentBox}>
          <SelectLocationList onSelectLocation={onSelectLocation} />
          <CalcGuests
            adultsNum={guests.adults}
            childrenNum={guests.children}
            onPlusGuests={onPlusGuests}
            onMinusGuests={onMinusGuests}
          />
          <div />
        </div>
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
  max-width: 1280px;
  padding: 0 4%;
  margin: 0 auto;
`;

const hiddenVisibility = css`
  visibility: hidden;
`;

const searchBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 88px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

  input {
    border-right: 1px solid #f2f2f2;
  }
`;

const searchInputBox = css`
  padding: 16px 24px 8px;
`;

const searchInputLabel = css`
  display: block;
  font-family: Mulish, sans-serif;
  font-size: 9px;
  font-weight: 800;
  line-height: 11px;
`;

const searchInput = css`
  padding: 0;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  border: none;
  outline: none;

  ::placeholder {
    color: #bdbdbd;
  }
`;

const searchButton = css`
  padding: 16px;
  background-color: #fff;
  border: none;
`;

const searchButtonIcon = css`
  color: #eb5757;
`;

const searchContentBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 42px 0;
`;

const searchGuestBox = css`
  display: grid;
  row-gap: 48px;
  padding: 0 24px;
`;

const searchGuestTitle = css`
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
`;

const searchGuestCaption = css`
  display: block;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #bdbdbd;
`;

const searchGuestCalcBox = css`
  margin-top: 16px;
`;

const searchGuestCalcButton = css`
  padding: 0 6px;
  color: #828282;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #828282;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const searchGuestNum = css`
  margin: 0 16px;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #333;
`;

export default SearchDrawer;

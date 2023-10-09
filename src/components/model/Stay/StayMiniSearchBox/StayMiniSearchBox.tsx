import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import { rgba } from 'polished';
import { Guests } from '@/models/Stay';
import { colorRatios, colors } from '@/styles/constants';
import { mulish } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'form'> & {
  location: string;
  guests: Guests;
  isDrawerOpen: boolean;
  onDrawerOpen: VoidFunction;
  onSearch: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const StayMiniSearchBox: FC<Props> = ({
  location,
  guests,
  isDrawerOpen,
  onDrawerOpen,
  onSearch,
  ...props
}) => {
  const guestsNum = guests.adults + guests.children;
  return (
    <form css={searchBox} {...props} onSubmit={onSearch}>
      <div
        css={[searchBoxDummyInput, dummyInputLocation]}
        aria-controls="search-drawer-menu"
        aria-expanded={isDrawerOpen}
        onClick={onDrawerOpen}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            onDrawerOpen();
          }
        }}
      >
        {location ? (
          <span>{location}</span>
        ) : (
          <span css={searchBoxPlaceHolder}>Add location</span>
        )}
      </div>
      <div
        css={[searchBoxDummyInput, dummyInputGuests]}
        aria-controls="search-drawer-menu"
        aria-expanded={isDrawerOpen}
        onClick={onDrawerOpen}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            onDrawerOpen();
          }
        }}
      >
        {guestsNum !== 0 ? (
          <span>{guestsNum}</span>
        ) : (
          <span css={searchBoxPlaceHolder}>Add guests</span>
        )}
      </div>
      <button css={searchButton} type="submit">
        <Search size={18} />
      </button>
    </form>
  );
};

const searchBox = css`
  display: flex;
  max-width: 296px;
  height: 56px;
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);

  input {
    border-right: 1px solid ${colors.white2};
  }
`;

const searchBoxDummyInput = css`
  display: flex;
  align-items: center;
  font-family: ${mulish.style.fontFamily};
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 4%);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const searchBoxPlaceHolder = css`
  color: ${colors.grayLighten};
`;

const dummyInputLocation = css`
  min-width: 122px;
  padding: 16px;
  border-radius: 16px 0 0 16px;
`;

const dummyInputGuests = css`
  min-width: 106px;
  padding: 16px;
`;

const searchButton = css`
  padding: 16px;
  color: ${colors.primary};
  cursor: pointer;
  background-color: ${colors.white};
  border: none;
  border-radius: 0 16px 16px 0;

  &:hover,
  &:focus {
    background-color: ${rgba(colors.primary, colorRatios.buttonAlpha)};
  }

  &:focus:not(:focus-visible) {
    outline-color: transparent;
  }
`;

export default StayMiniSearchBox;

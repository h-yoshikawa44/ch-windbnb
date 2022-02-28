import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import { Guests } from '@/models/Stay';
import { fonts, colors } from '@/styles/constants';
import { createRGBAColor } from '@/lib/color';

type Props = ComponentPropsWithRef<'form'> & {
  location: string;
  guests: Guests;
  isDrawerOpen: boolean;
  onDrawerOpen: VoidFunction;
  onSearch: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const StayMiniSearchBox: VFC<Props> = ({
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
        onKeyPress={(ev) => {
          ev.preventDefault();
          if (ev.key === 'Enter') {
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
        onKeyPress={(ev) => {
          ev.preventDefault();
          if (ev.key === 'Enter') {
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
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

  input {
    border-right: 1px solid ${colors.white2};
  }
`;

const searchBoxDummyInput = css`
  font-family: ${fonts.mulish};
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus:not(.focus-visible) {
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
  padding: 16px 16px;
  color: ${colors.primary};
  cursor: pointer;
  background-color: ${colors.white};
  border: none;
  border-radius: 0 16px 16px 0;

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createRGBAColor(colors.primary, 0.1)};
  }

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

export default StayMiniSearchBox;

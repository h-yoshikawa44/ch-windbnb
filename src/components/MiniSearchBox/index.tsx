import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import { Guests } from '@/hooks/stay';
import { createRGBAColor } from '@/util/color';

type Props = ComponentPropsWithRef<'form'> & {
  location: string;
  guests: Guests;
  isDrawerOpen: boolean;
  onDrawerOpen: VoidFunction;
  onSearch: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const MiniSearchBox: VFC<Props> = ({
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
      <input
        css={[searchBoxInput, searchBoxInputLocation]}
        placeholder="Add location"
        value={location}
        readOnly
        aria-controls="search-drawer-menu"
        aria-expanded={isDrawerOpen}
        onClick={onDrawerOpen}
        onKeyPress={(ev) => {
          ev.preventDefault();
          if (ev.key === 'Enter') {
            onDrawerOpen();
          }
        }}
      />
      <input
        css={[searchBoxInput, searchBoxInputGuests]}
        placeholder="Add guests"
        value={guestsNum === 0 ? '' : guestsNum}
        readOnly
        aria-controls="search-drawer-menu"
        aria-expanded={isDrawerOpen}
        onClick={onDrawerOpen}
        onKeyPress={(ev) => {
          ev.preventDefault();
          if (ev.key === 'Enter') {
            onDrawerOpen();
          }
        }}
      />
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
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

  input {
    border-right: 1px solid #f2f2f2;
  }
`;

const searchBoxInput = css`
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  cursor: pointer;
  border: none;
  outline: none;

  ::placeholder {
    color: #bdbdbd;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const searchBoxInputLocation = css`
  min-width: 122px;
  padding: 16px;
  border-radius: 16px 0 0 16px;
`;

const searchBoxInputGuests = css`
  min-width: 106px;
  padding: 16px;
`;

const searchButton = css`
  padding: 16px 16px;
  color: #eb5757;
  cursor: pointer;
  background-color: #fff;
  border: none;
  border-radius: 0 16px 16px 0;
  outline: none;

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createRGBAColor('#eb5757', 0.1)};
  }
`;

export default MiniSearchBox;

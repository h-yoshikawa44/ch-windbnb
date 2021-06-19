import { VFC } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';

type Guests = {
  adults: number;
  children: number;
};

type Props = {
  location: string;
  guests: Guests;
};

const SearchBox: VFC<Props> = ({ location, guests }) => {
  return (
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
  );
};

const searchBox = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

export default SearchBox;

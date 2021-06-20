import { VFC } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import { Guests } from '@/hooks/stay';
import { createDarkenColor } from '@/util/color';

type Tab = 'location' | 'guests';

type Props = {
  tab: Tab;
  location: string;
  guests: Guests;
  onTabChange: (tabType: Tab) => void;
  onSearch: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const SearchBox: VFC<Props> = ({
  tab,
  location,
  guests,
  onTabChange,
  onSearch,
}) => {
  return (
    <form css={searchBox} onSubmit={onSearch}>
      <div
        css={[searchInputBox, tab === 'location' && searchInputBoxSelect]}
        tabIndex={0}
        onClick={() => onTabChange('location')}
      >
        <label css={searchInputLabel}>
          <span css={searchInputLabelText}>LOCATION</span>
          <input
            css={searchInput}
            placeholder="Add location"
            value={location}
            readOnly
            tabIndex={-1}
          />
        </label>
      </div>
      <div
        css={[searchInputBox, tab === 'guests' && searchInputBoxSelect]}
        tabIndex={0}
        onClick={() => onTabChange('guests')}
      >
        <label css={searchInputLabel}>
          <span css={searchInputLabelText}>GUESTS</span>
          <input
            css={searchInput}
            placeholder="Add guests"
            value={guests.adults + guests.children}
            readOnly
            tabIndex={-1}
          />
        </label>
      </div>
      <button css={searchButton} type="submit">
        <Search css={searchButtonIcon} size={18} />
        Search
      </button>
    </form>
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
  pointer-events: auto;
  cursor: pointer;
  border-right: 1px solid #f2f2f2;
  outline: none;

  &:focus,
  &:focus-within {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const searchInputBoxSelect = css`
  padding: 15px 23px 7px;
  border: 1px solid #333;
  border-radius: 16px;
`;

const searchInputLabel = css`
  cursor: inherit;
`;

const searchInputLabelText = css`
  display: block;
  font-family: Mulish, sans-serif;
  font-size: 9px;
  font-weight: 800;
  line-height: 11px;
  cursor: inherit;
`;

const searchInput = css`
  padding: 0;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  cursor: inherit;
  background-color: inherit;
  border: none;
  outline: none;

  ::placeholder {
    color: #bdbdbd;
  }
`;

const searchButton = css`
  padding: 16px;
  color: #fff;
  cursor: pointer;
  background-color: #eb5757;
  border: none;
  border-radius: 16px;
  outline: none;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createDarkenColor('#eb5757', '20%')};
  }
`;

const searchButtonIcon = css`
  margin-right: 8px;
  vertical-align: text-bottom; ;
`;

export default SearchBox;

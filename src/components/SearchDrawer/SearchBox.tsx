import { VFC } from 'react';
import { css } from '@emotion/react';
import { Guests } from '@/hooks/stay';
import SearchInput from '@/components/SearchDrawer/SearchInput';
import SearchButton from '@/components/SearchDrawer/SearchButton';

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
        onClick={() => onTabChange('guests')}
      >
        <SearchInput
          label="GUESTS"
          placeholder="Add guests"
          value={guests.adults + guests.children}
          readOnly
          tabIndex={-1}
        />
      </div>
      <SearchButton type="submit">Search</SearchButton>
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

export default SearchBox;

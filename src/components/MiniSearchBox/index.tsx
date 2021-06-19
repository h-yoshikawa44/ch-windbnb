import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import { Guests } from '@/hooks/stay';

type Props = ComponentPropsWithRef<'form'> & {
  location: string;
  guests: Guests;
  onDrawerOpen: VoidFunction;
  onSearch: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const MiniSearchBox: VFC<Props> = ({
  location,
  guests,
  onDrawerOpen,
  onSearch,
  ...props
}) => {
  const guestsNum = guests.adults + guests.children;
  return (
    <form css={searchBox} {...props} onSubmit={onSearch}>
      <input
        css={searchBoxInput}
        placeholder="Add location"
        value={location}
        readOnly
        onClick={onDrawerOpen}
      />
      <input
        css={searchBoxInput}
        placeholder="Add guests"
        value={guestsNum === 0 ? '' : guestsNum}
        readOnly
        onClick={onDrawerOpen}
      />
      <button css={searchButton} type="submit">
        <Search css={searchButtonIcon} size={18} />
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
  min-width: 106px;
  padding: 16px;
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

export default MiniSearchBox;

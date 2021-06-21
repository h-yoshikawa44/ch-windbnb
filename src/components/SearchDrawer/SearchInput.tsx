import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'input'> & {
  label: string;
};

const SearchInput: VFC<Props> = ({ label, ...props }) => {
  return (
    <label css={searchInputLabel}>
      <span css={searchInputLabelText}>{label}</span>
      <input css={searchInput} {...props} />
    </label>
  );
};

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

export default SearchInput;

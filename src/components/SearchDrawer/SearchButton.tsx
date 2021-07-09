import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import { createDarkenColor } from '@/util/color';

type Props = ComponentPropsWithRef<'button'>;

const SearchButton: FC<Props> = ({ children, ...props }) => {
  return (
    <button css={searchButton} {...props}>
      <Search css={searchButtonIcon} size={18} />
      {children}
    </button>
  );
};

const searchButton = css`
  padding: 16px 24px;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #fff;
  cursor: pointer;
  background-color: #eb5757;
  border: none;
  border-radius: 16px;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createDarkenColor('#eb5757', '20%')};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const searchButtonIcon = css`
  margin-right: 8px;
  vertical-align: text-bottom; ;
`;

export default SearchButton;

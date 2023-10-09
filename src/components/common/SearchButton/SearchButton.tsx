import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Search } from '@emotion-icons/material-rounded/Search';
import { darken } from 'polished';
import { colorRatios, colors } from '@/styles/constants';
import { mulish } from '@/styles/fonts';

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
  font-family: ${mulish.style.fontFamily};
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: ${colors.white};
  cursor: pointer;
  background-color: ${colors.primary};
  border: none;
  border-radius: 16px;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: ${darken(colorRatios.buttonDarken, colors.primary)};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const searchButtonIcon = css`
  margin-right: 8px;
  vertical-align: text-bottom;
`;

export default SearchButton;

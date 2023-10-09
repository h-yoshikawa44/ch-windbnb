import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';
import { mulish } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'button'>;

const ClearButton: FC<Props> = ({ ...props }) => {
  return (
    <button css={clearButton} {...props}>
      Clear
    </button>
  );
};

const clearButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-family: ${mulish.style.fontFamily};
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  cursor: pointer;
  background-color: ${colors.white};
  border: none;
  border-radius: 8px;

  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 4%);
  }

  &:focus:not(:focus-visible) {
    outline-color: transparent;
  }
`;

export default ClearButton;

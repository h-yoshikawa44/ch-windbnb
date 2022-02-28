import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { fonts, colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'button'>;

const ClearButton: VFC<Props> = ({ ...props }) => {
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
  font-family: ${fonts.mulish};
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  cursor: pointer;
  background-color: ${colors.white};
  border: none;
  border-radius: 8px;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

export default ClearButton;

import { VFC } from 'react';
import { css } from '@emotion/react';
import { Add } from '@emotion-icons/material-rounded/Add';
import { Remove } from '@emotion-icons/material-rounded/Remove';
import { Guests } from '@/models/Stay';
import { fonts, colors } from '@/styles/constants';

type BoxProps = {
  type: 'adults' | 'children';
  title: string;
  caption: string;
  num: number;
  onPlusGuests: (prop: keyof Guests) => void;
  onMinusGuests: (prop: keyof Guests) => void;
};

const CalcBox: VFC<BoxProps> = ({
  type,
  title,
  caption,
  num,
  onPlusGuests,
  onMinusGuests,
}) => {
  return (
    <div>
      <p css={searchGuestTitle}>{title}</p>
      <span css={searchGuestCaption}>{caption}</span>
      <div css={searchGuestCalcBox}>
        <button
          css={searchGuestCalcButton}
          type="button"
          onClick={() => onMinusGuests(type)}
        >
          <Remove css={searchGuestCalcIcon} size={12} />
        </button>
        <span css={searchGuestNum}>{num}</span>
        <button
          css={searchGuestCalcButton}
          type="button"
          onClick={() => onPlusGuests(type)}
        >
          <Add css={searchGuestCalcIcon} size={12} />
        </button>
      </div>
    </div>
  );
};

const searchGuestTitle = css`
  font-family: ${fonts.mulish};
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
`;

const searchGuestCaption = css`
  display: block;
  font-family: ${fonts.mulish};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.grayLighten};
`;

const searchGuestCalcBox = css`
  margin-top: 16px;
`;

const searchGuestCalcButton = css`
  padding: 0 6px;
  color: ${colors.gray};
  cursor: pointer;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

const searchGuestCalcIcon = css`
  vertical-align: baseline;
`;

const searchGuestNum = css`
  margin: 0 16px;
  font-family: ${fonts.mulish};
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: ${colors.black};
`;

type Props = {
  adultsNum: number;
  childrenNum: number;
  onPlusGuests: (prop: keyof Guests) => void;
  onMinusGuests: (prop: keyof Guests) => void;
};

const StayCalcGuests: VFC<Props> = ({
  adultsNum,
  childrenNum,
  onPlusGuests,
  onMinusGuests,
}) => {
  return (
    <div css={searchGuestBox}>
      <CalcBox
        type="adults"
        title="Adults"
        caption="Ages 13 or obove"
        num={adultsNum}
        onPlusGuests={onPlusGuests}
        onMinusGuests={onMinusGuests}
      />
      <CalcBox
        type="children"
        title="Children"
        caption="Ages 2-12"
        num={childrenNum}
        onPlusGuests={onPlusGuests}
        onMinusGuests={onMinusGuests}
      />
    </div>
  );
};

const searchGuestBox = css`
  display: grid;
  row-gap: 48px;
  padding: 18px 24px;
`;

export default StayCalcGuests;

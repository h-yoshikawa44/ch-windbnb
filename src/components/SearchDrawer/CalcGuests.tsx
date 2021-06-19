import { VFC } from 'react';
import { css } from '@emotion/react';
import { Add } from '@emotion-icons/material-rounded/Add';
import { Remove } from '@emotion-icons/material-rounded/Remove';
import { Guests } from '@/hooks/stay';

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
        <button css={searchGuestCalcButton} onClick={() => onMinusGuests(type)}>
          <Remove css={searchGuestCalcIcon} size={12} />
        </button>
        <span css={searchGuestNum}>{num}</span>
        <button css={searchGuestCalcButton} onClick={() => onPlusGuests(type)}>
          <Add css={searchGuestCalcIcon} size={12} />
        </button>
      </div>
    </div>
  );
};

const searchGuestTitle = css`
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
`;

const searchGuestCaption = css`
  display: block;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #bdbdbd;
`;

const searchGuestCalcBox = css`
  margin-top: 16px;
`;

const searchGuestCalcButton = css`
  padding: 0 6px;
  color: #828282;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #828282;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const searchGuestCalcIcon = css`
  vertical-align: baseline;
`;

const searchGuestNum = css`
  margin: 0 16px;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #333;
`;

type Props = {
  adultsNum: number;
  childrenNum: number;
  onPlusGuests: (prop: keyof Guests) => void;
  onMinusGuests: (prop: keyof Guests) => void;
};

const CalcGuests: VFC<Props> = ({
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
  padding: 0 24px;
`;

export default CalcGuests;

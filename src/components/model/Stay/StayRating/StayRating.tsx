import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Star } from '@emotion-icons/material-rounded/Star';
import { fonts, colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'div'> & {
  value: string;
};

const StayRating: FC<Props> = ({ value, ...props }) => {
  return (
    <div css={rating} {...props}>
      <Star css={icon} size={18} />
      <span css={ratingValue}>{value}</span>
    </div>
  );
};

const rating = css`
  white-space: nowrap;
`;

const icon = css`
  color: ${colors.primary};
  vertical-align: text-bottom;
`;

const ratingValue = css`
  margin-left: 8px;
  font-family: ${fonts.montserrat};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
`;

export default StayRating;

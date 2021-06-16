import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Star } from '@emotion-icons/material-rounded/Star';

type Props = ComponentPropsWithRef<'div'> & {
  value: string;
};

const Rating: VFC<Props> = ({ value, ...props }) => {
  return (
    <div {...props}>
      <Star css={icon} size={18} />
      <span css={ratingValue}>{value}</span>
    </div>
  );
};

const icon = css`
  color: #eb5757;
  vertical-align: text-bottom;
`;

const ratingValue = css`
  padding-left: 8px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
`;

export default Rating;

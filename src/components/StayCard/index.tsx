import { VFC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import SuperHostChip from '@/components/StayCard/SuperHostChip';
import Rating from '@/components/StayCard/Rating';
import { Stay } from '@/models/Stay';

type Props = Stay;

const StayCard: VFC<Props> = ({
  superHost,
  title,
  rating,
  type,
  beds,
  photo,
}) => {
  const caption = beds ? `${type} . ${beds} beds` : type;
  return (
    <div css={stayCard} tabIndex={0}>
      <Image
        css={stayImage}
        src={photo}
        alt={`${title} - overview`}
        width={400}
        height={272}
      />
      <div css={cartionBlock}>
        {superHost && (
          <div css={superHostChipMargin}>
            <SuperHostChip />
          </div>
        )}
        <div css={captionText}>{caption}</div>
        <Rating css={customRating} value={rating.toFixed(2)} />
      </div>
      <h3 css={cardTitle}>{title}</h3>
    </div>
  );
};

const stayCard = css`
  padding: 16px 8px;
  border-radius: 16px;
  outline: none;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 600px) {
    padding: 16px 0;
  }
`;

const stayImage = css`
  border-radius: 24px;
`;

const cartionBlock = css`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 0;
`;

const superHostChipMargin = css`
  margin-right: 8px;
`;

const captionText = css`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: #828282;
`;

const customRating = css`
  flex-grow: 1;
  text-align: right;
`;

const cardTitle = css`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export default StayCard;

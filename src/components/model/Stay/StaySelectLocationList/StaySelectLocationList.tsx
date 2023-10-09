import { FC } from 'react';
import { css } from '@emotion/react';
import { Room } from '@emotion-icons/material-rounded/Room';
import { colors } from '@/styles/constants';

type ItemProps = {
  value: string;
  onSelectLocation: (selectLocation: string) => void;
};

const SelectLocationItem: FC<ItemProps> = ({ value, onSelectLocation }) => {
  return (
    <li>
      <button
        css={searchLocationItem}
        type="button"
        onClick={() => onSelectLocation(value)}
      >
        <Room css={icon} size={18} />
        {value}
      </button>
    </li>
  );
};

const icon = css`
  display: inline;
  margin-right: 8px;
  color: ${colors.blackLighten};
  vertical-align: text-bottom;
`;

const searchLocationItem = css`
  width: 100%;
  padding: 18px 0;
  text-align: left;
  cursor: pointer;
  background-color: ${colors.white};
  border: none;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 4%);
  }

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

const locationList = [
  'Helsinki, Finland',
  'Turku, Finland',
  'Oulu, Finland',
  'Vaasa, Finland',
];

type Props = {
  onSelectLocation: (selectLocation: string) => void;
};

const StaySelectLocationList: FC<Props> = ({ onSelectLocation }) => {
  return (
    <ul css={searchLocationList}>
      {locationList.map((location, index) => {
        return (
          <SelectLocationItem
            key={`${index}-${location}`}
            value={location}
            onSelectLocation={onSelectLocation}
          />
        );
      })}
    </ul>
  );
};

const searchLocationList = css`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style: none;
`;

export default StaySelectLocationList;

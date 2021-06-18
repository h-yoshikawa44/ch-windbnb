import { FC, VFC } from 'react';
import { css } from '@emotion/react';

type ItemProps = {
  value: string;
  onClick: (selectLocation: string) => void;
};

const SelectLocationItem: FC<ItemProps> = ({ value, onClick }) => {
  return (
    <li>
      <button css={searchLocationItem} onClick={() => onClick(value)}>
        {value}
      </button>
    </li>
  );
};

const searchLocationItem = css`
  width: 100%;
  padding: 18px 0;
  text-align: left;
  cursor: pointer;
  background-color: #fff;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
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

const SelectLocationList: VFC<Props> = ({ onSelectLocation }) => {
  return (
    <ul css={searchLocationList}>
      {locationList.map((location, index) => {
        return (
          <SelectLocationItem
            key={`${index}-${location}`}
            value={location}
            onClick={onSelectLocation}
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
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export default SelectLocationList;

import { VFC } from 'react';
import { css } from '@emotion/react';

const SuperHostChip: VFC = () => {
  return <div css={superHostChip}>SUPER HOST</div>;
};

const superHostChip = css`
  padding: 8px;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  border: 1px solid #4f4f4f;
  border-radius: 12px;
`;

export default SuperHostChip;

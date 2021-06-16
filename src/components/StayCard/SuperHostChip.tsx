import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'div'>;

const SuperHostChip: VFC<Props> = ({ ...props }) => {
  return (
    <div css={superHostChip} {...props}>
      SUPER HOST
    </div>
  );
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

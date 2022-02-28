import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { fonts, colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'div'>;

const StaySuperHostChip: VFC<Props> = ({ ...props }) => {
  return (
    <div css={superHostChip} {...props}>
      SUPER HOST
    </div>
  );
};

const superHostChip = css`
  padding: 8px;
  font-family: ${fonts.montserrat};
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  white-space: nowrap;
  border: 1px solid ${colors.blackLighten};
  border-radius: 12px;
`;

export default StaySuperHostChip;

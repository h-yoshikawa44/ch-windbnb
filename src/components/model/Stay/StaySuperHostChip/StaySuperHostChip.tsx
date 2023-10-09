import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';
import { montserrat } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'div'>;

const StaySuperHostChip: FC<Props> = ({ ...props }) => {
  return (
    <div css={superHostChip} {...props}>
      SUPER HOST
    </div>
  );
};

const superHostChip = css`
  padding: 8px;
  font-family: ${montserrat.style.fontFamily};
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  white-space: nowrap;
  border: 1px solid ${colors.blackLighten};
  border-radius: 12px;
`;

export default StaySuperHostChip;

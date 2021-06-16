import { VFC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

const Footer: VFC = () => {
  return (
    <footer css={footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span css={logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

const footer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  a {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`;

const logo = css`
  height: 1em;
  margin-left: 0.5rem;
`;

export default Footer;

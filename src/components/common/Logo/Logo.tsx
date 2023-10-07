import { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => {
  return <Image src="/logo.svg" alt="Windbnb Logo" width={96} height={16} />;
};

export default Logo;

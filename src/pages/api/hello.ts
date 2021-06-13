// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};

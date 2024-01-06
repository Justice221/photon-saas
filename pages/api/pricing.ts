// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/pricing.json'

type Data = {
  plan: string;
  monthlyPrice: string;
  description: string;
  yearlyPrice: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json( data )
}

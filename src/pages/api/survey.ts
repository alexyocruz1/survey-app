import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import Survey from '../../models/Survey';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { companyName, industry, numberOfEmployees, currentChallenges } = req.body;

    const survey = new Survey({
      companyName,
      industry,
      numberOfEmployees,
      currentChallenges,
    });

    await survey.save();

    const recommendation = `Based on your responses, we recommend Sales Cloud and Service Cloud for your company.`;

    res.status(200).json({ recommendation });
  } else {
    res.status(405).end();
  }
}
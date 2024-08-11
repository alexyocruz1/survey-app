import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import Schedule from '../../models/Schedule';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { name, email, preferredDate } = req.body;

    const schedule = new Schedule({
      name,
      email,
      preferredDate,
    });

    await schedule.save();

    res.status(200).json({ message: 'Consultation scheduled successfully' });
  } else {
    res.status(405).end();
  }
}
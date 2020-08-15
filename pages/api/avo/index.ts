import { NextApiRequest, NextApiResponse } from 'next/types'
import DB from '@database'

export default async function allAvos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = new DB()

  const allEntries = await db.getAll()

  res.status(200)
  res.json({
    length: allEntries.length,
    data: allEntries,
  })
}

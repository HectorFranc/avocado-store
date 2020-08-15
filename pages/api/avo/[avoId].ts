import { NextApiRequest, NextApiResponse } from 'next/types'
import DB from '@database'

export default async function allAvos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = new DB()
  const { avoId } = req.query

  const avo = await db.getById(avoId as string)

  res.status(200).json(avo)
}

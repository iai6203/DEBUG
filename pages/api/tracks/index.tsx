import status from 'http-status'
// @notion
import client from '@/lib/notion/client'
import database from '@/lib/notion/database'
//
import type { NextApiRequest, NextApiResponse } from 'next'

const getTracks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await client.databases.query({
      database_id: database.TRACK,
    })

    return res.status(status.OK).json(response.results)
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: 'INTERNAL SERVER ERROR',
    })
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return await getTracks(req, res)
    default:
      return res.status(status.METHOD_NOT_ALLOWED).json({
        message: 'METHOD NOT ALLOWED',
      })
  }
}

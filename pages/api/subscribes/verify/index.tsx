import status from 'http-status'
// @jwt
import { verify } from '@/lib/jwt'
// @notion
import client from '@/lib/notion/client'
import database from '@/lib/notion/database'
//
import type { NextApiRequest, NextApiResponse } from 'next'

const verifySubscribeEmailAddress = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { token } = req.body

  try {
    const { data }: any = verify(token)

    const { results } = await client.databases.query({
      database_id: database.SUBSCRIBE,
      filter: {
        property: '이메일',
        title: {
          equals: data.email,
        },
      },
    })

    if (results.length !== 1)
      return res.status(status.INTERNAL_SERVER_ERROR).json({
        message: '해당 이메일을 인증하는 데 실패했습니다.',
      })

    const page = results[0]
    await client.pages.update({
      page_id: page.id,
      properties: {
        ['인증 여부']: {
          select: {
            name: '인증',
          },
        },
      },
    })

    return res.status(status.OK).json({
      message: '해당 이메일의 인증이 완료되었습니다.',
    })
  } catch (e: any) {
    if (e.name === 'TokenExpiredError')
      return res.status(status.UNAUTHORIZED).json({
        message: '이미 만료된 주소이기 때문에 인증에 실패했습니다.',
      })

    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: 'INTERNAL SERVER ERROR',
    })
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return await verifySubscribeEmailAddress(req, res)
    default:
      return res.status(status.METHOD_NOT_ALLOWED).json({
        message: 'METHOD NOT ALLOWED',
      })
  }
}

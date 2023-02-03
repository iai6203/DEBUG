import status from 'http-status'
// @mail
import transporter from '@/lib/mail/transporter'
import template from '@/lib/mail/template'
import config from '@/lib/mail/config'
// @jwt
import { sign } from '@/lib/jwt'
// @notion
import client from '@/lib/notion/client'
import database from '@/lib/notion/database'
//
import type { NextApiRequest, NextApiResponse } from 'next'

const createSubscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  try {
    const { results: pages } = await client.databases.query({
      database_id: database.SUBSCRIBE,
      filter: {
        property: '이메일',
        title: {
          equals: email,
        },
      },
    })

    if (
      pages.length === 1 &&
      // @ts-ignore
      pages[0].properties['인증 여부'].select.name === '인증'
    ) {
      return res.status(status.BAD_REQUEST).json({
        message: '이미 구독 중인 이메일입니다.',
      })
    } else if (pages.length === 0) {
      await client.pages.create({
        parent: {
          type: 'database_id',
          database_id: database.SUBSCRIBE,
        },
        properties: {
          ['이메일']: {
            title: [
              {
                type: 'text',
                text: {
                  content: email,
                },
              },
            ],
          },
          ['인증 여부']: {
            select: {
              name: '미인증',
            },
          },
        },
      })
    }

    const token = sign(
      Math.floor(Date.now() / 1000) + 60 * 3, // 3분
      { email },
    )
    await transporter.sendMail({
      from: config.from,
      to: email,
      subject: 'DEBUG BAND 구독을 위한 메일 인증',
      html: template.main(`
        메일을 인증하시려면 아래 링크를 클릭해주세요. <br>
        <br>
        <a href="${process.env.HOST}/subscribe/verify?token=${token}" target="_blank">
          메일 인증
        </a>
      `),
    })

    return res.status(status.OK).json({
      message: '해당 이메일로 인증 메일을 발송했습니다.',
    })
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: 'INTERNAL SERVER ERROR',
    })
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return await createSubscribe(req, res)
    default:
      return res.status(status.METHOD_NOT_ALLOWED).json({
        message: 'METHOD NOT ALLOWED',
      })
  }
}

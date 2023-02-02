import status from 'http-status'
import client from '@/lib/notion/client'
import database from '@/lib/notion/database'
import type { NextApiRequest, NextApiResponse } from 'next'

const createContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, content } = req.body

  try {
    await client.pages.create({
      parent: {
        type: 'database_id',
        database_id: database.CONTACT,
      },
      properties: {
        이메일: {
          title: [
            {
              type: 'text',
              text: {
                content: email,
              },
            },
          ],
        },
        이름: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: name,
              },
            },
          ],
        },
        내용: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: content,
              },
            },
          ],
        },
      },
    })

    return res.status(status.OK).json({
      message: 'OK',
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
      return await createContact(req, res)
    default:
      return res.status(status.METHOD_NOT_ALLOWED).json({
        message: 'METHOD NOT ALLOWED',
      })
  }
}

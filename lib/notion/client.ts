import { Client } from '@notionhq/client'

const token = process.env.NOTION_TOKEN

if (!token) throw new Error('NOTION TOKEN을 찾을 수 없습니다.')

const client = new Client({
  auth: token,
})

export default client

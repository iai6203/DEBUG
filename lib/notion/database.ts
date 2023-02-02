const ALBUM = process.env.NOTION_ALBUM_DATABASE
const CONTACT = process.env.NOTION_CONTACT_DATABASE

if (!ALBUM || !CONTACT)
  throw new Error('NOTION DATABASE 값을 찾을 수 없습니다.')

const database = {
  ALBUM,
  CONTACT,
}

export default database

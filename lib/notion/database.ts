const ALBUM = process.env.NOTION_ALBUM_DATABASE
const CONTACT = process.env.NOTION_CONTACT_DATABASE
const TRACK = process.env.NOTION_TRACK_DATABASE
const SUBSCRIBE = process.env.NOTION_SUBSCRIBE_DATABASE

if (!ALBUM || !CONTACT || !TRACK || !SUBSCRIBE)
  throw new Error('NOTION DATABASE 값을 찾을 수 없습니다.')

const database = {
  ALBUM,
  CONTACT,
  TRACK,
  SUBSCRIBE,
}

export default database

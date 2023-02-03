import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY

if (!SECRET_KEY) throw new Error('JWT SECRET_KEY를 찾을 수 없습니다.')

export const sign = (exp: number, data: any) => {
  return jwt.sign(
    {
      exp,
      data,
    },
    SECRET_KEY,
  )
}

export const verify = (token: string) => {
  return jwt.verify(token, SECRET_KEY)
}

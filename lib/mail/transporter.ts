import nodemailer from 'nodemailer'

const user = process.env.SMTP_USER
const password = process.env.SMTP_PASSWORD

if (!user || !password) throw new Error('SMTP 계정 정보를 찾을 수 없습니다.')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user,
    pass: password,
  },
})

export default transporter

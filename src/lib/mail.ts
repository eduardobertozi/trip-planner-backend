import nodemailer from 'nodemailer'

export async function getMailClient() {
  const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "306f3660647aa8",
      pass: "2b71914fbd3227"
    }
  })
  
  return transporter
}
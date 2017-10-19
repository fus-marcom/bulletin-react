const nodemailer = require('nodemailer')
const template = require('./template')
const htmlToText = require('html-to-text')

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
})

module.exports = (from, title, body, attachments) => {
  let html = template(title, body)
  let text = htmlToText.fromString(html)
  const f =
    attachments.length > 0
      ? attachments.map(file => ({
        name: file.originalname,
        content: file.buffer
      }))
      : []
  let mailOptions = {
    from, // sender address
    to: 'someone@francisan.edu', // list of receivers
    subject: 'Annoucement Request', // Subject line
    text, // plain text body
    html, // html body
    attachments: f
  }
  return transport.sendMail(mailOptions)
}

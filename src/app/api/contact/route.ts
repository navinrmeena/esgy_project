import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, startupName, currentWebsite, email, message } = body

    if (!name || !email || !startupName) {
      return NextResponse.json(
        { error: 'Name, email, and startup name are required' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Consultation Request from ${name} (${startupName})`,
      text: `
You have a new consultation request!

Name: ${name}
Email: ${email}
Startup/Company: ${startupName}
Website: ${currentWebsite || 'N/A'}

Message:
${message || 'No additional details provided.'}
      `,
      html: `
        <h2>New Consultation Request!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Startup/Company:</strong> ${startupName}</p>
        <p><strong>Website:</strong> ${currentWebsite ? `<a href="${currentWebsite}">${currentWebsite}</a>` : 'N/A'}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message ? message.replace(/\n/g, '<br/>') : 'No additional details provided.'}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

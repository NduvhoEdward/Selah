// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

// Email template
const createEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">From your portfolio website</p>
  </div>
  
  <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
    <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
        Contact Details
      </h2>
      
      <table style="width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 80px;">Name:</td>
          <td style="padding: 8px 0; color: #1e293b;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Subject:</td>
          <td style="padding: 8px 0; color: #1e293b;">${data.subject}</td>
        </tr>
      </table>
      
      <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 18px;">Message:</h3>
      <div style="background-color: #f1f5f9; padding: 20px; border-left: 4px solid #2563eb; border-radius: 4px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${data.message}</div>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #e2e8f0; border-radius: 8px;">
      <p style="margin: 0; color: #64748b; font-size: 13px;">
        📧 This email was sent from your portfolio contact form<br>
        🔗 <a href="https://Selah.net.za" style="color: #2563eb; text-decoration: none;">Visit your website</a>
      </p>
    </div>
  </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request data
    const validatedData = contactSchema.parse(body)
    
    const { name, email, subject, message } = validatedData

    // For development, you can log the email
    if (process.env.NODE_ENV === 'development') {
      console.log('=== DEVELOPMENT MODE - EMAIL PREVIEW ===')
      console.log('From:', process.env.FROM_EMAIL)
      console.log('To:', process.env.TO_EMAIL)
      console.log('Subject:', `New Contact: ${subject}`)
      console.log('Data:', { name, email, subject, message })
      console.log('========================================')
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL as string,
      to: [process.env.TO_EMAIL as string],
      subject: `New Contact: ${subject}`,
      html: createEmailTemplate({ name, email, subject, message }),
      replyTo: email, // Allow you to reply directly to the sender
    })

    console.log('Email sent successfully:', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully! I\'ll get back to you soon.',
      id: data.data?.id 
    })

  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please check your input and try again.', 
          errors: error.issues 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again or email me directly at hello@Selah.net.za' 
      },
      { status: 500 }
    )
  }
}
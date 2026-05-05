import React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import { Stripe } from 'stripe'
import { render } from '@react-email/render'
import { renderToBuffer } from '@react-pdf/renderer'
import { Resend } from 'resend'
import { DarkTypeReportPdf } from '@/components/pdf/DarkTypeReportPdf'
import { ReportEmail } from '@/components/email/ReportEmail'
import { reports, type FullReport } from '@/lib/report-data'
import { resultTypes, type ResultType } from '@/lib/quiz-data'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY)
const FROM_EMAIL = 'DarkType <onboarding@resend.dev>'

const validTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, sessionId } = body

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 })
    }

    // Verify Stripe session and payment
    let session
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId)
    } catch (error) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 })
    }

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 403 })
    }

    const resultType = (session.metadata?.resultType as ResultType) || null
    if (!resultType || !validTypes.includes(resultType)) {
      return NextResponse.json({ error: 'Invalid result type' }, { status: 400 })
    }

    // Get report data
    const report: FullReport = reports[resultType]
    const displayName = resultTypes[resultType].displayName

    // Generate PDF
    const pdfBuffer = await renderToBuffer(
      React.createElement(DarkTypeReportPdf, { report, displayName }) as any
    )

    // Debug: Write PDF to disk in development
    if (process.env.NODE_ENV === 'development') {
      const fs = await import('fs/promises')
      await fs.writeFile('debug-report.pdf', pdfBuffer)
      console.log('Debug PDF written: debug-report.pdf')
    }

    // Generate email HTML
    const EmailComponent = ReportEmail({ displayName })
    const emailHtml = await render(EmailComponent)

    // Send email with PDF attachment
    console.log('SENDING FROM:', FROM_EMAIL)
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Your DarkType Report: ${displayName}`,
      html: emailHtml,
      attachments: [
        {
          filename: `DarkType-${resultType}.pdf`,
          content: pdfBuffer,
        },
      ],
    })

    if (response.error) {
      console.error('Resend error:', response.error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: response.data?.id })
  } catch (error) {
    console.error('Send report error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

import React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import { Stripe } from 'stripe'
import { renderToBuffer } from '@react-pdf/renderer'
import { DarkTypeReportPdf } from '@/components/pdf/DarkTypeReportPdf'
import { reports, type FullReport } from '@/lib/report-data'
import { resultTypes, type ResultType } from '@/lib/quiz-data'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const validTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId, resultType } = body

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 })
    }

    if (!resultType || !validTypes.includes(resultType)) {
      return NextResponse.json({ error: 'Invalid result type' }, { status: 400 })
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

    // Get report data
    const report: FullReport = reports[resultType as ResultType]
    const displayName = resultTypes[resultType as ResultType].displayName

    // Generate PDF
    const pdfBuffer = await renderToBuffer(
      React.createElement(DarkTypeReportPdf, { report, displayName }) as any
    )

    // Return PDF as downloadable file
    return new Response(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="DarkType-${resultType}.pdf"`,
      },
    })
  } catch (error) {
    console.error('Download report error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

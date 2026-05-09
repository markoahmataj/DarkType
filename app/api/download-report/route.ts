import React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import { Stripe } from 'stripe'
import { renderToBuffer } from '@react-pdf/renderer'
import { DarkTypeReportPdf } from '@/components/pdf/DarkTypeReportPdf'
import { testRegistry } from '@/lib/test-registry'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId, resultType, testSlug = 'personality-test' } = body

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 })
    }

    const testConfig = testRegistry[testSlug]
    if (!testConfig || !resultType || !testConfig.validTypes.includes(resultType)) {
      return NextResponse.json({ error: 'Invalid test or result type' }, { status: 400 })
    }

    let session
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId)
    } catch {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 })
    }

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 403 })
    }

    const report = testConfig.getReport(resultType)
    const displayName = testConfig.getDisplayName(resultType)

    if (!report || !displayName) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 })
    }

    const pdfBuffer = await renderToBuffer(
      React.createElement(DarkTypeReportPdf, {
        report,
        displayName,
        testName: testConfig.testName,
      }) as any
    )

    const filename = `darktype-${testSlug}-${resultType}-report.pdf`

    return new Response(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Download report error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

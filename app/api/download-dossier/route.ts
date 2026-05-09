import { NextRequest, NextResponse } from 'next/server'
import { Stripe } from 'stripe'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const validTypes = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

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

    // Verify this is a dossier purchase
    if (session.metadata?.productType !== 'archetype_dossier_pdf') {
      return NextResponse.json({ error: 'Invalid product type' }, { status: 403 })
    }

    // Verify the result type matches
    if (session.metadata?.resultType !== resultType) {
      return NextResponse.json({ error: 'Result type mismatch' }, { status: 403 })
    }

    // Try to serve the PDF file
    const filePath = join(process.cwd(), 'public', 'reports', `${resultType}-dossier.pdf`)

    if (!existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Dossier PDF not yet available. Please check back soon.' },
        { status: 404 }
      )
    }

    const fileBuffer = readFileSync(filePath)

    return new Response(Buffer.from(fileBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="DarkType-${resultType}-dossier.pdf"`,
      },
    })
  } catch (error) {
    console.error('Download dossier error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

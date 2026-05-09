import { Stripe } from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const validTypes = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: 'Dossier products are not available yet.' }, { status: 503 })

  try {
    const body = await request.json()
    const { resultType } = body

    if (!resultType || !validTypes.includes(resultType)) {
      return NextResponse.json({ error: 'Invalid result type' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `DarkType Archetype Dossier — ${resultType.charAt(0).toUpperCase() + resultType.slice(1)}`,
            },
            unit_amount: 299,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/shop/reports/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/shop/reports/${resultType}`,
      metadata: {
        productType: 'archetype_dossier_pdf',
        resultType,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Dossier checkout error:', error)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}

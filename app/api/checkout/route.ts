import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const validTypes = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { resultType } = body

    if (!resultType || !validTypes.includes(resultType)) {
      return NextResponse.json({ error: 'Invalid result type' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'DarkType Full Personality Report',
            },
            unit_amount: 199,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/result?type=${resultType}`,
      metadata: {
        resultType,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}

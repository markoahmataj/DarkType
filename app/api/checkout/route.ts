import { Stripe } from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { testRegistry } from '@/lib/test-registry'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { resultType, testSlug = 'personality-test' } = body

    const testConfig = testRegistry[testSlug]
    if (!testConfig || !resultType || !testConfig.validTypes.includes(resultType)) {
      return NextResponse.json({ error: 'Invalid result type' }, { status: 400 })
    }

    const isPersonalityTest = testSlug === 'personality-test'
    const cancelUrl = isPersonalityTest
      ? `${process.env.NEXT_PUBLIC_APP_URL}/reports/${resultType}`
      : `${process.env.NEXT_PUBLIC_APP_URL}/reports/${testSlug}/${resultType}`

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'DarkType Full Psychological Report',
            },
            unit_amount: 99,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      metadata: {
        resultType,
        testSlug,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}

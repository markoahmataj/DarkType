import Link from 'next/link'
import { Disclaimer } from '@/components/Disclaimer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-16">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-black text-[#f3f3f3] mb-10">Privacy Policy</h1>

        <div className="space-y-8 text-[#8a8a8a] text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Introduction</h2>
            <p>
              DarkType is a quiz application designed for entertainment and self-reflection. We are committed to
              protecting your privacy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">No Account Required</h2>
            <p>
              DarkType does not require user registration or account creation. You can take the quiz and view your
              results without providing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Quiz Data</h2>
            <p>
              Your answers to the quiz questions are processed locally in your browser to calculate your result type.
              Quiz responses are not stored on our servers or transmitted beyond what is necessary to complete your
              purchase (if applicable).
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Payments</h2>
            <p>
              Payment processing is handled entirely by Stripe, a third-party payment processor. We do not store your
              payment information. All payment data is processed according to Stripe's privacy policy and PCI
              compliance standards.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Cookies and Tracking</h2>
            <p>
              We use minimal cookies and tracking. Your quiz progress is stored locally on your device, not on our
              servers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Third-Party Services</h2>
            <p>
              We use Stripe for payment processing. Please review their privacy policy for more information on how
              they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Data Security</h2>
            <p>
              We take reasonable measures to protect your information. However, no internet transmission is completely
              secure. Use DarkType at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{' '}
              <a href="mailto:support@darktype.test" className="text-[#e63946] hover:opacity-80">
                support@darktype.test
              </a>
            </p>
          </section>
        </div>

        <Disclaimer />

        <div className="mt-8">
          <Link href="/" className="text-[#555] text-sm hover:text-[#8a8a8a] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

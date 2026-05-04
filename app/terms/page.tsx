import Link from 'next/link'
import { Disclaimer } from '@/components/Disclaimer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Introduction</h2>
            <p>
              These Terms of Service govern your use of DarkType. By accessing or using DarkType, you agree to be
              bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Entertainment Only</h2>
            <p>
              DarkType is provided for entertainment and self-reflection purposes only. The quiz results are not a
              medical, psychological, political, or professional assessment. Do not use this quiz as a substitute for
              professional advice or diagnosis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Digital Product</h2>
            <p>
              The full personality report is a digital product. Upon successful payment, you gain instant access to
              your unlocked report. This is a one-time purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Payment Terms</h2>
            <p>
              All payments are processed through Stripe. By making a purchase, you agree to Stripe's payment terms and
              conditions. All sales are final unless otherwise stated in our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Refund Policy</h2>
            <p>
              Refunds for digital products are handled on a case-by-case basis. Due to the immediate delivery of
              digital content, refund requests must be made within 7 days of purchase. Contact support@darktype.test
              with your session ID and request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">User Responsibilities</h2>
            <p>
              You agree not to misuse DarkType, including but not limited to attempting to manipulate the quiz
              algorithm, reverse-engineer the code, or use automated tools to access the service without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Limitation of Liability</h2>
            <p>
              DarkType is provided "as is" without warranties of any kind. We are not liable for any damages resulting
              from your use of the quiz or reliance on its results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Your continued use of DarkType constitutes acceptance of updated terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:support@darktype.test" className="text-red-500 hover:text-red-400">
                support@darktype.test
              </a>
            </p>
          </section>
        </div>

        <Disclaimer />

        <div className="text-center mt-8">
          <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

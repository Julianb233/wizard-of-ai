import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | The Wizard of AI",
  description: "Read the Terms of Service for The Wizard of AI. Understand your rights and responsibilities when using our AI consulting and coaching services.",
  openGraph: {
    title: "Terms of Service | The Wizard of AI",
    description: "Read the Terms of Service for The Wizard of AI consulting and coaching services.",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A4D3C]">
      {/* Header */}
      <div className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#D4A84B] hover:text-[#E8C55A] transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-[#FDF8E8] uppercase tracking-wide mb-4">
            Terms of Service
          </h1>
          <p className="text-[#FDF8E8]/60 text-sm">
            Last updated: December 24, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto bg-[#0D6B4F]/30 rounded-2xl p-8 md:p-12 border border-[#D4A84B]/20">
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Agreement */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Agreement to Terms</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                Welcome to The Wizard of AI. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website at thewizardofai.com and all related services, including AI consulting, coaching, courses, and digital products (collectively, the &quot;Services&quot;).
              </p>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
            </section>

            {/* Service Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Description of Services</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                The Wizard of AI provides:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>AI strategy consulting for businesses</li>
                <li>One-on-one coaching and mentorship</li>
                <li>Online courses and educational content</li>
                <li>AI agent development and implementation</li>
                <li>Group coaching programs and workshops</li>
                <li>Digital products and resources</li>
                <li>Community access and networking opportunities</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">User Responsibilities</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                When using our Services, you agree to:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the Services only for lawful purposes</li>
                <li>Not share or resell access to paid content</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not engage in harassment or abusive behavior</li>
                <li>Not attempt to circumvent security measures</li>
              </ul>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                You are responsible for all activities that occur under your account.
              </p>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Payment and Billing</h2>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Pricing</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                All prices are displayed in US Dollars unless otherwise stated. We reserve the right to modify pricing at any time, but changes will not affect existing paid subscriptions until renewal.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Payment Processing</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                Payments are processed securely through our third-party payment providers (Stripe, PayPal). By making a purchase, you authorize us to charge your payment method for the total amount.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Subscriptions</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                For subscription-based services, your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date. You may cancel at any time through your account settings.
              </p>
            </section>

            {/* Refund Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Refund Policy</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                We want you to be satisfied with our Services. Our refund policy is as follows:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li><strong>Courses and Digital Products:</strong> 14-day money-back guarantee if you&apos;re not satisfied</li>
                <li><strong>Coaching Sessions:</strong> Cancellations with 48+ hours notice receive a full refund or rescheduling</li>
                <li><strong>Consulting Packages:</strong> Pro-rated refunds for unused sessions may be available</li>
                <li><strong>Live Events:</strong> Refunds available up to 7 days before the event</li>
              </ul>
              <p className="text-[#FDF8E8]/80 leading-relaxed mt-4">
                To request a refund, contact us at support@thewizardofai.com with your order details.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Our Content</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                All content on our website and in our Services—including text, graphics, logos, images, videos, course materials, and software—is the property of The Wizard of AI or our licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Limited License</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes. You may not:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our content for commercial purposes without a license</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Create derivative works based on our content</li>
                <li>Resell or redistribute access to our Services</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Your Content</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                You retain ownership of any content you submit to us. By submitting content, you grant us a non-exclusive, royalty-free license to use, display, and distribute that content in connection with our Services.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Disclaimers</h2>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">No Guaranteed Results</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                While we provide valuable insights, strategies, and tools, we cannot guarantee specific business outcomes. Your results will depend on various factors including your effort, implementation, and market conditions.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Educational Purpose</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                Our Services are educational in nature. They should not be considered legal, financial, or professional advice. Always consult with qualified professionals for specific guidance.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">&quot;As Is&quot; Provision</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                Our Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Limitation of Liability</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                To the maximum extent permitted by law, The Wizard of AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or unauthorized access</li>
                <li>Interruption of business</li>
                <li>Any other intangible losses</li>
              </ul>
              <p className="text-[#FDF8E8]/80 leading-relaxed mt-4">
                Our total liability for any claims arising from these Terms or your use of the Services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Indemnification</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                You agree to indemnify, defend, and hold harmless The Wizard of AI and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys&apos; fees) arising out of your use of the Services, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Informal Resolution</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                Before filing any formal dispute, you agree to contact us at legal@thewizardofai.com to attempt to resolve the dispute informally within 30 days.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Arbitration</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                Any disputes not resolved informally shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in [Your State], and the decision shall be final and binding.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Class Action Waiver</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                You agree to resolve disputes with us on an individual basis and waive any right to participate in class action lawsuits or class-wide arbitration.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Termination</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                We may terminate or suspend your access to our Services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>Your right to use the Services will cease immediately</li>
                <li>You must stop using any content obtained from our Services</li>
                <li>Any provisions that by their nature should survive will remain in effect</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Governing Law</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the courts located in the United States.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Changes to Terms</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Severability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Severability</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Contact Information</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-[#0A4D3C] rounded-xl p-6 border border-[#D4A84B]/30">
                <p className="text-[#FDF8E8] font-semibold">The Wizard of AI</p>
                <p className="text-[#FDF8E8]/70">Email: legal@thewizardofai.com</p>
                <p className="text-[#FDF8E8]/70">Website: thewizardofai.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

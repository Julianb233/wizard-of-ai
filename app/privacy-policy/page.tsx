import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | The Wizard of AI",
  description: "Learn how The Wizard of AI collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  openGraph: {
    title: "Privacy Policy | The Wizard of AI",
    description: "Learn how The Wizard of AI collects, uses, and protects your personal information.",
  },
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Introduction</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                The Wizard of AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thewizardofai.com, use our services, or engage with our AI consulting and coaching programs.
              </p>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                Please read this privacy policy carefully. By using our services, you consent to the data practices described in this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Personal Information</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide when you:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2 mb-4">
                <li>Fill out contact or consultation forms</li>
                <li>Subscribe to our newsletter or mailing list</li>
                <li>Purchase our products or services</li>
                <li>Register for webinars, courses, or events</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact us via email or social media</li>
              </ul>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                This information may include your name, email address, phone number, business name, job title, and payment information.
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and geographic location</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data and interaction patterns</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">How We Use Your Information</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Protect against fraudulent or unauthorized activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect and store information. Cookies are small data files stored on your device that help us improve your experience.
              </p>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                Types of cookies we use:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference cookies:</strong> Remember your settings and choices</li>
              </ul>
              <p className="text-[#FDF8E8]/80 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling certain cookies may limit your access to some features.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Third-Party Services</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                We may share your information with third-party service providers who assist us in:
              </p>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>Payment processing (Stripe, PayPal)</li>
                <li>Email marketing (Mailchimp, ConvertKit)</li>
                <li>Analytics (Google Analytics, Hotjar)</li>
                <li>Customer relationship management</li>
                <li>Web hosting and cloud services</li>
              </ul>
              <p className="text-[#FDF8E8]/80 leading-relaxed mt-4">
                These providers are contractually obligated to protect your information and use it only for the purposes we specify.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Data Security</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Your Rights</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">GDPR Rights (EU/EEA Residents)</h3>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2 mb-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#FDF8E8] mt-6 mb-3">CCPA Rights (California Residents)</h3>
              <ul className="list-disc list-inside text-[#FDF8E8]/80 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to deletion of personal information</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Data Retention</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When your data is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Children&apos;s Privacy</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">International Data Transfers</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Changes to This Policy</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-[#D4A84B] mb-4">Contact Us</h2>
              <p className="text-[#FDF8E8]/80 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#0A4D3C] rounded-xl p-6 border border-[#D4A84B]/30">
                <p className="text-[#FDF8E8] font-semibold">The Wizard of AI</p>
                <p className="text-[#FDF8E8]/70">Email: privacy@thewizardofai.com</p>
                <p className="text-[#FDF8E8]/70">Website: thewizardofai.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

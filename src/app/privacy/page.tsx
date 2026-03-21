import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Envico Supported Living",
  description: "Privacy policy for Envico Supported Living LTD — how we collect, use and protect your personal data under UK GDPR.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed">{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-10 bg-envico-navy text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-blue-200 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Section title="1. Who We Are">
            <p>
              <strong>Envico Supported Living LTD</strong> is the data controller for personal
              data collected through this website and our services. Our registered office is at
              59 Commonwealth Avenue, Hayes, Middlesex, UB3 2PN.
            </p>
            <p>
              For data protection enquiries, contact us at:{" "}
              <a href="mailto:info@envicosl.co.uk" className="text-envico-blue hover:underline">
                info@envicosl.co.uk
              </a>{" "}
              or call{" "}
              <a href="tel:02087979974" className="text-envico-blue hover:underline">
                020 8797 9974
              </a>
              .
            </p>
            <p>
              Envico Supported Living LTD is registered with the Information Commissioner&apos;s
              Office (ICO) as required under UK GDPR and the Data Protection Act 2018.
            </p>
          </Section>

          <Section title="2. What Personal Data We Collect">
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, date of birth and contact details (referral enquiries)</li>
              <li>Details of care and support needs, diagnoses and medical history (referrals)</li>
              <li>Employment information (job applications)</li>
              <li>Communication data (emails, contact form submissions)</li>
              <li>Technical data (IP address, browser type, cookies — see Cookie Policy)</li>
              <li>Portal login credentials (family portal users)</li>
            </ul>
            <p>
              We treat health and care-related information as special category data under UK GDPR
              Article 9 and apply additional safeguards accordingly.
            </p>
          </Section>

          <Section title="3. How and Why We Use Your Data">
            <p>We process personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processing referrals and enquiries about our care services</li>
              <li>Delivering care services and maintaining care records</li>
              <li>Communicating with families, carers and local authority commissioners</li>
              <li>Recruiting and employing staff</li>
              <li>Meeting our legal obligations (CQC, safeguarding, Health &amp; Safety)</li>
              <li>Improving our website and services</li>
            </ul>
            <p>
              Our lawful basis for processing is typically: <strong>legitimate interests</strong>,{" "}
              <strong>contract performance</strong>, <strong>legal obligation</strong>, or —
              for special category data — <strong>explicit consent</strong> or{" "}
              <strong>social care provision</strong> under Schedule 1 of the DPA 2018.
            </p>
          </Section>

          <Section title="4. How We Store and Protect Your Data">
            <p>
              Personal data is stored on secure, password-protected systems. We use
              industry-standard encryption for data in transit and at rest. Access is
              restricted to authorised personnel only.
            </p>
            <p>
              We retain personal data only for as long as necessary for the purpose it was
              collected, or as required by law. Care records are retained in line with
              NHS/social care retention guidelines (typically 8 years for adults).
            </p>
            <p>
              We do not sell, rent or share your personal data with third parties for marketing
              purposes.
            </p>
          </Section>

          <Section title="5. Your Rights Under UK GDPR">
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Right of access</strong> — request a copy of data we hold about you</li>
              <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
              <li><strong>Right to erasure</strong> — request deletion where data is no longer needed</li>
              <li><strong>Right to restrict processing</strong></li>
              <li><strong>Right to data portability</strong></li>
              <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
              <li><strong>Rights related to automated decision-making</strong></li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@envicosl.co.uk" className="text-envico-blue hover:underline">
                info@envicosl.co.uk
              </a>
              . We will respond within one calendar month.
            </p>
          </Section>

          <Section title="6. Complaints">
            <p>
              If you are unhappy with how we handle your personal data, you have the right to
              complain to the Information Commissioner&apos;s Office (ICO):
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website: ico.org.uk</li>
              <li>Helpline: 0303 123 1113</li>
            </ul>
          </Section>

          <Section title="7. Changes to This Policy">
            <p>
              We may update this privacy policy from time to time. The date at the top of this
              page indicates when it was last revised. Continued use of our website or services
              following any changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <div className="mt-8 text-sm text-gray-400">
            <Link href="/cookies" className="text-envico-blue hover:underline mr-4">Cookie Policy</Link>
            <Link href="/complaints" className="text-envico-blue hover:underline">Complaints Policy</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accessibility Statement | Envico Supported Living",
  description: "Accessibility statement for envicosl.co.uk — our commitment to web accessibility under PSBAR 2018.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed">{children}</div>
  </div>
);

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-10 bg-envico-navy text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Accessibility Statement</h1>
          <p className="text-blue-200 text-sm">For envicosl.co.uk | Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Section title="Our Commitment">
            <p>
              Envico Supported Living is committed to making its website accessible, in
              accordance with the Public Sector Bodies (Websites and Mobile Applications)
              (No. 2) Accessibility Regulations 2018 (PSBAR 2018).
            </p>
            <p>
              This accessibility statement applies to{" "}
              <a href="https://envico.maxpromo.digital" className="text-envico-blue hover:underline">
                envico.maxpromo.digital
              </a>
              .
            </p>
          </Section>

          <Section title="Compliance Status">
            <p>
              This website is <strong>partially compliant</strong> with the Web Content
              Accessibility Guidelines (WCAG) version 2.1 AA standard, due to the
              non-compliances listed below.
            </p>
          </Section>

          <Section title="Non-Accessible Content">
            <p>The following content is not fully accessible at this time:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Some images may lack descriptive alt text (being addressed)</li>
              <li>Some PDF documents may not be fully accessible to screen readers</li>
              <li>Video content does not currently include captions</li>
            </ul>
          </Section>

          <Section title="What We Are Doing">
            <p>We are working to improve accessibility across the site, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Adding AI-generated descriptive alt text to all gallery images</li>
              <li>Ensuring all interactive elements have proper ARIA labels</li>
              <li>Providing an Easy Read version of key content (<a href="/easy-read" className="text-envico-blue hover:underline">/easy-read</a>)</li>
              <li>Providing an Accessibility Toolbar (font size, high contrast)</li>
              <li>Ensuring colour contrast meets WCAG AA requirements</li>
            </ul>
          </Section>

          <Section title="Feedback and Contact">
            <p>
              If you experience any accessibility barriers on this website, or if you
              need content in a different format, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email: <a href="mailto:info@envicosl.co.uk" className="text-envico-blue hover:underline">info@envicosl.co.uk</a></li>
              <li>Phone: <a href="tel:02087979974" className="text-envico-blue hover:underline">020 8797 9974</a></li>
            </ul>
            <p>We aim to respond to accessibility feedback within 5 working days.</p>
          </Section>

          <Section title="Enforcement Procedure">
            <p>
              The Equality and Human Rights Commission (EHRC) is responsible for enforcing
              the accessibility regulations. If you are not happy with how we respond to
              your complaint, contact the{" "}
              <a
                href="https://www.equalityadvisoryservice.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-envico-blue hover:underline"
              >
                Equality Advisory and Support Service (EASS)
              </a>
              .
            </p>
          </Section>

          <Section title="Technical Information">
            <p>
              Envico Supported Living is committed to making this website accessible.
              This website uses Next.js 16, Tailwind CSS, and is served over HTTPS.
              It is designed to be compatible with major screen readers including
              NVDA, JAWS and VoiceOver.
            </p>
          </Section>

          <Section title="Preparation of This Statement">
            <p>
              This statement was prepared in March 2026 based on a self-assessment
              conducted by Envico Supported Living. It will be reviewed annually.
            </p>
          </Section>
        </div>
      </section>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Envico Supported Living",
  description: "Cookie policy for envicosl.co.uk — what cookies we use and how to manage them.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed">{children}</div>
  </div>
);

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-10 bg-envico-navy text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-blue-200 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Section title="What Are Cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a website.
              They are widely used to make websites work more efficiently and to provide
              information to website owners.
            </p>
          </Section>

          <Section title="Cookies We Use">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cookie</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200 font-mono text-xs">envico_family_token</td>
                    <td className="p-3 border border-gray-200">Essential</td>
                    <td className="p-3 border border-gray-200">Family portal authentication (localStorage)</td>
                    <td className="p-3 border border-gray-200">Session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 font-mono text-xs">envico_font_size</td>
                    <td className="p-3 border border-gray-200">Functional</td>
                    <td className="p-3 border border-gray-200">Remembers your font size preference (localStorage)</td>
                    <td className="p-3 border border-gray-200">Persistent</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-mono text-xs">envico_high_contrast</td>
                    <td className="p-3 border border-gray-200">Functional</td>
                    <td className="p-3 border border-gray-200">Remembers your high contrast preference (localStorage)</td>
                    <td className="p-3 border border-gray-200">Persistent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 font-mono text-xs">envico_chat_opened</td>
                    <td className="p-3 border border-gray-200">Functional</td>
                    <td className="p-3 border border-gray-200">Prevents auto-opening chat widget on repeat visits (sessionStorage)</td>
                    <td className="p-3 border border-gray-200">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Note: We currently use localStorage and sessionStorage rather than HTTP cookies
              for preference storage. These are covered by similar rules under PECR.
            </p>
          </Section>

          <Section title="Essential Cookies">
            <p>
              Essential cookies are necessary for the website to function. They enable core
              features such as security, authentication and accessibility preferences. You
              cannot opt out of essential cookies.
            </p>
          </Section>

          <Section title="Functional Cookies">
            <p>
              Functional cookies remember your preferences to improve your experience. We use
              these to remember your font size and high contrast settings between visits.
            </p>
          </Section>

          <Section title="Analytics Cookies">
            <p>
              We do not currently use third-party analytics cookies (such as Google Analytics)
              on this website. If this changes, we will update this policy and request your
              consent where required.
            </p>
          </Section>

          <Section title="How to Manage Cookies">
            <p>
              You can control and delete cookies through your browser settings. Please note
              that disabling cookies may affect the functionality of this website.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other
                site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions
              </li>
            </ul>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this cookie policy as our use of cookies changes. The date at the
              top of this page indicates the last update.
            </p>
          </Section>

          <div className="mt-8 text-sm text-gray-400">
            <Link href="/privacy" className="text-envico-blue hover:underline mr-4">Privacy Policy</Link>
            <Link href="/complaints" className="text-envico-blue hover:underline">Complaints Policy</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

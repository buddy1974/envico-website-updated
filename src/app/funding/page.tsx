import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Funding Your Care | Envico Supported Living",
  description:
    "Understand your funding options for supported living and domiciliary care. Local authority, NHS Continuing Healthcare and self-funded pathways explained.",
};

const paths = [
  {
    id: "local-authority",
    color: "bg-envico-green",
    title: "Local Authority Funding",
    subtitle: "Council-funded care and support",
    description:
      "Most supported living placements are funded by the local authority (council) following a care and support assessment. If you have eligible care needs under the Care Act 2014, the council may fund all or part of your support.",
    steps: [
      "Request a Care and Support Assessment from your local council",
      "Assessment carried out by a social worker",
      "Council determines eligible needs and produces a Support Plan",
      "A Personal Budget is allocated based on assessed needs",
      "You can choose to manage your budget via a Direct Payment",
      "Envico is commissioned as your support provider",
    ],
    tip: "You can request a care assessment even if you are already receiving support elsewhere. Call your local council adult social care team to get started.",
  },
  {
    id: "nhs-chc",
    color: "bg-envico-blue",
    title: "NHS Continuing Healthcare (CHC)",
    subtitle: "Fully funded NHS care for complex health needs",
    description:
      "NHS Continuing Healthcare (CHC) is a package of care arranged and funded entirely by the NHS. It is available to adults who have complex health needs arising from disability, injury or illness that go beyond what a local authority can meet.",
    steps: [
      "CHC eligibility screening completed by NHS assessor",
      "Multi-disciplinary team assessment (MDT) carried out",
      "Decision Support Tool (DST) used to assess eligibility",
      "Eligibility determined by Integrated Care Board (ICB)",
      "If eligible, NHS arranges and funds full care package",
      "Envico works directly with the ICB as your provider",
    ],
    tip: "CHC is often under-claimed. If you believe someone has primary health needs, request a CHC screening assessment from the hospital or GP.",
  },
  {
    id: "self-funded",
    color: "bg-envico-gold",
    title: "Self-Funded",
    subtitle: "Paying privately for your care",
    description:
      "If you do not qualify for local authority or NHS funding, or you prefer to arrange your own care independently, you can self-fund your support package with Envico. We offer transparent, competitive rates and the same high standard of care.",
    steps: [
      "Contact Envico directly to discuss your needs",
      "We carry out an initial assessment and develop a support plan",
      "We provide a detailed quotation based on your support hours",
      "A service agreement is signed",
      "Support commences on an agreed date",
      "Regular reviews ensure the package continues to meet your needs",
    ],
    tip: "Even self-funders are entitled to a care assessment from the local authority — which may identify entitlements you were unaware of.",
  },
];

const faqs = [
  {
    q: "Can I switch from self-funded to local authority funded?",
    a: "Yes. If your financial circumstances change or your care needs increase, you can request a care and support assessment from your local council at any time. Envico can support you through this process.",
  },
  {
    q: "What is a Direct Payment?",
    a: "A Direct Payment is when the local authority pays your care budget directly to you (or a nominated person) instead of arranging services on your behalf. This gives you more choice and control over who provides your care.",
  },
  {
    q: "Does Envico help with the funding process?",
    a: "Yes. Our team has extensive experience working with local authorities and NHS Integrated Care Boards. We can support you in navigating the process, attending assessments and developing your support plan.",
  },
  {
    q: "Can housing benefit help cover supported living costs?",
    a: "In most cases, housing benefit is available to eligible residents in supported living to cover the accommodation element of costs. Your support worker can help you apply.",
  },
  {
    q: "What is the difference between supported living and residential care?",
    a: "In supported living, individuals are tenants with their own tenancy agreement and receive support separately. This maintains greater independence and rights compared to residential care. Funding arrangements differ significantly between the two.",
  },
];

export default function FundingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-envico-blue text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Funding Your Care
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Understanding how to fund supported living or domiciliary care can
            be complex. We have broken down the three main pathways to help you
            find the right route.
          </p>
        </div>
      </section>

      {/* Funding paths */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {paths.map(({ id, color, title, subtitle, description, steps, tip }, idx) => (
            <div key={id} id={id} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Number + color block */}
              <div
                className={`lg:col-span-1 ${color} rounded-xl p-6 text-white flex flex-col items-center justify-center text-center`}
              >
                <span className="text-5xl font-black opacity-30">{idx + 1}</span>
                <p className="font-bold text-lg mt-2">{title.split(" ")[0]}</p>
                <p className="text-sm opacity-80">{title.split(" ").slice(1).join(" ")}</p>
              </div>

              {/* Content */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
                <p className="text-envico-green font-medium text-sm mb-4">{subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

                <h4 className="font-semibold text-gray-800 mb-3">
                  Step-by-step process:
                </h4>
                <ol className="space-y-2 mb-6">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className={`flex-shrink-0 w-6 h-6 ${color} text-white rounded-full flex items-center justify-center text-xs font-bold`}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                  <span className="text-envico-gold font-bold text-lg flex-shrink-0">💡</span>
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white border border-gray-100 rounded-xl shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 list-none">
                  {q}
                  <ChevronDown
                    size={18}
                    className="text-envico-green group-open:rotate-180 transition-transform flex-shrink-0"
                  />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Useful links */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="font-semibold text-gray-800 mb-5 text-center">
            Useful External Resources
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "NHS CHC Guide", href: "https://www.nhs.uk/conditions/social-care-and-support-guide/money-work-and-benefits/nhs-continuing-healthcare/" },
              { label: "Care Act 2014", href: "https://www.legislation.gov.uk/ukpga/2014/23/contents" },
              { label: "Direct Payments — Gov.uk", href: "https://www.gov.uk/apply-direct-payments" },
              { label: "Housing Benefit", href: "https://www.gov.uk/housing-benefit" },
              { label: "Personal Independence Payment", href: "https://www.gov.uk/pip" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-envico-blue border border-envico-blue px-4 py-2 rounded-full hover:bg-envico-blue hover:text-white transition-colors"
              >
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-envico-blue text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">
            Need Help Navigating Funding?
          </h2>
          <p className="text-blue-200 mb-8">
            Our experienced team can guide you through the assessment and
            funding process. Contact us for a free, no-obligation discussion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#referral"
              className="bg-envico-gold text-white font-semibold px-8 py-4 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Make a Referral
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-envico-blue transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

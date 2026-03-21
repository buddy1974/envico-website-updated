import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources | Envico Supported Living",
  description:
    "Useful resources for families, carers and professionals. Guidance on supported living, funding, the Care Act, CQC and more.",
};

const categories = [
  {
    title: "Understanding Supported Living",
    color: "green",
    resources: [
      {
        title: "What is Supported Living?",
        description:
          "An overview of supported living arrangements, how they differ from residential care, and the rights of individuals.",
        type: "Guide",
        href: "https://www.mencap.org.uk/advice-and-support/housing/supported-living",
      },
      {
        title: "The Care Act 2014 — Your Rights",
        description:
          "Understanding your rights to a care and support assessment from your local authority under the Care Act 2014.",
        type: "Legislation",
        href: "https://www.legislation.gov.uk/ukpga/2014/23/contents",
      },
      {
        title: "Right Support, Right Care, Right Culture",
        description:
          "NHS England's framework guiding how care and support should be delivered for people with learning disabilities and autism.",
        type: "Framework",
        href: "https://www.england.nhs.uk/publication/right-support-right-care-right-culture/",
      },
    ],
  },
  {
    title: "Funding Your Care",
    color: "blue",
    resources: [
      {
        title: "NHS Continuing Healthcare (CHC)",
        description:
          "Find out if you or your loved one qualifies for fully funded NHS care and how to apply.",
        type: "Guide",
        href: "https://www.nhs.uk/conditions/social-care-and-support-guide/money-work-and-benefits/nhs-continuing-healthcare/",
      },
      {
        title: "Local Authority Funding & Direct Payments",
        description:
          "How councils fund supported living and how to use a Direct Payment to manage your own care budget.",
        type: "Guide",
        href: "https://www.gov.uk/social-care-funding",
      },
      {
        title: "Personal Independence Payment (PIP)",
        description:
          "A benefit to help with the extra costs of living with a long-term health condition or disability.",
        type: "Benefit",
        href: "https://www.gov.uk/pip",
      },
      {
        title: "Housing Benefit for Supported Living",
        description:
          "How eligible residents in supported living can claim housing benefit towards their accommodation costs.",
        type: "Benefit",
        href: "https://www.gov.uk/housing-benefit",
      },
    ],
  },
  {
    title: "For Families & Carers",
    color: "purple",
    resources: [
      {
        title: "Carers UK — Support & Advice",
        description:
          "Information and support for unpaid carers, including your rights, benefits and wellbeing.",
        type: "Support",
        href: "https://www.carersuk.org/",
      },
      {
        title: "Mencap — Learning Disability Support",
        description:
          "Practical information and advocacy for people with learning disabilities and their families.",
        type: "Charity",
        href: "https://www.mencap.org.uk/",
      },
      {
        title: "National Autistic Society",
        description:
          "Resources, support and guidance for autistic people and their families.",
        type: "Charity",
        href: "https://www.autism.org.uk/",
      },
      {
        title: "Making a Transition to Supported Living",
        description:
          "A step-by-step guide to moving from the family home or residential care into supported living.",
        type: "Guide",
        href: "https://www.mencap.org.uk/advice-and-support/housing/moving-supported-living",
      },
    ],
  },
  {
    title: "Regulation & Quality",
    color: "orange",
    resources: [
      {
        title: "CQC — Check Any Care Provider",
        description:
          "Use the CQC website to check the inspection reports and ratings of any registered care provider in England.",
        type: "Regulator",
        href: "https://www.cqc.org.uk/",
      },
      {
        title: "Envico CQC Registration",
        description:
          "View Envico Supported Living's registration and inspection details on the CQC website.",
        type: "Regulator",
        href: "https://www.cqc.org.uk/provider/1-101648558",
      },
      {
        title: "Oliver McGowan Mandatory Training",
        description:
          "All Envico staff complete Oliver McGowan training on learning disabilities and autism — learn more about this national programme.",
        type: "Training",
        href: "https://www.hee.nhs.uk/our-work/learning-disability/oliver-mcgowan-mandatory-training-learning-disability-autism",
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  orange: "bg-orange-100 text-orange-800",
};

const headerColorMap: Record<string, string> = {
  green: "border-green-500",
  blue: "border-blue-500",
  purple: "border-purple-500",
  orange: "border-orange-500",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Resources & Guidance
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Helpful information for individuals, families and professionals
            navigating supported living, care funding and disability services.
          </p>
        </div>
      </section>

      {/* Resource categories */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2
                className={`text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-4 ${headerColorMap[cat.color]}`}
              >
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.resources.map((res) => (
                  <a
                    key={res.title}
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-gray-200 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                        {res.title}
                      </h3>
                      <span
                        className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${colorMap[cat.color]}`}
                      >
                        {res.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{res.description}</p>
                    <p className="text-xs text-green-600 mt-3 font-medium group-hover:underline">
                      Visit resource →
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Navigating Your Options?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is happy to guide you through the referral and funding
            process. Get in touch and we will help find the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#referral"
              className="bg-green-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-green-800 transition-colors"
            >
              Make a Referral
            </Link>
            <Link
              href="/contact"
              className="border-2 border-green-700 text-green-700 font-semibold px-8 py-4 rounded-md hover:bg-green-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

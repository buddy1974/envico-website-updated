import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Envico Supported Living",
  description:
    "Join the Envico team. We are looking for passionate care support workers, team leaders and managers to deliver person-centred care in Hayes, Middlesex.",
};

const roles = [
  {
    title: "Support Worker",
    type: "Full-time / Part-time",
    location: "Bishops House, Hayes, UB3 2TE",
    salary: "£12.21 – £13.50 per hour",
    description:
      "Support adults with learning disabilities and autism in their daily lives at our supported living property. You will assist with personal care, community activities, medication and life skills development.",
    requirements: [
      "No experience required — full training provided",
      "Compassionate and patient approach",
      "Ability to work shifts including nights and weekends",
      "Enhanced DBS check required (we cover the cost)",
    ],
  },
  {
    title: "Senior Support Worker",
    type: "Full-time",
    location: "Bishops House, Hayes, UB3 2TE",
    salary: "£13.50 – £14.50 per hour",
    description:
      "Lead a shift and provide guidance to junior staff while delivering direct support to residents. Ideal for experienced support workers ready to take the next step.",
    requirements: [
      "Minimum 1 year in a care or support role",
      "NVQ Level 3 in Health & Social Care (desirable)",
      "Strong communication and leadership skills",
      "Enhanced DBS check required",
    ],
  },
  {
    title: "Team Leader",
    type: "Full-time",
    location: "Hayes, Middlesex",
    salary: "£15.00 – £17.00 per hour",
    description:
      "Oversee day-to-day operations at one of our services, manage a team of support workers and ensure high-quality, CQC-compliant care is delivered consistently.",
    requirements: [
      "Minimum 2 years in a supervisory care role",
      "NVQ Level 3 or above in Health & Social Care",
      "Experience with care planning and risk assessments",
      "Full UK driving licence desirable",
    ],
  },
  {
    title: "Domiciliary Care Worker",
    type: "Part-time / Flexible",
    location: "Greater London",
    salary: "£12.21 – £13.00 per hour + mileage",
    description:
      "Deliver person-centred care visits to individuals in their own homes across Greater London. Flexible hours to suit your schedule.",
    requirements: [
      "Previous care experience preferred",
      "Full UK driving licence and own vehicle required",
      "Caring, reliable and punctual",
      "Enhanced DBS check required",
    ],
  },
];

const benefits = [
  { icon: "💷", label: "Competitive pay rates" },
  { icon: "📚", label: "Full induction & paid training" },
  { icon: "🎓", label: "NVQ / QCF funding support" },
  { icon: "🔒", label: "DBS check paid by us" },
  { icon: "🏥", label: "Employee Assistance Programme" },
  { icon: "📅", label: "Flexible shift patterns" },
  { icon: "📈", label: "Clear career progression" },
  { icon: "🤝", label: "Supportive team culture" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 bg-green-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Build a Career That Matters
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
            Join the Envico team and make a real difference in the lives of
            adults with learning disabilities, autism and complex needs in Hayes
            and Greater London.
          </p>
          <a
            href="#roles"
            className="inline-block bg-white text-green-800 font-semibold px-8 py-4 rounded-md hover:bg-green-50 transition-colors"
          >
            View Open Roles
          </a>
        </div>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src="/images/staffing.png"
            alt="Envico care staff"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-green-900/60" />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-2">{b.icon}</div>
                <p className="text-sm font-medium text-gray-700">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="roles" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Current Vacancies
          </h2>
          <p className="text-gray-500 text-center mb-12">
            All roles include full training. We welcome applications from people
            new to care.
          </p>
          <div className="space-y-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs bg-green-100 text-green-800 font-medium px-2.5 py-1 rounded-full">
                        {role.type}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 font-medium px-2.5 py-1 rounded-full">
                        📍 {role.location}
                      </span>
                      <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-full">
                        💷 {role.salary}
                      </span>
                    </div>
                  </div>
                  <a
                    href="mailto:info@envicosl.co.uk?subject=Job Application"
                    className="flex-shrink-0 bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-green-800 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                <ul className="space-y-1">
                  {role.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-gray-600 mb-6">
            We are always looking for passionate people. Send us your CV and a
            short cover letter and we will be in touch when a suitable vacancy
            arises.
          </p>
          <a
            href="mailto:info@envicosl.co.uk?subject=Speculative Application"
            className="inline-block bg-green-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-green-800 transition-colors"
          >
            Send Speculative Application
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

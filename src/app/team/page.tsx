import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meet the Team | Envico Supported Living",
  description: "Meet the experienced leadership team at Envico Supported Living — advanced social workers, AMHP, BIA and specialist support staff in Hayes, Middlesex.",
};

const teamMembers = [
  {
    initial: "D",
    color: "bg-envico-blue",
    role: "Director / Registered Manager",
    subtitle: "Advanced Social Worker · AMHP · Best Interests Assessor",
    bio: "Our Director is an Advanced Social Worker with extensive experience across adult social care settings, including specialist expertise in dual diagnosis — the coexistence of severe and enduring mental disorder alongside drug and/or alcohol dependency. They hold statutory qualifications as an Approved Mental Health Professional (AMHP) and Best Interests Assessor (BIA), and are also a Practice Educator and Motivational Interviewer. They provide strategic and clinical leadership across all Envico services.",
    credentials: [
      "Approved Mental Health Professional (AMHP)",
      "Best Interests Assessor (BIA)",
      "Practice Educator",
      "Motivational Interviewer",
      "Dual diagnosis specialist",
      "Advanced Social Work Practitioner",
    ],
  },
  {
    initial: "D",
    color: "bg-envico-green",
    role: "Deputy Manager",
    subtitle: "Supported Living Specialist · Mental Health & Learning Disabilities",
    bio: "Our Deputy Manager brings years of experience in supported living accommodation, specialising in mental disorders and learning disabilities. They oversee day-to-day operations and staff development at Bishops House, ensuring CQC-compliant, person-centred care is delivered consistently. They work closely with residents, families and commissioners to ensure the highest quality of support.",
    credentials: [
      "Specialist in mental disorders & learning disabilities",
      "Years of supported living management experience",
      "CQC compliance lead",
      "Oliver McGowan mandatory training",
    ],
  },
  {
    initial: "T",
    color: "bg-envico-navy",
    role: "Team Leader",
    subtitle: "Learning Disabilities · Behaviour That Challenges",
    bio: "Our Team Leader has years of frontline experience supporting people with learning disabilities, including individuals who present with behaviour that challenges. They provide day-to-day leadership on shift, mentoring junior staff and ensuring that each resident's support plan is followed with consistency and care.",
    credentials: [
      "Experienced with behaviour that challenges",
      "Oliver McGowan mandatory training",
      "Positive Behaviour Support (PBS)",
      "Enhanced DBS checked",
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-12 bg-envico-navy text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-envico-gold mb-4 inline-block">
            Our People
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Envico is led and staffed by experienced, qualified health and social care
            professionals committed to delivering the best possible outcomes for every
            person we support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {teamMembers.map((m) => (
            <div
              key={m.role}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className={`${m.color} px-8 py-4 flex items-center gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{m.initial}</span>
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">{m.role}</h2>
                  <p className="text-white/80 text-sm">{m.subtitle}</p>
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed">{m.bio}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Qualifications & Experience</h3>
                  <ul className="space-y-2">
                    {m.credentials.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-gray-500">
                        <CheckCircle size={13} className="text-envico-green flex-shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support workers */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Support Workers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our support workers are the heart of Envico. Carefully recruited for
                their compassion, reliability and commitment to person-centred care,
                every member of our team undergoes a comprehensive induction and
                ongoing training programme.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                All staff hold an enhanced DBS check, complete Oliver McGowan mandatory
                training, and are supported through regular supervision and professional
                development.
              </p>
              <ul className="space-y-2">
                {[
                  "Enhanced DBS checked",
                  "Oliver McGowan mandatory training",
                  "First aid trained",
                  "Safeguarding adults trained",
                  "Medication administration trained",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-envico-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-envico-navy rounded-xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-3">Join Our Team</h3>
              <p className="text-blue-200 text-sm mb-6">
                We are always looking for passionate, caring people to join Envico.
                No experience required — full training provided.
              </p>
              <Link
                href="/careers"
                className="inline-block bg-envico-gold text-white font-bold px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors"
              >
                View Open Roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

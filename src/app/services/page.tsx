import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brain, Infinity, Zap, Activity, Heart, Home, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Care Services | Envico Supported Living",
  description:
    "Envico provides specialist supported living and domiciliary care for adults with learning disabilities, autism, ADHD, acquired brain injury, mental health needs and more.",
};

const services = [
  {
    id: "learning-disabilities",
    Icon: Brain,
    color: "bg-envico-green",
    title: "Learning Disabilities",
    image: "/images/learning-disability.png",
    tagline: "Tailored support promoting independence and inclusion",
    description:
      "We provide person-centred supported living and community-based support for adults with mild to profound learning disabilities. Our skilled team works closely with individuals, families and local authorities to develop bespoke support plans that promote independence, choice and quality of life.",
    provides: [
      "Supported living at Bishops House, Hayes",
      "Personal care and daily living support",
      "Community access and social activities",
      "Health appointments and medication management",
      "Life skills development",
      "Employment and volunteering support",
    ],
    whoFor: "Adults aged 18+ with a diagnosed learning disability",
    howToAccess: "Local authority referral, NHS Continuing Healthcare or self-funded",
  },
  {
    id: "autism",
    Icon: Infinity,
    color: "bg-envico-blue",
    title: "Autism Support",
    image: "/images/autism-suppport.png",
    tagline: "Structured, sensory-aware environments and consistent routines",
    description:
      "Our autism-specialist staff create calm, predictable environments tailored to the sensory and communication needs of each autistic adult. We follow low-arousal approaches and work with individuals to understand their preferences and reduce anxiety.",
    provides: [
      "Sensory-aware living environments",
      "Consistent routines and visual supports",
      "Specialist autism training for all staff",
      "Community integration at the individual's pace",
      "Communication support (AAC, PECS, Makaton)",
      "Coordination with speech and language therapy",
    ],
    whoFor: "Autistic adults, including those with co-occurring learning disabilities or ADHD",
    howToAccess: "Local authority referral, NHS CHC or self-funded",
  },
  {
    id: "adhd",
    Icon: Zap,
    color: "bg-envico-gold",
    title: "ADHD Support",
    image: null,
    tagline: "Focused strategies to manage daily living and build life skills",
    description:
      "We support adults living with ADHD to develop strategies for managing daily life, building structure and achieving their personal goals. Our staff are trained to understand the challenges of ADHD and provide consistent, patient and structured support.",
    provides: [
      "Structured daily routines and prompting",
      "Medication management support",
      "Goal-setting and motivation coaching",
      "Financial management support",
      "Employment and education support",
      "Liaison with ADHD clinics and psychiatry",
    ],
    whoFor: "Adults with a diagnosed ADHD, with or without co-occurring conditions",
    howToAccess: "Local authority referral or self-funded",
  },
  {
    id: "brain-injury",
    Icon: Activity,
    color: "bg-red-600",
    title: "Acquired Brain Injury",
    image: null,
    tagline: "Rehabilitation-focused support for recovery and independence",
    description:
      "Acquired brain injury (ABI) can result from stroke, trauma or illness. Our team provides structured, rehabilitation-focused support designed to maximise recovery, restore independence and improve quality of life.",
    provides: [
      "Rehabilitation goal planning in coordination with NHS teams",
      "Cognitive and memory support strategies",
      "Personal care and daily living assistance",
      "Physiotherapy and occupational therapy liaison",
      "Community reintegration programmes",
      "Family and carer support",
    ],
    whoFor: "Adults who have experienced a stroke, traumatic brain injury or other ABI",
    howToAccess: "NHS Continuing Healthcare, local authority funding or self-funded",
  },
  {
    id: "mental-health",
    Icon: Heart,
    color: "bg-purple-600",
    title: "Mental Health",
    image: null,
    tagline: "Recovery-oriented support for complex mental health needs",
    description:
      "We deliver compassionate, recovery-oriented support for adults with complex mental health needs, including those transitioning from inpatient care or acute services. Our approach centres on psychological safety, therapeutic relationships and building resilience.",
    provides: [
      "Recovery-focused support planning",
      "Crisis prevention and relapse planning",
      "Medication compliance and monitoring",
      "Liaison with community mental health teams",
      "Peer support and social inclusion",
      "Employment and education support",
    ],
    whoFor: "Adults with serious mental illness, including those with dual diagnosis",
    howToAccess: "Community mental health team referral or local authority",
  },
  {
    id: "domiciliary-care",
    Icon: Home,
    color: "bg-envico-green",
    title: "Domiciliary Care",
    image: "/images/domiciliary-care.png",
    tagline: "Flexible in-home care across Greater London",
    description:
      "Our domiciliary care service delivers flexible, responsive care visits to individuals living in their own homes across Greater London. Whether you need support for a few hours a week or multiple daily visits, our trained carers provide consistent, dignified care.",
    provides: [
      "Personal care (washing, dressing, toileting)",
      "Medication administration",
      "Meal preparation and nutrition support",
      "Household tasks and domestic support",
      "Community access and social support",
      "Night sits and complex care",
    ],
    whoFor: "Adults of all ages requiring support to remain in their own home",
    howToAccess: "Local authority direct payment, NHS CHC or self-funded",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-envico-blue text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Our Care Services
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Specialist, person-centred care and support for adults with a range
            of needs — delivered by trained, compassionate professionals in
            Hayes and Greater London.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {services.map(({ id, Icon, color, title, image, tagline, description, provides, whoFor, howToAccess }, idx) => (
            <div
              key={id}
              id={id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image / icon block */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                {image ? (
                  <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 ${color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                ) : (
                  <div className={`h-72 rounded-xl ${color} flex items-center justify-center shadow-lg`}>
                    <Icon size={80} className="text-white/30" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`inline-flex items-center gap-2 ${color} text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4`}>
                  <Icon size={13} />
                  {title}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-envico-green font-medium text-sm mb-4">{tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>

                <h4 className="font-semibold text-gray-800 mb-3 text-sm">What we provide:</h4>
                <ul className="space-y-1.5 mb-5">
                  {provides.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-envico-green flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2 mb-5">
                  <p><span className="font-semibold text-gray-800">Who it&apos;s for:</span> <span className="text-gray-600">{whoFor}</span></p>
                  <p><span className="font-semibold text-gray-800">How to access:</span> <span className="text-gray-600">{howToAccess}</span></p>
                </div>

                <Link
                  href="/#referral"
                  className="inline-block bg-envico-green text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-envico-green-dark transition-colors"
                >
                  Make a Referral
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-envico-green-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure Which Service Is Right?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is happy to talk through your situation and help identify
            the most appropriate support. Contact us for a no-obligation
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#referral"
              className="bg-envico-green text-white font-semibold px-8 py-4 rounded-md hover:bg-envico-green-dark transition-colors"
            >
              Make a Referral
            </Link>
            <Link
              href="/contact"
              className="border-2 border-envico-green text-envico-green font-semibold px-8 py-4 rounded-md hover:bg-envico-green hover:text-white transition-colors"
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

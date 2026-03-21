export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "oliver-mcgowan-mandatory-training",
    title: "Oliver McGowan Mandatory Training — What It Means for Envico",
    date: "March 2026",
    excerpt:
      "All Envico staff have now completed the Oliver McGowan Mandatory Training programme — a significant milestone for our organisation and the people we support.",
    content: [
      "The Oliver McGowan Mandatory Training on Learning Disability and Autism is a UK Government initiative named after Oliver McGowan, a young man with a learning disability and autism who died in 2016 after being given medication that was not appropriate for him. The training is designed to give health and social care staff the skills, knowledge and confidence to provide the best support to autistic people and people with a learning disability.",
      "At Envico Supported Living, we are proud to confirm that all staff across our supported living and domiciliary care services have completed both Tier 1 (e-learning) and Tier 2 (face-to-face) training. This means every member of our team — from support workers to management — now has a consistent, evidence-based understanding of the needs of the people we support.",
      "For families and commissioners, this represents a meaningful assurance of quality. Oliver McGowan training is now a CQC inspection focus area, and Envico's full compliance reflects our commitment to delivering care that is not only compassionate but also clinically informed and up to date with national standards.",
    ],
  },
  {
    slug: "cqc-single-assessment-framework",
    title: "CQC Single Assessment Framework — How We Prepare",
    date: "February 2026",
    excerpt:
      "The Care Quality Commission has introduced a new Single Assessment Framework, changing the way providers are inspected. We explain what this means for Envico.",
    content: [
      "The Care Quality Commission's Single Assessment Framework (SAF) replaced the previous inspection regime in 2023 and is now fully embedded across adult social care. Rather than the traditional report-based model, the SAF uses a continuous evidence-gathering approach — meaning CQC collects intelligence about services on an ongoing basis, not just at the point of inspection.",
      "At Envico, we have responded to the SAF by strengthening our quality assurance processes. We now maintain rolling self-assessments mapped to the CQC's five quality statements (Safe, Effective, Caring, Responsive and Well-led), and our management team conducts monthly audits of care plans, medication records and incident documentation.",
      "Our Director — an Approved Mental Health Professional and Best Interests Assessor — leads our compliance programme personally. We welcome the SAF approach because it aligns with our own values: continuous improvement, transparency with families and regulators, and an unwavering focus on the outcomes that matter most to the people we support.",
    ],
  },
  {
    slug: "welcome-bishops-house-2026",
    title: "Welcome to Bishops House — Our Vision for 2026",
    date: "January 2026",
    excerpt:
      "As we enter 2026, we reflect on the growth of Bishops House and share our vision for the year ahead — including expanded services and new community partnerships.",
    content: [
      "Bishops House has been home to adults with learning disabilities, autism and complex needs since Envico opened the property in Hayes, Middlesex. What began as a single supported living service has grown into a model of best practice for personalised, community-embedded care. Every resident at Bishops House has a unique story, and our role is to help them write it.",
      "In 2026, our focus is on deepening the quality of what we already do, rather than simply growing. We are investing in our workforce — expanding our peer supervision model, supporting staff to achieve NVQ qualifications, and rolling out specialist training in positive behaviour support (PBS) for all team leaders and senior support workers.",
      "We are also strengthening our community partnerships, working with local colleges, leisure centres and community groups to expand the social and vocational opportunities available to our residents. Our vision remains simple: every person supported by Envico should be able to live as independently as they possibly can, as an active and valued member of their community. That vision drives everything we do.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export type ExpertProfile = {
  slug: string;
  name: string;
  credentials: string;
  specialties: string[];
  bio: string;
  jurisdictions: string;
};

export const experts: ExpertProfile[] = [
  {
    slug: "dr-elena-martinez",
    name: "Dr. Elena Martinez, Ph.D.",
    credentials:
      "Ph.D. Economics, M.A. Labor Economics · National Association of Forensic Economics (NAFE) · 18 years forensic economics practice",
    specialties: [
      "Loss of future earnings and earning capacity",
      "Personal injury and wrongful death",
      "Present value and fringe benefits",
      "Expert testimony and rebuttal",
    ],
    bio:
      "Dr. Elena Martinez is an independent forensic economist in the Future Earnings Expert referral network. She holds a Ph.D. in Economics with a concentration in labor economics and has spent her entire career quantifying economic damages in litigation—not financial planning or investment advisory work. Dr. Martinez has prepared hundreds of expert reports and testified in state and federal courts on loss of future earnings, loss of earning capacity, and present value issues in traumatic injury, wrongful death, and employment matters. She is retained by both plaintiff and defense counsel and is known for transparent BLS/OEWS documentation and methodology that withstands Daubert scrutiny. Dr. Martinez coordinates routinely with vocational experts and does not offer opinions on medical causation or legal liability.",
    jurisdictions:
      "California, Texas, Florida, New York, Illinois, and federal courts nationwide (subject to individual court qualification)",
  },
  {
    slug: "robert-chen-cpa-cff",
    name: "Robert Chen, CPA, CFF",
    credentials:
      "CPA (Inactive), Certified in Financial Forensics (CFF) · M.S. Accounting · 22 years litigation support",
    specialties: [
      "Employment wrongful termination damages",
      "Back pay, front pay, and executive compensation",
      "Medical malpractice economic loss",
      "Rebuttal of opposing economist reports",
    ],
    bio:
      "Robert Chen is an independent forensic economist and CPA in the Future Earnings Expert network specializing in employment and complex compensation damages. A Certified in Financial Forensics (CFF) designee, Mr. Chen reconstructs total compensation from personnel files, equity plans, and tax returns for wrongful termination, discrimination, and retaliation cases under Title VII, ADA, ADEA, and state law. He also addresses medical malpractice economic loss involving professional and executive income structures. Mr. Chen frequently serves as a rebuttal expert, deconstructing opposing reports on mitigation, front pay duration, and fringe benefit loading. He is not affiliated with consumer finance or investment advisory services; his practice is limited to litigation support for attorneys.",
    jurisdictions:
      "New York, New Jersey, Pennsylvania, Connecticut, Massachusetts, and federal courts in the Second and Third Circuits",
  },
  {
    slug: "dr-amanda-foster-phd",
    name: "Dr. Amanda Foster, Ph.D.",
    credentials:
      "Ph.D. Applied Economics · ABVE-recognized vocational-economic coordination · 15 years expert witness practice",
    specialties: [
      "Traumatic brain injury and spinal cord capacity loss",
      "Pediatric and birth injury economic damages",
      "Household services coordination",
      "Vocational-economic integration",
    ],
    bio:
      "Dr. Amanda Foster is an independent forensic economist in the Future Earnings Expert referral network with specialized experience in catastrophic injury and pediatric economic damages. Her work focuses on loss of earning capacity in TBI, spinal cord injury, and birth injury cases where vocational limitations drive damages. Dr. Foster is experienced coordinating with vocational experts, life care planners, and household services specialists to produce integrated economic opinions without double recovery. She has testified in state courts across the Midwest and Southeast and in federal MDL product liability proceedings. Dr. Foster emphasizes market-based occupational earnings from BLS/OEWS and documented work-life expectancy assumptions. She is an independent expert available through the network—not an employee of Future Earnings Expert—and maintains conflicts screening for plaintiff and defense engagements.",
    jurisdictions:
      "Ohio, Michigan, Georgia, North Carolina, Tennessee, and federal courts nationwide (subject to individual court qualification)",
  },
];

export function getExpertBySlug(slug: string): ExpertProfile | undefined {
  return experts.find((e) => e.slug === slug);
}

import type { ContentSection } from "../site-config";

export type MethodologyRow = {
  phase: string;
  whatWeDo: string;
  deliverable: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  sections: ContentSection[];
  methodology: MethodologyRow[];
  relatedTypeSlug: string;
};

export const services: Service[] = [
  {
    slug: "loss-of-future-earnings-analysis",
    title: "Loss of Future Earnings Analysis",
    shortDescription:
      "Project pre-injury earnings paths and measure divergence from post-event reality, with mitigation, fringe benefits, and present value treatment.",
    metaTitle: "Loss of Future Earnings Expert | Litigation",
    metaDescription:
      "Expert analysis of loss of future earnings in injury and employment cases. Forensic economist for plaintiff and defense attorneys nationwide.",
    relatedTypeSlug: "loss-of-future-earnings",
    sections: [
      {
        heading: "When Future Earnings Loss Drives Your Damages Case",
        paragraphs: [
          "Counsel routinely faces disputes over how much a plaintiff would have earned but for an injury, death, or wrongful termination—and how post-event earnings or employability reduce that loss. Loss of future earnings is not a single formula; it is a structured comparison of but-for and actual economic paths, adjusted for mitigation, taxes where appropriate, fringe benefits, and present value.",
          "Without a forensic economist, damages risk being either understated or overstated—inviting Daubert challenges under FRE 702 and settlement friction. Future Earnings Expert connects you with independent economists who anchor analyses in documented earnings history and BLS/OEWS labor market data.",
        ],
      },
      {
        heading: "What Our Network Economists Deliver",
        list: [
          "Pre-event earnings baseline from tax returns, W-2s, pay stubs, and employer verification",
          "But-for earnings projection using documented growth and occupation/industry norms",
          "Post-event earnings modeling with mitigation and duty-to-mitigate analysis",
          "Work-life expectancy integration and fringe benefit loading where the damages theory includes them",
          "Present value treatment consistent with forum guidance",
          "Expert report, deposition preparation, and trial testimony support",
        ],
      },
      {
        heading: "Typical Records Requested",
        paragraphs: [
          "For a preliminary assessment, counsel typically provides pleadings, three to five years of pre-event tax returns and W-2s, post-event earnings through current, vocational reports if available, SSDI/SSI award letters where applicable, and employer personnel records relevant to raises or termination.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Intake & records review",
        whatWeDo:
          "Confirm jurisdiction, damages theory, and whether future earnings (vs. earning capacity) is the correct measure. Review tax, payroll, and vocational records.",
        deliverable: "Engagement letter, document request list, preliminary analytical outline",
      },
      {
        phase: "Baseline & projection",
        whatWeDo:
          "Establish pre-event earnings from verified records. Project but-for path using conservative growth tied to history and BLS/OEWS benchmarks.",
        deliverable: "Baseline earnings summary with source documentation",
      },
      {
        phase: "Post-event & mitigation",
        whatWeDo:
          "Model actual or expected post-event earnings. Address mitigation, SSDI offsets per counsel instruction, and part-time or alternate employment.",
        deliverable: "Side-by-side but-for vs. actual earnings schedule",
      },
      {
        phase: "Benefits, PV & report",
        whatWeDo:
          "Load fringe benefits per theory. Apply present value discounting. Draft expert report with executive summary for counsel.",
        deliverable: "Expert report suitable for disclosure and FRE 702 review",
      },
    ],
  },
  {
    slug: "loss-of-earning-capacity-quantification",
    title: "Loss of Earning Capacity Quantification",
    shortDescription:
      "Quantify diminished earning capacity using market-based occupational earnings when specific job continuation is not the damages measure.",
    metaTitle: "Loss of Earning Capacity Expert Witness",
    metaDescription:
      "Diminished earning capacity analysis for litigation. Forensic economist network for injury, malpractice, and employment cases nationwide.",
    relatedTypeSlug: "loss-of-earning-capacity",
    sections: [
      {
        heading: "Capacity Loss When Specific Job Continuation Is Not the Measure",
        paragraphs: [
          "Many jurisdictions allow recovery for loss of earning capacity when a plaintiff cannot return to the same career track—even if actual post-injury wages are zero or volatile. This measure compares pre-event capacity to post-event capacity using market-wide earnings data for suitable occupations, not merely the last job held.",
          "Confusion between loss of future earnings and loss of earning capacity is a frequent source of expert disputes and Daubert motions. Network economists build the correct measure for your theory and forum.",
        ],
      },
      {
        heading: "Our Capacity Analyses Include",
        list: [
          "Pre-event capacity baseline cross-checked with BLS/OEWS and industry surveys",
          "Post-event capacity informed by medical restrictions and vocational opinions",
          "Capacity differential over work-life expectancy with stated participation assumptions",
          "Fringe benefits and present value treatment parallel to future earnings analyses",
          "Expert report defending occupation classifications and earnings levels used",
        ],
      },
      {
        heading: "Vocational Coordination",
        paragraphs: [
          "Vocational experts opine on transferable skills and suitable jobs; forensic economists translate that into dollar capacity. Draft vocational reports should be integrated before finalizing post-event occupational earnings selections.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Theory & forum alignment",
        whatWeDo:
          "Confirm capacity (not wage continuation) is the damages measure. Review pleadings, IME, and vocational evidence.",
        deliverable: "Analytical framework memo for counsel",
      },
      {
        phase: "Occupational mapping",
        whatWeDo:
          "Document SOC-aligned pre- and post-event occupations. Justify earnings level selection (mean, median, or percentile).",
        deliverable: "Occupation and earnings level worksheet with BLS/OEWS citations",
      },
      {
        phase: "Work-life & differential",
        whatWeDo:
          "Apply work-life expectancy tables and case-specific reductions. Compute annual and lifetime capacity differential.",
        deliverable: "Capacity loss schedule by year",
      },
      {
        phase: "Report & testimony prep",
        whatWeDo:
          "Prepare expert report. Anticipate cross-examination on occupation choice and labor force participation.",
        deliverable: "Expert report and deposition preparation session",
      },
    ],
  },
  {
    slug: "personal-injury-wrongful-death-economic-damages",
    title: "Personal Injury & Wrongful Death Economic Damages",
    shortDescription:
      "Integrated economic loss analyses for bodily injury and fatality claims, including earnings, capacity, benefits, and household services coordination.",
    metaTitle: "Personal Injury Economic Damages Expert",
    metaDescription:
      "Wrongful death and injury economic damages: future earnings, earning capacity, benefits. Expert witness network for litigation attorneys.",
    relatedTypeSlug: "wrongful-death-economic-loss",
    sections: [
      {
        heading: "Economic Damages in Bodily Injury and Fatality Claims",
        paragraphs: [
          "Personal injury and wrongful death litigation often turns on credible economic damages—not only past medical bills and lost wages to date, but loss of future earnings, loss of earning capacity, fringe benefits, and household services where applicable under state law.",
          "Future Earnings Expert connects counsel with forensic economists experienced in state wrongful death statutes, survival actions, and derivative claims—always distinguishing economic from non-economic damages and avoiding double recovery.",
        ],
      },
      {
        heading: "Heads of Economic Loss We Address",
        list: [
          "Loss of future earnings and loss of earning capacity for injured plaintiffs",
          "Decedent wage-earner loss and household services in wrongful death matters",
          "Fringe benefits including health insurance, retirement contributions, and employer-paid benefits",
          "Present value discounting per forum standards",
          "Coordination with life care planners and vocational experts without duplicating medical costs",
        ],
      },
      {
        heading: "Plaintiff and Defense Retentions",
        paragraphs: [
          "Network experts are retained by both plaintiff and defense counsel, subject to conflicts screening. Analyses follow documented methodology and the evidence—not a predetermined side.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Damages inventory",
        whatWeDo:
          "Map applicable heads of loss under state law. Identify coordination needs with vocational, life care, and household services experts.",
        deliverable: "Damages scope outline aligned to pleadings",
      },
      {
        phase: "Decedent or plaintiff profile",
        whatWeDo:
          "Build earnings/capacity profile from tax, payroll, SSA, and employment records. Address young earners and career trajectory.",
        deliverable: "Economic profile with data source log",
      },
      {
        phase: "Loss quantification",
        whatWeDo:
          "Quantify each economic head. Apply work-life expectancy and present value. Address collateral source and setoff per counsel.",
        deliverable: "Itemized economic damages schedule",
      },
      {
        phase: "Report & litigation support",
        whatWeDo:
          "Draft expert report. Support deposition, trial testimony, and settlement negotiations.",
        deliverable: "Disclosure-ready expert report and trial demonstratives as scoped",
      },
    ],
  },
  {
    slug: "employment-wrongful-termination-economic-damages",
    title: "Employment & Wrongful Termination Damages",
    shortDescription:
      "Back pay, front pay, and benefits-related economic loss aligned with duty to mitigate, compensation history, and industry benchmarks.",
    metaTitle: "Employment Economic Damages Expert Witness",
    metaDescription:
      "Wrongful termination and employment discrimination economic damages: back pay, front pay, benefits. Forensic economist network for attorneys.",
    relatedTypeSlug: "employment-front-back-pay",
    sections: [
      {
        heading: "Economic Loss in Employment Litigation",
        paragraphs: [
          "Employment cases under Title VII, ADA, ADEA, FMLA retaliation, whistleblower statutes, and state law require precise quantification of back pay, front pay, lost benefits, and sometimes loss of earning capacity when termination permanently alters career trajectory.",
          "Duty to mitigate, interim earnings, and comparable replacement employment are central battlegrounds. Network economists model these elements with transparent assumptions tied to payroll records and BLS/OEWS benchmarks.",
        ],
      },
      {
        heading: "Typical Analytical Components",
        list: [
          "Back pay from termination through trial or reinstatement date",
          "Front pay for future economic loss when reinstatement is not feasible",
          "Lost health insurance, retirement, stock compensation, and other fringe benefits",
          "Mitigation analysis using documented job search and interim employment",
          "Present value of front pay awards where required by forum",
        ],
      },
      {
        heading: "Records That Strengthen the Analysis",
        paragraphs: [
          "Personnel files, compensation history, termination documentation, mitigation evidence (applications, offers, unemployment records), and expert reports from vocational or industrial psychologists when employability is disputed.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Compensation reconstruction",
        whatWeDo:
          "Reconstruct total compensation including base, bonus, overtime, equity, and benefits from employer records and tax filings.",
        deliverable: "Annual compensation summary by component",
      },
      {
        phase: "Back pay period",
        whatWeDo:
          "Calculate gross back pay for the liability period. Credit interim earnings and benefits per mitigation theory.",
        deliverable: "Back pay worksheet with mitigation offsets",
      },
      {
        phase: "Front pay & capacity",
        whatWeDo:
          "Project front pay duration and amount. Address capacity loss if plaintiff cannot return to comparable employment.",
        deliverable: "Front pay schedule with stated end date or work-life assumption",
      },
      {
        phase: "PV & report",
        whatWeDo:
          "Discount front pay to present value if directed. Prepare expert report for EEOC, state agency, or court proceedings.",
        deliverable: "Expert report with executive summary for counsel and mediator",
      },
    ],
  },
  {
    slug: "medical-malpractice-economic-damages",
    title: "Medical Malpractice Economic Damages",
    shortDescription:
      "Earnings and capacity loss when medical negligence causes disability, cognitive limitation, or reduced life expectancy affecting work life.",
    metaTitle: "Medical Malpractice Economic Damages Expert",
    metaDescription:
      "Med mal economic damages expert witness network: future earnings, earning capacity, life expectancy reductions. For plaintiff and defense attorneys.",
    relatedTypeSlug: "loss-of-earning-capacity",
    sections: [
      {
        heading: "When Malpractice Permanently Alters Earning Potential",
        paragraphs: [
          "Medical malpractice cases involving birth injury, surgical error, anesthesia complications, delayed diagnosis, and medication errors often require economic damages quantification tied to permanent disability, cognitive impairment, or reduced life expectancy.",
          "Economists in our network coordinate with medical experts and vocational specialists to translate clinical limitations into defensible earnings and capacity loss—without conflating economic damages with life care plan medical costs.",
        ],
      },
      {
        heading: "Distinct Med Mal Economic Issues",
        list: [
          "Pediatric and adolescent plaintiffs with limited earnings history—capacity-based approaches",
          "Reduced work-life expectancy when life expectancy is shortened by malpractice",
          "Cognitive and pain limitations affecting occupational options",
          "Lost earnings of a parent or caregiver in derivative wrongful death claims",
          "Collateral source and setoff coordination per state med mal statutes",
        ],
      },
      {
        heading: "Defense and Plaintiff Applications",
        paragraphs: [
          "Defense retentions often focus on pre-existing conditions, labor force participation assumptions, and reasonableness of occupational projections. Plaintiff retentions emphasize full vocational impact supported by medical and vocational evidence.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Clinical-economic linkage",
        whatWeDo:
          "Review IME, treating records, and vocational restrictions. Confirm which functional limits affect employability.",
        deliverable: "Functional limitation summary tied to economic assumptions",
      },
      {
        phase: "Baseline & post-event paths",
        whatWeDo:
          "Establish but-for earnings or capacity. Model post-malpractice occupational options and earnings.",
        deliverable: "But-for vs. post-event earnings/capacity comparison",
      },
      {
        phase: "Work-life adjustments",
        whatWeDo:
          "Apply work-life expectancy reductions where life expectancy evidence supports. Document tables and medical basis.",
        deliverable: "Adjusted work-life schedule with citations",
      },
      {
        phase: "Report & testimony",
        whatWeDo:
          "Prepare expert report addressing causation of economic loss (given liability theory). Support deposition and trial.",
        deliverable: "Expert report compliant with state med mal disclosure rules",
      },
    ],
  },
  {
    slug: "expert-witness-testimony-litigation-support",
    title: "Expert Witness Testimony & Litigation Support",
    shortDescription:
      "Reports, depositions, trial testimony, and consultative support throughout the litigation lifecycle for economic damages.",
    metaTitle: "Economist Expert Witness | Litigation Support",
    metaDescription:
      "Expert witness testimony and litigation support for economic damages. Reports, deposition, trial. Free consultation for attorneys.",
    relatedTypeSlug: "loss-of-future-earnings",
    sections: [
      {
        heading: "End-to-End Forensic Economics Support for Counsel",
        paragraphs: [
          "Economic damages cases require more than a spreadsheet—they require an expert witness who can explain future earnings, earning capacity, fringe benefits, and present value to a judge or jury, and withstand cross-examination under FRE 702 and Daubert standards.",
          "Network experts provide consultative support from early case assessment through report, deposition, trial testimony, and post-trial proceedings.",
        ],
      },
      {
        heading: "Litigation Support Services",
        list: [
          "Early case assessment and damages theory consultation",
          "Document request lists tailored to economic issues",
          "Expert reports with executive summaries for counsel and detailed methodology sections",
          "Deposition preparation and mock cross-examination sessions",
          "Trial testimony, demonstratives, and cross-examination support for opposing economists",
          "Supplemental and rebuttal reports as the record develops",
        ],
      },
      {
        heading: "Admissibility and Credibility",
        paragraphs: [
          "Work product is structured for admissibility review: identifiable data sources, stated assumptions, and reproducible calculations. Network experts do not guarantee admissibility—that remains the court's determination—but methodology is documented for Daubert scrutiny.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Consultation",
        whatWeDo:
          "Assess case fit, damages measures, and timeline. Identify records needed and potential challenges.",
        deliverable: "Case assessment memo and fee estimate",
      },
      {
        phase: "Analysis & report",
        whatWeDo:
          "Perform economic analysis. Draft report with clear separation of facts, assumptions, and opinions.",
        deliverable: "Expert report per court rules and counsel format preferences",
      },
      {
        phase: "Discovery support",
        whatWeDo:
          "Respond to opposing expert disclosures. Assist with interrogatories and document production on economic issues.",
        deliverable: "Supplemental materials and workpapers as scoped",
      },
      {
        phase: "Deposition & trial",
        whatWeDo:
          "Prepare for testimony. Appear at deposition and trial. Provide post-deposition errata as appropriate.",
        deliverable: "Testimony and trial demonstratives as retained",
      },
    ],
  },
  {
    slug: "rebuttal-opposing-economist-reports",
    title: "Rebuttal of Opposing Economist Reports",
    shortDescription:
      "Structured critique of opposing assumptions, data, and methods under Daubert and damages law—with alternative calculations where appropriate.",
    metaTitle: "Rebuttal Economist Expert | Daubert Critique",
    metaDescription:
      "Critique and rebuttal of opposing forensic economist reports. Daubert challenges, assumption review, alternative damages models for attorneys.",
    relatedTypeSlug: "rebuttal-opposing-economist",
    sections: [
      {
        heading: "When Opposing Counsel Has Retained an Economist",
        paragraphs: [
          "Opposing economist reports often drive settlement ranges and trial strategy. A structured rebuttal identifies methodological flaws, unsupported assumptions, data errors, and misapplication of damages law—while offering alternative quantification where the record supports it.",
          "Rebuttal engagements are common on both plaintiff and defense sides and may include Daubert motion support, deposition outline preparation, and trial cross-examination themes.",
        ],
      },
      {
        heading: "Common Targets of Rebuttal",
        list: [
          "Inflated growth rates or occupational earnings not supported by BLS/OEWS data",
          "Failure to credit mitigation, interim earnings, or collateral sources per instruction",
          "Incorrect work-life expectancy or failure to address reduced life expectancy",
          "Double counting with life care plans, household services, or other experts",
          "Present value errors including wrong discount rate or nominal/real confusion",
          "Capacity vs. earnings measure mismatch with jurisdiction and pleadings",
        ],
      },
      {
        heading: "Deliverables",
        paragraphs: [
          "Rebuttal reports range from focused assumption critiques to full alternative damages models. Scope is defined with counsel based on budget, timeline, and whether testimony will be required.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Report deconstruction",
        whatWeDo:
          "Line-by-line review of opposing report. Map every assumption to underlying data or identify unsupported assertions.",
        deliverable: "Assumption inventory with issue flags",
      },
      {
        phase: "Data verification",
        whatWeDo:
          "Verify BLS/OEWS citations, tax data usage, and arithmetic. Identify calculation errors.",
        deliverable: "Verification memo with corrected figures where applicable",
      },
      {
        phase: "Alternative analysis",
        whatWeDo:
          "Where scoped, run alternative model using defensible assumptions aligned with your theory.",
        deliverable: "Alternative damages schedule or range",
      },
      {
        phase: "Rebuttal report & trial support",
        whatWeDo:
          "Draft rebuttal expert report. Prepare cross-examination outline and testimony if retained.",
        deliverable: "Rebuttal report and deposition/trial support materials",
      },
    ],
  },
  {
    slug: "present-value-fringe-benefits-analysis",
    title: "Present Value & Fringe Benefits Analysis",
    shortDescription:
      "Present value discounting and fringe benefit quantification as standalone or integrated components of economic damages models.",
    metaTitle: "Present Value & Fringe Benefits Expert",
    metaDescription:
      "Present value discounting and fringe benefits analysis for litigation economic damages. Forensic economist network for plaintiff and defense attorneys.",
    relatedTypeSlug: "present-value-discounting",
    sections: [
      {
        heading: "Why Present Value and Benefits Require Separate Expertise",
        paragraphs: [
          "Future wage and capacity losses must often be expressed in present value terms for judgment and settlement. Fringe benefits—including employer-paid health insurance, retirement contributions, and paid leave—can represent a substantial portion of total compensation omitted from simple wage projections.",
          "Discount rate selection, nominal vs. real treatment, and benefit loading methodology are frequent points of expert disagreement and Daubert scrutiny.",
        ],
      },
      {
        heading: "Analytical Components",
        list: [
          "Present value discounting using forum-appropriate rates and methodologies",
          "Employer cost vs. wage replacement approaches to fringe benefits",
          "Integration with loss of future earnings and loss of earning capacity models",
          "Sensitivity analysis showing impact of rate and benefit assumptions",
          "Rebuttal of opposing present value and benefits calculations",
        ],
      },
      {
        heading: "When Counsel Retains This Service",
        paragraphs: [
          "Counsel may retain standalone present value and benefits analysis when wage loss is agreed but PV or benefits are disputed, or as part of a comprehensive economic damages engagement.",
        ],
      },
    ],
    methodology: [
      {
        phase: "Forum & theory review",
        whatWeDo:
          "Confirm applicable discount rate framework and whether benefits are recoverable under damages theory.",
        deliverable: "Methodology memo citing forum standards",
      },
      {
        phase: "Benefits quantification",
        whatWeDo:
          "Calculate fringe benefit value from employer records or industry load factors. Document approach selected.",
        deliverable: "Fringe benefits schedule by year",
      },
      {
        phase: "Present value calculation",
        whatWeDo:
          "Discount future loss streams to present value. Provide nominal and real treatment as appropriate.",
        deliverable: "Present value summary with discount rate justification",
      },
      {
        phase: "Report integration",
        whatWeDo:
          "Integrate into full expert report or deliver standalone PV/benefits exhibit for counsel or opposing expert response.",
        deliverable: "Expert report section or standalone exhibit",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

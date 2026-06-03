import type { PageContent } from "../site-config";

export const caseTypes: PageContent[] = [
  {
    slug: "motor-vehicle-collision",
    title: "Motor Vehicle Collision",
    metaTitle: "Motor Vehicle Accident Economic Damages Expert",
    metaDescription:
      "Forensic economist for motor vehicle collision cases: future earnings, earning capacity, and benefits loss for plaintiff and defense attorneys.",
    h1: "Motor Vehicle Collision Economic Damages",
    subtitle:
      "Quantifying wage and capacity loss from auto, truck, and motorcycle injuries.",
    sections: [
      {
        paragraphs: [
          "Motor vehicle collisions are among the most common retentions for forensic economists. Injuries range from soft tissue with temporary work absence to catastrophic trauma causing permanent disability. Economic damages depend on the plaintiff's occupation, earnings history, and post-accident employability.",
          "Economists establish pre-accident earnings from tax and payroll records, project but-for income over work-life expectancy, and model post-accident earnings given medical restrictions and vocational options.",
        ],
      },
      {
        paragraphs: [
          "Disputes frequently involve pre-existing conditions, gap periods before returning to work, and whether the plaintiff mitigated by accepting available employment. Uber, delivery drivers, and gig workers present self-employment income documentation challenges addressed through tax returns and platform records.",
        ],
      },
      {
        paragraphs: [
          "Network experts serve both plaintiff and defense counsel in state and federal courts. Reports address FRE 702 reliability with BLS/OEWS occupational data and documented earnings history.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I retain an economist in an auto accident case?",
        answer:
          "Retain when lost wages extend beyond a few months, when the plaintiff cannot return to their prior occupation, when self-employment income is disputed, or when opposing counsel has retained an economist. Early retention helps set discovery targets for tax returns and employment records.",
      },
      {
        question: "How are economic damages handled when the plaintiff had a pre-existing injury?",
        answer:
          "Economists distinguish accident-caused loss from pre-existing conditions using medical evidence and earnings history before and after the prior injury. The analysis may apportion loss or address aggravation per counsel's causation theory. Vocational and medical experts support the economic assumptions.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
    relatedSlugs: ["loss-of-future-earnings", "loss-of-earning-capacity"],
  },
  {
    slug: "traumatic-brain-injury",
    title: "Traumatic Brain Injury",
    metaTitle: "TBI Economic Damages Expert Witness",
    metaDescription:
      "Economic damages expert for traumatic brain injury cases: cognitive limitations, earning capacity loss, and vocational coordination.",
    h1: "Traumatic Brain Injury Economic Damages",
    subtitle:
      "Capacity loss when cognitive and executive function injuries permanently limit employability.",
    sections: [
      {
        paragraphs: [
          "Traumatic brain injury cases often involve subtle cognitive deficits—memory, concentration, executive function—that prevent return to cognitively demanding occupations even when physical appearance is unimpaired. Loss of earning capacity frequently exceeds actual post-injury wages when the plaintiff accepts lower-skilled work.",
          "Economists coordinate closely with neuropsychologists, IME physicians, and vocational experts to identify suitable pre- and post-event occupations and assign BLS/OEWS earnings levels.",
        ],
      },
      {
        paragraphs: [
          "Young plaintiffs with high education and limited work history require capacity-based projections. Defense challenges often focus on labor force participation and whether cognitive limitations truly prevent competitive employment.",
        ],
      },
      {
        paragraphs: [
          "Present value of lifetime capacity loss in TBI cases can be substantial. Network economists document methodology for Daubert scrutiny and provide testimony accessible to juries.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is earning capacity often used in TBI cases?",
        answer:
          "TBI plaintiffs may work at reduced levels that do not reflect full market capacity loss. Earning capacity measures vocational impact in the open labor market. Vocational experts identify suitable occupations given cognitive restrictions; economists quantify the dollar differential.",
      },
      {
        question: "How do economists address TBI plaintiffs who appear functional in daily life?",
        answer:
          "Daily function does not necessarily equal vocational capacity. Economists rely on neuropsychological testing, vocational evaluations, and medical opinions—not appearances—to define post-event occupational options. Assumptions are stated explicitly for cross-examination.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death", "medical-malpractice-commercial"],
    relatedSlugs: ["loss-of-earning-capacity"],
  },
  {
    slug: "spinal-cord-permanent-disability",
    title: "Spinal Cord & Permanent Disability",
    metaTitle: "Spinal Cord Injury Economic Damages Expert",
    metaDescription:
      "Forensic economist for spinal cord and permanent disability cases: work-life expectancy, capacity loss, and benefits analysis.",
    h1: "Spinal Cord & Permanent Disability Economic Damages",
    subtitle:
      "Lifetime earnings and capacity loss for paraplegia, quadriplegia, and permanent orthopedic disability.",
    sections: [
      {
        paragraphs: [
          "Spinal cord injuries and permanent orthopedic disabilities often eliminate prior occupations entirely. Economic damages analysis focuses on loss of earning capacity using sedentary or light-duty occupational data when any competitive employment remains possible, or zero earnings capacity when medically supported.",
          "Work-life expectancy may be reduced when life expectancy is shortened. Economists integrate life expectancy evidence with work-life tables and coordinate with life care planners without duplicating medical costs.",
        ],
      },
      {
        paragraphs: [
          "Pre-injury earnings of skilled trades workers, laborers, and professionals drive large differentials when post-injury capacity is limited to sedentary work at lower BLS/OEWS wage levels. Fringe benefits and present value magnify total economic loss.",
        ],
      },
      {
        paragraphs: [
          "Vocational experts are essential in spinal cases. Network economists await suitable job opinions before finalizing post-event earnings and defend occupation selections at deposition.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is work-life expectancy affected by spinal cord injury?",
        answer:
          "When medical evidence establishes reduced life expectancy, the economic loss period may end at projected life expectancy rather than normal retirement age. Economists cite mortality tables and treating or IME physician opinions supporting the reduction.",
      },
      {
        question: "Can economic damages exist if the plaintiff receives SSDI?",
        answer:
          "SSDI receipt does not eliminate economic loss; it may affect net recovery depending on collateral source and setoff rules in the jurisdiction. Economists calculate gross economic loss; counsel directs whether SSDI or other benefits offset damages.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
    relatedSlugs: ["loss-of-earning-capacity", "fringe-benefits-damages"],
  },
  {
    slug: "wrongful-death-fatality",
    title: "Wrongful Death & Fatality",
    metaTitle: "Wrongful Death Economic Damages Expert Witness",
    metaDescription:
      "Wrongful death forensic economist: decedent earnings loss, fringe benefits, and household services for litigation attorneys.",
    h1: "Wrongful Death & Fatality Economic Damages",
    subtitle:
      "Decedent wage-earner loss and household services under state wrongful death statutes.",
    sections: [
      {
        paragraphs: [
          "Wrongful death and survival actions require quantification of the financial loss to beneficiaries from a decedent's premature death. Primary economic components include lost future earnings or earning capacity, lost fringe benefits, and household services.",
          "Economists profile the decedent from tax returns, SSA records, and employer verification. For primary wage earners, the analysis projects but-for earnings to retirement or reduced life expectancy.",
        ],
      },
      {
        paragraphs: [
          "Child decedents and non-wage-earning adults present distinct issues. Stay-at-home parents may have substantial household services loss even without wage income. State statutes define recoverable heads and beneficiaries.",
        ],
      },
      {
        paragraphs: [
          "Network economists coordinate household services experts and address present value of multi-decade loss streams. Plaintiff and defense retentions are both common in high-exposure fatality cases.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if the decedent was unemployed at death?",
        answer:
          "Economists analyze work history, education, and vocational potential to establish capacity. A recently unemployed decedent with strong history may still support significant loss. Long-term unemployment requires careful factual support for but-for earnings assumptions.",
      },
      {
        question: "Are household services separate from wage loss?",
        answer:
          "Yes. Household services value the decedent's non-market contributions to the household. Wage loss addresses market earnings. Both may apply in the same case. Experts coordinate to prevent double counting with paid caregiving in life care plans.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
    relatedSlugs: ["wrongful-death-economic-loss", "household-services-coordination"],
  },
  {
    slug: "medical-malpractice-permanent-injury",
    title: "Medical Malpractice Permanent Injury",
    metaTitle: "Medical Malpractice Economic Damages Expert",
    metaDescription:
      "Med mal economic damages: birth injury, surgical error, and permanent disability earnings loss for plaintiff and defense attorneys.",
    h1: "Medical Malpractice Permanent Injury Economic Damages",
    subtitle:
      "Earnings and capacity loss from birth injury, surgical error, and diagnostic failures.",
    sections: [
      {
        paragraphs: [
          "Medical malpractice cases involving permanent injury—birth injury, surgical complications, anesthesia errors, delayed cancer diagnosis—require economic damages tied to lifelong disability. Pediatric cases dominate capacity-based methodology given absent earnings history.",
          "Economists work with life care planners, medical experts, and vocational specialists. Economic damages exclude medical costs captured in life care plans unless counsel directs otherwise.",
        ],
      },
      {
        paragraphs: [
          "State med mal caps, periodic payment rules, and collateral source statutes affect net recovery. Economians calculate gross economic loss; counsel applies legal caps and setoffs.",
        ],
      },
      {
        paragraphs: [
          "Defense economists challenge speculative career projections for children and reduced work-life assumptions unsupported by life expectancy evidence. Documentation of BLS/OEWS sources and work-life tables supports Daubert admissibility.",
        ],
      },
    ],
    faqs: [
      {
        question: "How are lifetime earnings calculated for a birth injury case?",
        answer:
          "Economists project earning capacity using education potential, parental socioeconomic indicators where appropriate, and BLS/OEWS data for suitable occupations given permanent restrictions. Vocational experts identify post-injury suitable work. Loss is calculated over work-life expectancy, often to age 65 or 67, with present value discounting.",
      },
      {
        question: "Should the economist review the life care plan?",
        answer:
          "Yes, to ensure no double recovery between economic loss and medical/caregiving costs in the life care plan. The economist separates wage loss from medical expenses and coordinates household services assumptions.",
      },
    ],
    relatedContextSlugs: ["medical-malpractice-commercial"],
    relatedSlugs: ["loss-of-earning-capacity"],
  },
  {
    slug: "employment-wrongful-termination",
    title: "Employment Wrongful Termination",
    metaTitle: "Wrongful Termination Economic Damages Expert",
    metaDescription:
      "Forensic economist for wrongful termination and discrimination: back pay, front pay, benefits, and mitigation analysis.",
    h1: "Employment Wrongful Termination Economic Damages",
    subtitle:
      "Back pay, front pay, and benefits in Title VII, ADA, ADEA, and state employment claims.",
    sections: [
      {
        paragraphs: [
          "Wrongful termination and employment discrimination cases require reconstruction of total compensation and analysis of economic loss from termination through judgment and beyond. Back pay and front pay dominate, with mitigation and comparable replacement employment as central disputes.",
          "Economists analyze salary, bonus, equity, and benefits from employer records. EEOC proceedings and federal court practice often require present value of front pay.",
        ],
      },
      {
        paragraphs: [
          "Executive and professional terminations involve complex compensation structures. Whistleblower and retaliation cases may include industry-specific earning benchmarks when reinstatement in the same industry is impossible.",
        ],
      },
      {
        paragraphs: [
          "Defense retentions focus on failure to mitigate, inflated front pay duration, and speculative promotion assumptions. Network experts serve both sides nationwide.",
        ],
      },
    ],
    faqs: [
      {
        question: "What makes employment economic damages different from personal injury?",
        answer:
          "Employment cases use back pay and front pay frameworks with explicit duty to mitigate rather than but-for injury earnings paths. Reinstatement may eliminate front pay. Statutory caps and equitable remedies differ from tort damages. The economist applies employment damages methodology, not personal injury wage loss models.",
      },
      {
        question: "Can an economist opine on whether termination was wrongful?",
        answer:
          "No. The economist quantifies economic loss assuming liability or for damages-phase proceedings. Causation of termination is a legal and factual question for the trier of fact, not the economist.",
      },
    ],
    relatedContextSlugs: ["employment-wrongful-termination"],
    relatedSlugs: ["employment-front-back-pay"],
  },
  {
    slug: "construction-workplace-injury",
    title: "Construction & Workplace Injury",
    metaTitle: "Construction Injury Economic Damages Expert",
    metaDescription:
      "Forensic economist for construction and workplace injury: union wages, self-employment, and permanent disability earnings loss.",
    h1: "Construction & Workplace Injury Economic Damages",
    subtitle:
      "Earnings loss for trades workers, contractors, and industrial employees with documented wage histories.",
    sections: [
      {
        paragraphs: [
          "Construction and industrial injuries often affect workers with strong pre-injury earnings—union wages, overtime, and multi-employer histories. Economists consolidate earnings from multiple W-2s, union records, and self-employment tax returns.",
          "Permanent lifting restrictions typically eliminate prior trades occupations, shifting post-event capacity to sedentary or light BLS/OEWS classifications at substantially lower earnings.",
        ],
      },
      {
        paragraphs: [
          "Seasonal work and overtime patterns require careful baseline averaging. Workers' compensation wage replacement may affect collateral source analysis in third-party tort claims.",
        ],
      },
      {
        paragraphs: [
          "Third-party liability cases alongside workers' comp require coordination with counsel on setoffs and credits. Network economists document gross loss clearly for legal adjustment.",
        ],
      },
    ],
    faqs: [
      {
        question: "How are union wages handled in economic damages?",
        answer:
          "Economists use documented union scale rates, pay stubs, and tax returns to establish baseline earnings including negotiated wages and typical overtime. Projected but-for earnings reflect union wage growth and work availability evidence where supported.",
      },
      {
        question: "Does workers' comp receipt reduce third-party economic damages?",
        answer:
          "This is a legal question varying by state. Economists calculate tort economic loss; counsel determines credit for workers' comp benefits, subrogation, and collateral source rules.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
    relatedSlugs: ["loss-of-future-earnings", "loss-of-earning-capacity"],
  },
  {
    slug: "workers-comp-third-party",
    title: "Workers' Comp Third-Party Claims",
    metaTitle: "Third-Party Work Injury Economic Damages Expert",
    metaDescription:
      "Economic damages in third-party workplace injury claims: coordination with workers' comp, wage loss, and capacity analysis.",
    h1: "Workers' Compensation Third-Party Economic Damages",
    subtitle:
      "Tort economic loss quantification when a third party caused a workplace injury.",
    sections: [
      {
        paragraphs: [
          "When a third party—not the employer—causes a workplace injury, the injured worker may pursue tort damages beyond workers' compensation benefits. Economic damages include full future earnings and capacity loss subject to state setoff and collateral source rules.",
          "Economists quantify tort economic loss using standard forensic methodology. Workers' comp wage replacement and permanency awards are legal credits applied by counsel, not deducted arbitrarily by the economist without instruction.",
        ],
      },
      {
        paragraphs: [
          "Third-party cases involve the same vocational and earnings issues as other workplace injuries, with added complexity of coordinating benefits credits and avoiding double recovery across comp and tort recovery.",
        ],
      },
      {
        paragraphs: [
          "Construction, manufacturing, and logistics incidents generate frequent third-party retentions. Self-employed contractors require tax-return-based income analysis.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should the economist know workers' comp benefit amounts?",
        answer:
          "Counsel should provide comp award information so the economist understands the full damages picture. Whether comp benefits reduce tort recovery is a legal determination. The economist may show gross tort loss and note benefits separately per counsel direction.",
      },
      {
        question: "Can economic damages exceed workers' comp wage replacement?",
        answer:
          "Tort damages may include full future loss, capacity diminution, and fringe benefits not fully replaced by comp. State law governs overlap. Economists quantify tort economic heads; counsel applies comp credits.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
    relatedSlugs: ["loss-of-future-earnings"],
  },
  {
    slug: "nursing-home-negligence",
    title: "Nursing Home Negligence",
    metaTitle: "Nursing Home Negligence Economic Damages Expert",
    metaDescription:
      "Economic damages for nursing home injury and wrongful death: elderly decedent earnings and survival claims.",
    h1: "Nursing Home Negligence Economic Damages",
    subtitle:
      "Economic loss in facility negligence, bedsore fatalities, and elder injury cases.",
    sections: [
      {
        paragraphs: [
          "Nursing home negligence cases include injury to elderly residents and wrongful death from falls, bedsores, medication errors, and neglect. Economic damages depend on whether the resident was wage-earning, retired, or contributed household services.",
          "For wage-earning elderly residents or those who planned to continue working past typical retirement age, economists project shortened work-life and lost earnings. Wrongful death of retirees may focus on household services and lost pension or annuity benefits where applicable.",
        ],
      },
      {
        paragraphs: [
          "Survival actions and wrongful death statutes vary by state for elderly decedents. Life expectancy tables drive the loss period. Medical malpractice caps may apply depending on classification.",
        ],
      },
      {
        paragraphs: [
          "Network economists address modest but defensible economic loss in elder cases and high-exposure cases where decedents had substantial ongoing earned income or business involvement.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are economic damages significant when the nursing home resident was retired?",
        answer:
          "Wage loss may be minimal, but household services, lost pension benefits, or lost business income for actively involved retirees can support economic damages. Each case depends on the decedent's actual economic contributions documented in the record.",
      },
      {
        question: "How is life expectancy used in nursing home death cases?",
        answer:
          "Economists use actuarial life expectancy at the decedent's age before the fatal injury. The wrongful death loss period runs through projected life expectancy for earnings and household services calculations unless the negligence shortened life further—in which case medical evidence supports the period.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death", "medical-malpractice-commercial"],
    relatedSlugs: ["wrongful-death-economic-loss"],
  },
  {
    slug: "product-liability-personal-injury",
    title: "Product Liability Personal Injury",
    metaTitle: "Product Liability Economic Damages Expert",
    metaDescription:
      "Forensic economist for product liability injury cases: nationwide earnings loss, capacity, and mass tort coordination.",
    h1: "Product Liability Personal Injury Economic Damages",
    subtitle:
      "Individual economic loss quantification in defective product and mass tort litigation.",
    sections: [
      {
        paragraphs: [
          "Product liability cases—defective machinery, pharmaceuticals, consumer products, and industrial equipment—often involve permanent injury requiring individual economic damages analysis within multidistrict or mass tort frameworks.",
          "Each plaintiff's economic loss depends on individual earnings history, age, occupation, and injury severity. Template analyses are inadequate; economists prepare plaintiff-specific reports from individual records.",
        ],
      },
      {
        paragraphs: [
          "Mass tort coordination may require standardized methodology with individual inputs. Network economists scale individual analyses while maintaining Daubert-defensible documentation for each plaintiff.",
        ],
      },
      {
        paragraphs: [
          "Defense panel counsel often retain economists for global settlement modeling and individual plaintiff rebuttal. Plaintiff counsel retains for individual loss maximization supported by records.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do economists handle mass tort product liability cases?",
        answer:
          "A consistent methodology is applied across plaintiffs with individual data inputs—tax returns, age, occupation, and injury-specific vocational restrictions. Standardization supports global settlement while individual reports satisfy court requirements for specific plaintiffs proceeding to trial.",
      },
      {
        question: "Can one economist report support multiple product liability plaintiffs?",
        answer:
          "Each plaintiff typically requires an individual report reflecting their specific earnings and injury. Economists may use shared methodology and rate structures, but individual damages figures must reflect individual facts for FRE 702 compliance.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
    relatedSlugs: ["loss-of-future-earnings", "loss-of-earning-capacity"],
  },
];

export function getCaseTypeBySlug(slug: string): PageContent | undefined {
  return caseTypes.find((c) => c.slug === slug);
}

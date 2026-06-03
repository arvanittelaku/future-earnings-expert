import type { PageContent } from "../site-config";

export const earningsTypes: PageContent[] = [
  {
    slug: "loss-of-future-earnings",
    title: "Loss of Future Earnings",
    metaTitle: "Loss of Future Earnings Damages | Expert Guide",
    metaDescription:
      "How forensic economists quantify loss of future earnings in litigation: baseline, projection, mitigation, and present value for attorneys.",
    h1: "Loss of Future Earnings in Litigation",
    subtitle:
      "The wage-based measure comparing but-for earnings to post-event reality over work-life expectancy.",
    sections: [
      {
        paragraphs: [
          "Loss of future earnings measures the difference between what a plaintiff would have earned in their employment or career but for the injury or wrongful conduct and what they actually earn or are expected to earn afterward. It is the most common economic damages head in personal injury, employment, and wrongful death cases where the plaintiff had a documented earnings history.",
          "The analysis begins with a verified pre-event baseline from tax returns, W-2s, pay stubs, and employer records—not hypothetical career paths unsupported by evidence. Economists then project a but-for earnings path using growth assumptions tied to documented history and BLS/OEWS occupational data.",
        ],
      },
      {
        paragraphs: [
          "Post-event earnings are modeled from actual wages since the incident, vocational opinions on suitable work, and mitigation evidence. The economist credits interim earnings and addresses part-time status, career changes, and unemployment periods. The annual difference is summed over work-life expectancy and may include fringe benefits and present value discounting.",
          "Loss of future earnings differs from loss of earning capacity when the legal measure focuses on specific employment continuation rather than open labor market capacity. Counsel must align the damages theory with state law and pleadings; economists implement the measure counsel directs.",
        ],
      },
      {
        paragraphs: [
          "Common disputes include growth rate reasonableness, mitigation adequacy, treatment of self-employment income, and whether bonuses or overtime are recurring. Network experts document every assumption for FRE 702 and Daubert review and provide deposition-ready explanations for judges and juries.",
        ],
      },
    ],
    faqs: [
      {
        question: "What records are most important for a loss of future earnings analysis?",
        answer:
          "Multi-year pre-event tax returns and W-2s establish the baseline. Post-event earnings documentation, employer verification, vocational reports, and SSDI award letters (where applicable) support the post-event path. Personnel files help explain anomalies such as one-time bonuses or periods of unemployment before the incident.",
      },
      {
        question: "Can future earnings loss be calculated if the plaintiff was unemployed before the injury?",
        answer:
          "Yes, but methodology differs. If the plaintiff had accepted a job offer or was in a defined career path, economists may use that evidence. Otherwise, loss of earning capacity using education and occupational data may be more appropriate. The economist works with counsel to select the measure supported by facts and law.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
  },
  {
    slug: "loss-of-earning-capacity",
    title: "Loss of Earning Capacity",
    metaTitle: "Loss of Earning Capacity Damages | Expert Guide",
    metaDescription:
      "Diminished earning capacity quantification for litigation: occupational mapping, BLS/OEWS data, and work-life expectancy for attorneys.",
    h1: "Loss of Earning Capacity & Diminished Capacity",
    subtitle:
      "Market-based vocational impact when specific job continuation is not the damages measure.",
    sections: [
      {
        paragraphs: [
          "Loss of earning capacity (also called diminished earning capacity) compensates for reduction in the plaintiff's ability to earn income in the competitive labor market. Unlike loss of future earnings tied to specific employment, capacity loss uses occupational earnings data from BLS/OEWS and related sources for pre- and post-event suitable occupations.",
          "This measure is essential when the plaintiff cannot return to their prior career, has limited earnings history, or when actual post-injury wages do not reflect full vocational impact—for example, when a highly skilled worker takes a lower-paying job despite greater market-wide capacity loss.",
        ],
      },
      {
        paragraphs: [
          "Pre-event capacity is often anchored in historical earnings cross-checked with occupational data. Post-event capacity reflects medical restrictions, cognitive limitations, and vocational expert opinions on suitable employment. The economist documents SOC-aligned occupation selections and justifies earnings levels (mean, median, or percentile) without cherry-picking.",
          "Work-life expectancy tables from recognized sources establish the loss period, with reductions when life expectancy is shortened or disability affects labor force participation. Fringe benefits and present value treatment follow the same principles as future earnings analyses.",
        ],
      },
      {
        paragraphs: [
          "Capacity cases generate Daubert challenges on occupation selection, labor force participation assumptions, and whether the plaintiff could work but chooses not to. Transparent methodology and vocational coordination strengthen admissibility. Network economists separate legal conclusions (which measure applies) from economic calculations.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should counsel use earning capacity instead of future earnings?",
        answer:
          "Use earning capacity when state law permits recovery for market-wide vocational diminution, when the plaintiff had minimal pre-injury earnings history, when they returned to work at lower pay that understates true capacity loss, or when they are not working but could perform suitable occupations. The pleadings and jury instructions should align with the measure selected.",
      },
      {
        question: "How do vocational experts and economists work together on capacity cases?",
        answer:
          "Vocational experts identify suitable pre- and post-event occupations based on functional capacity. Economists assign dollar values using BLS/OEWS and related earnings data for those occupations. Economists should review draft vocational reports before finalizing earnings levels to ensure occupational selections are economically consistent.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death", "medical-malpractice-commercial"],
  },
  {
    slug: "present-value-discounting",
    title: "Present Value & Discounting",
    metaTitle: "Present Value of Future Earnings Damages | Guide",
    metaDescription:
      "How forensic economists discount future earnings to present value in litigation: discount rates, nominal vs. real, and forum standards.",
    h1: "Present Value & Discounting of Future Earnings",
    subtitle:
      "Converting future wage and capacity loss streams to a single present value for judgment and settlement.",
    sections: [
      {
        paragraphs: [
          "A dollar earned twenty years from now is worth less than a dollar today. Present value discounting converts a stream of future economic losses into a single sum representing the current value of that loss—typically the figure presented to juries and used in settlement negotiations.",
          "Discount rate selection is among the most contested issues in economic damages litigation. Forums differ on whether to use a nominal discount rate with nominal wage growth, a real rate net of inflation, or a total offset approach. Economists document the methodology applied and cite forum-appropriate authority without offering legal conclusions on which method applies.",
        ],
      },
      {
        paragraphs: [
          "The present value calculation combines the annual loss stream (earnings differential plus fringe benefits where included), work-life expectancy, and the discount rate. Sensitivity analysis showing how the present value changes under alternative rates helps counsel evaluate settlement risk.",
          "Errors in present value calculations—using the wrong rate, confusing nominal and real treatment, or discounting already-present-value figures—are frequent targets of rebuttal experts and Daubert challenges.",
        ],
      },
      {
        paragraphs: [
          "Network economists apply present value as part of comprehensive damages models or as standalone analysis when wage loss is agreed but discount methodology is disputed. All calculations are reproducible with stated assumptions for opposing expert verification.",
        ],
      },
    ],
    faqs: [
      {
        question: "What discount rate do forensic economists use?",
        answer:
          "There is no single universal rate. Federal courts often reference U.S. Treasury yields or similar low-risk rates, sometimes adjusted for wage growth. State courts may follow different approaches including total offset methods. The economist applies the methodology counsel identifies as appropriate for the forum and documents the rate source and rationale.",
      },
      {
        question: "Should lost future earnings be presented to the jury in nominal or present value terms?",
        answer:
          "This is a legal question for counsel and the court. Some jurisdictions require present value presentation; others permit nominal future loss with separate jury instructions on discounting. Economists prepare calculations in the format directed by counsel and explain the time value of money in testimony when needed.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death", "employment-wrongful-termination"],
  },
  {
    slug: "fringe-benefits-damages",
    title: "Fringe Benefits Damages",
    metaTitle: "Fringe Benefits in Economic Damages | Expert Guide",
    metaDescription:
      "Quantifying employer-paid fringe benefits in litigation economic damages: health insurance, retirement, and wage replacement approaches.",
    h1: "Fringe Benefits in Economic Damages",
    subtitle:
      "Capturing employer-paid compensation beyond base wages in loss of earnings models.",
    sections: [
      {
        paragraphs: [
          "Total compensation includes more than base wages. Employer-paid health insurance, retirement plan contributions, paid leave, life insurance, and other benefits can represent 20–40% of total compensation for many workers. Omitting fringe benefits from economic damages models understates loss.",
          "Forensic economists use two primary approaches: the employer cost method (actual cost of benefits to the employer) and the wage replacement method (additional wages needed to purchase equivalent benefits). The approach selected depends on damages theory, forum practice, and available records.",
        ],
      },
      {
        paragraphs: [
          "Documentation comes from employer benefit summaries, Form W-2 Box 12 codes, compensation statements, and industry load factors when employer-specific data is unavailable. Benefits are typically loaded as a percentage of wages or as dollar amounts by year, then included in the annual loss stream before present value discounting.",
          "Disputes arise over whether certain benefits (e.g., defined benefit pensions, stock options) are recoverable under state law, whether COBRA costs substitute for lost employer insurance, and whether benefits should be grossed up for taxes in pre-tax damages jurisdictions.",
        ],
      },
      {
        paragraphs: [
          "Network economists integrate fringe benefits into comprehensive earnings and capacity models or address benefits as a standalone issue when wage loss is stipulated. Double recovery with medical expense damages (for health costs already in life care plans) is avoided per counsel instruction.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are fringe benefits always included in economic damages?",
        answer:
          "Not automatically. Recoverability depends on state law, damages theory, and whether the plaintiff would have received those benefits but for the injury. Some forums exclude certain benefits or treat them differently in wrongful death cases. Counsel directs which benefits to include; economists quantify those directed.",
      },
      {
        question: "How are fringe benefits calculated for self-employed plaintiffs?",
        answer:
          "Self-employed individuals may not receive traditional employer benefits. Economists may use industry load factors, documented self-funded benefit costs, or the cost of purchasing equivalent health and retirement coverage on the individual market—documenting the approach and its factual basis.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death", "employment-wrongful-termination"],
  },
  {
    slug: "wrongful-death-economic-loss",
    title: "Wrongful Death Economic Loss",
    metaTitle: "Wrongful Death Economic Damages | Expert Guide",
    metaDescription:
      "Quantifying decedent wage-earner loss and household services in wrongful death litigation. Forensic economist methodology for attorneys.",
    h1: "Wrongful Death Economic Loss",
    subtitle:
      "Decedent earnings, benefits, and household services quantification under state wrongful death statutes.",
    sections: [
      {
        paragraphs: [
          "Wrongful death economic damages compensate beneficiaries for the financial loss caused by a decedent's death. The measure varies significantly by state but commonly includes the decedent's lost future earnings or earning capacity, lost fringe benefits, and the economic value of household services the decedent would have provided.",
          "The analysis profiles the decedent's employment, earnings trajectory, and work-life expectancy using tax returns, SSA earnings records, employer verification, and BLS/OEWS data. For decedents with limited history, capacity-based approaches and vocational evidence apply.",
        ],
      },
      {
        paragraphs: [
          "Household services—childcare, home maintenance, transportation, and similar tasks—are often quantified separately using market replacement cost or specialist household services economists. Future Earnings Expert network economists coordinate with household services experts to avoid overlap and double recovery.",
          "Survival actions, derivative claims, and loss of consortium economic components (where permitted) require careful alignment with state law. Present value discounting applies to future loss streams. Collateral source rules and setoffs for life insurance or other benefits vary by jurisdiction.",
        ],
      },
      {
        paragraphs: [
          "Defense economists challenge inflated growth assumptions, speculative career paths for young decedents, and household services hours unsupported by evidence. Plaintiff economists document pre-death earnings patterns and realistic household contribution evidence.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who receives wrongful death economic damages?",
        answer:
          "Beneficiaries are defined by state statute—typically surviving spouse, children, or estate. The economist quantifies total economic loss; counsel and the court determine allocation among beneficiaries. The expert does not opine on legal entitlement to specific shares.",
      },
      {
        question: "How is work-life expectancy determined for a wrongful death claim?",
        answer:
          "Economists use recognized work-life expectancy tables based on the decedent's age, gender, education, and disability status at death. Tables from sources such as the Bureau of Labor Statistics or forensic economics literature are commonly cited. Reduced life expectancy generally ends the loss period at the projected date of death rather than normal retirement.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
  },
  {
    slug: "employment-front-back-pay",
    title: "Employment Front & Back Pay",
    metaTitle: "Back Pay & Front Pay Economic Analysis | Guide",
    metaDescription:
      "Forensic economist methodology for back pay, front pay, and lost benefits in employment discrimination and wrongful termination cases.",
    h1: "Employment Front Pay & Back Pay",
    subtitle:
      "Quantifying past and future economic loss in employment litigation with mitigation analysis.",
    sections: [
      {
        paragraphs: [
          "Back pay compensates for compensation lost from the adverse employment action through the date of judgment or reinstatement. The economist reconstructs total compensation the plaintiff would have received—including salary, bonuses, overtime, commissions, and benefits—and credits interim earnings from mitigation.",
          "Front pay addresses future economic loss when reinstatement is not ordered or is impractical. The economist projects compensation and benefits over a defined front pay period, often ending at comparable replacement employment or normal retirement, and may discount to present value in federal court.",
        ],
      },
      {
        paragraphs: [
          "Mitigation is central to both measures. The economist analyzes whether the plaintiff made reasonable efforts to find comparable work and credits documented interim earnings. Failure to mitigate does not automatically zero damages—it reduces loss by what reasonably could have been earned.",
          "Stock options, deferred compensation, and partnership distributions require careful treatment from tax returns and employer records. Promotions the plaintiff would have received but for discrimination may be projected with evidence of employer promotion patterns.",
        ],
      },
      {
        paragraphs: [
          "EEOC and court standards for front pay duration differ. Economists provide scenario analyses (e.g., two-year vs. five-year front pay) to support settlement and trial strategy. Network experts serve both plaintiff and defense in employment matters nationwide.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should front pay run in an employment case?",
        answer:
          "Front pay duration is a legal determination based on reinstatement feasibility, plaintiff age, industry conditions, and case-specific facts. Economists model loss over periods counsel specifies or provide multiple scenarios. Courts may cap front pay; economists do not determine the legal maximum.",
      },
      {
        question: "Are unemployment benefits deducted from back pay?",
        answer:
          "Treatment varies. Some analyses gross up back pay and credit unemployment separately; others net unemployment from lost wages. Counsel directs the approach consistent with forum law and the damages theory. The economist documents all offsets applied.",
      },
    ],
    relatedContextSlugs: ["employment-wrongful-termination"],
  },
  {
    slug: "household-services-coordination",
    title: "Household Services Coordination",
    metaTitle: "Household Services Economic Damages | Guide",
    metaDescription:
      "Coordinating household services loss with earnings damages in injury and wrongful death cases. Avoiding double recovery for attorneys.",
    h1: "Household Services & Economic Coordination",
    subtitle:
      "Integrating household services loss with wage and capacity damages without double counting.",
    sections: [
      {
        paragraphs: [
          "Household services damages compensate for the loss of non-market work a plaintiff or decedent performed—childcare, cooking, cleaning, home maintenance, transportation, and yard work. These services have economic value measurable by market replacement cost even though no wages were paid.",
          "Household services experts (often forensic economists or specialized consultants) quantify hours and market rates. Future Earnings Expert network economists coordinate with household services specialists to ensure consistent assumptions and avoid overlap with other economic heads.",
        ],
      },
      {
        paragraphs: [
          "In injury cases, household services loss may apply when the plaintiff cannot perform prior household tasks due to disability. In wrongful death cases, beneficiaries recover the value of services the decedent would have provided to the household. Work-life or life expectancy defines the loss period.",
          "Double recovery risks arise when household services are counted alongside total disability that already assumes the plaintiff cannot perform any work, or when life care plans include paid caregiving that overlaps with household services. Counsel and experts must delineate each head clearly.",
        ],
      },
      {
        paragraphs: [
          "Network economists may perform household services analysis when scoped, or integrate household services opinions from co-experts into the total economic damages summary. All assumptions on hours, rates, and period are documented for cross-examination.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a separate household services expert always needed?",
        answer:
          "Not always. Some forensic economists perform household services analysis; others coordinate with specialists. Complex cases with disputed hours or multiple dependents may benefit from a dedicated expert. Future Earnings Expert can connect counsel with economists who include household services in their scope.",
      },
      {
        question: "How are household services valued?",
        answer:
          "The market replacement cost approach values hours the plaintiff or decedent spent on household tasks multiplied by the market rate for equivalent services (e.g., childcare provider, housekeeper rates from BLS or regional surveys). Past patterns of contribution and future need drive the hours assumption.",
      },
    ],
    relatedContextSlugs: ["personal-injury-wrongful-death"],
  },
  {
    slug: "rebuttal-opposing-economist",
    title: "Rebuttal of Opposing Economist",
    metaTitle: "Rebutting Opposing Economist Reports | Guide",
    metaDescription:
      "How attorneys use rebuttal forensic economists to critique opposing damages reports: Daubert, assumptions, and alternative models.",
    h1: "Rebuttal of Opposing Economist Reports",
    subtitle:
      "Structured critique of opposing economic damages assumptions, data, and methodology.",
    sections: [
      {
        paragraphs: [
          "When opposing counsel retains a forensic economist, their report often anchors settlement discussions and trial strategy. A rebuttal economist provides systematic critique of assumptions, data sources, calculations, and methodology—identifying errors, unsupported projections, and Daubert vulnerabilities.",
          "Rebuttal engagements range from focused written critiques for mediation to full alternative damages models with expert testimony. Scope is defined with counsel based on budget, timeline, and whether the rebuttal expert will testify.",
        ],
      },
      {
        paragraphs: [
          "Common rebuttal targets include inflated wage growth, inappropriate occupational earnings from BLS/OEWS, failure to credit mitigation or collateral sources, incorrect work-life expectancy, present value errors, and conflation of earning capacity with future earnings measures.",
          "Effective rebuttal experts also prepare cross-examination outlines and identify demonstratives that simplify methodological flaws for judges and juries. Daubert motion support may include affidavits addressing FRE 702 reliability factors.",
        ],
      },
      {
        paragraphs: [
          "Future Earnings Expert connects counsel with economists experienced in rebuttal on both plaintiff and defense sides. Rebuttal experts maintain independence—they critique methodology, not advocate outcomes unsupported by data.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a rebuttal expert testify without performing an independent analysis?",
        answer:
          "Critique-only rebuttal is possible for deposition cross-examination support or Daubert briefing, but many courts expect rebuttal experts to offer independent opinions grounded in their own analysis. Counsel should scope the engagement to meet forum expectations and FRE 702 requirements.",
      },
      {
        question: "When should I retain a rebuttal economist?",
        answer:
          "Retain early enough to respond to opposing disclosures within discovery deadlines and to inform settlement strategy. Waiting until trial preparation limits options for supplemental reports and Daubert challenges. Initial review of the opposing report can identify whether full rebuttal or targeted critique is warranted.",
      },
    ],
    relatedContextSlugs: [
      "personal-injury-wrongful-death",
      "employment-wrongful-termination",
      "medical-malpractice-commercial",
    ],
  },
];

export function getEarningsTypeBySlug(slug: string): PageContent | undefined {
  return earningsTypes.find((t) => t.slug === slug);
}

import type { ContentSection, FAQ } from "../site-config";

export type WhatIsContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  sections: ContentSection[];
  comparisonTable: {
    columns: string[];
    rows: string[][];
  };
  faqs?: FAQ[];
};

export const whatIsContent: WhatIsContent = {
  metaTitle: "What Is a Future Earnings Expert? | Litigation Role",
  metaDescription:
    "What a future earnings expert does in US litigation: forensic economist role, FRE 702, methodology, and when attorneys should retain one.",
  h1: "What Is a Future Earnings Expert?",
  subtitle:
    "The forensic economist's role in quantifying future earnings, earning capacity, and economic damages for litigation attorneys.",
  sections: [
    {
      heading: "Definition",
      paragraphs: [
        "A future earnings expert—almost always a forensic economist in practice—is retained in litigation to quantify economic damages from lost future wages, diminished earning capacity, fringe benefits, and related financial loss. The expert translates employment records, tax data, and labor market statistics into dollar damages supported by an expert report and testimony.",
        "Future Earnings Expert is a referral network connecting plaintiff and defense attorneys with qualified independent forensic economists nationwide. We are not a consumer finance site, cryptocurrency platform, or investment coaching service. Similar names online refer to unrelated businesses; our focus is exclusively litigation and expert witness work.",
      ],
    },
    {
      heading: "What a Future Earnings Expert Does",
      list: [
        "Reviews tax returns, W-2s, pay stubs, employer records, and SSA earnings history",
        "Projects but-for earnings and post-event earnings or earning capacity",
        "Applies work-life expectancy tables and BLS/OEWS occupational wage data",
        "Quantifies fringe benefits and discounts future loss to present value",
        "Prepares expert reports for disclosure under court rules",
        "Testifies at deposition and trial; provides rebuttal of opposing economists",
        "Coordinates with vocational experts on employability and suitable occupations",
      ],
    },
    {
      heading: "What a Future Earnings Expert Does Not Do",
      list: [
        "Provide financial planning, investment advice, or tax preparation for the public",
        "Opine on medical causation, liability, or legal standards—that is for medical experts and counsel",
        "Guarantee damages amounts, settlement outcomes, or admissibility (courts decide admissibility)",
        "Replace vocational experts on job placement and transferable skills",
        "Perform life care planning or value non-economic pain and suffering damages",
      ],
    },
    {
      heading: "Why Future Earnings Quantification Is a Specialist Discipline",
      paragraphs: [
        "Economic damages are not calculated by multiplying years remaining to retirement by current salary. Growth rates, mitigation, occupational changes, fringe benefits, present value discounting, and the choice between earnings and capacity measures all require documented methodology.",
        "Opposing experts, Daubert motions, and mediation depend on defensible analysis. Attorneys without economist support risk understating client damages or advancing figures that collapse under cross-examination.",
      ],
    },
    {
      heading: "FRE 702 and Daubert",
      paragraphs: [
        "Federal Rule of Evidence 702 and the Daubert standard require expert opinions to rest on sufficient facts, reliable methods, and reliable application. Forensic economists strengthen admissibility by citing BLS/OEWS and other verifiable data, stating assumptions explicitly, and producing reproducible calculations.",
        "Admissibility remains the court's determination. Network experts document methodology for gatekeeping review without promising outcomes.",
      ],
    },
    {
      heading: "When Attorneys Retain a Future Earnings Expert",
      list: [
        "Permanent injury preventing return to prior employment",
        "Wrongful death of a wage earner or household contributor",
        "Wrongful termination with back pay, front pay, or benefits loss",
        "Medical malpractice with lifelong disability, especially pediatric cases",
        "Opposing counsel has retained an economist requiring rebuttal",
        "Settlement requires a credible damages range grounded in data",
        "Present value, fringe benefits, or capacity vs. earnings is disputed",
      ],
    },
    {
      heading: "Plaintiff and Defense Engagements",
      paragraphs: [
        "Network economists accept plaintiff and defense retentions subject to conflicts screening. Analyses follow evidence and methodology—not a predetermined side. Defense economists test growth assumptions, mitigation, and occupational selections; plaintiff economists establish full supported economic loss.",
      ],
    },
  ],
  comparisonTable: {
    columns: ["Role", "Primary Question", "Typical Output"],
    rows: [
      [
        "Forensic economist (future earnings expert)",
        "How much was lost in dollars?",
        "Economic damages expert report and testimony",
      ],
      [
        "Vocational expert",
        "What jobs can the plaintiff perform?",
        "Vocational evaluation with suitable occupations",
      ],
      [
        "Medical / IME expert",
        "What are the injuries and restrictions?",
        "Medical report with functional limitations",
      ],
      [
        "Life care planner",
        "What future medical care is needed?",
        "Life care plan with medical cost projection",
      ],
      [
        "Attorney",
        "What is the legal theory and measure?",
        "Pleadings, discovery, trial strategy",
      ],
    ],
  },
  faqs: [
    {
      question: "Is a future earnings expert the same as a financial advisor?",
      answer:
        "No. Financial advisors provide investment and planning advice to consumers. A future earnings expert is a forensic economist retained in litigation to quantify economic damages and testify as an expert witness. Future Earnings Expert connects attorneys with litigation specialists—not consumer finance professionals.",
    },
    {
      question: "How is a future earnings expert different from a vocational expert?",
      answer:
        "Vocational experts evaluate employability and identify suitable occupations based on functional capacity. Forensic economists assign dollar values to earnings and capacity using tax records, BLS/OEWS data, work-life expectancy, and present value. Both are often needed in the same case, with the vocational expert typically retained first.",
    },
  ],
};

export function getWhatIsContent(): WhatIsContent {
  return whatIsContent;
}

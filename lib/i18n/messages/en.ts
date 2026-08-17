import type { Messages } from "./de";

const en: Messages = {
  meta: {
    title: "WebSurface — App ideas for SMEs",
    description:
      "WebSurface finds suitable app concepts for small and medium-sized businesses — based on your industry or on an analysis of anonymized business data.",
  },
  nav: {
    ideen: "App ideas",
    analyse: "Data analysis",
    impressum: "Legal notice",
    datenschutz: "Privacy",
  },
  footer: {
    copyright: "© {year} WebSurface — Prototype, not a production offering",
  },
  languageSwitcher: {
    label: "Select language",
  },
  themeToggle: {
    ariaLabel: "Toggle light/dark mode",
  },
  branchBadge: {
    none: "No industry selected yet",
    choose: "Choose industry",
    selectedOne: "Selected industry",
    selectedMany: "Selected industries",
    change: "Change",
  },
  home: {
    eyebrow: "Prototype — academic project",
    title: "Fitting app ideas for your small or medium-sized business",
    description:
      "WebSurface suggests vetted, practical app concepts — either based on your industry or, optionally, on a real analysis of anonymized business data. WebSurface does not generate automatic production code, but robust concept briefs as a basis for decision-making.",
    ctaBranch: "Choose industry",
    ctaAnalyse: "Analyze business data",
    sectorsTitle: "The four core areas of the SME sector",
    sectors: [
      {
        name: "Services",
        detail: "IT & consulting, cleaning/facility services, financial & staffing services",
      },
      {
        name: "Trade",
        detail: "Wholesale, retail, vehicle trade",
      },
      {
        name: "Industry & manufacturing",
        detail: "Mechanical engineering, metalworking, electrical engineering",
      },
      {
        name: "Construction & skilled trades",
        detail: "Main construction trade, finishing trade, classic craftsmanship",
      },
    ],
    privacyTitle: "Privacy & transparency",
    privacyBodyPre:
      "For the optional data analysis, raw data is processed exclusively in memory and not stored permanently — only aggregated metrics are created. Recommendations are generated rule-based and are automatically labeled as such. See",
    privacyLinkText: "privacy policy",
  },
  onboarding: {
    title: "Which core areas apply to your business?",
    description:
      "Select one or more core areas of the SME sector. The sub-industries are optional and only refine the description — idea matching currently happens at the core-area level.",
    submit: "Show app ideas",
  },
  ideen: {
    titleFiltered: "Matching app ideas",
    titleAll: "All app ideas",
    filteredBy: "Filtered by: {names}",
    changeSelection: "Change selection",
    noIdeas: "No ideas found for this selection.",
    effort: {
      NIEDRIG: "Low effort",
      MITTEL: "Medium effort",
      HOCH: "High effort",
    },
    impact: {
      NIEDRIG: "Low impact",
      MITTEL: "Medium impact",
      HOCH: "High impact",
    },
  },
  analyse: {
    title: "Analyze business data",
    description:
      "Upload a CSV file with sales data (columns: date, category, product, quantity, revenue). The file is processed exclusively in the server's memory and then discarded — only aggregated metrics are stored, no individual records.",
    noticePre:
      "Please upload only anonymized data with no personal references (no names, customer numbers, etc.). See",
    noticeLinkText: "privacy policy",
    csvLabel: "CSV file",
    sampleButton: "Use sample data (fictional retailer)",
    selectedFile: "Selected: {name} ({size} KB)",
    consentLabel: "I confirm that this data is anonymized and contains no personal references.",
    submitting: "Analyzing…",
    submit: "Start analysis",
    errorUnknownAnalysis: "Unknown error during analysis.",
    errorUnknown: "Unknown error.",
    automatedLabel: "Automatically generated recommendation",
    noRecommendation: "No recommendation determined",
    metricsTitle: "Calculated metrics",
    rowCount: "Data rows",
    totalRevenue: "Total revenue",
    revenueByCategory: "Revenue by category",
    seasonality: "Seasonality by category (peak/low month factor)",
    rawDataNotice: "Raw data was not stored — only the aggregated metrics shown above.",
  },
  impressum: {
    title: "Legal notice",
    noticePre: "Note (prototype):",
    noticeBody:
      "This project is an academic/portfolio prototype without a real business operation. All entries marked with",
    noticePost:
      "are placeholders. Before any real production use, they must be replaced with verified, real information — nothing on this page is a real provider identification.",
    sections: {
      provider: {
        title: "Information pursuant to § 5 DDG (German Digital Services Act)",
        lines: ["[Company name / legal form]", "[Street, house number]", "[Postal code, city]", "[Country]"],
      },
      represented: {
        title: "Represented by",
        lines: ["[First and last name of management]"],
      },
      contact: {
        title: "Contact",
        lines: ["Phone: [phone number]", "Email: [email address]"],
      },
      register: {
        title: "Register entry",
        lines: [
          "Entry in the commercial register [if applicable].",
          "Register court: [register court]",
          "Register number: [register number]",
        ],
      },
      vat: {
        title: "VAT identification number",
        body: "VAT identification number pursuant to § 27a of the German VAT Act: [VAT ID, if available]",
      },
      responsible: {
        title: "Responsible for content pursuant to § 18 (2) MStV",
        body: "Not applicable — this website does not offer journalistic-editorial content.",
      },
      dispute: {
        title: "EU dispute resolution",
        bodyPre: "The European Commission provides a platform for online dispute resolution (ODR), available at",
        bodyUrl: "ec.europa.eu/consumers/odr",
        bodyPost:
          "WebSurface is aimed exclusively at businesses (B2B), so there is no legal obligation to mention this — we nevertheless point it out transparently. We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.",
      },
      liabilityContent: {
        title: "Liability for content",
        body: "As a service provider, we are responsible for our own content on these pages under general law. However, we are not obliged to monitor transmitted or stored third-party information. Obligations to remove or block the use of information under general law remain unaffected by this.",
      },
      liabilityLinks: {
        title: "Liability for links",
        body: "This app currently contains no links to external third-party content. Should links be included in the future: the operators of the linked pages are exclusively responsible for their content.",
      },
      copyright: {
        title: "Copyright",
        body: "The content and works created by the operators on these pages are subject to German copyright law. Third-party contributions (e.g., open-source libraries) are marked as such.",
      },
    },
  },
  datenschutz: {
    title: "Privacy policy",
    noticePre: "Note (prototype):",
    noticeBody:
      "This policy transparently describes the actual state of this prototype — including the points still missing for real production operation. It deliberately does not claim any mechanisms that do not exist in the code.",
    sections: {
      controller: {
        title: "1. Data controller",
        bodyPre: "The operator of this application is responsible within the meaning of the GDPR, see",
        linkText: "legal notice",
        bodyPost: "([placeholder information in the prototype]).",
      },
      logs: {
        title: "2. Server log files",
        body: "When this application is accessed, the hosting server technically necessarily processes IP address, time of access, and user agent to ensure operation (Art. 6(1)(f) GDPR, legitimate interest in operational security). This data is not merged with other data sources.",
      },
      onboarding: {
        title: "3. Industry selection (onboarding)",
        bodyPre: "Your selection of core areas/sub-industries is passed between pages as a URL parameter and additionally stored in your browser's",
        code: "localStorage",
        bodyPost:
          "so it can be displayed at the top across pages. This data remains exclusively on your device and is not transmitted to the server or stored server-side with personal reference.",
      },
      analysis: {
        title: "4. Optional data analysis (CSV upload)",
        intro: "If you voluntarily upload a CSV file for analysis, the following applies:",
        items: [
          "The file is processed exclusively in the server's memory (lib/csv-analysis.ts) and then discarded — no raw data or individual rows are stored on disk.",
          "Only the aggregated metrics (e.g., revenue by category and month) and the resulting recommendation are stored — without personal reference.",
          "The legal basis is your consent (Art. 6(1)(a) GDPR) via the confirmation checkbox at upload.",
          "Responsibility of the uploading person: By uploading, you confirm that the file is anonymized and contains no personal reference. Do not upload customer data, names, customer numbers, or comparable personal data. Should an uploaded file nevertheless contain personal data, the uploading company would remain responsible as data controller — for production operation, a data processing agreement (DPA) under Art. 28 GDPR would then be required, which does not exist at the current prototype stage.",
        ],
      },
      automated: {
        title: "5. Automatically generated recommendations (Art. 22 GDPR, EU AI Act)",
        body: "The app recommendation after an analysis is generated by rule-based, non-learning logic (not an AI system within the meaning of the EU AI Act as delivered in this prototype). It is a suggestion for human review, not an automated decision with legal effect within the meaning of Art. 22 GDPR. Should an AI/LLM-based model be connected in the future, this would be added here and labeled in accordance with the EU AI Act's transparency obligations.",
      },
      retention: {
        title: "6. Retention period",
        bodyPre: "In the current development state, aggregated analysis results are stored in the local database and are",
        emphasis: "not automatically deleted",
        bodyPost: "— a deletion job has not yet been implemented. For production operation, an automatic deletion period (e.g., 30 days) is planned, see README.",
      },
      cookies: {
        title: "7. Cookies & tracking",
        bodyPre: "This application does not use any analytics, marketing, or tracking cookies and no third-party services. Only technically necessary, temporary session data of the framework is used. In addition, the app stores your industry selection, your light/dark mode setting, and your language selection purely client-side in your browser's",
        code: "localStorage",
        bodyPost: "or in a purely technical cookie for language selection (no analytics or tracking cookies, no transmission to third parties). A cookie consent banner under § 25 TTDSG is therefore not required.",
      },
      hosting: {
        title: "8. Hosting",
        bodyPre: "In local development operation, this application runs exclusively on your own computer. For production operation, hosting in the EU (e.g., AWS region eu-central-1, Frankfurt) is planned, see the",
        code: "infra/",
        bodyPost: "directory.",
      },
      rights: {
        title: "9. Your rights",
        bodyPre: "Under Art. 15–21 GDPR, you have the right to information, rectification, erasure, restriction of processing, data portability, and objection to processing. Please contact the address given in the",
        linkText: "legal notice",
        bodyPost: "for this purpose. You also have the right to lodge a complaint with the competent data protection supervisory authority.",
      },
    },
  },
};

export default en;

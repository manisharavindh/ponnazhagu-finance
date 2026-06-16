export const UI_STRINGS = {
  // Common
  checkEligibilityTitle: "Check Your Eligibility",
  checkEligibility: "CHECK ELIGIBILITY",
  applyNow: "Apply Now",
  applyForLoan: "Apply for this Loan",

  // Header / Nav
  language: "English / தமிழ்",

  // Hero
  branchTimings: "Branch timings",

  // Calculator
  calculatorTitle: "Plan Your Finances",
  loanAmount: "Loan Amount",
  tenure: "Tenure",
  interestRate: "Interest Rate",
  months: "months",
  month: "month",
  mos: "mos",
  mo: "mo",
  monthlyEmi: "Monthly EMI",
  totalPrincipal: "Total Principal",
  totalInterest: "Total Interest",
  totalRepayment: "Total Repayment Amount",
  estimatedPledge: "Estimated Pledge Required",
  gold: "Gold",
  silver: "Silver",
  or: "or",
  calculatorDisclaimer: "* Calculations are indicative and based on simple interest. Actual EMI, interest, and terms may vary based on your credit profile, documentation, and prevailing rates.",

  // Form
  fullName: "Full Name *",
  mobileNumber: "Mobile Number *",
  selectLoanType: "Select Loan Type",
  loanAmountNeeded: "Loan Amount Needed *",
  submitInquiry: "Submit Inquiry",
  validating: "Validating...",
  submitted: "Submitted!",

  // Sections
  howItWorks: "How It Works",
  simpleSteps: "4 Simple Steps",
  step: "Step",
  ourOfferings: "Our Offerings",
  whatWeProvide: "What We Provide",
  whyChooseUs: "Why Choose Us?",
  builtOnTrust: "Built on Trust",
  faq: "Frequently Asked Questions",
  clearAnswers: "Clear Answers",

  // Footer
  contactUs: "CONTACT US",
  ourServices: "OUR SERVICES",
  more: "MORE",
  visitOurBranch: "VISIT OUR BRANCH",
  viewOnMap: "View on Google Maps",
  visitBranchBtn: "VISIT BRANCH",
  footerDisclaimer: "Disclaimer: The statistical data, rates, and values mentioned on this website are for illustrative purposes only. Actual rates, values, and terms may vary based on market conditions, company policies, and individual eligibility criteria.",
  allRightsReserved: "All rights reserved.",

  // Mobile FABs
  callNow: "Call Now",
  whatsapp: "WhatsApp",
  call: "Call",

  // Hero Stats
  govApproved: "Government Approved",
  yearsOfTrust: "Years of Trust",
  happyCustomers: "Happy Customers",
  loansDisbursed: "Loans Disbursed",

  // Services
  comingSoon: "Coming Soon",
  servicesWeProvide: "Services We Provide",

  // Loan Process
  apply: "Apply",
  valuation: "Valuation",
  approval: "Approval",
  disbursal: "Disbursal",

  // Inquiry form specific
  inquiryReceived: "Inquiry Received!",
  thankYou: "Thank you,",
  teamWillReachYou: "Our team will reach you on",
  within30Min: "within 30 minutes during business hours.",
  getCallback: "Get a callback in 30 minutes",
  amountNeededPlaceholder: "Amount Needed *",
  bySubmittingText1: "By submitting, you agree to our",
  bySubmittingText2: "&",
  bySubmittingText3: " We'll contact you at the number provided.",
  terms: "Terms",
  privacyPolicy: "Privacy Policy",
  termsAndConditions: "Terms & Conditions"
};

export const COMPANY = {
  name: "Ponnazhagu Finance",
  tagline: "Your Trusted Financial Partner for Growth & Prosperity",
  phone: "+91 99446 34006",
  phone2: "+91 63691 11565",
  whatsapp: "+91 99446 34006",
  email: "ponnazhagufinance.svg@gmail.com",
  address: "69/1, Muthur road, Kollangudi revenue village, Sivagangai District, Tamil Nadu - 630551",
  branchTimings: "Mon – Sat: 10:00 AM – 4:00 PM",
  founded: "1998",
  registrationInfo: "RBI Registered NBFC | CIN: U65910TN1998PLC012345",
  map: "https://maps.app.goo.gl/giFxQ5XTE2dasJJv7"
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Calculator", href: "#calculator" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SERVICE_DROPDOWN = [
  { label: "Gold Loan", href: "#services" },
  { label: "Silver Loan", href: "#services" },
  { label: "More", href: "#services" },
];

export const HERO = {
  headline: {
    start: "Your Trusted Financial Partner for ",
    highlight: "Growth",
  },
  subheadline: "Low Interest Rates • Minimal Documentation • Quick Approval",
  traits: [
    "Interest rates starting from 0.75%",
    "Loan approval in just 30 minutes",
    "100% safe gold storage",
    "No hidden charges",
  ],
  ctaText: "Apply Now",
};

export const SERVICES = [
  {
    id: "gold-loan",
    icon: "Gem",
    title: "Gold Loan",
    highlight: "Max Value per Gram, Safe Vault Storage",
    benefits: [
      "Industry-best valuation per gram",
      "100% safe vault storage",
      "Instant disbursal within 30 minutes",
      "Flexible repayment options",
    ],
    color: "#D4AF37",
    isActive: true,
  },
  {
    id: "silver-loan",
    icon: "Coins",
    title: "Silver Loan",
    highlight: "Instant Cash for Silver Articles & Bars",
    benefits: [
      "High valuation for pure silver",
      "100% secure vault storage",
      "Instant disbursal within 30 minutes",
      "Flexible repayment options",
    ],
    color: "#E2E8F0",
    isActive: true,
  },
  {
    id: "business-loan",
    icon: "Store",
    title: "Business / Micro Finance",
    highlight: "Empowering Small Businesses & Retailers",
    benefits: [
      "Loans from ₹25,000 to ₹2,50,000",
      "No collateral for micro loans",
      "Working capital & expansion finance",
      "Doorstep service available",
    ],
    color: "#0F172A",
    isActive: false,
  },
  {
    id: "personal-loan",
    icon: "Wallet",
    title: "Personal / Salary Loan",
    highlight: "Minimal Documents, Same Day Sanction",
    benefits: [
      "Salary-based quick approval",
      "Only Aadhaar, PAN & salary slip needed",
      "EMI options from 3 to 36 months",
      "Pre-approved offers for existing customers",
    ],
    color: "#7A0616",
    isActive: false,
  },
];

export const TRUST_BADGES = [
  {
    icon: "ShieldCheck",
    title: "100% Safe & Secure",
    description: "Gold stored in high-grade vaults with 24/7 CCTV surveillance",
  },
  {
    icon: "Eye",
    title: "Transparent Schemes",
    description: "No hidden charges, every fee and rate disclosed upfront",
  },
  {
    icon: "Clock",
    title: "30-Minute Processing",
    description: "Quick verification and disbursal, walk in and walk out funded",
  },
  {
    icon: "Award",
    title: "Government Approved",
    description: "Licensed and regulated properly. Complete peace of mind.",
  },
];

export const FAQ_DATA = [
  {
    question: "What documents are needed for a Gold Loan?",
    answer: "You need a valid government-issued photo ID (Aadhaar Card, Voter ID, or Passport) and the gold ornaments you wish to pledge. The entire process takes under 30 minutes.",
  },
  {
    question: "How is the gold valued for the loan amount?",
    answer: "We evaluate your gold based on purity (carats) and current market rates. We use digital karat meters for transparent assessment. You receive the industry-best value per gram with no hidden deductions.",
  },
  {
    question: "Are there any processing fees or hidden charges?",
    answer: "We charge a nominal processing fee of 0.5% to 1% of the loan amount, disclosed upfront before loan sanction. There are absolutely no hidden charges, pre-closure penalties, or surprise deductions.",
  },
  {
    question: "Can I prepay or foreclose my loan early?",
    answer: "Yes, you can prepay or foreclose your loan at any time without any penalty. We encourage early repayment and there are zero foreclosure charges on all our loan products.",
  },
  {
    question: "Is my gold safe during the loan period?",
    answer: "Absolutely. Your gold is stored in high-grade, fireproof vaults with 24/7 CCTV surveillance. You receive a detailed sealed receipt at the time of pledging.",
  },
  {
    question: "What happens if the loan or interest is not paid by the due date?",
    answer: "If the principal amount or interest is not paid by the given due date, despite repeated reminders, the pledged gold or silver may be auctioned to recover the outstanding dues as per our terms and conditions.",
  },
];

export const LOAN_TYPES = [
  { value: "", label: "Select Loan Type" },
  { value: "gold-loan", label: "Gold Loan" },
  { value: "silver-loan", label: "Silver Loan" },
  { value: "more", label: "More" },
];

export const CALCULATOR_CONFIG = {
  goldLoan: {
    minAmount: 10000,
    maxAmount: 5000000,
    defaultAmount: 100000,
    stepAmount: 10000,
    minTenure: 1,
    maxTenure: 36,
    defaultTenure: 12,
    interestRate: 0.75, // monthly %
    label: "Gold Loan Estimator",
  },
  emiCalculator: {
    minAmount: 10000,
    maxAmount: 550000,
    defaultAmount: 25000,
    stepAmount: 5000,
    minTenure: 1,
    maxTenure: 12,
    defaultTenure: 12,
    interestRate: 1.25, // monthly %
    label: "EMI Calculator",
  },
};

export const FOOTER_LINKS = {
  services: [
    { label: "Gold Loan", href: "#services" },
    { label: "Silver Loan", href: "#services" },
    { label: "Business / Micro Finance", href: "#services" },
    { label: "Personal / Salary Loan", href: "#services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Careers", href: "#" }
  ],
};

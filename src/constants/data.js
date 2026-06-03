// src/constants/data.js
// ──────────────────────────────────────────────────────────────
// All text, service details, navigation links, and configuration
// are defined here so the UI simply maps over objects.
// TODO: Replace hardcoded data with Supabase/Backend API calls.
// ──────────────────────────────────────────────────────────────

export const COMPANY = {
  name: "Ponnazhagu Finance",
  tagline: "Your Trusted Financial Partner for Growth & Prosperity",
  phone: "+91 99446 34006",
  whatsapp: "+91 99446 34006",
  email: "[EMAIL_ADDRESS]",
  address: "No. 12, Ranganathan Street, T. Nagar, Chennai – 600017, Tamil Nadu",
  branchTimings: "Mon – Sat: 10:00 AM – 4:00 PM",
  founded: "1998",
  registrationInfo: "RBI Registered NBFC | CIN: U65910TN1998PLC012345",
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
  { label: "Business / Micro Finance", href: "#services" },
  { label: "Personal / Salary Loan", href: "#services" },
  { label: "Vehicle Loan", href: "#services" },
  { label: "Savings / Fixed Schemes", href: "#services" },
];

export const HERO = {
  headline: "Your Trusted Financial Partner for Growth & Prosperity",
  subheadline:
    "Low Interest Rates • Minimal Documentation • Quick Same-Day Approval",
  traits: [
    "Interest rates starting from 0.75% per month",
    "Loan approval in just 30 minutes",
    "100% safe & insured gold storage",
    "No hidden charges – complete transparency",
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
      "100% insured vault storage",
      "Instant disbursal within 30 minutes",
      "Flexible repayment options",
    ],
    color: "#D4AF37",
    isActive: true,
  },
  {
    id: "business-loan",
    icon: "Store",
    title: "Business / Micro Finance",
    highlight: "Empowering Small Businesses & Retailers",
    benefits: [
      "Loans from ₹25,000 to ₹25,00,000",
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
  {
    id: "vehicle-loan",
    icon: "Car",
    title: "Vehicle Loan",
    highlight: "Two-Wheeler & Commercial Vehicle Funding",
    benefits: [
      "New & used vehicle financing",
      "Up to 90% on-road price funding",
      "Special rates for commercial vehicles",
      "Hassle-free RC transfer assistance",
    ],
    color: "#0F172A",
    isActive: false,
  },
  {
    id: "savings-schemes",
    icon: "PiggyBank",
    title: "Savings / Fixed Schemes",
    highlight: "Secure Returns for Your Family's Future",
    benefits: [
      "Attractive fixed deposit rates",
      "Monthly, quarterly & annual payout",
      "Senior citizen special rates",
      "Nomination & auto-renewal facility",
    ],
    color: "#D4AF37",
    isActive: false,
  },
];

export const TRUST_BADGES = [
  {
    icon: "ShieldCheck",
    title: "100% Safe & Insured",
    description: "Gold stored in bank-grade vaults with full insurance coverage",
  },
  {
    icon: "Eye",
    title: "Transparent Schemes",
    description: "No hidden charges – every fee and rate disclosed upfront",
  },
  {
    icon: "Clock",
    title: "30-Minute Processing",
    description: "Quick verification and disbursal, walk in and walk out funded",
  },
  {
    icon: "Award",
    title: "Govt. Registered NBFC",
    description: "RBI registered, fully compliant with all regulatory guidelines",
  },
];

export const FAQ_DATA = [
  {
    question: "What documents are needed for a Gold Loan?",
    answer:
      "You need a valid government-issued photo ID (Aadhaar Card, Voter ID, or Passport) and the gold ornaments you wish to pledge. No income proof or ITR is required. The entire process takes under 30 minutes.",
  },
  {
    question: "How is the gold valued for the loan amount?",
    answer:
      "Our certified appraisers evaluate your gold based on purity (carats) and current market rates. We use digital karat meters for transparent assessment. You receive the industry-best value per gram with no hidden deductions.",
  },
  {
    question: "Are there any processing fees or hidden charges?",
    answer:
      "We charge a nominal processing fee of 0.5% to 1% of the loan amount, disclosed upfront before loan sanction. There are absolutely no hidden charges, pre-closure penalties, or surprise deductions.",
  },
  {
    question: "Can I prepay or foreclose my loan early?",
    answer:
      "Yes, you can prepay or foreclose your loan at any time without any penalty. We encourage early repayment and there are zero foreclosure charges on all our loan products.",
  },
  {
    question: "Is my gold safe during the loan period?",
    answer:
      "Absolutely. Your gold is stored in bank-grade, fireproof vaults with 24/7 CCTV surveillance. Every gram is fully insured against theft, fire, and natural calamities. You receive a detailed sealed receipt at the time of pledging.",
  },
  {
    question: "What are the interest rates for Personal/Salary Loans?",
    answer:
      "Interest rates for personal and salary loans start from 1.25% per month (15% p.a.), depending on your income, employer category, and credit profile. Salaried individuals from listed companies enjoy preferential rates.",
  },
];

export const LOAN_TYPES = [
  { value: "", label: "Select Loan Type" },
  { value: "gold-loan", label: "Gold Loan" },
  { value: "business-loan", label: "Business / Micro Finance" },
  { value: "personal-loan", label: "Personal / Salary Loan" },
  { value: "vehicle-loan", label: "Vehicle Loan" },
  { value: "savings-scheme", label: "Savings / Fixed Scheme" },
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
    minAmount: 50000,
    maxAmount: 10000000,
    defaultAmount: 500000,
    stepAmount: 25000,
    minTenure: 3,
    maxTenure: 60,
    defaultTenure: 24,
    interestRate: 1.25, // monthly %
    label: "EMI Calculator",
  },
};

export const FOOTER_LINKS = {
  services: [
    { label: "Gold Loan", href: "#services" },
    { label: "Business / Micro Finance", href: "#services" },
    { label: "Personal / Salary Loan", href: "#services" },
    { label: "Vehicle Loan", href: "#services" },
    { label: "Savings / Fixed Schemes", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Branches", href: "#contact" },
    { label: "Careers", href: "#" },
    { label: "CSR Initiatives", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Grievance Redressal", href: "#" },
    { label: "Fair Practice Code", href: "#" },
  ],
};

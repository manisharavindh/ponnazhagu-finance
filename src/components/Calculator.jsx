import { useState, useMemo } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { CALCULATOR_CONFIG } from "../constants/data";
import Button from "./ui/Button";

function formatINR(num) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

function useCalculator(config) {
  const [amount, setAmount] = useState(config.defaultAmount);
  const [tenure, setTenure] = useState(config.defaultTenure);

  const result = useMemo(() => {
    const monthlyRate = config.interestRate / 100;
    const totalInterest = amount * monthlyRate * tenure;
    const totalRepayment = amount + totalInterest;
    const emi = totalRepayment / tenure;
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalRepayment: Math.round(totalRepayment),
      interestRate: config.interestRate,
    };
  }, [amount, tenure, config.interestRate]);

  return { amount, setAmount, tenure, setTenure, result };
}

const DonutChart = ({ principal, interest }) => {
  const total = principal + interest;
  const principalPercent = total > 0 ? (principal / total) * 100 : 100;

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const principalOffset = circumference - (principalPercent / 100) * circumference;

  return (
    <div className="relative w-40 h-40 mx-auto mb-8">
      <svg className="w-full h-full transform -rotate-90 drop-shadow-lg" viewBox="0 0 140 140">
        {/* Background Circle (Total Interest - Cream/White) */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="transparent"
          stroke="#F5F0E8"
          strokeWidth="12"
          className="opacity-90"
        />
        {/* Foreground Circle (Principal - Gold) */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="transparent"
          stroke="#D4AF37"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={principalOffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Principal</span>
        <span className="text-sm font-extrabold text-[#D4AF37]">{Math.round(principalPercent)}%</span>
      </div>
    </div>
  );
};

export default function Calculator() {
  const [activeTab, setActiveTab] = useState("goldLoan");
  const config = CALCULATOR_CONFIG[activeTab];

  const tabs = [
    { key: "goldLoan", label: "Gold Loan Estimator" },
    { key: "emiCalculator", label: "EMI Calculator" },
  ];

  // We lift state up here so the entire 2-column layout can read it
  const { amount, setAmount, tenure, setTenure, result } = useCalculator(config);
  const [purity, setPurity] = useState("22K");

  return (
    <section id="calculator" className="bg-brand-bg-warm py-14 sm:py-16 lg:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 lg:mb-14">
          {/* <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase mb-3"
            style={{
              background: "linear-gradient(135deg, rgba(122,6,22,0.1), rgba(122,6,22,0.04))",
              color: "#7A0616",
              letterSpacing: "0.15em",
            }}
          >
            <CalcIcon size={13} />
            Financial Calculators
          </span> */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-extrabold text-brand-text-dark leading-tight mb-1">
            Plan Your Finances With Confidence
            {/* <span className="text-brand-text-dark"></span> */}
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-dot" />
          </div>
          {/* <p className="text-brand-text-muted text-sm lg:text-[15px] leading-relaxed mt-3">
            Use our interactive calculators to estimate your EMI and plan your
            repayment schedule before you apply.
          </p> */}
        </div>

        {/* ── Outer Wrapper: Command Center ── */}
        <div className="max-w-5xl w-full mx-auto bg-[#FAFAF9] rounded-2xl shadow-2xl border border-white/60 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left Column: Tactile Input Panel ── */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

              {/* Skeuomorphic Tabs */}
              <div className="flex bg-stone-200/60 p-1.5 gap-1.5 rounded-xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] mb-8">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setActiveTab(tab.key);
                        setAmount(CALCULATOR_CONFIG[tab.key].defaultAmount);
                        setTenure(CALCULATOR_CONFIG[tab.key].defaultTenure);
                      }}
                      className={`flex-1 py-3 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 rounded-lg cursor-pointer ${isActive
                        ? "text-brand-primary bg-white shadow-sm border border-black/5"
                        : "text-brand-text-muted hover:text-brand-text-dark border border-transparent"
                        }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-8">
                {/* Purity Toggle (Only for Gold Loan) */}
                {/* {activeTab === "goldLoan" && (
                  <div>
                    <div className="flex items-baseline justify-between mb-3">
                      <label className="text-[13px] font-bold text-brand-text-dark uppercase tracking-wide">
                        Gold Purity
                      </label>
                    </div>
                    <div className="flex bg-stone-200 p-1.5 gap-1.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]">
                      {["22K", "24K"].map((p) => (
                        <button
                          key={p}
                          onClick={() => setPurity(p)}
                          className={`flex-1 py-2 text-[13px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${purity === p
                            ? "bg-white text-brand-primary shadow-sm"
                            : "text-brand-text-muted hover:text-brand-text-dark"
                            }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                )} */}

                {/* Amount Slider */}
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <label className="text-[13px] font-bold text-brand-text-dark uppercase tracking-wide">
                      Loan Amount
                    </label>
                    <span className="text-2xl font-heading font-extrabold text-brand-primary tabular-nums drop-shadow-sm">
                      {formatINR(amount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={config.minAmount}
                    max={config.maxAmount}
                    step={config.stepAmount}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-3 appearance-none rounded-full bg-stone-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-b [&::-webkit-slider-thumb]:from-[#D4AF37] 
                               [&::-webkit-slider-thumb]:to-[#B8942E] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border 
                               [&::-webkit-slider-thumb]:border-[#FDE08B] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 
                               [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-b [&::-moz-range-thumb]:from-[#D4AF37] 
                               [&::-moz-range-thumb]:to-[#B8942E] [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-[#FDE08B] 
                               [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none outline-none"
                    aria-label="Loan Amount"
                  />
                  <div className="flex justify-between text-[11px] text-brand-text-muted mt-3 font-bold tabular-nums uppercase tracking-wide">
                    <span>{formatINR(config.minAmount)}</span>
                    <span>{formatINR(config.maxAmount)}</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <label className="text-[13px] font-bold text-brand-text-dark uppercase tracking-wide">
                      Tenure
                    </label>
                    <span className="text-2xl font-heading font-extrabold text-brand-primary tabular-nums drop-shadow-sm">
                      {tenure} {tenure === 1 ? "month" : "months"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={config.minTenure}
                    max={config.maxTenure}
                    step={1}
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-3 appearance-none rounded-full bg-stone-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-b [&::-webkit-slider-thumb]:from-[#D4AF37] 
                               [&::-webkit-slider-thumb]:to-[#B8942E] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border 
                               [&::-webkit-slider-thumb]:border-[#FDE08B] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 
                               [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-b [&::-moz-range-thumb]:from-[#D4AF37] 
                               [&::-moz-range-thumb]:to-[#B8942E] [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-[#FDE08B] 
                               [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none outline-none"
                    aria-label="Loan Tenure"
                  />
                  <div className="flex justify-between text-[11px] text-brand-text-muted mt-3 font-bold tabular-nums uppercase tracking-wide">
                    <span>
                      {config.minTenure} {config.minTenure === 1 ? "mo" : "mos"}
                    </span>
                    <span>{config.maxTenure} mos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Digital Readout Board ── */}
            <div className="bg-[#7A0616] p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative shadow-[inset_0_4px_15px_rgba(0,0,0,0.3)] lg:shadow-[inset_4px_0_15px_rgba(0,0,0,0.3)]">

              <DonutChart principal={amount} interest={result.totalInterest} />

              <div className="text-center mb-8">
                <p className="text-white/70 text-[12px] font-bold uppercase tracking-widest mb-1.5">
                  Monthly EMI
                </p>
                <p className="text-4xl lg:text-5xl font-heading font-black text-white tabular-nums drop-shadow-md">
                  {formatINR(result.emi)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/20 rounded-xl p-4 text-center border border-white/5 shadow-inner">
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Total Principal
                  </p>
                  <p className="text-lg font-heading font-bold text-[#DFD1A5] tabular-nums">
                    {formatINR(amount)}
                  </p>
                </div>
                <div className="bg-black/20 rounded-xl p-4 text-center border border-white/5 shadow-inner">
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Total Interest
                  </p>
                  <p className="text-lg font-heading font-bold text-[#DFD1A5] tabular-nums">
                    {formatINR(result.totalInterest)}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[12px] text-white/50 mb-5 font-medium tracking-wide">
                  Calculated at {result.interestRate}% interest rate per month.
                </p>
                <Button href="#hero-form" className="w-full">
                  Apply for this Loan
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[12px] text-brand-text-muted mt-6 leading-relaxed max-w-2xl mx-auto">
          * Calculations are indicative and based on simple interest. Actual
          EMI, interest, and terms may vary based on your credit profile,
          documentation, and prevailing rates.
        </p>

      </div>
    </section>
  );
}

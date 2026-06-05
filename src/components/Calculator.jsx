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

function useCalculator(initialAmount, initialTenure, initialInterest) {
  const [amount, setAmount] = useState(initialAmount);
  const [tenure, setTenure] = useState(initialTenure);
  const [interestRate, setInterestRate] = useState(initialInterest);

  const result = useMemo(() => {
    const monthlyRate = interestRate / 100;
    const totalInterest = amount * monthlyRate * tenure;
    const totalRepayment = amount + totalInterest;
    const emi = totalRepayment / tenure;
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalRepayment: Math.round(totalRepayment),
      interestRate: interestRate,
    };
  }, [amount, tenure, interestRate]);

  return { amount, setAmount, tenure, setTenure, interestRate, setInterestRate, result };
}

const DonutChart = ({ principal, interest }) => {
  const total = principal + interest;
  const principalPercent = total > 0 ? (principal / total) * 100 : 100;

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const principalOffset = circumference - (principalPercent / 100) * circumference;

  return (
    <div className="relative w-40 h-40 mx-auto">
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
  const config = CALCULATOR_CONFIG["emiCalculator"];

  // We lift state up here so the entire 2-column layout can read it
  const { amount, setAmount, tenure, setTenure, interestRate, setInterestRate, result } = useCalculator(
    config.defaultAmount,
    config.defaultTenure,
    config.interestRate
  );

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
            Plan Your Finances
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

              <div className="space-y-8">

                {/* Amount Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
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
                  <div className="flex items-center justify-between mb-4">
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

                {/* Interest Rate Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-[13px] font-bold text-brand-text-dark uppercase tracking-wide">
                      Interest Rate
                    </label>
                    <span className="text-2xl font-heading font-extrabold text-brand-primary tabular-nums drop-shadow-sm">
                      {interestRate.toFixed(2)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.75}
                    max={2.00}
                    step={0.05}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-3 appearance-none rounded-full bg-stone-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-b [&::-webkit-slider-thumb]:from-[#D4AF37] 
                               [&::-webkit-slider-thumb]:to-[#B8942E] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border 
                               [&::-webkit-slider-thumb]:border-[#FDE08B] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 
                               [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-b [&::-moz-range-thumb]:from-[#D4AF37] 
                               [&::-moz-range-thumb]:to-[#B8942E] [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-[#FDE08B] 
                               [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none outline-none"
                    aria-label="Interest Rate"
                  />
                  <div className="flex justify-between text-[11px] text-brand-text-muted mt-3 font-bold tabular-nums uppercase tracking-wide">
                    <span>0.75%</span>
                    <span>2.00%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Digital Readout Board ── */}
            <div className="bg-brand-primary mandala-texture p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative shadow-[inset_0_4px_15px_rgba(0,0,0,0.3)] lg:shadow-[inset_4px_0_15px_rgba(0,0,0,0.3)]">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mb-8 items-center">

                <DonutChart principal={amount} interest={result.totalInterest} />

                <div className="text-center w-full px-2">
                  <p className="text-white/70 text-[12px] font-bold uppercase tracking-widest mb-1.5">
                    Monthly EMI
                  </p>
                  <p className="text-3xl lg:text-4xl xl:text-[2.5rem] font-heading font-black text-white tabular-nums drop-shadow-md tracking-tight break-all sm:break-normal">
                    {formatINR(result.emi)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
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

              <div className="bg-black/20 rounded-xl p-4 text-center border border-white/5 shadow-inner mb-8">
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1">
                  Total Repayment Amount
                </p>
                <p className="text-xl font-heading font-black text-[#D4AF37] tabular-nums">
                  {formatINR(result.totalRepayment)}
                </p>
              </div>

              <div className="text-center">
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


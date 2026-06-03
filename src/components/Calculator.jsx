import { useState, useMemo } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { CALCULATOR_CONFIG } from "../constants/data";

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

function CalculatorPanel({ config }) {
  const { amount, setAmount, tenure, setTenure, result } =
    useCalculator(config);

  const amountPercent =
    ((amount - config.minAmount) / (config.maxAmount - config.minAmount)) * 100;
  const tenurePercent =
    ((tenure - config.minTenure) / (config.maxTenure - config.minTenure)) * 100;

  return (
    <div className="space-y-6">
      {/* Amount Slider */}
      <div>
        <div className="flex items-baseline justify-between mb-2.5">
          <label className="text-sm font-semibold text-navy">Loan Amount</label>
          <span className="text-lg font-heading font-bold text-maroon tabular-nums">
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
          className="w-full"
          aria-label="Loan Amount"
          id={`calc-amount-${config.label.replace(/\s+/g, "-")}`}
          style={{
            background: `linear-gradient(to right, #7A0616 0%, #7A0616 ${amountPercent}%, #E7E5E4 ${amountPercent}%, #E7E5E4 100%)`,
          }}
        />
        <div className="flex justify-between text-[11px] text-gray-400 mt-1.5 font-medium tabular-nums">
          <span>{formatINR(config.minAmount)}</span>
          <span>{formatINR(config.maxAmount)}</span>
        </div>
      </div>

      {/* Tenure Slider */}
      <div>
        <div className="flex items-baseline justify-between mb-2.5">
          <label className="text-sm font-semibold text-navy">
            Tenure (Months)
          </label>
          <span className="text-lg font-heading font-bold text-maroon tabular-nums">
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
          className="w-full"
          aria-label="Loan Tenure"
          id={`calc-tenure-${config.label.replace(/\s+/g, "-")}`}
          style={{
            background: `linear-gradient(to right, #7A0616 0%, #7A0616 ${tenurePercent}%, #E7E5E4 ${tenurePercent}%, #E7E5E4 100%)`,
          }}
        />
        <div className="flex justify-between text-[11px] text-gray-400 mt-1.5 font-medium">
          <span>
            {config.minTenure} {config.minTenure === 1 ? "month" : "months"}
          </span>
          <span>{config.maxTenure} months</span>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-3 pt-5 border-t border-warm-gray-dark">
        {/* EMI — full width */}
        <div className="col-span-2 bg-gradient-to-br from-maroon to-maroon-dark rounded-xl px-5 py-4 text-center">
          <p className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
            Monthly EMI
          </p>
          <p className="text-2xl lg:text-3xl font-heading font-extrabold text-white tabular-nums">
            {formatINR(result.emi)}
          </p>
        </div>
        {/* Interest Rate */}
        <div className="bg-cream rounded-xl px-4 py-3.5 text-center border border-warm-gray-dark">
          <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">
            Interest Rate
          </p>
          <p className="text-base font-heading font-bold text-navy tabular-nums">
            {result.interestRate}%
            <span className="text-[11px] text-gray-400 font-normal">
              {" "}
              /month
            </span>
          </p>
        </div>
        {/* Total Interest */}
        <div className="bg-cream rounded-xl px-4 py-3.5 text-center border border-warm-gray-dark">
          <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">
            Total Interest
          </p>
          <p className="text-base font-heading font-bold text-gold-dark tabular-nums">
            {formatINR(result.totalInterest)}
          </p>
        </div>
        {/* Total Repayment — full width */}
        <div className="col-span-2 bg-cream rounded-xl px-4 py-3.5 text-center border border-warm-gray-dark">
          <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">
            Total Repayment
          </p>
          <p className="text-lg font-heading font-bold text-navy tabular-nums">
            {formatINR(result.totalRepayment)}
          </p>
        </div>
      </div>

      {/* Apply CTA */}
      <a
        href="#hero-form"
        className="block text-center w-full py-3.5 rounded-xl font-bold text-navy bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold shadow-gold hover:shadow-lg transition-all duration-300 active:scale-[0.98] text-[15px]"
      >
        Apply for This Loan →
      </a>
    </div>
  );
}

export default function Calculator() {
  const [activeTab, setActiveTab] = useState("goldLoan");

  const tabs = [
    { key: "goldLoan", label: "Gold Loan Estimator" },
    { key: "emiCalculator", label: "EMI Calculator" },
  ];

  return (
    <section id="calculator" className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 lg:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon/10 text-maroon text-[11px] font-bold uppercase tracking-wider mb-3">
            <CalcIcon size={13} />
            Financial Calculators
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-extrabold text-navy leading-tight mb-1">
            Plan Your Finances{" "}
            <span className="text-maroon">with Confidence</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mt-3">
            Use our interactive calculators to estimate your EMI and plan your
            repayment schedule before you apply.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border border-warm-gray-dark shadow-card overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-warm-gray-dark">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-3.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeTab === tab.key
                      ? "text-maroon border-b-[3px] border-maroon bg-cream"
                      : "text-gray-400 hover:text-navy hover:bg-cream/50"
                  }`}
                  id={`calc-tab-${tab.key}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="p-5 sm:p-6 lg:p-7">
              <CalculatorPanel
                key={activeTab}
                config={CALCULATOR_CONFIG[activeTab]}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[11px] text-gray-400 mt-4 leading-relaxed px-4">
            * Calculations are indicative and based on simple interest. Actual
            EMI, interest, and terms may vary based on your credit profile,
            documentation, and prevailing rates.
          </p>
        </div>
      </div>
    </section>
  );
}

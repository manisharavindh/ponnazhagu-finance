import { CheckCircle, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { HERO } from "../constants/data";
import InquiryForm from "./InquiryForm";

const TRAIT_ICONS = [TrendingUp, Zap, ShieldCheck, CheckCircle];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #7A0616 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold accent line at top */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="section-container relative py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── Left: Content (7 cols) ── */}
          <div className="lg:col-span-7 animate-fade-in-up lg:pt-2">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-green-700 uppercase tracking-wider">
                RBI Registered NBFC • Trusted Since 1998
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] xl:text-5xl font-heading font-extrabold text-navy leading-[1.15] mb-4 lg:mb-5">
              {HERO.headline.split("Growth & Prosperity")[0]}
              <span className="text-maroon">Growth</span>
              <span className="text-navy"> & </span>
              <span className="bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Prosperity
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium mb-6 lg:mb-8 max-w-lg leading-relaxed">
              {HERO.subheadline}
            </p>

            {/* Trait Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-7 lg:mb-8">
              {HERO.traits.map((trait, i) => {
                const Icon = TRAIT_ICONS[i];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-3.5 py-3 rounded-xl bg-cream border border-warm-gray-dark hover:border-gold/30 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-maroon/8 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-maroon" />
                    </div>
                    <span className="text-[13px] font-medium text-navy-light leading-snug pt-1">
                      {trait}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 lg:gap-10 pt-5 border-t border-warm-gray-dark">
              {[
                { value: "25+", label: "Years of Trust" },
                { value: "1 Lakh+", label: "Happy Customers" },
                { value: "₹500Cr+", label: "Loans Disbursed" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl lg:text-2xl font-heading font-extrabold text-maroon leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] lg:text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Inquiry Form (5 cols) ── */}
          <div
            className="lg:col-span-5 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <InquiryForm />
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="w-full overflow-hidden leading-none -mb-px">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C240 0 480 48 720 24C960 0 1200 48 1440 24V48H0V24Z"
            fill="#FAFAF9"
          />
        </svg>
      </div>
    </section>
  );
}

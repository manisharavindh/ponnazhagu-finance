import { CheckCircle, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { HERO } from "../constants/data";
import InquiryForm from "./InquiryForm";

const TRAIT_ICONS = [TrendingUp, Zap, ShieldCheck, CheckCircle];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-bg-warm heritage-pattern">
      {/* Gold accent line */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #DBBE7A 30%, #C5A059 50%, #DBBE7A 70%, transparent)",
        }}
      />

      <div className="section-container relative z-10 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── Left Content (7 cols) ── */}
          <div className="lg:col-span-7 animate-fade-in-up lg:pt-2">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(197,160,89,0.08), rgba(197,160,89,0.03))",
                borderColor: "rgba(197,160,89,0.25)",
              }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-brand-text-dark uppercase tracking-[0.12em]">
                RBI Registered NBFC • Trusted Since 1998
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.125rem] font-heading font-extrabold text-brand-text-dark leading-[1.1] mb-4 lg:mb-5">
              Your Trusted Financial{" "}
              <br className="hidden sm:block" />
              Partner for{" "}
              <span className="text-brand-primary">Growth</span>
              <span className="text-brand-text-dark"> & </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #C5A059, #DBBE7A, #A88940)",
                }}
              >
                Prosperity
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-brand-text-muted font-medium mb-6 lg:mb-8 max-w-lg leading-relaxed">
              {HERO.subheadline}
            </p>

            {/* Trait Chips — Skeuomorphic cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-7 lg:mb-8">
              {HERO.traits.map((trait, i) => {
                const Icon = TRAIT_ICONS[i];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-3.5 py-3 rounded-xl transition-all duration-350"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,250,249,0.7))",
                      border: "1px solid rgba(231,229,228,0.8)",
                      boxShadow: "0 1px 3px rgba(28,25,23,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(145deg, #9C1A2E, #7A0616)",
                        boxShadow: "0 2px 6px rgba(122,6,22,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
                      }}
                    >
                      <Icon size={14} className="text-white" />
                    </div>
                    <span className="text-[13px] font-medium text-brand-text-dark leading-snug pt-1">
                      {trait}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 lg:gap-10 pt-5 border-t border-brand-border">
              {[
                { value: "25+", label: "Years of Trust" },
                { value: "1 Lakh+", label: "Happy Customers" },
                { value: "₹500Cr+", label: "Loans Disbursed" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl lg:text-2xl font-heading font-extrabold text-brand-primary leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] lg:text-[11px] text-brand-secondary-dark font-semibold uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Inquiry Form (5 cols) ── */}
          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <InquiryForm />
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="w-full overflow-hidden leading-none -mb-px relative z-10">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 24C240 0 480 48 720 24C960 0 1200 48 1440 24V48H0V24Z" fill="#F5F0E8" />
        </svg>
      </div>
    </section>
  );
}

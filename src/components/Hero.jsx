import { CheckCircle, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { HERO } from "../constants/data";
import InquiryForm from "./InquiryForm";

const TRAIT_ICONS = [TrendingUp, Zap, ShieldCheck, CheckCircle];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 heritage-pattern">
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
                background: "rgba(122, 6, 22, 0.04)",
                borderColor: "rgba(122, 6, 22, 0.1)",
              }}>
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[11px] font-semibold text-brand-primary uppercase tracking-[0.12em]">
                Government Approved
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.125rem] font-heading font-extrabold text-brand-text-dark leading-tight mb-4 lg:mb-5">
              Your Trusted Financial{" "}
              <br className="hidden sm:block" />
              Partner for{" "}
              <span className="text-brand-primary">Growth</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-md text-brand-text-muted font-medium mb-6 lg:mb-8 max-w-lg leading-relaxed">
              {HERO.subheadline}
            </p>

            {/* Trait Chips — Skeuomorphic cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-7 lg:mb-8">
              {HERO.traits.map((trait, i) => {
                const Icon = TRAIT_ICONS[i];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 backdrop-blur-md bg-white/60"
                    style={{
                      border: "1px solid rgba(255,255,255,0.6)",
                      boxShadow: "0 4px 16px -4px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(145deg, #9C1A2E, #7A0616)",
                        boxShadow: "0 2px 6px rgba(122,6,22,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
                      }}
                    >
                      <Icon size={14} className="text-white" />
                    </div>
                    <span className="text-[13px] font-medium text-brand-text-dark leading-snug">
                      {trait}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="flex items-center divide-x divide-brand-border/60 pt-6 mt-2 border-t border-brand-border/60">
              {[
                { value: "5+", label: "Years of Trust" },
                { value: "20K+", label: "Happy Customers" },
                { value: "₹5Cr+", label: "Loans Disbursed" },
              ].map((stat, idx) => (
                <div key={stat.label} className={`px-4 sm:px-6 ${idx === 0 ? 'pl-0' : ''}`}>
                  <div className="text-2xl lg:text-3xl font-heading font-extrabold text-brand-primary leading-none mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-[10px] lg:text-[11px] text-brand-text-muted font-semibold uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Inquiry Form (5 cols) ── */}
          <div className="lg:col-span-5">
            <InquiryForm />
          </div>
        </div>
      </div>

      {/* Wave separator */}
      {/* <div className="w-full overflow-hidden leading-none -mb-px relative z-10">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 24C240 0 480 48 720 24C960 0 1200 48 1440 24V48H0V24Z" fill="#F5F0E8" />
        </svg>
      </div> */}
    </section>
  );
}

import { useState } from "react";
import {
  ShieldCheck,
  Eye,
  Clock,
  Award,
  ChevronDown,
} from "lucide-react";
import { TRUST_BADGES, FAQ_DATA } from "../constants/data";

const BADGE_ICONS = { ShieldCheck, Eye, Clock, Award };

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl transition-all duration-350 ${
        isOpen
          ? "border-brand-secondary/40 shadow-card bg-white"
          : "border-brand-border bg-white hover:border-brand-secondary/30 hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[13px] sm:text-sm lg:text-[15px] font-semibold transition-colors leading-snug ${
            isOpen ? "text-brand-primary" : "text-brand-text-dark"
          }`}
        >
          {item.question}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-350 ${
            isOpen
              ? "bg-brand-primary/10 text-brand-primary"
              : "bg-brand-bg-warm text-brand-text-muted"
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-350 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-350 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 text-[13px] sm:text-sm text-brand-text-muted leading-relaxed border-t border-brand-border pt-4">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function TrustAndFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <section id="about" className="bg-brand-bg-cream py-8 sm:py-10 lg:py-12">
      <div className="section-container">
        {/* ── Trust Badges Section ── */}
        <div className="text-center max-w-xl mx-auto mb-4">
          <span
            className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase mb-3"
            style={{
              background: "linear-gradient(135deg, rgba(122,6,22,0.1), rgba(122,6,22,0.04))",
              color: "#7A0616",
              letterSpacing: "0.15em",
            }}
          >
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-extrabold text-brand-text-dark leading-tight mb-1">
            Trust, Security &{" "}
            <span className="text-brand-text-dark">Compliance</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-dot" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10 lg:mb-12">
          {TRUST_BADGES.map((badge, index) => {
            const Icon = BADGE_ICONS[badge.icon];
            return (
              <div
                key={badge.title}
                className="skeuo-card group text-center px-5 py-7 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div
                  className="skeuo-icon mx-auto mb-4 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(145deg, #F5F0E8, #FFFFFF)",
                    border: "1px solid rgba(197,160,89,0.3)",
                    boxShadow: "0 4px 12px rgba(28,25,23,0.05), inset 0 2px 4px rgba(255,255,255,0.8)",
                  }}
                >
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-brand-secondary-dark group-hover:text-brand-primary transition-colors duration-300"
                      strokeWidth={1.8}
                    />
                  )}
                </div>
                <h3 className="text-[15px] font-heading font-bold text-brand-text-dark mb-2 leading-snug">
                  {badge.title}
                </h3>
                <p className="text-[13px] text-brand-text-muted leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── FAQ Section ── */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[1.75rem] font-heading font-extrabold text-brand-text-dark leading-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-text-muted text-sm leading-relaxed">
              Quick answers to common queries about our loan products and
              processes
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

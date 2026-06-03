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
      className={`border rounded-xl transition-all duration-300 ${
        isOpen
          ? "border-gold/40 shadow-sm bg-white"
          : "border-warm-gray-dark bg-white hover:border-gold/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[13px] sm:text-sm lg:text-[15px] font-semibold transition-colors leading-snug ${
            isOpen ? "text-maroon" : "text-navy"
          }`}
        >
          {item.question}
        </span>
        <ChevronDown
          size={17}
          className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-maroon" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-4 text-[13px] sm:text-sm text-gray-600 leading-relaxed border-t border-warm-gray-dark pt-3.5">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function TrustAndFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <section id="about" className="bg-cream py-14 sm:py-16 lg:py-24">
      <div className="section-container">
        {/* ── Trust Badges Section ── */}
        <div className="text-center max-w-xl mx-auto mb-10 lg:mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-maroon/10 text-maroon text-[11px] font-bold uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-extrabold text-navy leading-tight mb-1">
            Trust, Security &{" "}
            <span className="text-maroon">Compliance</span>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-14 lg:mb-20">
          {TRUST_BADGES.map((badge, index) => {
            const Icon = BADGE_ICONS[badge.icon];
            return (
              <div
                key={badge.title}
                className="group text-center bg-white rounded-2xl px-5 py-6 border border-warm-gray-dark hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-3.5 rounded-xl bg-maroon/8 flex items-center justify-center group-hover:bg-maroon transition-colors duration-300">
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-maroon group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.8}
                    />
                  )}
                </div>
                <h3 className="text-[15px] font-heading font-bold text-navy mb-1.5 leading-snug">
                  {badge.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── FAQ Section ── */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[1.75rem] font-heading font-extrabold text-navy leading-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Quick answers to common queries about our loan products and
              processes
            </p>
          </div>

          <div className="space-y-2.5">
            {FAQ_DATA.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openFAQ === index}
                onToggle={() =>
                  setOpenFAQ(openFAQ === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

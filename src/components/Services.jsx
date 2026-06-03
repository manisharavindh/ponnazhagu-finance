import { useRef } from "react";
import {
  Gem,
  Store,
  Wallet,
  Car,
  PiggyBank,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SERVICES } from "../constants/data";
import Button from "./ui/Button";

const ICON_MAP = { Gem, Store, Wallet, Car, PiggyBank };

// Map to the CSS skeuomorphic classes defined in index.css for active items
const ICON_CLASSES = {
  "gold-loan": "skeuo-icon-gold",
  "business-loan": "skeuo-icon-crimson",
  "personal-loan": "skeuo-icon-crimson",
  "vehicle-loan": "skeuo-icon-gold",
  "savings-schemes": "skeuo-icon-gold",
};

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-brand-bg-cream py-14 sm:py-16 lg:py-24 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 lg:mb-14">
          {/* <span
            className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase mb-3"
            style={{
              background: "linear-gradient(135deg, rgba(122,6,22,0.1), rgba(122,6,22,0.04))",
              color: "#7A0616",
              letterSpacing: "0.15em",
            }}
          >
            Our Services
          </span> */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-extrabold text-brand-text-dark leading-tight mb-1">
            Services We Provide
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-dot" />
          </div>
          {/* <p className="text-brand-text-muted text-sm lg:text-[15px] leading-relaxed mt-3">
            From instant gold loans to long-term savings schemes — we have the
            right product for every stage of your financial journey.
          </p> */}
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow (Desktop only) */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B8942E] shadow-lg border border-[#FDE08B] items-center justify-center cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-[#7A0616]" />
          </button>

          {/* Horizontal Scroll Snap Wrapper */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory py-8 px-4 sm:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon];
              const iconClass = ICON_CLASSES[service.id] || ICON_CLASSES["gold-loan"];

              if (service.isActive) {
                // ── ACTIVE STATE ("Gold Loan") ──
                return (
                  <div
                    key={service.id}
                    className="skeuo-card group min-w-[280px] md:min-w-[340px] snap-center shrink-0 flex flex-col p-6 lg:p-7 relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {/* Hover accent bar */}
                    <div
                      className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{
                        background: "linear-gradient(90deg, transparent, #C5A059, transparent)",
                      }}
                    />

                    {/* Skeuomorphic 3D Icon */}
                    <div className={`skeuo-icon ${iconClass} mb-4 group-hover:scale-105 transition-transform`}>
                      {Icon && <Icon size={22} color="#FFFFFF" strokeWidth={1.8} />}
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] font-heading font-bold text-brand-text-dark mb-1 group-hover:text-brand-primary transition-colors duration-350 leading-snug">
                      {service.title}
                    </h3>

                    {/* Highlight */}
                    <p
                      className="text-[11px] font-semibold text-brand-secondary-dark mb-4 uppercase leading-snug"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      {service.highlight}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-brand-text-muted leading-snug">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]"
                            style={{
                              background: "linear-gradient(145deg, #DBBE7A, #C5A059)",
                              boxShadow: "0 1px 3px rgba(197,160,89,0.3)",
                            }}
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Tactile Metallic CTA */}
                    <Button href="#hero-form" className="w-full">
                      Apply Now
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                );
              } else {
                // ── INACTIVE STATE ("Coming Soon") ──
                return (
                  <div
                    key={service.id}
                    className="min-w-[280px] md:min-w-[340px] snap-center shrink-0 flex flex-col p-6 lg:p-7 relative bg-brand-bg-warm/80 backdrop-blur-sm border border-white/30 shadow-md rounded-2xl grayscale-[30%] opacity-90 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {/* Inactive Icon (Dimmed/Grey) */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-stone-200 shadow-inner border border-stone-300/50">
                      {Icon && <Icon size={22} color="#78716C" strokeWidth={1.8} />}
                    </div>

                    {/* Title (Muted) */}
                    <h3 className="text-[17px] font-heading font-bold text-stone-600 mb-1 leading-snug">
                      {service.title}
                    </h3>

                    {/* Highlight (Muted) */}
                    <p
                      className="text-[11px] font-semibold text-stone-500 mb-4 uppercase leading-snug"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      {service.highlight}
                    </p>

                    {/* Benefits (Muted) */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-stone-400 leading-snug">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px] bg-stone-300 shadow-inner"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Debossed "Coming Soon" Badge */}
                    <div className="mt-auto text-center w-full">
                      <span className="block shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] bg-stone-200/80 text-stone-500 text-[11px] uppercase tracking-[0.2em] font-bold px-4 py-3.5 rounded-xl border border-stone-300/50">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* Right Arrow (Desktop only) */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B8942E] shadow-lg border border-[#FDE08B] items-center justify-center cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-[#7A0616]" />
          </button>
        </div>
      </div>
    </section>
  );
}

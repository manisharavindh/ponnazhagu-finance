import { useRef } from "react";
import {
  Gem,
  Store,
  Wallet,
  Car,
  PiggyBank,
  Coins,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Button from "./ui/Button";

const ICON_MAP = { Gem, Store, Wallet, Car, PiggyBank, Coins };

// Map to the CSS skeuomorphic classes defined in index.css for active items
const ICON_CLASSES = {
  "gold-loan": "skeuo-icon-gold",
  "silver-loan": "skeuo-icon-silver",
  "business-loan": "skeuo-icon-crimson",
  "personal-loan": "skeuo-icon-crimson",
};

function ServiceCard({ service }) {
  const { t } = useLanguage();
  const Icon = ICON_MAP[service.icon];
  const iconClass = ICON_CLASSES[service.id] || ICON_CLASSES["gold-loan"];

  if (service.isActive) {
    return (
      <div className="skeuo-card group w-[280px] md:w-[420px] h-full shrink-0 flex flex-col text-left p-6 md:p-8 relative transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
        <div className="flex items-center gap-4 mb-5">
          <div className={`skeuo-icon ${iconClass} transition-transform group-hover:scale-105 !w-14 !h-14 shrink-0`}>
            {Icon && <Icon size={24} color="#FFFFFF" strokeWidth={1.8} />}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-heading font-bold text-brand-text-dark group-hover:text-brand-primary transition-colors duration-350 leading-tight truncate whitespace-normal line-clamp-2">
              {service.title}
            </h3>
            <p className="text-[9px] font-semibold text-brand-secondary-dark uppercase tracking-widest mt-1 truncate">
              {service.highlight}
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-stone-200 mb-4 shrink-0" />

        <ul className="space-y-2 mb-6 flex-1 overflow-y-auto pr-1">
          {service.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-brand-text-muted leading-snug">
              <span className="text-[#C5A059] mt-[2px] leading-none text-[10px] shrink-0">♦</span>
              <span className="break-words">{benefit}</span>
            </li>
          ))}
        </ul>

        <Button href="#hero-form" className="w-full text-xs py-2.5 mt-auto shrink-0">
          {t.UI_STRINGS.applyNow}
          <ArrowRight size={14} />
        </Button>
      </div>
    );
  } else {
    return (
      <div className="w-[280px] md:w-[420px] h-full shrink-0 flex flex-col text-left p-6 md:p-8 relative bg-brand-bg-warm/80 backdrop-blur-sm border border-white/30 shadow-md rounded-2xl grayscale-[30%] opacity-90 transition-transform hover:-translate-y-1 duration-300">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-stone-200 shadow-inner border border-stone-300/50 shrink-0">
            {Icon && <Icon size={24} color="#78716C" strokeWidth={1.8} />}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-heading font-bold text-stone-600 leading-tight truncate whitespace-normal line-clamp-2">
              {service.title}
            </h3>
            <p className="text-[9px] font-semibold text-stone-500 uppercase tracking-widest mt-1 truncate">
              {service.highlight}
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-stone-200 mb-4 opacity-50 shrink-0" />

        <ul className="space-y-2 mb-6 flex-1 overflow-y-auto pr-1">
          {service.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-stone-400 leading-snug">
              <span className="text-stone-300 mt-[2px] leading-none text-[10px] shrink-0">♦</span>
              <span className="break-words">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto text-center w-full shrink-0">
          <span className="block shadow-inner bg-stone-200/80 text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-2.5 rounded-full border border-stone-300/50">
            {t.UI_STRINGS.comingSoon}
          </span>
        </div>
      </div>
    );
  }
}

export default function Services() {
  const { t } = useLanguage();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -296 : 296;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-brand-bg-cream py-6 sm:py-8 lg:py-10 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-text-dark leading-tight">
            {t.UI_STRINGS.servicesWeProvide}
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-dot" />
          </div>
        </div>
      </div>

      {/* ── Mobile View: Button-controlled pseudo-infinite scroll (hidden on desktop) ── */}
      <div className="md:hidden relative max-w-[100vw] mx-auto pb-16">
        {/* Left/Right Fading Shadows */}
        <div className="absolute top-0 bottom-16 left-0 w-4 bg-gradient-to-r from-brand-bg-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-16 right-0 w-4 bg-gradient-to-l from-brand-bg-cream to-transparent z-10 pointer-events-none" />

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="flex absolute bottom-0 left-1/2 -translate-x-[120%] z-20 w-12 h-12 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B8942E] shadow-lg border border-[#FDE08B] items-center justify-center cursor-pointer transition-transform active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-[#7A0616]" />
        </button>

        {/* Horizontal Scroll Snap Wrapper */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Spacer to perfectly center the very first element if they scroll all the way back */}
          <div className="w-[calc(50vw-140px-8px)] shrink-0 snap-center" />

          {t.SERVICES.map((service) => (
            <div key={`mobile-${service.id}`} className="snap-center shrink-0">
              <ServiceCard service={service} />
            </div>
          ))}

          {/* Spacer to perfectly center the very last element */}
          <div className="w-[calc(50vw-140px-8px)] shrink-0 snap-center" />
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="flex absolute bottom-0 right-1/2 translate-x-[120%] z-20 w-12 h-12 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B8942E] shadow-lg border border-[#FDE08B] items-center justify-center cursor-pointer transition-transform active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-[#7A0616]" />
        </button>
      </div>

      {/* ── Desktop View: Auto-scrolling Marquee (hidden on mobile) ── */}
      <div className="hidden md:block relative w-full overflow-hidden pb-4">
        <style>{`
          .services-marquee-track {
            display: flex;
            width: max-content;
            animation: servicesMarqueeScroll 45s linear infinite;
          }
          .services-marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes servicesMarqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 3)); }
          }
          .services-marquee-content {
            display: flex;
            gap: 2rem;
            padding: 0 1rem;
            flex-shrink: 0;
          }
          .services-mask-edges {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          }
        `}</style>

        <div className="services-mask-edges">
          <div className="services-marquee-track py-6">
            <div className="services-marquee-content" aria-hidden="false">
              {t.SERVICES.map((service) => (
                <ServiceCard key={`set1-${service.id}`} service={service} />
              ))}
            </div>
            <div className="services-marquee-content" aria-hidden="true">
              {t.SERVICES.map((service) => (
                <ServiceCard key={`set2-${service.id}`} service={service} />
              ))}
            </div>
            {/* Added a 3rd set for ultra-wide displays to guarantee no gap */}
            <div className="services-marquee-content" aria-hidden="true">
              {t.SERVICES.map((service) => (
                <ServiceCard key={`set3-${service.id}`} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

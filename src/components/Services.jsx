import {
  Gem,
  Store,
  Wallet,
  Car,
  PiggyBank,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "../constants/data";

const ICON_MAP = { Gem, Store, Wallet, Car, PiggyBank };

export default function Services() {
  return (
    <section id="services" className="bg-cream py-14 sm:py-16 lg:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-maroon/10 text-maroon text-[11px] font-bold uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-extrabold text-navy leading-tight mb-1">
            Financial Solutions Tailored for{" "}
            <span className="text-maroon">Your Needs</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mt-3">
            From instant gold loans to long-term savings schemes — we have the
            right product for every stage of your financial journey.
          </p>
        </div>

        {/* Services Grid — 3 cols on large, bottom row centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            // Center the last row if it has fewer than 3 items
            const isLastRowItem = index >= 3;
            const isOddTotal = SERVICES.length % 3 !== 0;

            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-6 lg:p-7 border border-warm-gray-dark hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col animate-fade-in-up ${
                  isLastRowItem && isOddTotal && index === 3
                    ? "lg:col-start-1 lg:col-end-2 lg:ml-auto lg:mr-0"
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 0.08}s`,
                  ...(isLastRowItem && isOddTotal && SERVICES.length - 3 === 2
                    ? {}
                    : {}),
                }}
              >
                {/* Gold accent line at top */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}10` }}
                >
                  {Icon && (
                    <Icon
                      size={22}
                      style={{ color: service.color }}
                      strokeWidth={1.8}
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-heading font-bold text-navy mb-1 group-hover:text-maroon transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Highlight Badge */}
                <p className="text-[11px] font-semibold text-gold-dark mb-3.5 uppercase tracking-wide leading-snug">
                  {service.highlight}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-5 flex-1">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px] text-gray-600 leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-[6px] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#hero-form"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-maroon-dark group/link transition-colors"
                >
                  Explore
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

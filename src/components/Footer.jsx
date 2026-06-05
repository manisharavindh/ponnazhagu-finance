import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "../constants/data";
import Button from "./ui/Button";

export default function Footer({ openLegalModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-primary text-white mandala-texture">
      {/* Gold accent top line */}
      <div
        className="h-[4px] w-full relative z-10"
        style={{
          background: "linear-gradient(90deg, #A88940 0%, #DBBE7A 25%, #C5A059 50%, #DBBE7A 75%, #A88940 100%)",
          boxShadow: "0 2px 10px rgba(197,160,89,0.4)",
        }}
      />

      <div className="section-container relative z-10 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ── Column 1: Company Info ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(145deg, #DBBE7A, #A88940)",
                  boxShadow: "0 4px 12px rgba(28,25,23,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                <span className="text-white font-heading font-black text-xl drop-shadow-md">
                  ₹
                </span>
              </div>
              <div className="leading-tight">
                <span className="block font-heading font-extrabold text-white text-xl tracking-tight drop-shadow-sm">
                  Ponnazhagu
                </span>
                <span
                  className="block text-[11px] font-bold tracking-[0.2em] uppercase -mt-0.5"
                  style={{ color: "#E8CC6E" }}
                >
                  Finance
                </span>
              </div>
            </div>
            {/* Contact Details */}
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-[13px] text-white/80 hover:text-brand-secondary-light transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-brand-secondary-light" />
                </div>
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-[13px] text-white/80 hover:text-brand-secondary-light transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-brand-secondary-light" />
                </div>
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-[13px] text-white/80">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-brand-secondary-light" />
                </div>
                <span className="max-w-[240px] pt-1 leading-snug">{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* ── Column 2: Services ── */}
          <div>
            <h4 className="font-heading font-bold text-[15px] mb-5 text-brand-secondary-light uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-[14px] text-white/70 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-secondary-light"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Company + Legal ── */}
          <div>
            {/* <h4 className="font-heading font-bold text-[15px] mb-5 text-brand-secondary-light uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-[14px] text-white/70 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-secondary-light"
                    />
                  </a>
                </li>
              ))}
            </ul> */}

            <h4 className="font-heading font-bold text-[15px] mb-5 text-brand-secondary-light uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  {link.label === "Privacy Policy" || link.label === "Terms & Conditions" ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.label === "Privacy Policy") openLegalModal?.("privacy");
                        else openLegalModal?.("terms");
                      }}
                      className="flex items-center gap-1.5 text-[14px] text-white/70 hover:text-white transition-colors group text-left"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-secondary-light"
                      />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 text-[14px] text-white/70 hover:text-white transition-colors group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-secondary-light"
                      />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Map & CTA ── */}
          <div>
            <h4 className="font-heading font-bold text-[15px] mb-5 text-brand-secondary-light uppercase tracking-wider">
              Visit Our Branch
            </h4>
            {/* Map Placeholder */}
            <div
              className="w-full h-40 rounded-xl flex items-center justify-center mb-6 overflow-hidden relative"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "inset 0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              <div className="text-center px-4 relative z-10">
                <MapPin size={24} className="text-brand-secondary-light mx-auto mb-2" />
                <p className="text-[12px] text-white/80 font-medium mb-1">
                  Sivagangai, Tamil Nadu
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    COMPANY.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] text-brand-secondary hover:text-brand-secondary-light underline tracking-wide"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Quick Apply */}
            <Button href="#hero-form" className="w-full">
              Apply Today
            </Button>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 relative z-10">
        <div className="section-container py-5 lg:py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-[12px] text-white/60">
            <p className="flex-shrink-0">
              © {currentYear} Ponnazhagu Finance. All rights reserved.
            </p>
            <p className="text-center leading-relaxed max-w-2xl px-4">
              <strong className="text-white/80">Disclaimer:</strong> Please be aware of unfair practices like fraudulent phone calls and e-mails asking for personal information.
              <span className="text-white/60">{COMPANY.registrationInfo}</span>
            </p>
            {/* <p className="flex items-center gap-1.5 flex-shrink-0">
              Made with <Heart size={12} fill="#DBBE7A" stroke="none" /> in Tamil
              Nadu
            </p> */}
          </div>
        </div>
      </div>

      {/* Spacer for mobile FAB */}
      <div className="h-[72px] lg:hidden" />
    </footer>
  );
}

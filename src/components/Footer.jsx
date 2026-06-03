import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "../constants/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy text-white">
      {/* Gold accent top line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="section-container pt-12 pb-10 lg:pt-16 lg:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* ── Column 1: Company Info ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold flex-shrink-0">
                <span className="text-white font-heading font-black text-lg">
                  ₹
                </span>
              </div>
              <div className="leading-tight">
                <span className="block font-heading font-extrabold text-white text-lg tracking-tight">
                  Ponnazhagu
                </span>
                <span className="block text-[10px] font-semibold text-gold tracking-[0.15em] uppercase -mt-0.5">
                  Finance
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-5 max-w-xs">
              Your trusted financial partner since {COMPANY.founded}. RBI
              registered NBFC serving families and businesses across Tamil Nadu
              with integrity and transparency.
            </p>
            {/* Contact Details */}
            <div className="space-y-2.5">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-gold transition-colors"
              >
                <Phone size={14} className="text-gold flex-shrink-0" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-gold transition-colors"
              >
                <Mail size={14} className="text-gold flex-shrink-0" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-gray-400">
                <MapPin
                  size={14}
                  className="text-gold flex-shrink-0 mt-0.5"
                />
                <span className="max-w-[220px]">{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-gray-400">
                <Clock size={14} className="text-gold flex-shrink-0" />
                {COMPANY.branchTimings}
              </div>
            </div>
          </div>

          {/* ── Column 2: Services ── */}
          <div>
            <h4 className="font-heading font-bold text-[15px] mb-4 text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-[13px] text-gray-400 hover:text-gold transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Company + Legal ── */}
          <div>
            <h4 className="font-heading font-bold text-[15px] mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-[13px] text-gray-400 hover:text-gold transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-bold text-[15px] mt-6 mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-[13px] text-gray-400 hover:text-gold transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Map & CTA ── */}
          <div>
            <h4 className="font-heading font-bold text-[15px] mb-4 text-white">
              Visit Our Branch
            </h4>
            {/* Map Placeholder */}
            <div className="w-full h-36 rounded-xl bg-navy-light border border-white/10 flex items-center justify-center mb-4 overflow-hidden">
              <div className="text-center px-4">
                <MapPin size={22} className="text-gold mx-auto mb-1.5" />
                <p className="text-[11px] text-gray-500 mb-1">
                  T. Nagar, Chennai
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    COMPANY.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] text-gold hover:text-gold-light underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Quick Apply */}
            <a
              href="#hero-form"
              className="block text-center w-full py-3 rounded-xl font-bold text-navy bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold shadow-gold transition-all duration-300 active:scale-[0.98] text-sm"
            >
              Apply for a Loan Today
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="section-container py-4 lg:py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
            <p className="flex-shrink-0">
              © {currentYear} Ponnazhagu Finance Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-center leading-relaxed max-w-xl">
              <strong className="text-gray-400">Disclaimer:</strong> RBI
              registered NBFC. All loans subject to eligibility, documentation &
              T&C. Rates are indicative.{" "}
              <span className="text-gray-400">{COMPANY.registrationInfo}</span>
            </p>
            <p className="flex items-center gap-1 flex-shrink-0">
              Made with <Heart size={11} className="text-maroon" /> in Tamil
              Nadu
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for mobile FAB */}
      <div className="h-14 lg:hidden" />
    </footer>
  );
}

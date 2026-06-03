import { useState, useRef, useEffect } from "react";
import {
  Phone,
  Clock,
  Globe,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_DROPDOWN } from "../constants/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ── Utility Top Bar (Desktop Only) ── */}
      <div className="hidden lg:block bg-navy text-white text-sm">
        <div className="section-container flex items-center justify-between py-2.5">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-gray-300">
              <Clock size={13} className="text-gold" />
              {COMPANY.branchTimings}
            </span>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
            >
              <Phone size={13} className="text-gold" />
              {COMPANY.phone}
            </a>
          </div>
          <button
            className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors cursor-pointer"
            aria-label="Select language"
          >
            <Globe size={13} />
            English / தமிழ்
          </button>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            onClick={handleNavClick}
          >
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold flex-shrink-0">
              <span className="text-white font-heading font-black text-lg lg:text-xl">
                ₹
              </span>
            </div>
            <div className="leading-tight">
              <span className="block font-heading font-extrabold text-maroon text-lg lg:text-xl tracking-tight">
                Ponnazhagu
              </span>
              <span className="block text-[10px] lg:text-[11px] font-semibold text-gold-dark tracking-[0.15em] uppercase -mt-0.5">
                Finance
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-medium text-navy hover:text-maroon hover:bg-cream transition-all cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-card-hover border border-warm-gray-dark py-2 animate-fade-in-up">
                      {SERVICE_DROPDOWN.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={handleNavClick}
                          className="block px-5 py-2.5 text-sm text-navy-light hover:bg-cream hover:text-maroon transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-[15px] font-medium text-navy hover:text-maroon hover:bg-cream transition-all"
                >
                  {link.label}
                </a>
              )
            )}
            {/* CTA Button */}
            <a
              href="#hero-form"
              className="ml-5 px-7 py-2.5 rounded-full font-semibold text-navy bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold shadow-gold hover:shadow-lg transition-all duration-300 text-sm"
            >
              Apply Now
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-cream transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Navigation Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden glass-overlay animate-fade-in-up">
          <div className="flex flex-col pt-20 pb-8 px-6 h-full overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="py-4 text-xl font-semibold text-white border-b border-white/10 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-8 space-y-3">
              <a
                href="#hero-form"
                onClick={handleNavClick}
                className="block text-center px-6 py-4 rounded-xl font-bold text-navy bg-gradient-to-r from-gold to-gold-light shadow-gold text-lg"
              >
                Apply Now
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border-2 border-gold/40"
              >
                <Phone size={18} /> Call Us
              </a>
            </div>
            <div className="mt-auto pt-8 text-center text-gray-400 text-sm">
              <p className="flex items-center justify-center gap-2">
                <Clock size={14} /> {COMPANY.branchTimings}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile FABs: Call Now + WhatsApp ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex shadow-fab">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-maroon text-white font-semibold text-sm"
          >
            <Phone size={17} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 text-white font-semibold text-sm"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

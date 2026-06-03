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
import Button from "./ui/Button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ── Utility Top Bar ── */}
      <div className="hidden lg:block bg-brand-primary text-white/90 text-[13px]">
        <div className="section-container flex items-center justify-between py-2">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-white/70">
              <Clock size={13} className="text-brand-secondary" />
              {COMPANY.branchTimings}
            </span>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors duration-300"
            >
              <Phone size={13} className="text-brand-secondary" />
              {COMPANY.phone}
            </a>
          </div>
          <button
            className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors duration-300 cursor-pointer"
            aria-label="Select language"
          >
            <Globe size={13} />
            English / தமிழ்
          </button>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-card"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" onClick={handleNavClick}>
            <div
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(145deg, #DBBE7A, #A88940)",
                boxShadow: "0 2px 8px rgba(197,160,89,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span className="text-white font-heading font-black text-lg lg:text-xl drop-shadow-sm">₹</span>
            </div>
            <div className="leading-tight">
              <span className="block font-heading font-extrabold text-brand-primary text-lg lg:text-xl tracking-tight">
                Ponnazhagu
              </span>
              <span className="block text-[10px] lg:text-[11px] font-semibold text-brand-secondary-dark tracking-[0.2em] uppercase -mt-0.5">
                Finance
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-medium text-brand-text-dark hover:text-brand-primary hover:bg-brand-bg-cream/60 transition-all duration-300 cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl border border-brand-border py-2 animate-fade-in-up"
                      style={{ boxShadow: "0 8px 32px rgba(28,25,23,0.12), 0 2px 8px rgba(28,25,23,0.06)" }}>
                      {SERVICE_DROPDOWN.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={handleNavClick}
                          className="block px-5 py-2.5 text-sm text-brand-text-dark hover:bg-brand-bg-cream hover:text-brand-primary transition-all duration-200"
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
                  className="px-4 py-2 rounded-lg text-[15px] font-medium text-brand-text-dark hover:text-brand-primary hover:bg-brand-bg-cream/60 transition-all duration-300"
                >
                  {link.label}
                </a>
              )
            )}
            {/* Premium 3D CTA */}
            <Button href="#hero-form" className="ml-5">
              Apply Now
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-text-dark hover:bg-brand-bg-cream transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden glass-overlay animate-fade-in-up">
          <div className="flex flex-col pt-20 pb-8 px-6 h-full overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="py-4 text-xl font-semibold text-white border-b border-white/10 hover:text-brand-secondary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-8 space-y-3">
              <Button href="#hero-form" onClick={handleNavClick} className="w-full">
                Apply Now
              </Button>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border-2 border-brand-secondary/40 hover:border-brand-secondary transition-colors duration-300"
              >
                <Phone size={18} /> Call Us
              </a>
            </div>
            <div className="mt-auto pt-8 text-center text-white/40 text-sm">
              <p className="flex items-center justify-center gap-2">
                <Clock size={14} /> {COMPANY.branchTimings}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile FABs ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex shadow-fab">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-primary text-white font-semibold text-sm"
          >
            <Phone size={17} /> Call Now
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 text-white font-semibold text-sm"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

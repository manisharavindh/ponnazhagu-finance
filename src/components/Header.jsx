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
import { useLanguage } from "../context/LanguageContext";
import Button from "./ui/Button";
import logo from "../assets/logo.png";

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
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
      <div className="hidden lg:block bg-brand-primary text-white/90 text-[13px] mandala-texture">
        <div className="section-container flex items-center justify-between py-2 relative z-10">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-white/70">
              <Clock size={13} className="text-brand-secondary" />
              {t.COMPANY.branchTimings}
            </span>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${t.COMPANY.phone}`}
                className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors duration-300"
              >
                <Phone size={13} className="text-brand-secondary" />
                {t.COMPANY.phone}
              </a>
              {t.COMPANY.phone2 && (
                <a
                  href={`tel:${t.COMPANY.phone2}`}
                  className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors duration-300"
                >
                  <Phone size={13} className="text-brand-secondary" />
                  {t.COMPANY.phone2}
                </a>
              )}
            </div>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors duration-300 cursor-pointer"
            aria-label="Select language"
            aria-pressed={language === 'en' ? 'false' : 'true'}
          >
            <Globe size={13} />
            <span className={language === 'ta' ? 'font-bold text-white' : ''}>தமிழ்</span> / <span className={language === 'en' ? 'font-bold text-white' : ''}>English</span>
          </button>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-400 ${scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-card"
            : "bg-white shadow-sm"
          }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" onClick={handleNavClick}>
            <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 overflow-hidden">
              <img src={logo} alt={`${t.COMPANY.name} Logo`} className="w-full h-full object-contain" />
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
            {t.NAV_LINKS.map((link) =>
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
                      {t.SERVICE_DROPDOWN.map((item) => (
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
              {t.UI_STRINGS.applyNow}
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-text-dark hover:bg-brand-bg-cream transition-colors cursor-pointer relative z-[60]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden glass-overlay animate-fade-in-up">
          <div className="flex flex-col pt-24 pb-28 px-6 h-full overflow-y-auto">
            
            {/* Mobile Language Toggle - Segmented Control */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center p-1.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                <button
                  onClick={() => language !== 'en' && toggleLanguage()}
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    language === 'en' 
                      ? 'bg-brand-secondary text-brand-primary shadow-md' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  aria-pressed={language === 'en'}
                >
                  English
                </button>
                <button
                  onClick={() => language !== 'ta' && toggleLanguage()}
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    language === 'ta' 
                      ? 'bg-brand-secondary text-brand-primary shadow-md' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  aria-pressed={language === 'ta'}
                >
                  தமிழ்
                </button>
              </div>
            </div>

            <nav className="flex flex-col mb-10">
              {t.NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="py-4 text-xl font-medium text-white/90 border-b border-white/10 hover:text-brand-secondary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="space-y-4">
              <Button href="#hero-form" onClick={handleNavClick} className="w-full text-lg py-4">
                {t.UI_STRINGS.applyNow}
              </Button>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${t.COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border border-brand-secondary/40 bg-brand-secondary/10 hover:bg-brand-secondary/20 transition-colors duration-300"
                >
                  <Phone size={18} className="text-brand-secondary" /> {t.UI_STRINGS.call} {t.COMPANY.phone}
                </a>
                {t.COMPANY.phone2 && (
                  <a
                    href={`tel:${t.COMPANY.phone2}`}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border border-brand-secondary/20 hover:border-brand-secondary/40 hover:bg-white/5 transition-colors duration-300"
                  >
                    <Phone size={18} className="text-brand-secondary" /> {t.UI_STRINGS.call} {t.COMPANY.phone2}
                  </a>
                )}
              </div>
            </div>

            <div className="mt-auto pt-10 text-center text-white/40 text-[13px]">
              <p className="flex items-center justify-center gap-2">
                <Clock size={14} className="text-brand-secondary/50" /> {t.COMPANY.branchTimings}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile FABs ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex shadow-fab">
          <a
            href={`tel:${t.COMPANY.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-primary text-white font-semibold text-sm"
          >
            <Phone size={17} /> {t.UI_STRINGS.callNow}
          </a>
          <a
            href={`https://wa.me/${t.COMPANY.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 text-white font-semibold text-sm"
          >
            <MessageCircle size={17} /> {t.UI_STRINGS.whatsapp}
          </a>
        </div>
      </div>
    </>
  );
}

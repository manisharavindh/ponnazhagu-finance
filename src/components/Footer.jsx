import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "../constants/data";
import logo from "../assets/logo.png";

/* ── Inline Social Media SVG icons ── */
function FacebookIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Ornate corner SVG for the decorative frame ── */
function OrnateCorner({ className = "" }) {
  return (
    <svg
      className={`footer-ornate-corner ${className}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M2 30 L2 16 Q2 2 16 2 L30 2"
        stroke="#C5A059"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M2 24 Q2 8 8 4"
        stroke="#C5A059"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <circle cx="2" cy="30" r="2" fill="#C5A059" />
      <circle cx="30" cy="2" r="2" fill="#C5A059" />
      {/* Decorative swirl */}
      <path
        d="M6 28 Q4 26 4 22 Q4 18 8 16 Q6 20 8 22 Q10 24 8 26 Q7 27 6 28Z"
        fill="#C5A059"
        opacity="0.3"
      />
      <path
        d="M28 6 Q26 4 22 4 Q18 4 16 8 Q20 6 22 8 Q24 10 26 8 Q27 7 28 6Z"
        fill="#C5A059"
        opacity="0.3"
      />
    </svg>
  );
}

export default function Footer({ openLegalModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-root">
      {/* ── Ornate gold top border ── */}
      <div className="footer-gold-border">
        <div className="footer-gold-border-inner" />
      </div>

      {/* ── Main content area with decorative frame ── */}
      <div className="footer-content">
        <div className="footer-inner-frame">
          {/* Ornate corner decorations */}
          <OrnateCorner className="footer-corner-tl" />
          <OrnateCorner className="footer-corner-tr" />
          <OrnateCorner className="footer-corner-bl" />
          <OrnateCorner className="footer-corner-br" />

          <div className="footer-grid">
            {/* ── Column 1: Logo & Branding ── */}
            <div className="footer-col footer-col-brand">
              <div className="footer-logo-row">
                <img
                  src={logo}
                  alt={`${COMPANY.name} Logo`}
                  className="footer-logo-img"
                />
                <span className="footer-brand-name">Ponnazhagu Finance</span>
              </div>
              <p className="footer-tagline">
                Your Trusted Financial Partner for Growth. Low Interest Rates, Minimal Documentation, Quick Approval
              </p>
              {/* <div className="footer-social-row">
                <a href="#" className="footer-social-icon" aria-label="Facebook">
                  <FacebookIcon size={14} />
                </a>
                <a href="#" className="footer-social-icon" aria-label="Instagram">
                  <InstagramIcon size={14} />
                </a>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp?.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={14} />
                </a>
              </div> */}
            </div>

            {/* ── Column 2: Contact Us ── */}
            <div className="footer-col">
              <h4 className="footer-heading">CONTACT US</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon-wrap">
                    <Phone size={12} className="footer-contact-icon" />
                  </div>
                  <div className="footer-contact-text">
                    <a href={`tel:${COMPANY.phone}`} className="footer-link">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon-wrap">
                    <Phone size={10} className="footer-contact-icon" />
                  </div>
                  <div className="footer-contact-text">
                    <a href={`tel:${COMPANY.phone2}`} className="footer-link">
                      {COMPANY.phone2}
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon-wrap">
                    <Mail size={12} className="footer-contact-icon" />
                  </div>
                  <a href={`mailto:${COMPANY.email}`} className="footer-link">
                    {COMPANY.email}
                  </a>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon-wrap">
                    <MapPin size={12} className="footer-contact-icon" />
                  </div>
                  <span className="footer-address">{COMPANY.address}</span>
                </div>
              </div>
            </div>

            {/* ── Column 3: Our Services ── */}
            <div className="footer-col">
              <h4 className="footer-heading">OUR SERVICES</h4>
              <ul className="footer-link-list">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4: Legal ── */}
            <div className="footer-col">
              <h4 className="footer-heading">LEGAL</h4>
              <ul className="footer-link-list">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    {link.label === "Privacy Policy" ||
                      link.label === "Terms & Conditions" ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.label === "Privacy Policy")
                            openLegalModal?.("privacy");
                          else openLegalModal?.("terms");
                        }}
                        className="footer-link footer-link-btn"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a href={link.href} className="footer-link">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 5: Visit Our Branch ── */}
            <div className="footer-col footer-col-branch">
              <h4 className="footer-heading">VISIT OUR BRANCH</h4>
              <div className="footer-branch-card">
                <MapPin size={24} className="footer-branch-pin" />
                <p className="footer-branch-location">Sivagangai, Tamil Nadu</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-branch-maps-link"
                >
                  View on Google Maps
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-visit-btn"
                >
                  VISIT BRANCH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom copyright bar with decorative flourish ── */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-flourish">
          <span className="footer-flourish-line" />
          <span className="footer-flourish-diamond">◆</span>
          <span className="footer-flourish-line" />
        </div>
        <p>© {currentYear} Ponnazhagu Finance. All rights reserved.</p>
      </div>

      {/* Spacer for mobile FAB */}
      <div className="h-[72px] lg:hidden" />
    </footer>
  );
}

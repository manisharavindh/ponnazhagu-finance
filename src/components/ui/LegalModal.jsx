import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../assets/logo.png";

export default function LegalModal({ isOpen, onClose, type }) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => {
        document.body.style.overflow = "unset";
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = "unset";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(true); // reset for next open
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, type]);

  if (!isOpen) return null;

  const isTerms = type === "terms";
  const title = isTerms ? t.UI_STRINGS.termsAndConditions : t.UI_STRINGS.privacyPolicy;
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 z-50 bg-brand-primary pointer-events-none" aria-hidden="true">
        <div className="w-full h-full mandala-texture pointer-events-none"></div>
      </div>

      {/* Scrollable Overlay Container */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-0 sm:p-8">

          {/* Scroll Container - Modern Premium Certificate Style */}
          <div
            className="relative z-10 w-full max-w-4xl min-h-screen sm:min-h-0 flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] rounded-none sm:rounded-xl animate-fade-in-up"
            style={{
              background: "#FAFAF8",
              // Subtle paper texture and roll effect
              backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.02) 0%, transparent 5%, transparent 95%, rgba(0,0,0,0.02) 100%)"
            }}
          >

            {/* Certificate inner borders */}
            <div className="absolute inset-2 sm:inset-3 border-[1.5px] border-[#DBBE7A]/40 rounded-lg pointer-events-none z-20"></div>
            <div className="absolute inset-3 sm:inset-4 border-[1px] border-[#DBBE7A]/20 rounded-md pointer-events-none z-20"></div>

            {/* Decorative corner accents */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-[2px] border-l-[2px] border-[#DBBE7A] rounded-tl-lg pointer-events-none z-20"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-[2px] border-r-[2px] border-[#DBBE7A] rounded-tr-lg pointer-events-none z-20"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-[2px] border-l-[2px] border-[#DBBE7A] rounded-bl-lg pointer-events-none z-20"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-[2px] border-r-[2px] border-[#DBBE7A] rounded-br-lg pointer-events-none z-20"></div>

            {/* Subtle rolled paper shadows top & bottom */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/5 to-transparent z-20 rounded-t-none sm:rounded-t-xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/5 to-transparent z-20 rounded-b-none sm:rounded-b-xl pointer-events-none shadow-[inset_0_-4px_6px_rgba(0,0,0,0.05)]"></div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-[#DBBE7A]/20 transition-colors z-30"
              aria-label="Close modal"
            >
              <X size={22} className="text-brand-text-dark" />
            </button>

            {/* Header */}
            <div className="pt-12 pb-6 px-8 sm:px-12 text-center border-b border-[#DBBE7A]/20 flex-shrink-0 relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex-shrink-0 overflow-hidden">
                <img src={logo} alt={`${t.COMPANY.name} Logo`} className="w-full h-full object-contain" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-text-dark tracking-wide uppercase">
                {title}
              </h2>
              <p className="text-brand-secondary-dark font-semibold mt-2 text-[11px] tracking-[0.2em] uppercase">
                Effective: June {currentYear}
              </p>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 pb-16 sm:pb-20 flex-grow text-brand-text-muted leading-relaxed relative z-10">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[40vh] text-brand-primary opacity-80 animate-pulse">
                  <Loader2 className="w-10 h-10 animate-spin mb-4" />
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-brand-secondary-dark">Retrieving Document...</p>
                </div>
              ) : isTerms ? (
                <div className="space-y-7 max-w-3xl mx-auto">
                  <p className="text-[15px] sm:text-[16px]">
                    Welcome to <strong className="text-brand-primary font-semibold">{t.COMPANY.name}</strong>. These Terms & Conditions govern your use of our services.
                  </p>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">01.</span> Acceptance of Terms
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">By accessing our website or utilizing our financial services, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">02.</span> Services Offered
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">We offer Gold Loans, Silver Loans, and other financial products subject to our eligibility criteria and approval process. All loan sanctions are at the sole discretion of {t.COMPANY.name}.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">03.</span> Interest Rates & Charges
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">Interest rates, processing fees, and other charges are subject to change based on market conditions and company policies. All applicable charges will be transparently communicated prior to loan disbursal.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">04.</span> User Responsibilities
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">You agree to provide accurate and complete information during the application process. Providing false or misleading information may result in immediate rejection or termination of services.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">05.</span> Default & Recovery
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">In the event of a default on loan repayment, {t.COMPANY.name} reserves the right to initiate recovery proceedings, including the auction of pledged assets, as per applicable laws and regulations.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">06.</span> Modifications
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">We may revise these Terms from time to time. Continued use of our services constitutes acceptance of the revised Terms.</p>
                  </div>

                  <div className="pt-8 text-center">
                    <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-50" />
                  </div>
                </div>
              ) : (
                <div className="space-y-7 max-w-3xl mx-auto">
                  <p className="text-[15px] sm:text-[16px]">
                    At <strong className="text-brand-primary font-semibold">{t.COMPANY.name}</strong>, we are committed to protecting your privacy and safeguarding your personal information.
                  </p>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">01.</span> Information We Collect
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">We collect personal information such as your name, contact details, identification documents (Aadhaar, PAN), and financial data when you apply for our services.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">02.</span> How We Use Your Information
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">Your information is used strictly to assess loan eligibility, process applications, communicate with you, and comply with regulatory requirements set by the authorities.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">03.</span> Information Sharing
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">We do not sell or rent your personal information to third parties. We may share information with regulatory bodies, credit bureaus, or legal authorities as required by law.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">04.</span> Data Security
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">We implement robust security measures to protect your data against unauthorized access, alteration, or disclosure. All digital records are stored securely.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">05.</span> Your Rights
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">You have the right to access, update, or request the deletion of your personal data, subject to legal and regulatory retention requirements.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-2 flex items-center gap-3">
                      <span className="text-brand-secondary text-sm">06.</span> Contact Us
                    </h3>
                    <p className="text-[14px] sm:text-[15px] pl-7">If you have any questions about this Privacy Policy, please contact us at {t.COMPANY.email}</p>
                  </div>

                  <div className="pt-8 text-center">
                    <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-50" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

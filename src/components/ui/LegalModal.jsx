import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { COMPANY } from "../../constants/data";

export default function LegalModal({ isOpen, onClose, type }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => {
        document.body.style.overflow = "unset";
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, type]);

  if (!isOpen) return null;

  const isTerms = type === "terms";
  const title = isTerms ? "Terms & Conditions" : "Privacy Policy";
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white animate-fade-in overflow-hidden">
      <div 
        className="w-full h-full max-w-4xl mx-auto flex flex-col relative bg-white"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="p-6 sm:p-8 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-2xl font-heading font-bold text-brand-text-dark">{title}</h2>
          <p className="text-sm text-brand-text-muted mt-1">Last Updated: June {currentYear}</p>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto prose prose-sm sm:prose-base text-brand-text-muted flex-grow">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-brand-primary opacity-80 animate-pulse">
              <Loader2 className="w-10 h-10 animate-spin mb-4" />
              <p className="text-sm font-medium">Loading {title}...</p>
            </div>
          ) : isTerms ? (
            <>
              <p>Welcome to {COMPANY.name}. These Terms & Conditions govern your use of our services.</p>
              
              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">1. Acceptance of Terms</h3>
              <p>By accessing our website or utilizing our financial services, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">2. Services Offered</h3>
              <p>We offer Gold Loans, Silver Loans, and other financial products subject to our eligibility criteria and approval process. All loan sanctions are at the sole discretion of {COMPANY.name}.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">3. Interest Rates & Charges</h3>
              <p>Interest rates, processing fees, and other charges are subject to change based on market conditions and company policies. All applicable charges will be transparently communicated prior to loan disbursal.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">4. User Responsibilities</h3>
              <p>You agree to provide accurate and complete information during the application process. Providing false or misleading information may result in immediate rejection or termination of services.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">5. Default & Recovery</h3>
              <p>In the event of a default on loan repayment, {COMPANY.name} reserves the right to initiate recovery proceedings, including the auction of pledged assets, as per applicable laws and regulations.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">6. Modifications</h3>
              <p>We may revise these Terms from time to time. Continued use of our services constitutes acceptance of the revised Terms.</p>
            </>
          ) : (
            <>
              <p>At {COMPANY.name}, we are committed to protecting your privacy and safeguarding your personal information.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">1. Information We Collect</h3>
              <p>We collect personal information such as your name, contact details, identification documents (Aadhaar, PAN), and financial data when you apply for our services.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">2. How We Use Your Information</h3>
              <p>Your information is used strictly to assess loan eligibility, process applications, communicate with you, and comply with regulatory requirements set by the RBI and other authorities.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">3. Information Sharing</h3>
              <p>We do not sell or rent your personal information to third parties. We may share information with regulatory bodies, credit bureaus, or legal authorities as required by law.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">4. Data Security</h3>
              <p>We implement robust security measures to protect your data against unauthorized access, alteration, or disclosure. All digital records are stored securely.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">5. Your Rights</h3>
              <p>You have the right to access, update, or request the deletion of your personal data, subject to legal and regulatory retention requirements.</p>

              <h3 className="text-brand-text-dark font-bold mt-6 mb-2">6. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at {COMPANY.email} or {COMPANY.phone}.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

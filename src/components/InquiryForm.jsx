import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "./ui/Button";

export default function InquiryForm({ openLegalModal }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loanType: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    if (!formData.loanType) newErrors.loanType = "Please select a loan type";
    if (!formData.amount || Number(formData.amount) < 5000)
      newErrors.amount = "Enter an amount (min ₹5,000)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const selectedLoan = t.LOAN_TYPES.find(type => type.value === formData.loanType)?.label || formData.loanType;
      const formattedAmount = Number(formData.amount).toLocaleString('en-IN');
      const message = `*New Loan Inquiry*\n━━━━━━━━━━━━━━━━━━\n*Name:* ${formData.name}\n*Mobile:* +91 ${formData.mobile}\n*Loan Type:* ${selectedLoan}\n*Amount Needed:* ₹${formattedAmount}\n━━━━━━━━━━━━━━━━━━`;
      const whatsappNumber = t.COMPANY.whatsapp.replace(/\D/g, ''); // Extract only digits
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", mobile: "", loanType: "", amount: "" });
      }, 4000);
    } catch (error) {
      console.error("Failed to redirect to WhatsApp:", error);
      alert("Failed to process inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div id="hero-form" className="skeuo-card p-7 lg:p-8 text-center animate-fade-in-up">
        <div
          className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(145deg, #D1FAE5, #A7F3D0)",
            boxShadow: "0 2px 8px rgba(16,185,129,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-heading font-bold text-brand-text-dark mb-2">
          {t.UI_STRINGS.inquiryReceived}
        </h3>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          {t.UI_STRINGS.thankYou} <strong className="text-brand-primary">{formData.name}</strong>.
          {t.UI_STRINGS.teamWillReachYou}{" "}
          <strong className="text-brand-primary">{formData.mobile}</strong>{" "}
          {t.UI_STRINGS.within30Min}
        </p>
      </div>
    );
  }

  return (
    <div id="hero-form" className="skeuo-card p-6 sm:p-7 lg:p-8">
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg lg:text-xl font-heading font-bold text-brand-text-dark leading-tight">
          {t.UI_STRINGS.checkEligibilityTitle}
        </h3>
        <p className="text-brand-text-muted text-sm mt-1">
          {t.UI_STRINGS.getCallback}
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        {/* Name */}
        <div>
          <label htmlFor="inquiry-name" className="sr-only">{t.UI_STRINGS.fullName}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.UI_STRINGS.fullName}
            className={`input-premium ${errors.name ? "input-premium-error" : ""}`}
            id="inquiry-name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="inquiry-mobile" className="sr-only">{t.UI_STRINGS.mobileNumber}</label>
          <div className="relative">
            <span className="absolute left-0 top-0 bottom-0 flex items-center pl-3.5 pr-3 text-sm font-semibold text-brand-text-muted border-r-[1.5px] border-brand-border pointer-events-none">
              +91
            </span>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder={t.UI_STRINGS.mobileNumber}
              maxLength={10}
              className={`input-premium ${errors.mobile ? "input-premium-error" : ""}`}
              style={{ paddingLeft: "4.25rem" }}
              id="inquiry-mobile"
            />
          </div>
          {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobile}</p>}
        </div>

        {/* Loan Type */}
        <div>
          <label htmlFor="inquiry-loan-type" className="sr-only">Loan Type</label>
          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            className={`input-premium cursor-pointer ${errors.loanType ? "input-premium-error" : ""}`}
            id="inquiry-loan-type"
          >
            {t.LOAN_TYPES.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
          {errors.loanType && <p className="text-red-500 text-xs mt-1 ml-1">{errors.loanType}</p>}
        </div>

        {/* Amount */}
        <div>
          <label htmlFor="inquiry-amount" className="sr-only">Amount Needed</label>
          <div className="relative">
            <span className="absolute left-0 top-0 bottom-0 flex items-center pl-3.5 pr-3 text-sm font-semibold text-brand-text-muted border-r-[1.5px] border-brand-border pointer-events-none">
              ₹
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder={t.UI_STRINGS.amountNeededPlaceholder}
              min={5000}
              className={`input-premium ${errors.amount ? "input-premium-error" : ""}`}
              style={{ paddingLeft: "2.75rem" }}
              id="inquiry-amount"
            />
          </div>
          {errors.amount && <p className="text-red-500 text-xs mt-1 ml-1">{errors.amount}</p>}
        </div>

        {/* Submit — Premium 3D gold button */}
        <Button type="submit" id="inquiry-submit" className="w-full mt-1">
          {t.UI_STRINGS.checkEligibility} →
        </Button>

        <p className="text-[11px] text-brand-text-muted text-center leading-snug pt-0.5">
          {t.UI_STRINGS.bySubmittingText1}{" "}
          <button type="button" onClick={() => openLegalModal?.("terms")} className="text-brand-primary underline">{t.UI_STRINGS.terms}</button>{" "}
          {t.UI_STRINGS.bySubmittingText2}{" "}
          <button type="button" onClick={() => openLegalModal?.("privacy")} className="text-brand-primary underline">{t.UI_STRINGS.privacyPolicy}</button>.
          {t.UI_STRINGS.bySubmittingText3}
        </p>
      </form>

    </div>
  );
}

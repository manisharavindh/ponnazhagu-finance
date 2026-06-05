import { useState } from "react";
import { LOAN_TYPES } from "../constants/data";
import Button from "./ui/Button";

export default function InquiryForm({ openLegalModal }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loanType: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
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
    if (!validate()) return;

    // TODO: Connect to Supabase/Backend API here
    console.log("Inquiry Form Submission:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", mobile: "", loanType: "", amount: "" });
    }, 4000);
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
          Inquiry Received!
        </h3>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          Thank you, <strong className="text-brand-primary">{formData.name}</strong>.
          Our team will reach you on{" "}
          <strong className="text-brand-primary">{formData.mobile}</strong> within 30
          minutes during business hours.
        </p>
      </div>
    );
  }

  return (
    <div id="hero-form" className="skeuo-card p-6 sm:p-7 lg:p-8">
      {/* Header */}
      <div className="mb-5">
        <div
          className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase mb-2"
          style={{
            background: "linear-gradient(135deg, rgba(122,6,22,0.1), rgba(122,6,22,0.05))",
            color: "#7A0616",
            letterSpacing: "0.12em",
          }}
        >
          Quick Inquiry
        </div>
        <h3 className="text-lg lg:text-xl font-heading font-bold text-brand-text-dark leading-tight">
          Check Your Eligibility
        </h3>
        <p className="text-brand-text-muted text-sm mt-1">
          Get a callback in 30 minutes
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            className={`input-premium ${errors.name ? "input-premium-error" : ""}`}
            aria-label="Full Name"
            id="inquiry-name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
        </div>

        {/* Mobile */}
        <div>
          <div className="relative">
            <span className="absolute left-0 top-0 bottom-0 flex items-center pl-3.5 pr-3 text-sm font-semibold text-brand-text-muted border-r-[1.5px] border-brand-border pointer-events-none">
              +91
            </span>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number *"
              maxLength={10}
              className={`input-premium ${errors.mobile ? "input-premium-error" : ""}`}
              style={{ paddingLeft: "4.25rem" }}
              aria-label="Mobile Number"
              id="inquiry-mobile"
            />
          </div>
          {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobile}</p>}
        </div>

        {/* Loan Type */}
        <div>
          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            className={`input-premium cursor-pointer ${errors.loanType ? "input-premium-error" : ""}`}
            aria-label="Loan Type"
            id="inquiry-loan-type"
          >
            {LOAN_TYPES.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
          {errors.loanType && <p className="text-red-500 text-xs mt-1 ml-1">{errors.loanType}</p>}
        </div>

        {/* Amount */}
        <div>
          <div className="relative">
            <span className="absolute left-0 top-0 bottom-0 flex items-center pl-3.5 pr-3 text-sm font-semibold text-brand-text-muted border-r-[1.5px] border-brand-border pointer-events-none">
              ₹
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount Needed *"
              min={5000}
              className={`input-premium ${errors.amount ? "input-premium-error" : ""}`}
              style={{ paddingLeft: "2.75rem" }}
              aria-label="Amount Needed"
              id="inquiry-amount"
            />
          </div>
          {errors.amount && <p className="text-red-500 text-xs mt-1 ml-1">{errors.amount}</p>}
        </div>

        {/* Submit — Premium 3D gold button */}
        <Button type="submit" id="inquiry-submit" className="w-full mt-1">
          Check Eligibility →
        </Button>

        <p className="text-[11px] text-brand-text-muted text-center leading-snug pt-0.5">
          By submitting, you agree to our{" "}
          <button type="button" onClick={() => openLegalModal?.("terms")} className="text-brand-primary underline">Terms</button>{" "}
          &{" "}
          <button type="button" onClick={() => openLegalModal?.("privacy")} className="text-brand-primary underline">Privacy Policy</button>.
          We'll contact you at the number provided.
        </p>
      </form>
    </div>
  );
}

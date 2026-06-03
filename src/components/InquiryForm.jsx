import { useState } from "react";
import { LOAN_TYPES } from "../constants/data";

export default function InquiryForm() {
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

    // Reset after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", mobile: "", loanType: "", amount: "" });
    }, 4000);
  };

  const inputBase =
    "w-full py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium bg-white focus:outline-none focus:ring-0 placeholder:text-gray-400";

  const borderClass = (field) =>
    errors[field]
      ? "border-red-400 focus:border-red-500"
      : "border-warm-gray-dark focus:border-gold hover:border-gold/50";

  if (submitted) {
    return (
      <div
        id="hero-form"
        className="bg-white rounded-2xl p-7 lg:p-8 shadow-card border border-warm-gray-dark text-center animate-fade-in-up"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-heading font-bold text-navy mb-2">
          Inquiry Received!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Thank you, <strong className="text-maroon">{formData.name}</strong>.
          Our team will reach you on{" "}
          <strong className="text-maroon">{formData.mobile}</strong> within 30
          minutes during business hours.
        </p>
      </div>
    );
  }

  return (
    <div
      id="hero-form"
      className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-card border border-warm-gray-dark"
    >
      {/* Form Header */}
      <div className="mb-5">
        <div className="inline-block px-3 py-1 rounded-full bg-maroon/10 text-maroon text-[11px] font-bold uppercase tracking-wider mb-2">
          Quick Inquiry
        </div>
        <h3 className="text-lg lg:text-xl font-heading font-bold text-navy leading-tight">
          Check Your Eligibility
        </h3>
        <p className="text-gray-500 text-sm mt-1">
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
            className={`${inputBase} ${borderClass("name")} px-4`}
            aria-label="Full Name"
            id="inquiry-name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <div className="relative">
            <span className="absolute left-0 top-0 bottom-0 flex items-center pl-4 pr-3 text-sm font-semibold text-gray-400 border-r-2 border-warm-gray-dark pointer-events-none">
              +91
            </span>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number *"
              maxLength={10}
              className={`${inputBase} ${borderClass("mobile")}`}
              style={{ paddingLeft: "4.5rem", paddingRight: "1rem" }}
              aria-label="Mobile Number"
              id="inquiry-mobile"
            />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobile}</p>
          )}
        </div>

        {/* Loan Type */}
        <div>
          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            className={`${inputBase} ${borderClass("loanType")} px-4 cursor-pointer`}
            aria-label="Loan Type"
            id="inquiry-loan-type"
          >
            {LOAN_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.loanType && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.loanType}
            </p>
          )}
        </div>

        {/* Amount */}
        <div>
          <div className="relative">
            <span className="absolute left-0 top-0 bottom-0 flex items-center pl-4 pr-3 text-sm font-semibold text-gray-400 border-r-2 border-warm-gray-dark pointer-events-none">
              ₹
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount Needed *"
              min={5000}
              className={`${inputBase} ${borderClass("amount")}`}
              style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
              aria-label="Amount Needed"
              id="inquiry-amount"
            />
          </div>
          {errors.amount && (
            <p className="text-red-500 text-xs mt-1 ml-1">{errors.amount}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          id="inquiry-submit"
          className="w-full py-3.5 rounded-lg font-bold text-navy bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold shadow-gold hover:shadow-lg transition-all duration-300 text-[15px] cursor-pointer active:scale-[0.98] mt-1"
        >
          Check Eligibility →
        </button>

        <p className="text-[11px] text-gray-400 text-center leading-snug pt-0.5">
          By submitting, you agree to our{" "}
          <a href="#" className="text-maroon underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="#" className="text-maroon underline">
            Privacy Policy
          </a>
          . We'll contact you at the number provided.
        </p>
      </form>
    </div>
  );
}

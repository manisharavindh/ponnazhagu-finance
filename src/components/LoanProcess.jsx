import { FileText, Search, CreditCard, CheckCircle, ChevronRight } from "lucide-react";

const PROCESS_STEPS = [
  { icon: FileText, title: "Apply" },
  { icon: Search, title: "Valuation" },
  { icon: CheckCircle, title: "Approval" },
  { icon: CreditCard, title: "Disbursal" },
];

/* Single step pill */
function StepPill({ icon: Icon, title }) {
  return (
    <div className="loan-step-pill">
      <div className="loan-step-icon">
        <Icon size={14} />
      </div>
      <span className="loan-step-label">{title}</span>
    </div>
  );
}

/* Chevron separator */
function StepArrow() {
  return (
    <span className="loan-step-arrow">
      <ChevronRight size={12} />
    </span>
  );
}

/* Build the strip content (steps + arrows) */
function StepStrip() {
  return (
    <>
      {PROCESS_STEPS.map((step, idx) => (
        <div key={idx} className="loan-step-group">
          <StepPill icon={step.icon} title={step.title} />
          {idx !== PROCESS_STEPS.length - 1 && <StepArrow />}
        </div>
      ))}
    </>
  );
}

export default function LoanProcess() {
  return (
    <section className="loan-process-root" id="loan-process">
      {/* ── Desktop: Static single-line centered ── */}
      <div className="loan-process-desktop">
        <div className="loan-process-steps">
          <StepStrip />
        </div>
      </div>

      {/* ── Mobile: Auto-scrolling marquee ── */}
      <div className="loan-process-mobile">
        <div className="loan-marquee-track">
          <div className="loan-marquee-content" aria-hidden="false">
            <StepStrip />
            <StepArrow />
            <StepStrip />
            <StepArrow />
          </div>
          <div className="loan-marquee-content" aria-hidden="true">
            <StepStrip />
            <StepArrow />
            <StepStrip />
            <StepArrow />
          </div>
        </div>
      </div>
    </section>
  );
}

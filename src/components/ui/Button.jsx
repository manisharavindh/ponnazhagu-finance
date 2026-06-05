export default function Button({ children, className = '', href, ...props }) {
  const baseClasses = "px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 text-[#1C1917] bg-gradient-to-b from-[#FDE08B] via-[#D4AF37] to-[#B8942E] border border-[#FDE08B]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_10px_rgba(197,160,89,0.4)] hover:brightness-110 hover:-translate-y-[1px] active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.25)] active:translate-y-[2px]";

  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

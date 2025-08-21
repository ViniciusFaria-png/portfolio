interface SkillBannerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SkillBanner({
  children,
  className = "",
}: SkillBannerProps) {
  const baseClasses =
    "cursor-default px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors";
  return <span className={`${baseClasses} ${className}`}>{children}</span>;
}

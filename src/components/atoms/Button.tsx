interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className = "",
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const baseClasses = "px-3 py-1.5 rounded-2xl transition-colors duration-200";
  const variantClasses = {
    primary: "bg-white/10 hover:bg-white/20 border border-white/20",
    secondary: "bg-gray/10 hover:bg-gray/20 border border-gray/20",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

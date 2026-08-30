import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-blue-600",

  secondary:
    "border border-blue-600 bg-white text-blue-700 shadow-sm hover:bg-blue-50 active:bg-blue-100 focus-visible:outline-blue-600",

  dark:
    "bg-slate-900 text-white shadow-sm hover:bg-slate-800 active:bg-slate-950 focus-visible:outline-slate-900",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus-visible:outline-slate-600",

  white:
    "border border-white bg-white text-blue-700 shadow-sm hover:bg-blue-50 active:bg-blue-100 focus-visible:outline-white",
};

const sizes = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm sm:text-base",
  lg: "min-h-12 px-6 py-3 text-base",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  type = "button",
  className = "",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold leading-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;

  const classes = [
    baseStyles,
    variantStyles,
    sizeStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
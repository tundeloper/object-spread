import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      icon,
      iconPosition = "right",
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

    // Variant styles
    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md",
      secondary:
        "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80 shadow-sm hover:shadow-md",
      outline:
        "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-600",
    };

    // Size styles
    const sizeStyles = {
      sm: "px-4 py-1.5 text-sm",
      md: "px-6 py-2 text-base",
      lg: "px-8 py-3 text-lg",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex items-center">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="inline-flex items-center">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
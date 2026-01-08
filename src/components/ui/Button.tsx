import React, { forwardRef } from "react";
import { motion } from "framer-motion";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    disabled?: boolean; // optional support
  };

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type Props = AnchorProps | ButtonProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (props, ref) => {
    const {
      as = "button",
      variant = "primary",
      size = "md",
      className = "",
      children,
      ...rest
    } = props as Props & { as: "button" | "a" };

    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-lg shadow-primary-500/30",
      secondary:
        "glass glass-hover text-gray-900 dark:text-gray-100 focus:ring-primary-500",
      ghost:
        "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-primary-500",
    } as const;

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    } as const;

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // Render as <a>
    if (as === "a") {
      const {
        disabled,
        onClick,
        ...anchorRest
      } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { disabled?: boolean };

      const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (disabled) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        onClick?.(e);
      };

      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={disabled ? undefined : { scale: 1.02 }}
          whileTap={disabled ? undefined : { scale: 0.98 }}
          className={`${classes} ${disabled ? "pointer-events-none opacity-50" : ""}`}
          aria-disabled={disabled ? true : undefined}
          tabIndex={disabled ? -1 : undefined}
          onClick={handleClick}
          {...anchorRest}
        >
          {children}
        </motion.a>
      );
    }

    // Render as <button>
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;

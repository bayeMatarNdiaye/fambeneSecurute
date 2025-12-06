import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  asChild?: boolean;
};

export function Button({
  className,
  variant = "primary",
  asChild = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-glow",
    outline:
      "border border-white/30 text-white hover:border-white hover:bg-white/5",
  };

  const Component = asChild ? Slot : "button";
  return (
    <Component className={cn(base, variants[variant], className)} {...props} />
  );
}


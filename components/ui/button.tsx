import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "icon"
  variant?: "default" | "outline" | "ghost"
}

const sizeMap: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0"
}

const variantMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-primary text-primary-foreground",
  outline: "border bg-transparent text-foreground",
  ghost: "bg-transparent text-foreground hover:bg-accent"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-medium shadow-sm transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        variantMap[variant],
        sizeMap[size],
        className
      )}
      {...props}
    />
  )
)
Button.displayName = "Button"

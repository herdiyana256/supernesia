import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "main" | "secondary"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "main", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          variant === "main"
            ? "bg-primary text-dark font-bold py-2 px-6 rounded-md hover:brightness-95 transition-all"
            : "bg-white border border-gray-300 text-dark font-bold py-2 px-6 rounded-md hover:bg-gray-50 transition-all",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button }

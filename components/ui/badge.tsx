import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "popular" | "default"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-block rounded-full px-3 py-1 text-sm font-medium",
        variant === "popular" ? "bg-secondary text-white" : "bg-primary text-text-primary",
        className,
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

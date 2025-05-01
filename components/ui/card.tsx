import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "yellow"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-xl p-6", variant === "default" ? "bg-white shadow-sm" : "bg-primary shadow-sm", className)}
      {...props}
    />
  )
})
Card.displayName = "Card"

export { Card }

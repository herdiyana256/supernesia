import { notFound } from "next/navigation"

// Blog section disabled — returns 404
export default function BlogPage() {
  notFound()
}

export const metadata = {
  robots: { index: false, follow: false },
}

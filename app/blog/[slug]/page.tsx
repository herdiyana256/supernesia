import { notFound } from "next/navigation"

// Blog articles disabled — returns 404
export default function BlogSlugPage() {
  notFound()
}

export const metadata = {
  robots: { index: false, follow: false },
}

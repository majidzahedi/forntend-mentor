import { roboto } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={cn(
        "bg-newsletter-CharcoalGrey min-h-screen w-full max-h-screen flex items-center justify-center",
        roboto.className
      )}
    >
      {children}
    </section>
  )
}

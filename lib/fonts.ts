import {
  Actor,
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Roboto,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})

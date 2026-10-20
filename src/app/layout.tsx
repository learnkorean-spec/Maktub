import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Cairo } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mkatub.kloversegy.com"),
  title: {
    default: "mkatub: Speak real Arabic. Connect for real.",
    template: "%s | mkatub",
  },
  description:
    "Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.",
  openGraph: {
    title: "mkatub: Speak real Arabic. Connect for real.",
    description:
      "Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.",
    siteName: "mkatub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "mkatub: Speak real Arabic. Connect for real.",
    description:
      "Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}

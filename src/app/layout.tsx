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
    default: "maktub: Speak real Arabic. Connect for real.",
    template: "%s | maktub",
  },
  description:
    "Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.",
  openGraph: {
    title: "maktub: Speak real Arabic. Connect for real.",
    description:
      "Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.",
    siteName: "maktub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "maktub: Speak real Arabic. Connect for real.",
    description:
      "Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "maktub",
  url: "https://mkatub.kloversegy.com",
  description:
    "Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.",
  logo: "https://mkatub.kloversegy.com/favicon.svg",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "maktub",
  url: "https://mkatub.kloversegy.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

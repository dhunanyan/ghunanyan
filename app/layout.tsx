import type { Metadata, Viewport } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghunanyan.com"),
  title: {
    default: "Gor Hunanyan | Project Manager Portfolio",
    template: "%s | Gor Hunanyan",
  },
  description:
    "Project manager portfolio of Gor Hunanyan focused on structured delivery, stakeholder alignment, and operational clarity.",
  applicationName: "Gor Hunanyan Portfolio",
  generator: "Next.js 16",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Gor Hunanyan",
    "Project Manager",
    "Portfolio",
    "Project Management",
    "Operations",
    "Stakeholder Management",
    "Delivery Framework",
  ],
  authors: [{ name: "Gor Hunanyan", url: "https://www.linkedin.com/in/ghunanyan/" }],
  creator: "Gor Hunanyan",
  publisher: "Gor Hunanyan",
  alternates: {
    canonical: "/",
  },
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ghunanyan.com",
    siteName: "Gor Hunanyan Portfolio",
    title: "Gor Hunanyan | Project Manager Portfolio",
    description:
      "A modern portfolio presenting project management approach, capabilities, and collaboration details.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gor Hunanyan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gor Hunanyan | Project Manager Portfolio",
    description:
      "Project management portfolio focused on planning, communication, and delivery execution.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Gor Hunanyan",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E192D" },
    { media: "(prefers-color-scheme: light)", color: "#0E192D" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://utsc-computational-physiology.openai.site"),
  title: { default: "UTSC Computational Physiology Group", template: "%s | UTSC Computational Physiology Group" },
  description: "Student-led computational physiology research, teaching, and inclusive HumMod development at the University of Toronto Scarborough.",
  openGraph: {
    type: "website",
    title: "UTSC Computational Physiology Group",
    description: "Human physiology, made computable. Student-led whole-body modelling at the University of Toronto Scarborough.",
    images: [{ url: "/og.png", width: 1730, height: 906, alt: "UTSC Computational Physiology Group — Human physiology, made computable." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UTSC Computational Physiology Group",
    description: "Human physiology, made computable. Student-led whole-body modelling at the University of Toronto Scarborough.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

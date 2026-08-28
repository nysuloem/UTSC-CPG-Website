import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://utsc-computational-physiology.openai.site"),
  title: { default: "Unofficial Review Draft | UTSC Computational Physiology Group", template: "%s | Unofficial UTSC CPG Review Draft" },
  description: "Unofficial website concept for review. Student-led computational physiology research, teaching, and inclusive HumMod development at the University of Toronto Scarborough.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Unofficial Review Draft | UTSC Computational Physiology Group",
    description: "Website concept for review—not an approved or endorsed UTSC or CPG publication.",
    images: [{ url: "/og.png", width: 1732, height: 908, alt: "Unofficial review draft for the UTSC Computational Physiology Group website." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unofficial Review Draft | UTSC Computational Physiology Group",
    description: "Website concept for review—not an approved or endorsed UTSC or CPG publication.",
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
      <body>
        <aside className="draft-notice" aria-label="Website status">
          <div className="content-width">
            <strong>Unofficial review draft</strong>
            <span>This website concept has not been approved, endorsed, or published by the University of Toronto Scarborough or the UTSC Computational Physiology Group.</span>
          </div>
        </aside>
        {children}
      </body>
    </html>
  );
}

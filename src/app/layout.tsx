import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Typhoon | Blues, Funk & Turkish Soul",
  description:
    "Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten und kraftvoller Live-Energie.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

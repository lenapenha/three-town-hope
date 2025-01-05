import type { Metadata } from "next";
import { Montserrat, Special_Elite } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Three Town Hope",
  description: "Three Town Hope Worship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${specialElite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

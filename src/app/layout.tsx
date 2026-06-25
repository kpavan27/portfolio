import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Pavan Kolasani — Junior Data Analyst",
  description:
    "Junior Data Analyst skilled in SQL, Python, Power BI, and Azure. MSc Data Science (First Class Honours), TU Dublin. Open to opportunities in Dublin and remote.",
  keywords: ["Data Analyst", "SQL", "Python", "Power BI", "Azure", "ETL", "Dashboard", "Dublin"],
  authors: [{ name: "Pavan Kolasani", url: "mailto:kolasanipavan27@gmail.com" }],
  openGraph: {
    title: "Pavan Kolasani — Junior Data Analyst",
    description: "SQL · Python · Power BI · Azure · Open to work in Dublin",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Pavan Kolasani — Data Engineer · Data Scientist",
  description:
    "EHR Data Migration Specialist at UPMC Ireland. SQL, Python, ETL and ML evaluation. MSc Data Science (First Class Honours), TU Dublin. AWS Certified Data Engineer – Associate. Based in Dublin.",
  keywords: ["Data Engineer", "Data Scientist", "SQL", "Python", "ETL", "AWS", "Machine Learning", "Healthcare Data", "Dublin"],
  authors: [{ name: "Pavan Kolasani", url: "mailto:kolasanipavan27@gmail.com" }],
  openGraph: {
    title: "Pavan Kolasani — Data Engineer · Data Scientist",
    description: "SQL · Python · ETL · AWS · ML evaluation · Dublin",
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

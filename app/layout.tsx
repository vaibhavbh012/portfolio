import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Bhardwaj | Data Science & AI Portfolio",
  description:
    "Portfolio of Vaibhav Bhardwaj, a Computer Science undergraduate specializing in Data Science, Machine Learning, Deep Learning, and AI at UPES.",
  keywords: [
    "Vaibhav Bhardwaj",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Computer Vision",
    "NLP",
    "Portfolio",
    "UPES",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Vaibhav Bhardwaj" }],
  creator: "Vaibhav Bhardwaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhavbhardwaj.dev",
    title: "Vaibhav Bhardwaj | Data Science & AI Portfolio",
    description:
      "Portfolio of Vaibhav Bhardwaj, a Computer Science undergraduate specializing in Data Science, Machine Learning, Deep Learning, and AI.",
    siteName: "Vaibhav Bhardwaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Bhardwaj | Data Science & AI Portfolio",
    description:
      "Portfolio of Vaibhav Bhardwaj, a Computer Science undergraduate specializing in Data Science, Machine Learning, Deep Learning, and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

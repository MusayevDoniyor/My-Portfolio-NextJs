import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doniyor's Portfolio",
  description:
    "Welcome to Doniyor's portfolio. Explore my projects, skills, and experiences as a frontend developer.",
  keywords:
    "Doniyor, Frontend Developer, Portfolio, React, Next.js, JavaScript",
  author: "Doniyor",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}

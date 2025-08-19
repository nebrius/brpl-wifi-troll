import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Black Rock Public Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app">
          <header>
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.header}
                src="/header.png"
                alt="Black Rock Public Library"
              />
            </Link>
          </header>
          <article className={styles.article}>{children}</article>
        </div>
      </body>
    </html>
  );
}

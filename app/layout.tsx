import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { IconProvider } from "@/components/icon-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Shazab Saifi — Design Engineer",
  description:
    "Hi, I’m Shazab Saifi — a Design Engineer and full stack developer who loves to build with AI.",
};

// Design Link - https://www.figma.com/design/AOt0XLPIFoEZmvXredkIcy/My-Portfolio?node-id=2031-52&t=x6G6mMthbNIbqDKy-4

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-neutral-200 font-sans text-neutral-800">
        <IconProvider>{children}</IconProvider>
      </body>
    </html>
  );
}

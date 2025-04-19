import type { Metadata } from "next";
import { FormProvider } from "@/context/FormContext";
import { Inter, Crimson_Pro } from "next/font/google";
import { GlossaryProvider } from "@/context/GlossaryContext";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Second Chance Youth Map",
  description: "Digital tools for youth-centered justice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${crimson.variable} antialiased bg-gray-50 text-slate-800`}
      >
        <GlossaryProvider>
          <Header /> {/* 💙 Persistent Nav */}
          <FormProvider>{children}</FormProvider>
        </GlossaryProvider>
      </body>
    </html>
  );
}

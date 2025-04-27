// File: src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import { GlossaryProvider } from "@/context/GlossaryContext";
import { FlowStateProvider } from "@/context/voices-tool/FlowStateContext";
import { FormStateProvider } from "@/context/voices-tool/FormStateContext";
import { FormProvider } from "@/context/FormContext";
import { JuvenileIntakeProvider } from "@/context/voices-tool/JuvenileIntakeContext";
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
        {/* 👇 Wrap everything in the legacy FormProvider as top-level */}
        <FormProvider>
          <FlowStateProvider>
            <FormStateProvider>
              <JuvenileIntakeProvider>
                <GlossaryProvider>
                  <Header />
                  {children}
                </GlossaryProvider>
              </JuvenileIntakeProvider>
            </FormStateProvider>
          </FlowStateProvider>
        </FormProvider>
      </body>
    </html>
  );
}

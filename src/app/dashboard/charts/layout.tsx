// app/dashboard/charts/layout.tsx
"use client";

import ChartDashboardLayout from "@/components/layout/ChartDashboardLayout";
import React from "react";

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChartDashboardLayout>{children}</ChartDashboardLayout>;
}

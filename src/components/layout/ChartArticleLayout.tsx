// src/components/layout/ChartArticleLayout.tsx
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ChartArticleLayout({ title, children }: Props) {
  return (
    <article className="max-w-5xl mx-auto px-6 py-12 text-slate-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
          {title}
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          By Darian Ross — Civic Technologist, Arkansas DHS
        </p>
      </header>

      <div className="prose prose-slate max-w-none overflow-x-hidden">
        {children}
      </div>

      <footer className="mt-20 text-center text-slate-500 text-sm italic border-t pt-6">
        “This dashboard article is part of an ongoing civic-tech effort to
        bridge data and reform.”
        <br />— Darian Ross
      </footer>
    </article>
  );
}

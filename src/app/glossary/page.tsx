"use client";

import { useGlossary } from "@/context/GlossaryContext";
import GlossaryCard from "@/components/GlossaryCard";
import { useState } from "react";

export default function GlossaryPage() {
  const glossary = useGlossary();
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [
    ...new Set(glossary.map((g) => g.category).filter(Boolean)),
  ];

  const filtered = glossary.filter((entry) => {
    const matchesQuery = entry.term.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = categoryFilter
      ? entry.category === categoryFilter
      : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white text-slate-900 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Glossary of Juvenile Justice Terms
      </h1>

      <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search glossary terms..."
          className="w-full md:w-1/2 border border-slate-300 rounded px-3 py-2"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border border-slate-300 rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((entry, i) => (
          <GlossaryCard key={i} {...entry} />
        ))}
      </section>
    </main>
  );
}

// src/components/voices-tool/RoleCards/RoleCard.tsx

"use client";

import Link from "next/link";

type RoleCardProps = {
  title: string;
  description: string;
  path: string;
};

export default function RoleCard({ title, description, path }: RoleCardProps) {
  return (
    <Link href={path}>
      <div className="group border border-blue-300 rounded-xl p-6 bg-gradient-to-br from-white via-blue-50 to-white shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-200 ease-in-out transform hover:-translate-y-1">
        <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-150">
          {title}
        </h3>
        <p className="text-sm text-blue-800 mt-2 leading-snug group-hover:text-blue-900">
          {description}
        </p>
      </div>
    </Link>
  );
}

// src/app/voices-tool/page.tsx

"use client";
import Link from "next/link";

export default function VoicesToolHome() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Voices Tool Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Choose a jurisdiction or workflow to begin.
      </p>

      <ul className="mt-6 space-y-4">
        <li>
          <Link
            href="/voices-tool/intake/arkansas"
            className="text-blue-500 underline"
          >
            Arkansas Intake → Diversion Flow
          </Link>
        </li>
      </ul>
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

interface ModalExplanationProps {
  onClose: () => void;
}

export default function ModalExplanation({ onClose }: ModalExplanationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {/* Modal content */}
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-red-600 font-bold text-lg"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-blue-800 mb-4">
              🔍 Understanding the Data Behind SCYM
            </h2>
            <p className="mb-4 text-slate-700 text-sm leading-relaxed">
              The data presented here is a result of deep research into juvenile
              justice frameworks...
            </p>

            <p className="mt-4 text-sm italic text-slate-500">
              Visit the{" "}
              <Link href="/docs/references" className="text-blue-600 underline">
                References
              </Link>{" "}
              section for a complete list of sources.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

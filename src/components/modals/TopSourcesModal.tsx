"use client";

interface Source {
  title: string;
  url: string;
  type: string;
}

interface ModalProps {
  state: string;
  sources: Source[];
  onClose: () => void;
}

export default function TopSourcesModal({
  state,
  sources,
  onClose,
}: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          className="absolute top-3 right-4 text-slate-500 hover:text-red-600 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          📚 Top Cited Sources – {state}
        </h2>
        <ul className="space-y-4">
          {sources.map((source, idx) => (
            <li
              key={idx}
              className="bg-blue-50 border border-blue-200 rounded p-3 shadow-sm"
            >
              <h3 className="font-semibold text-blue-700">{source.title}</h3>
              <p className="text-sm text-slate-600 mb-1">
                <strong>Type:</strong> {source.type}
              </p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline hover:text-blue-800"
              >
                {source.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

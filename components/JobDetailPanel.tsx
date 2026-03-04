"use client";

import type { Vacancy } from "@/data/mockVacancies";

const CONTRACT_COLORS: Record<string, string> = {
  Vast: "bg-blue-100 text-blue-700",
  Tijdelijk: "bg-orange-100 text-orange-700",
  "Freelance / ZZP": "bg-purple-100 text-purple-700",
  Stage: "bg-yellow-100 text-yellow-700",
  Parttime: "bg-pink-100 text-pink-700",
};

type Props = {
  vacancy: Vacancy;
  onClose: () => void;
};

export default function JobDetailPanel({ vacancy, onClose }: Props) {
  const contractColor = CONTRACT_COLORS[vacancy.contracttype] ?? "bg-gray-100 text-gray-600";
  const initials = vacancy.bedrijf.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[#E5E7EB]">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#1E2A4A] flex items-center justify-center shrink-0">
            <span className="text-white text-base font-bold">{initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-[#1E2A4A] leading-tight">{vacancy.titel}</h2>
            <p className="text-sm text-[#6B7280] mt-0.5">{vacancy.bedrijf} · {vacancy.locatie}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${contractColor}`}>
                {vacancy.contracttype}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {vacancy.niveau}
              </span>
              <span className="text-xs bg-[#F0FDF4] text-[#059669] font-semibold px-2 py-0.5 rounded-full">
                {vacancy.salaris}/mnd
              </span>
              <span className="text-xs text-[#6B7280]">· {vacancy.geplaatst}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#1F2937] p-1 shrink-0"
            aria-label="Sluiten"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI Solliciteer
          </button>
          <button className="px-4 border border-[#E5E7EB] text-[#1F2937] text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
            Opslaan
          </button>
        </div>
      </div>

      {/* Content — alles op één pagina */}
      <div className="p-6 flex flex-col gap-8">

        {/* Omschrijving */}
        <div>
          <h3 className="text-base font-bold text-[#1E2A4A] mb-3">Omschrijving</h3>
          <p className="text-sm text-[#4B5563] leading-relaxed">{vacancy.beschrijving}</p>
        </div>

        {/* Taken */}
        <div>
          <h3 className="text-base font-bold text-[#1E2A4A] mb-3">Wat ga je doen?</h3>
          <ul className="flex flex-col gap-2">
            {vacancy.taken.map((taak, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#4B5563]">
                <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                {taak}
              </li>
            ))}
          </ul>
        </div>

        {/* Vereisten */}
        <div>
          <h3 className="text-base font-bold text-[#1E2A4A] mb-3">Vereisten</h3>
          <ul className="flex flex-col gap-3">
            {vacancy.vereisten.map((eis, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F0FDF4] border border-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#10B981] text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-sm text-[#4B5563]">{eis}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Over het bedrijf */}
        <div className="border-t border-[#E5E7EB] pt-6">
          <h3 className="text-base font-bold text-[#1E2A4A] mb-3">Over {vacancy.bedrijf}</h3>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E2A4A] flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">{initials}</span>
            </div>
            <p className="text-xs text-[#6B7280]">{vacancy.sector}</p>
          </div>
          <p className="text-sm text-[#4B5563] leading-relaxed">{vacancy.bedrijfsBeschrijving}</p>
        </div>

      </div>
    </div>
  );
}

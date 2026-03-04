import type { Vacancy } from "@/data/mockVacancies";

type JobCardProps = {
  vacancy: Vacancy;
};

const CONTRACT_COLORS: Record<string, string> = {
  Vast: "bg-blue-100 text-blue-700",
  Tijdelijk: "bg-orange-100 text-orange-700",
  "Freelance / ZZP": "bg-purple-100 text-purple-700",
  Stage: "bg-yellow-100 text-yellow-700",
  Parttime: "bg-pink-100 text-pink-700",
};

export default function JobCard({ vacancy }: JobCardProps) {
  const contractColor = CONTRACT_COLORS[vacancy.contracttype] ?? "bg-gray-100 text-gray-600";

  // Bedrijfsinitials als placeholder logo
  const initials = vacancy.bedrijf
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-4">
      {/* Bovenste rij: logo + bedrijf + geplaatst */}
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-[#1E2A4A] flex items-center justify-center shrink-0">
          <span className="text-white text-sm font-bold">{initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#1F2937] text-base leading-tight line-clamp-2">
            {vacancy.titel}
          </h3>
          <p className="text-sm text-[#6B7280] mt-0.5">{vacancy.bedrijf}</p>
        </div>
        <span className="text-xs text-[#6B7280] shrink-0 mt-0.5">{vacancy.geplaatst}</span>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 text-xs text-[#6B7280]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {vacancy.locatie}
        </span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${contractColor}`}>
          {vacancy.contracttype}
        </span>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
          {vacancy.niveau}
        </span>
      </div>

      {/* Beschrijving */}
      <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed">
        {vacancy.beschrijving}
      </p>

      {/* Salaris */}
      <div className="text-sm font-semibold text-[#1E2A4A]">
        {vacancy.salaris} <span className="font-normal text-[#6B7280]">per maand</span>
      </div>

      {/* CTA knoppen */}
      <div className="flex gap-2 mt-auto pt-2 border-t border-[#E5E7EB]">
        <button className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          AI Solliciteer
        </button>
        <button className="px-4 border border-[#E5E7EB] text-[#1F2937] text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
          Meer info
        </button>
      </div>
    </div>
  );
}

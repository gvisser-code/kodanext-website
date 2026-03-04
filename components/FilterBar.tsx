"use client";

export type Filters = {
  sector: string;
  contracttype: string;
  salaris: string;
  niveau: string;
};

type FilterBarProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  totalResults: number;
};

const SECTOR_OPTIONS = [
  "Alle sectoren",
  "IT & Tech",
  "Marketing & Communicatie",
  "Finance & Accounting",
  "Sales & Business Development",
  "HR & Recruitment",
  "Engineering & Techniek",
  "Zorg & Welzijn",
  "Logistiek & Transport",
  "Onderwijs",
  "Juridisch",
];

const CONTRACT_OPTIONS = [
  "Alle contracten",
  "Vast",
  "Tijdelijk",
  "Freelance / ZZP",
  "Stage",
  "Parttime",
];

const SALARIS_OPTIONS = [
  "Alle salarissen",
  "€0 - €2.000",
  "€2.000 - €3.000",
  "€3.000 - €4.000",
  "€4.000 - €5.000",
  "€5.000+",
];

const NIVEAU_OPTIONS = [
  "Alle niveaus",
  "Student / Starter",
  "Junior",
  "Medior",
  "Senior",
  "Manager / Lead",
];

type SelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: SelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white border border-[#E5E7EB] text-[#1F2937] text-sm rounded-lg px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent cursor-pointer min-w-[150px]"
        aria-label={label}
      >
        {options.map((opt) => (
          <option key={opt} value={opt === options[0] ? "" : opt}>
            {opt}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default function FilterBar({ filters, onChange, totalResults }: FilterBarProps) {
  const update = (key: keyof Filters) => (value: string) => {
    onChange({ ...filters, [key]: value });
  };

  const hasActiveFilters =
    filters.sector || filters.contracttype || filters.salaris || filters.niveau;

  const reset = () =>
    onChange({ sector: "", contracttype: "", salaris: "", niveau: "" });

  return (
    <div className="bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-[#6B7280] mr-1">Filteren:</span>

          <FilterSelect
            label="Sector"
            value={filters.sector || SECTOR_OPTIONS[0]}
            options={SECTOR_OPTIONS}
            onChange={update("sector")}
          />
          <FilterSelect
            label="Contracttype"
            value={filters.contracttype || CONTRACT_OPTIONS[0]}
            options={CONTRACT_OPTIONS}
            onChange={update("contracttype")}
          />
          <FilterSelect
            label="Salaris"
            value={filters.salaris || SALARIS_OPTIONS[0]}
            options={SALARIS_OPTIONS}
            onChange={update("salaris")}
          />
          <FilterSelect
            label="Niveau"
            value={filters.niveau || NIVEAU_OPTIONS[0]}
            options={NIVEAU_OPTIONS}
            onChange={update("niveau")}
          />

          {hasActiveFilters && (
            <button
              onClick={reset}
              className="text-sm text-[#10B981] hover:text-[#059669] font-medium underline ml-1 transition-colors"
            >
              Wis filters
            </button>
          )}

          <span className="ml-auto text-sm text-[#6B7280] font-medium">
            <span className="text-[#1E2A4A] font-bold">{totalResults}</span> vacatures gevonden
          </span>
        </div>
      </div>
    </div>
  );
}

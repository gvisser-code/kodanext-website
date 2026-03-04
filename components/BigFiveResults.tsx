import { TRAIT_LABELS, TRAIT_DESCRIPTIONS, type Trait } from "@/data/bigFiveQuestions";
import Link from "next/link";

type BigFiveResultsProps = {
  scores: Record<Trait, number>;
  onOpnieuw?: () => void;
};

const TRAIT_COLORS: Record<Trait, string> = {
  O: "bg-purple-500",
  C: "bg-blue-500",
  E: "bg-yellow-400",
  A: "bg-green-500",
  N: "bg-red-400",
};

const TRAIT_ICONS: Record<Trait, string> = {
  O: "🎨",
  C: "📋",
  E: "🤝",
  A: "💛",
  N: "🌊",
};

export default function BigFiveResults({ scores, onOpnieuw }: BigFiveResultsProps) {
  const traits: Trait[] = ["O", "C", "E", "A", "N"];

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-4xl mb-3">🎉</div>
        <h2 className="text-2xl font-bold text-[#1E2A4A]">Jouw persoonlijkheidsprofiel</h2>
        <p className="text-[#6B7280] text-sm mt-2">Gebaseerd op het Big Five model</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm flex flex-col gap-5">
        {traits.map((trait) => {
          const score = scores[trait];
          const desc = score >= 60
            ? TRAIT_DESCRIPTIONS[trait].high
            : TRAIT_DESCRIPTIONS[trait].low;

          return (
            <div key={trait}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-[#1F2937] flex items-center gap-2">
                  {TRAIT_ICONS[trait]} {TRAIT_LABELS[trait]}
                </span>
                <span className="text-sm font-bold text-[#1E2A4A]">{score}%</span>
              </div>
              <div className="w-full bg-[#E5E7EB] rounded-full h-3 mb-1.5">
                <div
                  className={`${TRAIT_COLORS[trait]} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${score}%` }}
                />
              </div>
              <p className="text-xs text-[#6B7280]">{desc}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-6">
        <Link
          href="/profiel"
          className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold py-3 rounded-xl text-center transition-colors"
        >
          Naar mijn profiel
        </Link>
        {onOpnieuw && (
          <button
            onClick={onOpnieuw}
            className="px-5 border border-[#E5E7EB] text-sm text-[#6B7280] hover:text-[#1F2937] rounded-xl transition-colors"
          >
            Opnieuw
          </button>
        )}
      </div>
    </div>
  );
}

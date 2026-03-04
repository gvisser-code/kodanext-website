"use client";

import { useState } from "react";
import { questions, shortQuestions, calculateScores, type Trait } from "@/data/bigFiveQuestions";
import BigFiveResults from "./BigFiveResults";
import { createClient } from "@/lib/supabase/client";

const ANTWOORDEN = ["Helemaal mee oneens", "Mee oneens", "Neutraal", "Mee eens", "Helemaal mee eens"];

export default function BigFiveTest() {
  const [modus, setModus] = useState<"keuze" | "test" | "resultaat">("keuze");
  const [vragenlijst, setVragenlijst] = useState(questions);
  const [huidigIndex, setHuidigIndex] = useState(0);
  const [antwoorden, setAntwoorden] = useState<Record<number, number>>({});

  const startTest = (kort: boolean) => {
    setVragenlijst(kort ? shortQuestions : questions);
    setHuidigIndex(0);
    setAntwoorden({});
    setModus("test");
  };

  const beantwoord = async (score: number) => {
    const vraag = vragenlijst[huidigIndex];
    const nieuw = { ...antwoorden, [vraag.id]: score };
    setAntwoorden(nieuw);

    if (huidigIndex + 1 < vragenlijst.length) {
      setHuidigIndex(huidigIndex + 1);
    } else {
      const scores = calculateScores(nieuw);
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("profiles").update({ big_five: scores }).eq("id", user.id);
      }
      setModus("resultaat");
    }
  };

  const voortgang = Math.round((huidigIndex / vragenlijst.length) * 100);

  if (modus === "keuze") {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1E2A4A] mb-3">Kies je testversie</h2>
        <p className="text-[#6B7280] mb-8 max-w-md mx-auto text-sm">
          De Big Five test meet vijf persoonlijkheidsdimensies en helpt werkgevers jou beter te matchen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => startTest(true)}
            className="bg-white border-2 border-[#E5E7EB] hover:border-[#10B981] rounded-2xl p-6 text-left transition-colors group w-full sm:w-64"
          >
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-[#1E2A4A] group-hover:text-[#10B981]">Kort — 10 vragen</h3>
            <p className="text-xs text-[#6B7280] mt-1">~2 minuten · Globaal beeld</p>
          </button>
          <button
            onClick={() => startTest(false)}
            className="bg-white border-2 border-[#E5E7EB] hover:border-[#10B981] rounded-2xl p-6 text-left transition-colors group w-full sm:w-64"
          >
            <div className="text-2xl mb-2">🔬</div>
            <h3 className="font-bold text-[#1E2A4A] group-hover:text-[#10B981]">Uitgebreid — 50 vragen</h3>
            <p className="text-xs text-[#6B7280] mt-1">~5 minuten · Nauwkeurig profiel</p>
          </button>
        </div>
      </div>
    );
  }

  if (modus === "resultaat") {
    const scores = calculateScores(antwoorden);
    return <BigFiveResults scores={scores} onOpnieuw={() => setModus("keuze")} />;
  }

  const vraag = vragenlijst[huidigIndex];

  return (
    <div className="max-w-xl mx-auto">
      {/* Voortgang */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[#6B7280] mb-2">
          <span>Vraag {huidigIndex + 1} van {vragenlijst.length}</span>
          <span>{voortgang}%</span>
        </div>
        <div className="w-full bg-[#E5E7EB] rounded-full h-2">
          <div
            className="bg-[#10B981] h-2 rounded-full transition-all duration-300"
            style={{ width: `${voortgang}%` }}
          />
        </div>
      </div>

      {/* Vraag */}
      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 text-center shadow-sm">
        <p className="text-[#6B7280] text-xs uppercase tracking-wide mb-4">
          Hoe goed past dit bij jou?
        </p>
        <p className="text-xl font-semibold text-[#1E2A4A] mb-8 leading-snug">
          &ldquo;{vraag.text}&rdquo;
        </p>

        <div className="flex flex-col gap-2">
          {ANTWOORDEN.map((label, i) => (
            <button
              key={i}
              onClick={() => beantwoord(i + 1)}
              className="w-full py-3 px-4 rounded-xl border border-[#E5E7EB] text-sm font-medium text-[#1F2937] hover:border-[#10B981] hover:bg-green-50 transition-colors text-left"
            >
              <span className="text-[#6B7280] mr-3">{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CVUpload from "@/components/CVUpload";
import BigFiveResults from "@/components/BigFiveResults";
import { TRAIT_LABELS, type Trait } from "@/data/bigFiveQuestions";

type User = { naam: string; email: string };

export default function ProfielPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [cvFile, setCvFile] = useState<string>("");
  const [big5, setBig5] = useState<Record<Trait, number> | null>(null);
  const [toonResultaten, setToonResultaten] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("kodanext_user");
    if (!u) { router.push("/login"); return; }
    setUser(JSON.parse(u));

    const cv = localStorage.getItem("kodanext_cv");
    if (cv) setCvFile(cv);

    const b5 = localStorage.getItem("kodanext_big5");
    if (b5) setBig5(JSON.parse(b5));
  }, [router]);

  if (!user) return null;

  const profielCompleet = !!cvFile && !!big5;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* Header kaart */}
        <div className="bg-[#1E2A4A] rounded-2xl p-6 text-white flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#10B981] flex items-center justify-center text-2xl font-bold">
            {user.naam.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl font-bold">{user.naam}</h1>
            <p className="text-gray-400 text-sm">{user.email}</p>
            {profielCompleet && (
              <span className="inline-block mt-1 text-xs bg-[#10B981] px-2 py-0.5 rounded-full">
                Profiel compleet ✓
              </span>
            )}
          </div>
        </div>

        {/* Voortgang */}
        {!profielCompleet && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5">
            <p className="text-sm font-semibold text-[#1F2937] mb-3">Profiel voltooien</p>
            <div className="flex gap-4">
              <div className={`flex-1 rounded-xl p-3 text-center text-xs font-medium border ${cvFile ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-50 border-[#E5E7EB] text-[#6B7280]"}`}>
                {cvFile ? "✓ CV geüpload" : "○ CV uploaden"}
              </div>
              <div className={`flex-1 rounded-xl p-3 text-center text-xs font-medium border ${big5 ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-50 border-[#E5E7EB] text-[#6B7280]"}`}>
                {big5 ? "✓ Big Five gedaan" : "○ Big Five test"}
              </div>
            </div>
          </div>
        )}

        {/* CV Upload */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <h2 className="font-bold text-[#1E2A4A] mb-4">Mijn CV</h2>
          <CVUpload
            currentFile={cvFile}
            onUpload={(filename) => setCvFile(filename)}
          />
        </div>

        {/* Big Five */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-[#1E2A4A]">Big Five Persoonlijkheidstest</h2>
            {big5 && (
              <button
                onClick={() => setToonResultaten(!toonResultaten)}
                className="text-xs text-[#10B981] hover:text-[#059669] font-medium"
              >
                {toonResultaten ? "Verbergen" : "Toon scores"}
              </button>
            )}
          </div>

          {big5 ? (
            <>
              {!toonResultaten ? (
                <div className="flex flex-wrap gap-2">
                  {(Object.entries(big5) as [Trait, number][]).map(([trait, score]) => (
                    <div key={trait} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-3 py-2 text-center">
                      <p className="text-xs text-[#6B7280]">{TRAIT_LABELS[trait]}</p>
                      <p className="text-sm font-bold text-[#1E2A4A]">{score}%</p>
                    </div>
                  ))}
                </div>
              ) : (
                <BigFiveResults scores={big5} />
              )}
              <Link href="/big-five" className="inline-block mt-4 text-xs text-[#6B7280] hover:text-[#1F2937] underline">
                Test opnieuw doen
              </Link>
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-sm text-[#6B7280] mb-4">Je hebt de test nog niet gedaan.</p>
              <Link
                href="/big-five"
                className="bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                Start Big Five test
              </Link>
            </div>
          )}
        </div>

        {/* Uitloggen */}
        <button
          onClick={() => {
            localStorage.removeItem("kodanext_user");
            router.push("/");
          }}
          className="text-sm text-[#6B7280] hover:text-red-500 transition-colors text-center"
        >
          Uitloggen
        </button>
      </div>
    </div>
  );
}

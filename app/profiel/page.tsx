"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CVUpload from "@/components/CVUpload";
import BigFiveResults from "@/components/BigFiveResults";
import { TRAIT_LABELS, type Trait } from "@/data/bigFiveQuestions";
import { createClient } from "@/lib/supabase/client";

type User = { naam: string; email: string };

type Gegevens = {
  volledige_naam: string;
  telefoon: string;
  geboortedatum: string;
  email: string;
};

export default function ProfielPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [cvFile, setCvFile] = useState<string>("");
  const [big5, setBig5] = useState<Record<Trait, number> | null>(null);
  const [toonResultaten, setToonResultaten] = useState(false);
  const [loading, setLoading] = useState(true);

  const [gegevens, setGegevens] = useState<Gegevens>({
    volledige_naam: "",
    telefoon: "",
    geboortedatum: "",
    email: "",
  });
  const [opslaan, setOpslaan] = useState(false);
  const [opslaanSucces, setOpslaanSucces] = useState(false);
  const [opslaanFout, setOpslaanFout] = useState("");

  const [toonVerwijderBevestiging, setToonVerwijderBevestiging] = useState(false);
  const [verwijderen, setVerwijderen] = useState(false);
  const [verwijderFout, setVerwijderFout] = useState("");

  useEffect(() => {
    const laadProfiel = async () => {
      const supabase = createClient();
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if (!authUser) { router.push("/login"); return; }

      setUserId(authUser.id);
      setUser({
        naam: authUser.user_metadata?.naam ?? authUser.email?.split("@")[0] ?? "Gebruiker",
        email: authUser.email ?? "",
      });

      const { data: profiel } = await supabase
        .from("profiles")
        .select("cv_path, big_five, volledige_naam, telefoon, geboortedatum")
        .eq("id", authUser.id)
        .single();

      if (profiel?.cv_path) setCvFile(profiel.cv_path.split("/").pop() ?? profiel.cv_path);
      if (profiel?.big_five) setBig5(profiel.big_five);

      setGegevens({
        volledige_naam: profiel?.volledige_naam ?? "",
        telefoon: profiel?.telefoon ?? "",
        geboortedatum: profiel?.geboortedatum ?? "",
        email: authUser.email ?? "",
      });

      setLoading(false);
    };

    laadProfiel();
  }, [router]);

  const uitloggen = async () => {
    const supabase = createClient();
    try {
      await supabase.auth.signOut({ scope: "global" });
    } catch {}
    // Reset singleton zodat volgende paginalading een verse client krijgt
    globalThis._supabaseClient = undefined;
    window.location.href = "/";
  };

  const slaGegevensOp = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpslaan(true);
    setOpslaanFout("");
    setOpslaanSucces(false);

    const supabase = createClient();
    const { error } = await supabase
      .from("profiles")
      .update({
        volledige_naam: gegevens.volledige_naam || null,
        telefoon: gegevens.telefoon || null,
        geboortedatum: gegevens.geboortedatum || null,
      })
      .eq("id", userId);

    setOpslaan(false);
    if (error) {
      setOpslaanFout("Opslaan mislukt. Probeer het opnieuw.");
    } else {
      setOpslaanSucces(true);
      setTimeout(() => setOpslaanSucces(false), 3000);
      if (gegevens.volledige_naam) {
        setUser((u) => u ? { ...u, naam: gegevens.volledige_naam } : u);
      }
    }
  };

  const verwijderAccount = async () => {
    setVerwijderen(true);
    setVerwijderFout("");

    const res = await fetch("/api/account", { method: "DELETE" });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setVerwijderFout(data.error ?? "Verwijderen mislukt. Probeer het opnieuw.");
      setVerwijderen(false);
      return;
    }

    // Account verwijderd — reset client en stuur naar homepagina
    globalThis._supabaseClient = undefined;
    window.location.href = "/";
  };

  if (loading) {
    return <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-[#6B7280] text-sm">Laden...</div>;
  }

  if (!user) return null;

  const displayNaam = gegevens.volledige_naam || user.naam;
  const profielCompleet = !!cvFile && !!big5 && !!gegevens.volledige_naam && !!gegevens.telefoon && !!gegevens.geboortedatum;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* Header kaart */}
        <div className="bg-[#1E2A4A] rounded-2xl p-6 text-white flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#10B981] flex items-center justify-center text-2xl font-bold">
            {displayNaam.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl font-bold">{displayNaam}</h1>
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
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Gegevens", done: !!gegevens.volledige_naam && !!gegevens.telefoon && !!gegevens.geboortedatum },
                { label: "CV uploaden", done: !!cvFile },
                { label: "Big Five test", done: !!big5 },
              ].map(({ label, done }) => (
                <div key={label} className={`rounded-xl p-3 text-center text-xs font-medium border ${done ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-50 border-[#E5E7EB] text-[#6B7280]"}`}>
                  {done ? `✓ ${label}` : `○ ${label}`}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Persoonlijke gegevens */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <h2 className="font-bold text-[#1E2A4A] mb-5">Persoonlijke gegevens</h2>
          <form onSubmit={slaGegevensOp} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#6B7280] mb-1">Volledige naam</label>
                <input
                  type="text"
                  placeholder="Voor- en achternaam"
                  value={gegevens.volledige_naam}
                  onChange={(e) => setGegevens((g) => ({ ...g, volledige_naam: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#6B7280] mb-1">Geboortedatum</label>
                <input
                  type="date"
                  value={gegevens.geboortedatum}
                  onChange={(e) => setGegevens((g) => ({ ...g, geboortedatum: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] text-[#1F2937]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#6B7280] mb-1">Telefoonnummer</label>
                <input
                  type="tel"
                  placeholder="+31 6 12345678"
                  value={gegevens.telefoon}
                  onChange={(e) => setGegevens((g) => ({ ...g, telefoon: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#6B7280] mb-1">E-mailadres</label>
                <input
                  type="email"
                  value={gegevens.email}
                  disabled
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm bg-[#F8FAFC] text-[#6B7280] cursor-not-allowed"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={opslaan}
                className="bg-[#10B981] hover:bg-[#059669] disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                {opslaan ? "Opslaan..." : "Opslaan"}
              </button>
              {opslaanSucces && <span className="text-sm text-green-600">✓ Opgeslagen</span>}
              {opslaanFout && <span className="text-sm text-red-500">{opslaanFout}</span>}
            </div>
          </form>
        </div>

        {/* CV Upload */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <h2 className="font-bold text-[#1E2A4A] mb-4">Mijn CV</h2>
          <CVUpload currentFile={cvFile} onUpload={(filename) => setCvFile(filename)} />
        </div>

        {/* Big Five */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-[#1E2A4A]">Big Five Persoonlijkheidstest</h2>
            {big5 && (
              <button onClick={() => setToonResultaten(!toonResultaten)} className="text-xs text-[#10B981] hover:text-[#059669] font-medium">
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
              <Link href="/big-five" className="bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">
                Start Big Five test
              </Link>
            </div>
          )}
        </div>

        {/* Account acties */}
        <div className="flex flex-col items-center gap-3 pb-4">
          <button
            onClick={uitloggen}
            className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors"
          >
            Uitloggen
          </button>

          {!toonVerwijderBevestiging ? (
            <button
              onClick={() => setToonVerwijderBevestiging(true)}
              className="text-xs text-red-400 hover:text-red-600 transition-colors"
            >
              Account verwijderen
            </button>
          ) : (
            <div className="w-full bg-red-50 border border-red-200 rounded-2xl p-5 flex flex-col gap-3">
              <p className="text-sm font-semibold text-red-700">Weet je het zeker?</p>
              <p className="text-xs text-red-600 leading-relaxed">
                Je account, profiel, CV en alle gegevens worden permanent verwijderd. Dit kan niet ongedaan worden gemaakt.
              </p>
              {verwijderFout && <p className="text-xs text-red-600">{verwijderFout}</p>}
              <div className="flex gap-2">
                <button
                  onClick={verwijderAccount}
                  disabled={verwijderen}
                  className="flex-1 bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  {verwijderen ? "Bezig..." : "Ja, verwijder mijn account"}
                </button>
                <button
                  onClick={() => { setToonVerwijderBevestiging(false); setVerwijderFout(""); }}
                  className="px-4 border border-red-200 text-red-600 text-sm font-medium py-2.5 rounded-xl hover:bg-red-100 transition-colors"
                >
                  Annuleren
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

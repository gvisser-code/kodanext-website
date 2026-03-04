"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Tab = "inloggen" | "registreren";
type Modus = Tab | "wachtwoord_vergeten";

export default function AuthForm() {
  const router = useRouter();
  const [modus, setModus] = useState<Modus>("inloggen");
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = (nieuweModus: Modus) => {
    setModus(nieuweModus);
    setError("");
    setSucces("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSucces("");
    setLoading(true);
    const supabase = createClient();

    if (modus === "wachtwoord_vergeten") {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-wachtwoord`,
      });
      setLoading(false);
      if (error) { setError(error.message); return; }
      setSucces("Controleer je e-mail voor de resetlink.");
      return;
    }

    if (modus === "registreren") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: wachtwoord,
        options: { data: { naam } },
      });
      setLoading(false);
      if (error) { setError(error.message); return; }
      // Leeg identities = e-mailadres al in gebruik
      if (data.user?.identities?.length === 0) {
        setError("Dit e-mailadres is al bij ons bekend. Log in of vraag een nieuw wachtwoord aan.");
        return;
      }
      setSucces("Account aangemaakt! Controleer je e-mail om het te bevestigen.");
      return;
    }

    // Inloggen
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: wachtwoord });
    setLoading(false);
    if (error) {
      if (error.message.toLowerCase().includes("email not confirmed")) {
        setError("Bevestig eerst je e-mailadres via de link in je inbox.");
      } else {
        setError("Onjuist e-mailadres of wachtwoord.");
      }
      return;
    }
    if (!data.session) {
      setError("Inloggen mislukt. Controleer of je e-mail bevestigd is.");
      return;
    }
    router.push("/profiel");
  };

  if (modus === "wachtwoord_vergeten") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 w-full max-w-md mx-auto">
        <button onClick={() => reset("inloggen")} className="flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#1F2937] mb-6">
          ← Terug
        </button>
        <h2 className="text-lg font-bold text-[#1E2A4A] mb-1">Wachtwoord vergeten</h2>
        <p className="text-sm text-[#6B7280] mb-6">Vul je e-mailadres in en we sturen je een resetlink.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="jouw@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {succes && <p className="text-green-600 text-sm">{succes}</p>}
          <button type="submit" disabled={loading} className="w-full bg-[#10B981] hover:bg-[#059669] disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
            {loading ? "Bezig..." : "Resetlink versturen"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 w-full max-w-md mx-auto">
      <div className="flex mb-6 bg-[#F8FAFC] rounded-xl p-1">
        {(["inloggen", "registreren"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => reset(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              modus === t ? "bg-white text-[#1E2A4A] shadow-sm" : "text-[#6B7280] hover:text-[#1F2937]"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {modus === "registreren" && (
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-1">Naam</label>
            <input
              type="text"
              placeholder="Jouw naam"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-1">E-mailadres</label>
          <input
            type="email"
            placeholder="jouw@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-[#1F2937]">Wachtwoord</label>
            {modus === "inloggen" && (
              <button type="button" onClick={() => reset("wachtwoord_vergeten")} className="text-xs text-[#10B981] hover:text-[#059669]">
                Vergeten?
              </button>
            )}
          </div>
          <input
            type="password"
            placeholder="••••••••"
            value={wachtwoord}
            onChange={(e) => setWachtwoord(e.target.value)}
            required
            minLength={6}
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {succes && <p className="text-green-600 text-sm">{succes}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#10B981] hover:bg-[#059669] disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors text-sm mt-1"
        >
          {loading ? "Bezig..." : modus === "inloggen" ? "Inloggen" : "Account aanmaken"}
        </button>
      </form>
    </div>
  );
}

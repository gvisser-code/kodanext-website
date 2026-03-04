"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Tab = "inloggen" | "registreren";

export default function AuthForm() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("inloggen");
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();

    if (tab === "registreren") {
      const { error } = await supabase.auth.signUp({
        email,
        password: wachtwoord,
        options: { data: { naam } },
      });
      if (error) { setError(error.message); setLoading(false); return; }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password: wachtwoord });
      if (error) { setError("Onjuist e-mailadres of wachtwoord."); setLoading(false); return; }
    }

    router.push("/profiel");
    router.refresh();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 w-full max-w-md mx-auto">
      <div className="flex mb-6 bg-[#F8FAFC] rounded-xl p-1">
        {(["inloggen", "registreren"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setError(""); }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t ? "bg-white text-[#1E2A4A] shadow-sm" : "text-[#6B7280] hover:text-[#1F2937]"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {tab === "registreren" && (
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
          <label className="block text-sm font-medium text-[#1F2937] mb-1">Wachtwoord</label>
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

        {tab === "registreren" && (
          <p className="text-xs text-[#6B7280]">
            Je ontvangt een bevestigingsmail. Klik de link om je account te activeren.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#10B981] hover:bg-[#059669] disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors text-sm mt-1"
        >
          {loading ? "Bezig..." : tab === "inloggen" ? "Inloggen" : "Account aanmaken"}
        </button>
      </form>
    </div>
  );
}

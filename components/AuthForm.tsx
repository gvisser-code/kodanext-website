"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Tab = "inloggen" | "registreren";

export default function AuthForm() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("inloggen");
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !wachtwoord) {
      setError("Vul alle velden in.");
      return;
    }
    if (tab === "registreren" && !naam) {
      setError("Vul je naam in.");
      return;
    }

    const user = { naam: tab === "registreren" ? naam : email.split("@")[0], email };
    localStorage.setItem("kodanext_user", JSON.stringify(user));
    router.push("/profiel");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 w-full max-w-md mx-auto">
      {/* Tabs */}
      <div className="flex mb-6 bg-[#F8FAFC] rounded-xl p-1">
        {(["inloggen", "registreren"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setError(""); }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              tab === t
                ? "bg-white text-[#1E2A4A] shadow-sm"
                : "text-[#6B7280] hover:text-[#1F2937]"
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
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-3 rounded-xl transition-colors text-sm mt-1"
        >
          {tab === "inloggen" ? "Inloggen" : "Account aanmaken"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type User = { naam: string; email: string };

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();

    const laadUser = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (authUser) {
        setUser({
          naam: authUser.user_metadata?.naam ?? authUser.email?.split("@")[0] ?? "Gebruiker",
          email: authUser.email ?? "",
        });
      } else {
        setUser(null);
      }
    };

    laadUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => laadUser());
    return () => subscription.unsubscribe();
  }, []);

  const uitloggen = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut({ scope: "local" });
    } catch {}
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1E2A4A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              Koda<span className="text-[#10B981]">Next</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/over-ons" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Over ons</Link>
            <Link href="/werkgevers" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Voor Werkgevers</Link>

            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/profiel" className="flex items-center gap-2 text-sm text-white font-medium hover:text-[#10B981] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-xs font-bold">
                    {user.naam.charAt(0).toUpperCase()}
                  </div>
                  {user.naam}
                </Link>
                <button onClick={uitloggen} className="text-gray-400 hover:text-white text-xs transition-colors">
                  Uitloggen
                </button>
              </div>
            ) : (
              <Link href="/login" className="bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Inloggen
              </Link>
            )}
          </nav>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu openen">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/over-ons" className="text-gray-300 hover:text-white text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Over ons</Link>
            <Link href="/werkgevers" className="text-gray-300 hover:text-white text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Voor Werkgevers</Link>
            {user ? (
              <>
                <Link href="/profiel" className="text-white text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Mijn profiel ({user.naam})</Link>
                <button onClick={() => { uitloggen(); setMenuOpen(false); }} className="text-left text-gray-400 text-sm py-2">Uitloggen</button>
              </>
            ) : (
              <Link href="/login" className="bg-[#10B981] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center" onClick={() => setMenuOpen(false)}>Inloggen</Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

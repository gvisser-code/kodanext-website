"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACTOPTIES = [
  {
    titel: "Voor kandidaten",
    beschrijving: "Vragen over je account, CV of sollicitatie?",
    email: "kandidaten@kodanext.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    titel: "Voor werkgevers",
    beschrijving: "Interesse om samen te werken of een vacature te plaatsen?",
    email: "werkgevers@kodanext.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [onderwerp, setOnderwerp] = useState("");
  const [bericht, setBericht] = useState("");
  const [verstuurd, setVerstuurd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: koppelen aan backend / e-mail
    setVerstuurd(true);
  };

  return (
    <div className="bg-[#F8FAFC]">

      {/* Hero */}
      <section className="bg-[#1E2A4A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Heb je een vraag?
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Stuur ons een bericht en we reageren binnen één werkdag.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Contactopties */}
          <div className="flex flex-col gap-4">
            {CONTACTOPTIES.map((optie) => (
              <div key={optie.titel} className="bg-white rounded-2xl border border-[#E5E7EB] p-5">
                <div className="w-9 h-9 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-3">
                  {optie.icon}
                </div>
                <h3 className="font-bold text-[#1E2A4A] text-sm mb-1">{optie.titel}</h3>
                <p className="text-xs text-[#6B7280] mb-2 leading-relaxed">{optie.beschrijving}</p>
                <a href={`mailto:${optie.email}`} className="text-xs text-[#10B981] hover:text-[#059669] font-medium">
                  {optie.email}
                </a>
              </div>
            ))}

            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5">
              <div className="w-9 h-9 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1E2A4A] text-sm mb-1">Reactietijd</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                We reageren doorgaans binnen één werkdag.
              </p>
            </div>
          </div>

          {/* Formulier */}
          <div className="lg:col-span-2">
            {verstuurd ? (
              <div className="bg-white rounded-2xl border border-[#E5E7EB] p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#F0FDF4] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1E2A4A] mb-2">Bericht ontvangen!</h3>
                <p className="text-sm text-[#6B7280] mb-6">We nemen zo snel mogelijk contact met je op.</p>
                <Link href="/" className="text-[#10B981] hover:text-[#059669] text-sm font-medium underline">
                  Terug naar vacatures
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E5E7EB] p-8 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-1">Onderwerp</label>
                  <select
                    value={onderwerp}
                    onChange={(e) => setOnderwerp(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white text-[#1F2937]"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option>Vraag over mijn account</option>
                    <option>Vraag over een vacature</option>
                    <option>Samenwerking / werkgever</option>
                    <option>Technisch probleem</option>
                    <option>Anders</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-1">Bericht</label>
                  <textarea
                    placeholder="Hoe kunnen we je helpen?"
                    value={bericht}
                    onChange={(e) => setBericht(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

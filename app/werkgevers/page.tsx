"use client";

import { useState } from "react";
import Link from "next/link";

const STAPPEN = [
  {
    nr: "01",
    titel: "Neem contact op",
    beschrijving:
      "Vertel ons welk talent je zoekt. We bespreken de functie, het team en wat jij nodig hebt om de juiste match te maken.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    nr: "02",
    titel: "Wij schrijven de vacature",
    beschrijving:
      "Op basis van jouw briefing stellen wij een scherpe vacaturetekst op — gericht op de juiste doelgroep en geoptimaliseerd voor bereik.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    nr: "03",
    titel: "Wij zoeken & screenen",
    beschrijving:
      "We gaan actief op zoek naar passende kandidaten en screenen ze op motivatie, vaardigheden en culturele fit — zodat jij alleen kansrijke profielen ziet.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    nr: "04",
    titel: "Jij ontvangt de beste match",
    beschrijving:
      "We presenteren je een shortlist van hoogwaardige kandidaten. Jij voert de gesprekken en maakt de keuze — wij regelen de rest.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const USPS = [
  {
    titel: "Geen cv-berg",
    beschrijving: "Wij filteren voor je. Jij spreekt alleen kandidaten die er écht toe doen.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    titel: "Snelle doorlooptijd",
    beschrijving: "Dankzij ons platform en actieve aanpak presenteren we kandidaten razendsnel.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    titel: "Voor elk bedrijf",
    beschrijving: "Van startup tot multinational — wij helpen organisaties van elke omvang.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    titel: "Persoonlijk contact",
    beschrijving: "Geen ticket-systeem. Je hebt een vast aanspreekpunt die jouw vacature kent.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function WerkgeversPage() {
  const [naam, setNaam] = useState("");
  const [bedrijf, setBedrijf] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [bericht, setBericht] = useState("");
  const [verstuurd, setVerstuurd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: koppelen aan backend / email
    setVerstuurd(true);
  };

  return (
    <div className="bg-[#F8FAFC]">

      {/* Hero */}
      <section className="bg-[#1E2A4A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Voor werkgevers
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Wij vinden het talent.<br />
            <span className="text-[#10B981]">Jij maakt de keuze.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            KodaNext zoekt, screent en matcht kandidaten voor jouw openstaande functies.
            Jij ontvangt alleen de beste profielen — zonder gedoe.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Neem contact op
          </a>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A4A] mb-3">Zo werken wij</h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Van eerste contact tot de perfecte kandidaat — een helder proces zonder verrassingen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STAPPEN.map((stap) => (
            <div key={stap.nr} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex gap-4">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                  {stap.icon}
                </div>
                <span className="text-xs font-bold text-[#10B981]">{stap.nr}</span>
              </div>
              <div>
                <h3 className="font-bold text-[#1E2A4A] mb-1">{stap.titel}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{stap.beschrijving}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USP's */}
      <section className="bg-[#1E2A4A] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Waarom KodaNext?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {USPS.map((usp) => (
              <div key={usp.titel} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mb-3">
                  {usp.icon}
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">{usp.titel}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{usp.beschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contactformulier */}
      <section id="contact" className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A4A] mb-3">Interesse? Neem contact op</h2>
          <p className="text-[#6B7280]">
            Laat je gegevens achter en we nemen binnen één werkdag contact met je op.
          </p>
        </div>

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
                  placeholder="Jan de Vries"
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-1">Bedrijf</label>
                <input
                  type="text"
                  placeholder="Bedrijfsnaam BV"
                  value={bedrijf}
                  onChange={(e) => setBedrijf(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-1">E-mailadres</label>
                <input
                  type="email"
                  placeholder="jan@bedrijf.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-1">Telefoonnummer</label>
                <input
                  type="tel"
                  placeholder="+31 6 12345678"
                  value={telefoon}
                  onChange={(e) => setTelefoon(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Waar zoek je iemand voor? <span className="text-[#6B7280] font-normal">(optioneel)</span>
              </label>
              <textarea
                placeholder="Vertel kort welke functie je wilt invullen..."
                value={bericht}
                onChange={(e) => setBericht(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-3 rounded-xl transition-colors text-sm mt-1"
            >
              Verstuur bericht
            </button>
          </form>
        )}
      </section>

    </div>
  );
}

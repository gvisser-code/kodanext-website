import Link from "next/link";

const WAARDEN = [
  {
    titel: "Eerlijk & transparant",
    beschrijving: "Geen verborgen kosten, geen onduidelijke beloftes. We zijn helder over wat we doen en hoe.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titel: "Technologie die helpt",
    beschrijving: "AI is een middel, geen doel. We zetten technologie in om mensen écht verder te helpen.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    titel: "Mensen centraal",
    beschrijving: "Achter elke vacature zit een mens. Wij vergeten dat nooit — bij kandidaten én werkgevers.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titel: "Continu verbeteren",
    beschrijving: "We zijn nog geen grote naam — maar we zijn ambitieus en leren elke dag van onze gebruikers.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function OverOnsPage() {
  return (
    <div className="bg-[#F8FAFC]">

      {/* Hero */}
      <section className="bg-[#1E2A4A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Over ons
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Solliciteren moet <span className="text-[#10B981]">makkelijker</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            KodaNext is opgericht met één doel: de drempel om te solliciteren zo laag mogelijk maken.
            Met slimme technologie helpen we mensen sneller aan een baan die bij ze past.
          </p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-[#1E2A4A] mb-5">Ons verhaal</h2>
          <div className="flex flex-col gap-4 text-sm text-[#4B5563] leading-relaxed">
            <p>
              Solliciteren kost tijd. Veel tijd. Voor elke vacature een nieuwe motivatiebrief schrijven,
              je CV aanpassen, hopen dat je überhaupt een reactie krijgt. Wij vonden dat dit anders kon.
            </p>
            <p>
              KodaNext combineert een overzichtelijk vacatureplatform met AI die automatisch een
              persoonlijke sollicitatiebrief schrijft — afgestemd op de vacature én jouw profiel.
              Zo solliciteer je in één klik, zonder in te leveren op kwaliteit.
            </p>
            <p>
              Voor werkgevers doen we het omgekeerde: wij nemen het zoek- en screeningswerk uit handen,
              zodat zij alleen de beste kandidaten aan tafel krijgen.
            </p>
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold text-[#1E2A4A] mb-8 text-center">Waar we voor staan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {WAARDEN.map((w) => (
            <div key={w.titel} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center shrink-0">
                {w.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1E2A4A] mb-1 text-sm">{w.titel}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{w.beschrijving}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E2A4A] py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Klaar om te beginnen?</h2>
          <p className="text-gray-300 text-sm mb-7">
            Maak een gratis account aan en solliciteer vandaag nog op jouw droombaan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/login" className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-7 py-3 rounded-xl transition-colors text-sm">
              Account aanmaken
            </Link>
            <Link href="/werkgevers" className="border border-white/20 text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-xl transition-colors text-sm">
              Voor werkgevers
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8FAFC]">

      {/* Hero */}
      <section className="bg-[#1E2A4A] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Privacybeleid
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy & Gegevens</h1>
          <p className="text-gray-300">Laatst bijgewerkt: maart 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 sm:p-10 flex flex-col gap-8 text-sm text-[#4B5563] leading-relaxed">

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">1. Wie zijn wij?</h2>
            <p>
              KodaNext is een Nederlands recruitmentplatform. Wij zijn verantwoordelijk voor de
              verwerking van jouw persoonsgegevens zoals beschreven in dit privacybeleid.
              Heb je vragen? Neem contact op via{" "}
              <a href="mailto:privacy@kodanext.com" className="text-[#10B981] hover:text-[#059669]">
                privacy@kodanext.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">2. Welke gegevens verzamelen wij?</h2>
            <p className="mb-3">Wij verwerken de volgende persoonsgegevens:</p>
            <ul className="flex flex-col gap-2 pl-1">
              {[
                "Naam en e-mailadres (bij registratie)",
                "CV (alleen als je deze zelf uploadt)",
                "Resultaten van de Big Five persoonlijkheidstest (alleen als je de test invult)",
                "Gebruiksgegevens zoals inlogtijden en paginabezoeken (geanonimiseerd)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">3. Waarom verwerken wij jouw gegevens?</h2>
            <div className="flex flex-col gap-2">
              {[
                ["Account aanmaken & inloggen", "Uitvoering van de overeenkomst"],
                ["CV & profielinformatie tonen aan werkgevers", "Toestemming / gerechtvaardigd belang"],
                ["AI sollicitatiebrief genereren", "Uitvoering van de dienst"],
                ["Verbetering van het platform", "Gerechtvaardigd belang"],
              ].map(([doel, grondslag]) => (
                <div key={doel} className="grid grid-cols-2 gap-2 py-2 border-b border-[#E5E7EB] last:border-0">
                  <span>{doel}</span>
                  <span className="text-[#6B7280]">{grondslag}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">4. Hoe lang bewaren wij jouw gegevens?</h2>
            <p>
              Wij bewaren jouw gegevens zolang je een account bij ons hebt. Als je je account verwijdert,
              worden al jouw gegevens binnen 30 dagen verwijderd. CV-bestanden worden direct verwijderd
              zodra je ze zelf verwijdert via je profiel.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">5. Delen wij jouw gegevens?</h2>
            <p className="mb-3">
              Wij verkopen jouw gegevens nooit aan derden. Wij delen gegevens alleen met:
            </p>
            <ul className="flex flex-col gap-2 pl-1">
              {[
                "Supabase — voor veilige opslag van account- en profielgegevens (servers in de EU)",
                "OpenAI — voor het genereren van sollicitatiebrieven (alleen de vacaturetekst en jouw naam worden doorgestuurd, geen CV)",
                "Werkgevers — alleen als jij actief solliciteert",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">6. Jouw rechten (AVG)</h2>
            <p className="mb-3">Op grond van de AVG heb je de volgende rechten:</p>
            <ul className="flex flex-col gap-2 pl-1">
              {[
                "Inzage — je kunt opvragen welke gegevens wij van je hebben",
                "Correctie — je kunt onjuiste gegevens laten aanpassen",
                "Verwijdering — je kunt vragen jouw gegevens te verwijderen",
                "Beperking — je kunt bezwaar maken tegen bepaalde verwerkingen",
                "Overdraagbaarheid — je kunt jouw gegevens opvragen in een leesbaar formaat",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Stuur je verzoek naar{" "}
              <a href="mailto:privacy@kodanext.com" className="text-[#10B981] hover:text-[#059669]">
                privacy@kodanext.com
              </a>. We reageren binnen 30 dagen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">7. Beveiliging</h2>
            <p>
              Wij nemen de bescherming van jouw gegevens serieus. Jouw wachtwoord wordt nooit opgeslagen
              in leesbare tekst. Alle verbindingen zijn versleuteld via HTTPS. Toegang tot gegevens is
              beperkt via strikt authenticatie- en autorisatiebeleid.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">8. Cookies</h2>
            <p>
              KodaNext gebruikt alleen functionele cookies die nodig zijn om in te loggen en jouw sessie
              bij te houden. Wij gebruiken geen tracking- of advertentiecookies.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1E2A4A] mb-3">9. Wijzigingen</h2>
            <p>
              Wij kunnen dit privacybeleid aanpassen. Bij ingrijpende wijzigingen ontvang je een
              melding per e-mail. De meest recente versie staat altijd op deze pagina.
            </p>
          </div>

          <div className="border-t border-[#E5E7EB] pt-6">
            <p className="text-xs text-[#6B7280]">
              Klachten kun je indienen bij de Autoriteit Persoonsgegevens via{" "}
              <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:text-[#059669]">
                autoriteitpersoonsgegevens.nl
              </a>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

I. Business Plan: Koda Next (Werknaam)
"De brug tussen talent en kans in één beweging."
1. Executive Summary
Koda Next is een recruitmentplatform dat de kloof overbrugt tussen starters (20-30 jaar) en de arbeidsmarkt. Door een intuïtieve swipe-interface, wetenschappelijk onderbouwde persoonlijkheidstesten (Big Five) en AI-gestuurde ondersteuning bij het schrijven van brieven, transformeren wij solliciteren van een administratieve last naar een snelle, data-gedreven ervaring. 

De app komt later eerst beginnen met de website.
2. Waardepropositie
Voor Starters: Toegang tot een gefilterd aanbod van vacatures zonder de barrière van een motivatiebrief. De gebruiker krijgt zelfinzicht via een persoonlijkheidsrapport en wordt ondersteund door AI bij elke sollicitatie.
Voor Werkgevers: Wij leveren geen "stapels CV's", maar gescreende kandidaten waarbij de match gebaseerd is op zowel harde skills als de Big Five-persoonlijkheidskenmerken.
3. Operationeel Model & Revenue
Sourcing: Geautomatiseerde aggregatie van Indeed-vacatures die via AI worden omgezet in gestructureerde, swipe-bare content.
Verdienmodel: No cure, no pay recruitment-fee van €6.000,- per succesvolle plaatsing.
Werving & Selectie: De eerste filtering gebeurt door data (testresultaten + vragenlijst), de uiteindelijke kwaliteitscontrole door een menselijke recruiter.
4. Marketingstrategie
Acquisitie: Targeten van 20-30 jarigen via Instagram Ads.
Retentie: De gratis Big Five-test dient als "lead magnet" en biedt direct waarde (persoonlijkheidsrapportage), waardoor gebruikers sneller een profiel aanmaken.

II. Technisch Implementatie Plan
Focus: Schaalbaarheid, Privacy en AI-integratie.
1. De Tech Stack
Frontend: Flutter (voor iOS & Android) voor een vloeiende swipe-ervaring.
Backend & Database: Supabase (PostgreSQL). Hosting in de EU (Frankfurt) voor GDPR-compliance.
Automatisering: n8n als centrale "hub" voor data-verwerking.
AI-Engine: OpenAI API (GPT-4o) voor vacature-parsing en brief-generatie.
2. Database Architectuur (Supabase)
De database wordt relationeel opgebouwd om verbanden tussen gedrag en profiel vast te leggen:
profiles: Bevat user-data, LinkedIn-import en de 5 scores uit de IPIP-test.
vacancies: Gestructureerde data (via n8n) van gescrapte vacatures.
swipes: Logt welke user_id welke vacancy_id heeft gezien en de actie (Left/Right).
applications: De centrale plek waar matches worden opgeslagen inclusief de gegenereerde brief.
3. De n8n Workflow (De Motor)
De implementatie bestaat uit drie kern-flows:
Sourcing Flow: * Input: RSS/Scraper van Indeed.
Process: ChatGPT vat de tekst samen in 3 bullet points en 1 pakkende oneliner.
Output: Nieuwe record in Supabase vacancies.
Match Flow: * Trigger: Swipe-right in de app.
Process: n8n haalt het profiel van de gebruiker en de vacature-data op. Stuurt dit naar ChatGPT met de prompt: "Schrijf een professionele motivatiebrief op basis van deze persoonlijkheid [Big Five] en deze functie."
Output: Brief wordt opgeslagen in applications en de gebruiker krijgt een push-bericht.
Recruiter Alert: * Trigger: Gebruiker bevestigt de AI-brief.
Process: Notificatie naar de menselijke recruiter via Slack/E-mail voor handmatige screening.
4. GDPR & Veiligheid
Dataminimalisatie: Alleen noodzakelijke velden worden naar de OpenAI API gestuurd (geen BSN, geen exacte adressen).
Security: Gebruik van Row Level Security (RLS) in Supabase zodat gebruikers nooit elkaars data kunnen inzien.
Transparantie: In de app wordt expliciet toestemming gevraagd voor de AI-verwerking van het persoonlijkheidsprofiel voor de brief-generatie.


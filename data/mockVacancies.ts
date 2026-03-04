export type Vacancy = {
  id: number;
  titel: string;
  bedrijf: string;
  locatie: string;
  sector: string;
  contracttype: string;
  salaris: string;
  niveau: string;
  beschrijving: string;
  taken: string[];
  vereisten: string[];
  bedrijfsBeschrijving: string;
  geplaatst: string;
  logo?: string;
};

export const mockVacancies: Vacancy[] = [
  {
    id: 1,
    titel: "Frontend Developer (React)",
    bedrijf: "Coolblue",
    locatie: "Rotterdam",
    sector: "IT & Tech",
    contracttype: "Vast",
    salaris: "€3.500 - €4.500",
    niveau: "Medior",
    beschrijving:
      "Jij bouwt de gebruikerservaring van morgen voor miljoenen klanten. Als Frontend Developer werk je in een Scrum-team aan ons webplatform.",
    taken: [
      "Bouwen en onderhouden van React-componenten voor onze webshop",
      "Samenwerken met designers en backend-developers in Scrum-sprints",
      "Code reviews uitvoeren en kwaliteitsbewaking",
      "A/B-testen implementeren en resultaten analyseren",
    ],
    vereisten: [
      "3+ jaar ervaring met React en TypeScript",
      "Kennis van Next.js of vergelijkbare SSR-frameworks",
      "Ervaring met Tailwind CSS of styled-components",
      "Goede communicatieve vaardigheden in het Nederlands",
    ],
    bedrijfsBeschrijving:
      "Coolblue is dé Nederlandse webwinkel voor elektronica. Met meer dan 5.000 medewerkers en 10 miljoen klanten zijn we een van de grootste e-commerce spelers van de Benelux. We geloven in mensen die écht geven om hun werk — en om de klant.",
    geplaatst: "2 dagen geleden",
  },
  {
    id: 2,
    titel: "Marketing Manager",
    bedrijf: "Bol.com",
    locatie: "Utrecht",
    sector: "Marketing & Communicatie",
    contracttype: "Vast",
    salaris: "€4.000 - €5.000",
    niveau: "Senior",
    beschrijving:
      "Je bent verantwoordelijk voor de marketingstrategie en leidt een team van 5 marketeers. Ervaring met data-driven marketing is een must.",
    taken: [
      "Ontwikkelen en uitvoeren van de jaarlijkse marketingstrategie",
      "Aansturen van een team van 5 marketeers",
      "Budget bewaken en rapporteren aan de directie",
      "Campagnes opzetten voor grote commerciële momenten",
    ],
    vereisten: [
      "5+ jaar ervaring in marketing, waarvan 2 jaar in een leidinggevende rol",
      "Sterke analytische vaardigheden en data-driven mindset",
      "Ervaring met Google Analytics, Meta Ads en SEO",
      "HBO/WO werk- en denkniveau",
    ],
    bedrijfsBeschrijving:
      "Bol.com is het grootste online platform van de Benelux met meer dan 14 miljoen klanten. We werken samen met ruim 50.000 verkooppartners en streven elke dag naar een betere winkelervaring.",
    geplaatst: "1 dag geleden",
  },
  {
    id: 3,
    titel: "Data Analyst",
    bedrijf: "ING Bank",
    locatie: "Amsterdam",
    sector: "Finance & Accounting",
    contracttype: "Vast",
    salaris: "€3.000 - €4.000",
    niveau: "Junior",
    beschrijving:
      "Analyseer financiële data en vertaal inzichten naar concrete aanbevelingen. Je werkt met SQL, Python en Power BI.",
    taken: [
      "Analyseren van grote financiële datasets",
      "Bouwen van dashboards in Power BI",
      "Schrijven van SQL-queries en Python-scripts voor data-extractie",
      "Presenteren van bevindingen aan stakeholders",
    ],
    vereisten: [
      "HBO/WO opleiding in een cijfermatige richting",
      "Basiskennis SQL en Python",
      "Analytisch sterk en detail-georiënteerd",
      "Affiniteit met de financiële sector",
    ],
    bedrijfsBeschrijving:
      "ING is een mondiale bank met een sterke Nederlandse basis. We helpen mensen, bedrijven en samenlevingen verder door onze klanten in staat te stellen hun financiële doelen te bereiken.",
    geplaatst: "3 dagen geleden",
  },
  {
    id: 4,
    titel: "HR Business Partner",
    bedrijf: "Randstad",
    locatie: "Amsterdam",
    sector: "HR & Recruitment",
    contracttype: "Tijdelijk",
    salaris: "€3.500 - €4.500",
    niveau: "Medior",
    beschrijving:
      "Als HR Business Partner ondersteun je managers bij organisatievraagstukken en begeleid je verandertrajecten binnen de organisatie.",
    taken: [
      "Adviseren van managers op het gebied van mensen en organisatie",
      "Begeleiden van verandertrajecten en reorganisaties",
      "Uitvoeren van gesprekscycli en talentmanagement",
      "Samenwerken met HR-specialisten op het gebied van verzuim en juridische zaken",
    ],
    vereisten: [
      "HBO/WO opleiding HRM of vergelijkbaar",
      "3+ jaar ervaring als HR Advisor of HR BP",
      "Kennis van arbeidswetgeving",
      "Sterke adviesvaardigheden en organisatiesensitiviteit",
    ],
    bedrijfsBeschrijving:
      "Randstad is 's werelds grootste HR-dienstverlener. We verbinden dagelijks tienduizenden mensen met passend werk en helpen organisaties groeien met de juiste mensen.",
    geplaatst: "5 dagen geleden",
  },
  {
    id: 5,
    titel: "Software Engineer (Java)",
    bedrijf: "ASML",
    locatie: "Eindhoven",
    sector: "IT & Tech",
    contracttype: "Vast",
    salaris: "€4.500 - €6.000",
    niveau: "Senior",
    beschrijving:
      "Ontwikkel kritieke software voor 's werelds meest geavanceerde halfgeleidermachines. Je werkt in een internationaal team van top-engineers.",
    taken: [
      "Ontwikkelen en testen van Java-software voor lithografiemachines",
      "Deelnemen aan architectuuroverleg en technische reviews",
      "Samenwerken met internationale engineeringteams",
      "Bijdragen aan de verbetering van ontwikkelprocessen en CI/CD-pipelines",
    ],
    vereisten: [
      "5+ jaar Java-ontwikkelervaring",
      "Ervaring met software in embedded of real-time omgevingen is een pré",
      "WO werk- en denkniveau (Computer Science of vergelijkbaar)",
      "Vloeiend Engels, Nederlands is een pré",
    ],
    bedrijfsBeschrijving:
      "ASML is 's werelds toonaangevende leverancier van lithografiesystemen voor de halfgeleiderindustrie. Zonder onze machines zijn er geen chips — en dus geen smartphones, auto's of computers.",
    geplaatst: "1 week geleden",
  },
  {
    id: 6,
    titel: "UX Designer",
    bedrijf: "Philips",
    locatie: "Amsterdam",
    sector: "IT & Tech",
    contracttype: "Vast",
    salaris: "€3.000 - €4.000",
    niveau: "Junior",
    beschrijving:
      "Ontwerp gebruiksvriendelijke interfaces voor onze gezondheidszorgapplicaties. Je voert gebruikersonderzoek uit en maakt wireframes en prototypes.",
    taken: [
      "Uitvoeren van gebruikersonderzoek en usability tests",
      "Maken van wireframes, prototypes en design specs in Figma",
      "Samenwerken met product owners en developers",
      "Bijdragen aan het design system van Philips",
    ],
    vereisten: [
      "HBO/WO opleiding in UX Design, Interaction Design of vergelijkbaar",
      "Portfolio met UX-projecten",
      "Ervaring met Figma",
      "Kennis van accessibility-richtlijnen is een pré",
    ],
    bedrijfsBeschrijving:
      "Philips is een technologiebedrijf dat zich richt op het verbeteren van de gezondheid van mensen. We combineren technologie en menselijke inzichten om mensen te helpen gezond te blijven en te herstellen.",
    geplaatst: "4 dagen geleden",
  },
  {
    id: 7,
    titel: "Account Manager",
    bedrijf: "Salesforce",
    locatie: "Amsterdam",
    sector: "Sales & Business Development",
    contracttype: "Vast",
    salaris: "€3.500 - €5.000",
    niveau: "Medior",
    beschrijving:
      "Begeleid enterprise klanten in hun digitale transformatie. Je bouwt langdurige relaties op en identificeert groeikansen binnen bestaande accounts.",
    taken: [
      "Beheren en uitbouwen van een portfolio enterprise-accounts",
      "Identificeren van upsell- en cross-sell-kansen",
      "Samenwerken met solutions engineers voor technische demos",
      "Opstellen van offertes en contractonderhandelingen",
    ],
    vereisten: [
      "3+ jaar B2B-saleservaring, bij voorkeur in SaaS",
      "Bewezen trackrecord in het behalen van salesquota",
      "Sterke communicatieve en onderhandelingsvaardigheden",
      "Vloeiend Nederlands en Engels",
    ],
    bedrijfsBeschrijving:
      "Salesforce is 's werelds #1 CRM-platform. Vanuit ons kantoor in Amsterdam helpen we Nederlandse en internationale bedrijven hun klantrelaties te versterken met onze cloud-oplossingen.",
    geplaatst: "2 dagen geleden",
  },
  {
    id: 8,
    titel: "Stage: Content Creator",
    bedrijf: "DEPT Agency",
    locatie: "Amsterdam",
    sector: "Marketing & Communicatie",
    contracttype: "Stage",
    salaris: "€500 - €600",
    niveau: "Student / Starter",
    beschrijving:
      "Creëer content voor social media campagnes van grote Nederlandse merken. Je schrijft copy, maakt scripts en werkt mee aan creatieve concepten.",
    taken: [
      "Schrijven van social media copy voor Instagram, TikTok en LinkedIn",
      "Meedenken over creatieve campagneconcepten",
      "Maken van scripts voor video-content",
      "Analyseren van contentprestaties en rapporteren",
    ],
    vereisten: [
      "HBO-opleiding in communicatie, journalistiek of marketing (bezig of afgerond)",
      "Affiniteit met social media en contentstrategie",
      "Creatief, eigenzinnig en een scherp oog voor taal",
      "Beschikbaar voor minimaal 4 dagen per week",
    ],
    bedrijfsBeschrijving:
      "DEPT® is een wereldwijd digitaal bureau met meer dan 4.000 specialisten in 30+ landen. We bouwen aan digitale producten, campagnes en platformen voor merken als Google, eBay en Audi.",
    geplaatst: "Vandaag",
  },
];

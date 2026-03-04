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
    geplaatst: "Vandaag",
  },
];

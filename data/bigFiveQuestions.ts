export type Trait = "O" | "C" | "E" | "A" | "N";

export type Question = {
  id: number;
  text: string;
  trait: Trait;
  reversed: boolean;
};

export const TRAIT_LABELS: Record<Trait, string> = {
  O: "Openheid",
  C: "Consciëntieusheid",
  E: "Extraversie",
  A: "Meegaandheid",
  N: "Neuroticisme",
};

export const TRAIT_DESCRIPTIONS: Record<Trait, { high: string; low: string }> = {
  O: {
    high: "Je bent nieuwsgierig, creatief en open voor nieuwe ervaringen.",
    low: "Je houdt van vertrouwde routines en praktisch denken.",
  },
  C: {
    high: "Je bent georganiseerd, betrouwbaar en doelgericht.",
    low: "Je werkt flexibel en spontaan, liever zonder strakke planning.",
  },
  E: {
    high: "Je bent energiek, sociaal en haalt energie uit contact met anderen.",
    low: "Je laadt op door alleen te zijn en werkt graag geconcentreerd.",
  },
  A: {
    high: "Je bent empathisch, coöperatief en waardeert harmonie.",
    low: "Je bent direct, onafhankelijk en stelt je eigen oordeel centraal.",
  },
  N: {
    high: "Je ervaart emoties intens en bent gevoelig voor stress.",
    low: "Je blijft kalm onder druk en herstelt snel na tegenslagen.",
  },
};

// 50 IPIP vragen — 10 per trait
export const questions: Question[] = [
  // Openheid (O)
  { id: 1,  text: "Ik heb een levendige verbeeldingskracht.",         trait: "O", reversed: false },
  { id: 2,  text: "Ik ben geïnteresseerd in abstracte ideeën.",       trait: "O", reversed: false },
  { id: 3,  text: "Ik houd van kunst, muziek of literatuur.",         trait: "O", reversed: false },
  { id: 4,  text: "Ik ben creatief in wat ik doe.",                   trait: "O", reversed: false },
  { id: 5,  text: "Ik geniet van het nadenken over nieuwe concepten.",trait: "O", reversed: false },
  { id: 6,  text: "Ik vermijd filosofische discussies.",              trait: "O", reversed: true  },
  { id: 7,  text: "Ik ben niet geïnteresseerd in kunst.",             trait: "O", reversed: true  },
  { id: 8,  text: "Ik hou er niet van om mijn tijd te besteden aan dromen.", trait: "O", reversed: true },
  { id: 9,  text: "Ik ben moeilijk te raken door emotie.",            trait: "O", reversed: true  },
  { id: 10, text: "Ik vind het leuk om met nieuwe ideeën te spelen.", trait: "O", reversed: false },

  // Consciëntieusheid (C)
  { id: 11, text: "Ik zorg altijd voor mijn spullen.",                trait: "C", reversed: false },
  { id: 12, text: "Ik volg een schema op.",                           trait: "C", reversed: false },
  { id: 13, text: "Ik ben precies in mijn werk.",                     trait: "C", reversed: false },
  { id: 14, text: "Ik maak plannen en hou me daaraan.",               trait: "C", reversed: false },
  { id: 15, text: "Ik ben efficiënt in wat ik doe.",                  trait: "C", reversed: false },
  { id: 16, text: "Ik laat een spoor van rommel achter mij.",         trait: "C", reversed: true  },
  { id: 17, text: "Ik vergeet dingen terug te leggen op hun plek.",   trait: "C", reversed: true  },
  { id: 18, text: "Ik shirk mijn plichten.",                          trait: "C", reversed: true  },
  { id: 19, text: "Ik doe dingen halfslachtig.",                      trait: "C", reversed: true  },
  { id: 20, text: "Ik werk hard.",                                    trait: "C", reversed: false },

  // Extraversie (E)
  { id: 21, text: "Ik ben de ziel van het feest.",                    trait: "E", reversed: false },
  { id: 22, text: "Ik voel me op mijn gemak bij mensen.",             trait: "E", reversed: false },
  { id: 23, text: "Ik begin gesprekken.",                             trait: "E", reversed: false },
  { id: 24, text: "Ik praat met veel verschillende mensen op feesten.", trait: "E", reversed: false },
  { id: 25, text: "Ik ben vol energie.",                              trait: "E", reversed: false },
  { id: 26, text: "Ik houd me liever op de achtergrond.",             trait: "E", reversed: true  },
  { id: 27, text: "Ik praat niet veel.",                              trait: "E", reversed: true  },
  { id: 28, text: "Ik vind het moeilijk om nieuwe mensen te benaderen.", trait: "E", reversed: true },
  { id: 29, text: "Ik heb weinig te zeggen.",                         trait: "E", reversed: true  },
  { id: 30, text: "Ik stap makkelijk op mensen af.",                  trait: "E", reversed: false },

  // Meegaandheid (A)
  { id: 31, text: "Ik voel me bezorgd om anderen.",                   trait: "A", reversed: false },
  { id: 32, text: "Ik heb een goed hart.",                            trait: "A", reversed: false },
  { id: 33, text: "Ik ben geïnteresseerd in mensen.",                 trait: "A", reversed: false },
  { id: 34, text: "Ik neem de tijd voor anderen.",                    trait: "A", reversed: false },
  { id: 35, text: "Ik maak mensen graag blij.",                       trait: "A", reversed: false },
  { id: 36, text: "Ik beledig mensen.",                               trait: "A", reversed: true  },
  { id: 37, text: "Ik ben weinig geïnteresseerd in anderen.",         trait: "A", reversed: true  },
  { id: 38, text: "Ik voel weinig medeleven met anderen.",            trait: "A", reversed: true  },
  { id: 39, text: "Ik behandel mensen met respect.",                  trait: "A", reversed: false },
  { id: 40, text: "Ik vertrouw anderen gemakkelijk.",                 trait: "A", reversed: false },

  // Neuroticisme (N)
  { id: 41, text: "Ik raak gemakkelijk van streek.",                  trait: "N", reversed: false },
  { id: 42, text: "Ik voel me snel neerslachtig.",                    trait: "N", reversed: false },
  { id: 43, text: "Ik maak me snel zorgen.",                          trait: "N", reversed: false },
  { id: 44, text: "Ik heb stemmingswisselingen.",                     trait: "N", reversed: false },
  { id: 45, text: "Ik word snel geïrriteerd.",                        trait: "N", reversed: false },
  { id: 46, text: "Ik ben zelden verdrietig.",                        trait: "N", reversed: true  },
  { id: 47, text: "Ik ben ontspannen, ik ga zelden met stress om.",   trait: "N", reversed: true  },
  { id: 48, text: "Ik ben zelden bezorgd.",                           trait: "N", reversed: true  },
  { id: 49, text: "Ik blijf kalm in stressvolle situaties.",          trait: "N", reversed: true  },
  { id: 50, text: "Ik ben gemakkelijk te van streek te brengen.",     trait: "N", reversed: false },
];

// Subset van 10 vragen (2 per trait) voor de korte versie
export const shortQuestions: Question[] = [
  questions[0], questions[4],   // O
  questions[10], questions[14], // C
  questions[20], questions[24], // E
  questions[30], questions[34], // A
  questions[40], questions[44], // N
];

export function calculateScores(answers: Record<number, number>): Record<Trait, number> {
  const traits: Trait[] = ["O", "C", "E", "A", "N"];
  const scores: Record<Trait, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  const counts: Record<Trait, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };

  for (const q of questions) {
    if (answers[q.id] === undefined) continue;
    const raw = answers[q.id];
    const score = q.reversed ? 6 - raw : raw;
    scores[q.trait] += score;
    counts[q.trait]++;
  }

  // Normalize to 0-100
  for (const t of traits) {
    if (counts[t] === 0) { scores[t] = 0; continue; }
    scores[t] = Math.round(((scores[t] / counts[t]) - 1) / 4 * 100);
  }

  return scores;
}

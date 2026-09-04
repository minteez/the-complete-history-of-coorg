export interface GlossaryTerm {
  term: string;
  native?: string;
  category: "society" | "land" | "religion" | "language" | "history" | "food";
  definition: string;
  sourceIds: string[];
}

export const glossary: GlossaryTerm[] = [
  {
    term: "Kodagu",
    native: "ಕೊಡಗು",
    category: "history",
    definition:
      "The district's own name, used officially since 1973, when the name Coorg — an anglicisation — was formally replaced.",
    sourceIds: ["karnataka-gazetteer"],
  },
  {
    term: "Kodava",
    category: "society",
    definition:
      "The Kodava people, historically the dominant landholding community of Kodagu. 'Kodava' also refers to the language, Kodava Takk. Kodagu is home to many other communities as well.",
    sourceIds: ["census-2011-language"],
  },
  {
    term: "Kodava Takk",
    native: "ಕೊಡವ ತಕ್ಕ್",
    category: "language",
    definition:
      "The Dravidian language of the Kodava people, generally classified within the South Dravidian branch and closely studied in relation to Kannada, Tulu and Malayalam. It is written mainly in the Kannada script.",
    sourceIds: ["census-2011-language", "cole-1867"],
  },
  {
    term: "Okka",
    category: "society",
    definition:
      "The patrilineal joint family or clan, the fundamental unit of Kodava social organisation, holding ancestral land and identity in common.",
    sourceIds: ["richter-1870"],
  },
  {
    term: "Ainmane",
    category: "land",
    definition:
      "The ancestral home of an okka: the ritual and social centre where family ceremonies and ancestor observances are held.",
    sourceIds: ["richter-1870"],
  },
  {
    term: "Kaimada",
    category: "religion",
    definition:
      "A shrine associated with an okka's ancestors or a guardian deity, often standing near the ancestral land.",
    sourceIds: ["richter-1870"],
  },
  {
    term: "Karana / Karona",
    category: "religion",
    definition:
      "Venerated ancestors of a family. Observances directed to them are a central strand of Kodava religious practice alongside temple worship.",
    sourceIds: ["richter-1870"],
  },
  {
    term: "Nad",
    category: "land",
    definition:
      "A traditional territorial division of Kodagu grouping villages; used in pre-colonial and colonial administration.",
    sourceIds: ["richter-1870"],
  },
  {
    term: "Jamma",
    category: "land",
    definition:
      "A distinctive form of land tenure in Kodagu, recognised in colonial and later revenue law, historically linked to service obligations and to rights over rice land and adjoining forest.",
    sourceIds: ["karnataka-gazetteer"],
  },
  {
    term: "Bane",
    category: "land",
    definition:
      "Wooded land attached to a holding, used for firewood, timber, grazing and shade for coffee; its status has been repeatedly redefined in law.",
    sourceIds: ["karnataka-gazetteer"],
  },
  {
    term: "Haleri",
    category: "history",
    definition:
      "The dynasty, of Keladi–Ikkeri Nayaka descent, that ruled Kodagu from around the early seventeenth century until the British annexation of 1834; named after the village where it first established itself.",
    sourceIds: ["mogling-1855"],
  },
  {
    term: "Puttari",
    category: "food",
    definition:
      "The harvest festival, marking the cutting of the first sheaf of the season's paddy, celebrated with family gathering, ritual and dance.",
    sourceIds: ["sahapedia-kodava"],
  },
  {
    term: "Kailpodhud",
    category: "society",
    definition:
      "The festival at which arms and implements are honoured, historically marking the end of the transplanting season and the resumption of hunting and martial practice.",
    sourceIds: ["sahapedia-kodava"],
  },
  {
    term: "Kaveri Sankramana",
    category: "religion",
    definition:
      "The observance at Talakaveri marking the moment the Kaveri is held to rise at the sacred spring, drawing pilgrims from across the region.",
    sourceIds: ["sahapedia-kodava"],
  },
  {
    term: "Pattole Palame",
    category: "language",
    definition:
      "The compilation of Kodava songs, customs and lore assembled by Nadikerianda Chinnappa and first published in 1924; the foundational printed record of Kodava oral tradition.",
    sourceIds: ["pattole-palame"],
  },
  {
    term: "Kupya chele",
    category: "society",
    definition:
      "Kodava men's traditional dress: a long coat gathered at the waist with a sash, worn with a dagger for ceremonial occasions.",
    sourceIds: ["sahapedia-kodava"],
  },
];

export const glossaryCategories = [
  "society",
  "land",
  "religion",
  "language",
  "history",
  "food",
] as const;

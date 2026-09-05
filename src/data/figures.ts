import type { EvidenceLevel } from "@/components/site/EvidenceBadge";

export type FigureField = "haleri" | "military" | "politics" | "literature" | "scholarship";

export interface Figure {
  id: string;
  name: string;
  native?: string;
  field: FigureField;
  dates: string;
  role: string;
  level: EvidenceLevel;
  bio: string;
  sourceIds: string[];
}

export const figureFieldLabels: Record<FigureField, string> = {
  haleri: "Haleri rulers",
  military: "Military service",
  politics: "Politics & administration",
  literature: "Writers & collectors",
  scholarship: "Scholars & documenters",
};

export const figures: Figure[] = [
  {
    id: "mudduraja",
    name: "Mudduraja",
    field: "haleri",
    dates: "reigned mid-17th century",
    role: "Haleri raja, founder of the capital at Madikeri",
    level: "uncertain",
    bio: "Credited with establishing the settlement and fort that became Madikeri (Muddurajakeri). Regnal dates for the earlier Haleri rulers differ between the colonial gazetteers and later compilations, so the years attached to him should be read as approximate.",
    sourceIds: ["richter-gazetteer", "kodavaclan-rulers", "madikeri-wiki"],
  },
  {
    id: "dodda-vira-rajendra",
    name: "Dodda Vira Rajendra",
    field: "haleri",
    dates: "reigned c. 1789–1809",
    role: "Haleri raja who allied with the English East India Company",
    level: "documented",
    summaryless: undefined as never,
    bio: "Escaped Mysore captivity, recovered the kingdom during the wars against Tipu Sultan, and entered into a treaty relationship with the Company in 1790. He built the forest palace at Nalknad and left the state independent but encircled.",
    sourceIds: ["dodda-vira-wiki", "richter-gazetteer"],
  },
  {
    id: "chikka-vira-rajendra",
    name: "Chikka Vira Rajendra",
    field: "haleri",
    dates: "reigned 1820–1834",
    role: "Last raja of Coorg",
    level: "documented",
    bio: "Deposed after the Coorg War of 1834 and exiled; the Company's justification rested heavily on accounts of his cruelty written by the officials who removed him, which later historians read with caution.",
    sourceIds: ["chikka-vira-wiki", "coorg-war-wiki", "kodavaclan-annexation"],
  },
  {
    id: "appacha-kavi",
    name: "Haradasa Appacha Kavi",
    native: "ಅಪ್ಪಚ್ಚ ಕವಿ",
    field: "literature",
    dates: "1868–1944",
    role: "First major poet and dramatist in Kodava Takk",
    level: "documented",
    bio: "Wrote plays and verse in Kodava Takk at a time when the language had almost no printed literature, and is conventionally treated as the founder of its literary tradition.",
    sourceIds: ["appacha-kavi-wiki", "sahapedia-appacha"],
  },
  {
    id: "nadikerianda-chinnappa",
    name: "Nadikerianda Chinnappa",
    field: "literature",
    dates: "1875–1931",
    role: "Compiler of Pattole Palame",
    level: "documented",
    bio: "A police officer who collected Kodava songs, proverbs, riddles and ritual lore across Kodagu and published them in 1924 as Pattole Palame — the earliest substantial folk compilation of a South Indian community by one of its own members.",
    sourceIds: ["pattole-palame", "pattole-palame-wiki", "boverianda-wiki"],
  },
  {
    id: "boverianda-couple",
    name: "Boverianda Chinnappa & Nanjamma Chinnappa",
    field: "scholarship",
    dates: "20th–21st century",
    role: "Translators of Pattole Palame into English",
    level: "documented",
    bio: "Descendants of Nadikerianda Chinnappa who spent years transcribing and translating Pattole Palame, making the collection readable beyond Kodava Takk and Kannada script.",
    sourceIds: ["boverianda-wiki", "pattole-palame-wiki"],
  },
  {
    id: "cariappa",
    name: "Field Marshal K. M. Cariappa",
    field: "military",
    dates: "1899–1993",
    role: "First Indian Commander-in-Chief of the Indian Army",
    level: "documented",
    bio: "Took over as Commander-in-Chief in January 1949 after commanding in the 1947–48 operations in Kashmir; later High Commissioner to Australia and New Zealand, and made Field Marshal in 1986.",
    sourceIds: ["cariappa-wiki", "mod-cariappa", "bharat-rakshak-cariappa"],
  },
  {
    id: "thimayya",
    name: "General K. S. Thimayya",
    field: "military",
    dates: "1906–1965",
    role: "Chief of Army Staff, 1957–1961",
    level: "documented",
    bio: "Commanded a brigade in Burma in the Second World War, led operations in Kashmir, chaired the Neutral Nations Repatriation Commission in Korea, and died in Cyprus while commanding the UN peacekeeping force.",
    sourceIds: ["thimayya-wiki", "mod-thimayya", "bharat-rakshak-thimayya"],
  },
  {
    id: "poonacha",
    name: "C. M. Poonacha",
    field: "politics",
    dates: "1910–1990",
    role: "Chief Minister of Coorg State",
    level: "documented",
    bio: "Headed the government of Coorg State, the small Part C State that existed from 1950 until its merger into Mysore State in 1956, and later held office in Karnataka and at the centre.",
    sourceIds: ["poonacha-wiki", "hindu-kodagu-assembly"],
  },
  {
    id: "cole",
    name: "R. A. Cole",
    field: "scholarship",
    dates: "19th century",
    role: "Author of the first grammar of Kodava Takk",
    level: "documented",
    bio: "Published An Elementary Grammar of the Coorg Language in 1867, the earliest systematic description of Kodava Takk and still a reference point for its historical phonology.",
    sourceIds: ["cole-1867"],
  },
  {
    id: "richter",
    name: "Gustav Richter",
    field: "scholarship",
    dates: "19th century",
    role: "Compiler of the Coorg gazetteer",
    level: "colonial",
    bio: "Wrote the Gazetteer of Coorg (1870), the fullest 19th-century administrative account of the province — indispensable, and shaped throughout by the assumptions of the administration that commissioned it.",
    sourceIds: ["richter-gazetteer", "graeter-1870"],
  },
];

export const figuresByField = (field: FigureField) => figures.filter((f) => f.field === field);

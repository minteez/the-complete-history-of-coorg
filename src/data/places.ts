import type { EvidenceLevel } from "@/components/site/EvidenceBadge";

export type PlaceCategory = "fort" | "palace" | "temple" | "settlement" | "archaeology" | "estate";

export interface Place {
  id: string;
  name: string;
  native?: string;
  category: PlaceCategory;
  lat: number;
  lng: number;
  period: string;
  level: EvidenceLevel;
  summary: string;
  sourceIds: string[];
}

export const placeCategoryLabels: Record<PlaceCategory, string> = {
  fort: "Forts & battle sites",
  palace: "Palaces",
  temple: "Temples & sacred sites",
  settlement: "Towns & settlements",
  archaeology: "Archaeological sites",
  estate: "Plantations",
};

export const places: Place[] = [
  {
    id: "madikeri-fort",
    name: "Madikeri Fort",
    native: "ಮಡಿಕೇರಿ",
    category: "fort",
    lat: 12.4244,
    lng: 75.7382,
    period: "Late 17th century, rebuilt repeatedly",
    level: "documented",
    summary:
      "The Haleri capital's fort, attributed in origin to Mudduraja and rebuilt in stone by later rulers and then by the British, who used it for administration.",
    sourceIds: ["richter-gazetteer", "karnataka-gazetteer"],
  },
  {
    id: "madikeri-town",
    name: "Madikeri (Mercara)",
    category: "settlement",
    lat: 12.4209,
    lng: 75.7397,
    period: "c. 1680s onward",
    level: "documented",
    summary:
      "Hill town founded as the Haleri seat of government and later the headquarters of British Coorg, Coorg State and Kodagu district.",
    sourceIds: ["karnataka-gazetteer"],
  },
  {
    id: "nalknad-palace",
    name: "Nalknad Palace",
    category: "palace",
    lat: 12.2181,
    lng: 75.6489,
    period: "1792–1794",
    level: "documented",
    summary:
      "Forest palace near Kakkabe built under Dodda Vira Rajendra; a refuge during the Mysore wars and the site of Chikka Vira Rajendra's marriage.",
    sourceIds: ["richter-gazetteer"],
  },
  {
    id: "talakaveri",
    name: "Talakaveri",
    native: "ತಲಕಾವೇರಿ",
    category: "temple",
    lat: 12.3861,
    lng: 75.4936,
    period: "Sacred site; present structures later",
    level: "traditional",
    summary:
      "The traditional source of the Kaveri on Brahmagiri hill, focus of Kaveri Sankramana, when the spring is said to well up at a fixed moment.",
    sourceIds: ["sahapedia-kodava"],
  },
  {
    id: "bhagamandala",
    name: "Bhagamandala",
    category: "temple",
    lat: 12.3818,
    lng: 75.5333,
    period: "Temple complex, medieval and later",
    level: "documented",
    summary:
      "Confluence of the Kaveri, Kannike and the traditionally invisible Sujyoti; the Bhagandeshwara temple shows Kerala, Kodagu and Nayaka building styles.",
    sourceIds: ["karnataka-gazetteer"],
  },
  {
    id: "haleri",
    name: "Haleri",
    category: "settlement",
    lat: 12.4667,
    lng: 75.7333,
    period: "16th–17th century",
    level: "uncertain",
    summary:
      "Village that gave the Haleri dynasty its name and served as its first base; the founding date is given differently by different sources.",
    sourceIds: ["richter-gazetteer"],
  },
  {
    id: "devatiparambu",
    name: "Devatiparambu",
    category: "fort",
    lat: 12.4167,
    lng: 75.7333,
    period: "1834",
    level: "documented",
    summary:
      "Ground near Madikeri associated with the final stand of the Coorg War of 1834, after which the kingdom was annexed.",
    sourceIds: ["coorg-war-1834"],
  },
  {
    id: "amara-sullia",
    name: "Amara Sullia",
    category: "settlement",
    lat: 12.5667,
    lng: 75.3833,
    period: "1837",
    level: "documented",
    summary:
      "Region of the 1837 rebellion against Company rule — a separate rising from the 1834 war, though often conflated with it.",
    sourceIds: ["amara-sullia-revolt"],
  },
  {
    id: "iruppu",
    name: "Iruppu (Rameshwara temple)",
    category: "temple",
    lat: 12.0167,
    lng: 75.8667,
    period: "Traditionally ancient; structures later",
    level: "traditional",
    summary:
      "Temple on the Lakshmana Tirtha in south Kodagu, linked by tradition to the Ramayana; the association is devotional rather than documented.",
    sourceIds: ["karnataka-gazetteer"],
  },
  {
    id: "megaliths-kodagu",
    name: "Megalithic burial sites, Kodagu uplands",
    category: "archaeology",
    lat: 12.3167,
    lng: 75.8,
    period: "Iron Age",
    level: "scholarly",
    summary:
      "Dolmens and stone burial monuments recorded across the uplands; broad regional dating rather than site-by-site excavation underlies most claims.",
    sourceIds: ["megalithic-south-india"],
  },
  {
    id: "coffee-estates",
    name: "Coffee country, central Kodagu",
    category: "estate",
    lat: 12.35,
    lng: 75.7,
    period: "1850s onward",
    level: "documented",
    summary:
      "Plantation belt that reshaped land use and labour under British rule and still defines much of Kodagu's economy.",
    sourceIds: ["coffee-board"],
  },
];

export const placesByCategory = (category: PlaceCategory) =>
  places.filter((p) => p.category === category);

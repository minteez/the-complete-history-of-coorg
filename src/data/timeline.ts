import type { EvidenceLevel } from "@/components/site/EvidenceBadge";

export type Era =
  | "prehistoric"
  | "ancient"
  | "medieval"
  | "haleri"
  | "mysore"
  | "british"
  | "modern";

export interface TimelineEvent {
  id: string;
  /** Numeric sort key. Negative for BCE. */
  sort: number;
  /** Human-readable date label as it should be displayed. */
  date: string;
  title: string;
  era: Era;
  level: EvidenceLevel;
  summary: string;
  detail?: string;
  sourceIds: string[];
  tags: string[];
  route?: string;
}

export const eraMeta: Record<Era, { label: string; span: string; blurb: string }> = {
  prehistoric: {
    label: "Prehistoric & Megalithic",
    span: "c. 3000 BCE – 300 BCE",
    blurb:
      "Neolithic celts and Iron Age megalithic burials place people on these ridges long before any written record of them.",
  },
  ancient: {
    label: "Ancient & Early Historic",
    span: "c. 300 BCE – 900 CE",
    blurb:
      "Sangam-era Tamil literature supplies the earliest possible textual glimpses; epigraphy begins to speak from the ninth century.",
  },
  medieval: {
    label: "Medieval Overlordship",
    span: "c. 900 – 1600 CE",
    blurb:
      "Gangas, Cholas, Changalvas, Kongalvas and Hoysalas exercise varying degrees of authority over the hill tracts.",
  },
  haleri: {
    label: "The Haleri Kingdom",
    span: "c. 1600 – 1834",
    blurb:
      "A branch of the Keladi–Ikkeri Nayakas establishes a dynasty at Haleri and rules Kodagu for over two centuries.",
  },
  mysore: {
    label: "The Mysore Conflicts",
    span: "1763 – 1799",
    blurb:
      "Hyder Ali and Tipu Sultan repeatedly invade, occupy and lose Kodagu; the period leaves deep and contested memories.",
  },
  british: {
    label: "British Kodagu",
    span: "1834 – 1947",
    blurb:
      "Annexation, coffee, revenue settlement, missionary scholarship and the making of a colonial province.",
  },
  modern: {
    label: "Independence & After",
    span: "1947 – present",
    blurb:
      "Coorg becomes a Part C State, merges into Mysore in 1956, and becomes Kodagu district of Karnataka.",
  },
};

export const eraOrder: Era[] = [
  "prehistoric",
  "ancient",
  "medieval",
  "haleri",
  "mysore",
  "british",
  "modern",
];

export const timeline: TimelineEvent[] = [
  {
    id: "neolithic-celts",
    sort: -2500,
    date: "c. 3000 – 1200 BCE",
    title: "Neolithic tool-users in the Kodagu uplands",
    era: "prehistoric",
    level: "scholarly",
    summary:
      "Polished stone celts recovered from surface and habitation contexts in Kodagu indicate Neolithic activity in the district.",
    detail:
      "Kodagu sits at the margin of the well-studied South Indian Neolithic zone. Finds are reported in archaeological survey literature rather than from large excavated sequences, so absolute dating for the district itself remains weak.",
    sourceIds: ["sujatha-2017", "iar-asi"],
    tags: ["archaeology", "prehistory"],
    route: "/ancient",
  },
  {
    id: "megalithic-burials",
    sort: -1000,
    date: "c. 1200 BCE – 300 CE",
    title: "Iron Age megalithic burial traditions",
    era: "prehistoric",
    level: "documented",
    summary:
      "Dolmenoid cists, cairn circles and menhirs cluster across eastern Kodagu — more than forty burial clusters are reported in one recent survey.",
    detail:
      "Chandan Kumar and Shobha's 2023 study of Moribetta and Morikallu records over forty megalithic burial clusters on the eastern edge of the Western Ghats in Kodagu district. The broader South Indian megalithic horizon runs roughly 1200 BCE to 300 CE; individual Kodagu monuments are rarely independently dated.",
    sourceIds: ["chandan-kumar-2023", "sujatha-2017", "moriarty-megaliths"],
    tags: ["archaeology", "prehistory", "burials"],
    route: "/ancient",
  },
  {
    id: "sangam-references",
    sort: -300,
    date: "c. 300 BCE – 300 CE",
    title: "Possible Sangam-era references to the hill country",
    era: "ancient",
    level: "uncertain",
    summary:
      "Classical Tamil literature refers to western hill peoples and territories that some historians read as including the Kodagu tract.",
    detail:
      "These identifications are inferential. Sangam poetry names regions and chieftains without the geographic precision needed to fix a modern district boundary, and different scholars map the same lines to different parts of the Ghats.",
    sourceIds: ["history-kodagu-wiki", "krishnamurti-2003"],
    tags: ["literature", "early-history"],
    route: "/ancient",
  },
  {
    id: "asi-inscriptions-2024",
    sort: 850,
    date: "9th century CE (reported 2024)",
    title: "Sixty-nine inscriptions reveal an epigraphic Kodagu",
    era: "ancient",
    level: "documented",
    summary:
      "An Archaeological Survey of India documentation drive reported 69 stone inscriptions in Kodagu, the earliest from the ninth century, including evidence of Chola influence and now-lost temples.",
    sourceIds: ["asi-inscriptions-2024", "asi-karnataka"],
    tags: ["epigraphy", "archaeology", "temples"],
    route: "/ancient",
  },
  {
    id: "ganga-chola-hoysala",
    sort: 1004,
    date: "c. 1004 – 1175 CE",
    title: "Gangas, Cholas, Changalvas and Hoysalas",
    era: "medieval",
    level: "scholarly",
    summary:
      "Kodagu falls within the shifting spheres of the Western Gangas, the Cholas, the local Changalva and Kongalva lines, and later the Hoysalas.",
    detail:
      "Control here means tribute, garrisons and temple patronage rather than continuous direct administration. The hill interior retained substantial local autonomy throughout.",
    sourceIds: ["rice-gazetteer", "history-kodagu-wiki", "asi-inscriptions-2024"],
    tags: ["dynasties", "medieval"],
    route: "/ancient",
  },
  {
    id: "haleri-founding",
    sort: 1600,
    date: "c. 1600 (disputed; c. 1600–1633)",
    title: "The Haleri dynasty is founded",
    era: "haleri",
    level: "disputed",
    summary:
      "A prince of the Keladi–Ikkeri Nayaka house settles at Haleri and establishes what becomes the Kingdom of Coorg.",
    detail:
      "The founder is conventionally named Vira Raja. The founding date is genuinely unsettled: sources offer dates from around 1600 to 1633, and no single authoritative gazetteer reconciliation exists. Treat any precise year with caution.",
    sourceIds: ["kingdom-coorg-wiki", "rice-gazetteer", "kodavaclan-rulers"],
    tags: ["haleri", "dynasty"],
    route: "/haleri",
  },
  {
    id: "madikeri-founded",
    sort: 1681,
    date: "1681",
    title: "Mudduraja founds Muddurajana Keri — Madikeri",
    era: "haleri",
    level: "documented",
    summary:
      "The Haleri ruler Mudduraja establishes a new capital, 'Muddurajana Keri', which becomes Mercara and today Madikeri.",
    sourceIds: ["madikeri-wiki", "rice-gazetteer"],
    tags: ["haleri", "madikeri", "capital"],
    route: "/haleri",
  },
  {
    id: "hyder-ali-invasions",
    sort: 1763,
    date: "1763 onwards",
    title: "Hyder Ali of Mysore turns towards Kodagu",
    era: "mysore",
    level: "documented",
    summary:
      "After absorbing Bednur, Hyder Ali begins a series of campaigns to bring the Kodagu hills under Mysore's control.",
    sourceIds: ["kingdom-coorg-wiki", "mogling-1855", "richter-gazetteer"],
    tags: ["mysore", "warfare"],
    route: "/mysore-conflicts",
  },
  {
    id: "mysore-occupation",
    sort: 1780,
    date: "1780 – 1788",
    title: "Mysore occupies Kodagu",
    era: "mysore",
    level: "documented",
    summary:
      "Kodagu is held under Mysore administration for most of the 1780s, with repeated Kodava revolts and repeated suppression.",
    sourceIds: ["kingdom-coorg-wiki", "mogling-1855"],
    tags: ["mysore", "occupation"],
    route: "/mysore-conflicts",
  },
  {
    id: "seringapatam-captivity",
    sort: 1785,
    date: "1780s",
    title: "Deportation of Kodavas to Seringapatam",
    era: "mysore",
    level: "disputed",
    summary:
      "Kodava rebels were deported and imprisoned at Seringapatam during Tipu Sultan's suppression campaigns. The commonly repeated figure of 60,000–70,000 captives is doubted by historians.",
    detail:
      "That the deportations happened is not in question. The scale is. The very large numbers descend from early British and missionary accounts rather than contemporary administrative records, and are widely regarded as inflated. This archive reports the event and flags the number rather than repeating it as fact.",
    sourceIds: ["seringapatam-captivity-wiki", "mogling-1855"],
    tags: ["mysore", "tipu", "contested"],
    route: "/mysore-conflicts",
  },
  {
    id: "dodda-vira-rajendra",
    sort: 1790,
    date: "1780 – 1809",
    title: "Dodda Vira Rajendra restores Haleri rule and allies with the Company",
    era: "haleri",
    level: "documented",
    summary:
      "Dodda Vira Rajendra escapes Mysore captivity, expels Mysore forces from Kodagu, and allies with the English East India Company against Tipu Sultan. He founds Virajpet.",
    detail:
      "The alliance was operational through the Third and Fourth Anglo-Mysore Wars of the 1790s. A single precise treaty date is not consistently given across accessible sources; the relationship developed through the decade.",
    sourceIds: ["dodda-vira-wiki", "mogling-1855", "rice-gazetteer"],
    tags: ["haleri", "mysore", "british"],
    route: "/haleri",
  },
  {
    id: "later-haleri",
    sort: 1809,
    date: "1809 – 1834",
    title: "Devammaji, Linga Rajendra II and Chikka Vira Rajendra",
    era: "haleri",
    level: "documented",
    summary:
      "The last quarter-century of the kingdom passes through a regency and two reigns, ending with Chikka Vira Rajendra.",
    sourceIds: ["chikka-vira-wiki", "kodavaclan-rulers", "rice-gazetteer"],
    tags: ["haleri", "dynasty"],
    route: "/haleri",
  },
  {
    id: "coorg-war",
    sort: 1834,
    date: "February – April 1834",
    title: "The Coorg War and annexation",
    era: "british",
    level: "documented",
    summary:
      "A large Company force enters Kodagu from several directions. The campaign is brief; Chikka Vira Rajendra is deposed and the kingdom annexed in April 1834.",
    detail:
      "Friction had grown from around 1830, and the Raja's detention of a British emissary, Kullapalli Karunakaran Menon, gave Governor-General Lord William Bentinck his immediate pretext.",
    sourceIds: ["coorg-war-wiki", "mogling-1855", "rice-gazetteer"],
    tags: ["british", "warfare", "annexation"],
    route: "/coorg-war-1834",
  },
  {
    id: "amara-sullia",
    sort: 1837,
    date: "1837",
    title: "The Amara Sullia Rebellion",
    era: "british",
    level: "documented",
    summary:
      "An armed uprising across Kodagu, Sullia and Dakshina Kannada — Arebhashe, Kodava and Tulu participants together — twenty years before 1857.",
    detail:
      "Resentment at the 1834 deposition and at new revenue demands drove the revolt. Regional historiography treats it as an early anti-colonial rising; recent academic surveys review the competing readings.",
    sourceIds: ["amara-sullia-wiki", "meenakshi-2024"],
    tags: ["british", "rebellion"],
    route: "/british",
  },
  {
    id: "coffee-expansion",
    sort: 1855,
    date: "1850s – 1900s",
    title: "Coffee remakes the Kodagu economy",
    era: "british",
    level: "documented",
    summary:
      "Colonial planters and Kodava landholders convert forest and shola margins to coffee, restructuring land, labour and trade.",
    sourceIds: ["richter-gazetteer", "rice-gazetteer", "imperial-gazetteer-coorg"],
    tags: ["british", "agriculture", "coffee"],
    route: "/agriculture",
  },
  {
    id: "cole-grammar",
    sort: 1867,
    date: "1867",
    title: "Cole's Elementary Grammar of the Coorg Language",
    era: "british",
    level: "colonial",
    summary:
      "R. A. Cole, Superintendent of Coorg, publishes the first formal grammar of Kodava Takk.",
    sourceIds: ["cole-1867"],
    tags: ["language", "documentation"],
    route: "/language",
  },
  {
    id: "appacha-kavi",
    sort: 1868,
    date: "1868 – c. 1930",
    title: "Haradasa Appachcha Kavi, first Kodava playwright",
    era: "british",
    level: "documented",
    summary:
      "Born in Kirundadu village, Virajpet taluk, Appachcha Kavi becomes the first dramatist to write in Kodava Takk.",
    detail: "Sources differ on his birth date: 13 or 21 September 1868.",
    sourceIds: ["appacha-kavi-wiki", "sahapedia-appacha"],
    tags: ["language", "literature"],
    route: "/literature",
  },
  {
    id: "pattole-palame-1924",
    sort: 1924,
    date: "1924",
    title: "Pattole Palame is published",
    era: "british",
    level: "documented",
    summary:
      "Nadikerianda Chinnappa's collection of Kodava folksongs, customs and lore appears in Kannada script — among the earliest extensive folklore collections in any Indian language.",
    sourceIds: ["pattole-palame", "pattole-palame-wiki"],
    tags: ["language", "folklore", "literature"],
    route: "/pattole-palame",
  },
  {
    id: "cariappa-thimayya",
    sort: 1947,
    date: "1947 – 1948",
    title: "Kodagu's soldiers in the new republic's first war",
    era: "modern",
    level: "documented",
    summary:
      "K. M. Cariappa commands Indian forces on the Western Front in the 1947–48 war; K. S. Thimayya commands in the same theatre.",
    sourceIds: ["cariappa-wiki", "thimayya-wiki", "bharat-rakshak-cariappa"],
    tags: ["military", "independence"],
    route: "/military",
  },
  {
    id: "coorg-part-c",
    sort: 1950,
    date: "26 January 1950",
    title: "Coorg becomes a Part C State",
    era: "modern",
    level: "documented",
    summary:
      "Under the Constitution of India, Coorg becomes a Part C State of the Union with its own legislature and Chief Minister.",
    sourceIds: ["constitution-1950", "poonacha-wiki", "hindu-kodagu-assembly"],
    tags: ["independence", "statehood"],
    route: "/independence",
  },
  {
    id: "cariappa-coas",
    sort: 1949,
    date: "15 January 1949",
    title: "Cariappa becomes Commander-in-Chief of the Indian Army",
    era: "modern",
    level: "documented",
    summary:
      "K. M. Cariappa takes over as the first Indian Commander-in-Chief, serving until 14 January 1953. He is later promoted Field Marshal.",
    sourceIds: ["cariappa-wiki", "bharat-rakshak-cariappa"],
    tags: ["military"],
    route: "/military",
  },
  {
    id: "poonacha-cm",
    sort: 1952,
    date: "1952 – 1956",
    title: "C. M. Poonacha, Chief Minister of Coorg State",
    era: "modern",
    level: "documented",
    summary:
      "Chepudira Muthanna Poonacha serves as the first and only Chief Minister of Coorg State, later becoming Union Railway Minister and a state Governor.",
    sourceIds: ["poonacha-wiki", "hindu-kodagu-assembly"],
    tags: ["independence", "statehood", "politics"],
    route: "/independence",
  },
  {
    id: "thimayya-coas",
    sort: 1957,
    date: "7 May 1957",
    title: "Thimayya becomes Chief of Army Staff",
    era: "modern",
    level: "documented",
    summary:
      "K. S. Thimayya, DSO, heads the Indian Army until 1961, after commanding the UN Neutral Nations Repatriation Commission in Korea.",
    detail:
      "Sources differ on whether he was the third or fourth Chief of Army Staff, depending on how the Commander-in-Chief era is counted.",
    sourceIds: ["thimayya-wiki", "bharat-rakshak-thimayya"],
    tags: ["military"],
    route: "/military",
  },
  {
    id: "sra-1956-merger",
    sort: 1956,
    date: "1 November 1956",
    title: "Coorg State merges into Mysore State",
    era: "modern",
    level: "documented",
    summary:
      "The States Reorganisation Act, 1956 dissolves Coorg State; the territory becomes Coorg (later Kodagu) district of Mysore State.",
    sourceIds: ["sra-1956", "hindu-reorganisation"],
    tags: ["statehood", "administration"],
    route: "/independence",
  },
  {
    id: "karnataka-1973",
    sort: 1973,
    date: "1 November 1973",
    title: "Mysore State is renamed Karnataka",
    era: "modern",
    level: "documented",
    summary:
      "Kodagu district becomes a district of Karnataka, its present administrative identity.",
    sourceIds: ["mysore-name-change-1973"],
    tags: ["administration"],
    route: "/independence",
  },
  {
    id: "kodava-endangered",
    sort: 2011,
    date: "2011 Census",
    title: "113,857 recorded speakers of Kodava",
    era: "modern",
    level: "documented",
    summary:
      "The 2011 Census of India records 113,857 Kodava speakers. The language is widely described as endangered.",
    sourceIds: ["census-language-2011", "kodava-language-wiki", "unesco-wal-kodava"],
    tags: ["language", "present"],
    route: "/language",
  },
];

export const timelineSorted = [...timeline].sort((a, b) => a.sort - b.sort);

export const allTags = Array.from(new Set(timeline.flatMap((e) => e.tags))).sort();

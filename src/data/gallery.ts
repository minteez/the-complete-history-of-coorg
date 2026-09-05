import hero from "@/assets/hero-kodagu-hills.jpg";
import fort from "@/assets/madikeri-fort.jpg";
import coffee from "@/assets/coffee-estate.jpg";
import megalith from "@/assets/megalith-dolmen.jpg";
import ainmane from "@/assets/ainmane.jpg";
import books from "@/assets/archive-books.jpg";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  credit: string;
  licence: string;
  note?: string;
}

export const gallery: GalleryItem[] = [
  {
    id: "hills",
    src: hero,
    alt: "Mist lying over forested ridges and valleys in the Western Ghats of Kodagu",
    title: "The highland country",
    caption:
      "Kodagu sits along the crest of the Western Ghats; its rainfall, forest and elevation shaped its farming, its isolation and its history.",
    credit: "Commissioned illustration for this project.",
    licence: "Created for this archive; free to reuse with attribution to this site.",
    note: "Illustrative image, not a historical photograph.",
  },
  {
    id: "fort",
    src: fort,
    alt: "Stone ramparts and gateway of a hill fort under a bright sky",
    title: "Madikeri and its fort",
    caption:
      "The Haleri capital's fort, rebuilt in stone by successive rulers and again under British administration.",
    credit: "Commissioned illustration for this project.",
    licence: "Created for this archive; free to reuse with attribution to this site.",
    note: "Illustrative image, not a depiction of a specific documented structure.",
  },
  {
    id: "megalith",
    src: megalith,
    alt: "A dolmen of upright stone slabs capped by a horizontal slab in grassland",
    title: "Megalithic burial monument",
    caption:
      "Dolmens and related stone monuments of the Iron Age are the oldest visible human structures in the district.",
    credit: "Commissioned illustration for this project.",
    licence: "Created for this archive; free to reuse with attribution to this site.",
    note: "Illustrative reconstruction, not a photograph of an excavated site.",
  },
  {
    id: "ainmane",
    src: ainmane,
    alt: "A large traditional courtyard house with tiled roofs and a wide verandah",
    title: "Ainmane, the ancestral house",
    caption:
      "The ainmane is the ritual and social centre of an okka — the patrilineal joint family — and the place where ancestors are remembered.",
    credit: "Commissioned illustration for this project.",
    licence: "Created for this archive; free to reuse with attribution to this site.",
    note: "Illustrative image, not a photograph of a named ainmane.",
  },
  {
    id: "coffee",
    src: coffee,
    alt: "Rows of coffee bushes growing in the shade of tall trees on a slope",
    title: "Shade-grown coffee",
    caption:
      "Coffee planting expanded rapidly under British rule from the 1850s and remains central to Kodagu's economy.",
    credit: "Commissioned illustration for this project.",
    licence: "Created for this archive; free to reuse with attribution to this site.",
    note: "Illustrative image, not a historical photograph.",
  },
  {
    id: "archive",
    src: books,
    alt: "Old books, manuscripts and loose papers stacked on a wooden desk",
    title: "The written record",
    caption:
      "Gazetteers, grammars, legislation, census tables and modern scholarship — the material this archive is built from.",
    credit: "Commissioned illustration for this project.",
    licence: "Created for this archive; free to reuse with attribution to this site.",
    note: "Illustrative image, not a photograph of a specific collection.",
  },
];

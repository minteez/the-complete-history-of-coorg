import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoPanel, PageHeader, Pullquote, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";

export const Route = createFileRoute("/language")({
  head: () => ({
    meta: [
      { title: "Kodava Takk — Coorg History Archive" },
      {
        name: "description",
        content:
          "Kodava Takk: South Dravidian classification, the scripts used to write it, speaker numbers from the 2011 Census, and how it has been documented since the 1860s.",
      },
      { property: "og:title", content: "Kodava Takk, the language of Kodagu" },
      {
        property: "og:description",
        content: "Classification, script, speaker numbers and documentation history.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LanguagePage,
});

function LanguagePage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Language"
        title="Kodava Takk"
        native="ಕೊಡವ ತಕ್ಕ್"
        lede="A Dravidian language of the South Dravidian group, spoken in Kodagu and by Kodava families elsewhere. It has a substantial oral literature, a comparatively short written history, and no single officially settled script."
      />

      <Section
        eyebrow="Classification"
        title="Where it sits among the Dravidian languages"
        level="documented"
        lede="Comparative linguists place Kodava Takk within South Dravidian, alongside Tamil, Malayalam, Kannada, Tulu and the smaller Nilgiri languages."
      >
        <div className="prose-archive space-y-4 text-muted-foreground">
          <p>
            Kodava Takk is not a dialect of Kannada, although long contact with Kannada — the
            language of administration, schooling and print in the region — has left heavy lexical
            borrowing. Descriptive work by M. B. Emeneau and later grammars and comparative studies
            treat it as a language in its own right, with its own phonology and verb morphology.
          </p>
          <p>
            Speakers of neighbouring communities in Kodagu use related varieties, and the boundary
            between "a dialect of Kodava Takk" and "a separate speech variety" is drawn differently
            by different scholars. Descriptions in this archive follow the standard comparative
            literature rather than any single community claim.
          </p>
          <SourceRefs
            ids={["krishnamurti-2003", "steever-1998", "emeneau-kodagu", "ebert-kodagu", "dedr"]}
          />
        </div>
      </Section>

      <Section
        eyebrow="Writing"
        title="Script, and why there is more than one"
        className="border-y border-border bg-secondary/40"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="Kannada script in practice" tone="forest">
            <p>
              Almost all printed Kodava Takk — including <cite>Pattole Palame</cite> — uses the
              Kannada script, the script of the surrounding administration and education system.
            </p>
          </InfoPanel>
          <InfoPanel title="Purpose-made alternatives" tone="caution">
            <p>
              Later twentieth-century efforts produced dedicated scripts, the best known being the
              Coorgi-Cox alphabet. Adoption has been limited, and claims about official status
              should be treated carefully.
            </p>
          </InfoPanel>
        </div>
        <SourceRefs ids={["kodava-language-wiki", "unesco-wal-kodava"]} className="mt-6" />
      </Section>

      <Section
        eyebrow="Speakers"
        title="How many people speak it"
        level="documented"
        lede="The 2011 Census of India remains the standard reference for speaker numbers, and it counts Kodava Takk in the low hundreds of thousands."
      >
        <div className="prose-archive space-y-4 text-muted-foreground">
          <p>
            Census language returns depend on what people declare, so the figure is best read as an
            order of magnitude rather than an exact count. Assessments of vitality generally describe
            the language as vulnerable: still transmitted in many households, but under pressure from
            Kannada and English in schooling, work and media.
          </p>
          <SourceRefs ids={["census-language-2011", "census-2011-kodagu", "unesco-wal-kodava"]} />
        </div>
        <Pullquote cite="Editorial note">
          A language with a strong oral tradition can look thin in print and still be very much
          alive in speech.
        </Pullquote>
      </Section>

      <Section eyebrow="Documentation" title="From the missionaries to the community">
        <div className="prose-archive space-y-4 text-muted-foreground">
          <p>
            The earliest descriptions come from nineteenth-century missionary and colonial work —
            Hermann Mögling's publications, Richard Cole's <cite>Elementary Grammar of the Coorg
            Language</cite> (1867) and the gazetteer accounts. These are useful records and also
            colonial ones: their framing of the community and the language reflects their authors.
          </p>
          <p>
            The decisive documentation of Kodava tradition came from within the community, with
            Nadikerianda Chinnappa's <cite>Pattole Palame</cite> in 1924.
          </p>
          <SourceRefs
            ids={["mogling-1855", "cole-1867", "graeter-1870", "richter-gazetteer", "pattole-palame"]}
          />
        </div>
        <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
          <li className="archive-card p-5">
            <Link to="/pattole-palame" className="font-semibold text-primary hover:underline">
              Pattole Palame
            </Link>
            <p className="mt-1 text-muted-foreground">The silken lore, compiled 1924.</p>
          </li>
          <li className="archive-card p-5">
            <Link to="/people" className="font-semibold text-primary hover:underline">
              The Kodava people
            </Link>
            <p className="mt-1 text-muted-foreground">Okka, ainmane and nad.</p>
          </li>
        </ul>
      </Section>
    </main>
  );
}

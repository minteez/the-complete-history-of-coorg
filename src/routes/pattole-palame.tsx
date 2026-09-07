import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoPanel, PageHeader, Pullquote, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";

export const Route = createFileRoute("/pattole-palame")({
  head: () => ({
    meta: [
      { title: "Pattole Palame (1924) — Coorg History Archive" },
      {
        name: "description",
        content:
          "Nadikerianda Chinnappa's Pattole Palame, published 1924: a compilation of Kodava songs, customs and ritual made from within the community, and how later editions and translations carried it forward.",
      },
      { property: "og:title", content: "Pattole Palame, the silken lore" },
      {
        property: "og:description",
        content: "The 1924 compilation of Kodava folk songs, customs and ritual.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PattolePalamePage,
});

function PattolePalamePage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Language"
        title="Pattole Palame"
        native="ಪಟ್ಟೋಲೆ ಪಳಮೆ"
        lede="Compiled by Nadikerianda Chinnappa and published in 1924, this is the single most important written record of Kodava oral tradition: songs, customs, proverbs and ritual, gathered from within the community rather than described from outside."
      />

      <Section
        eyebrow="The book"
        title="What it contains"
        level="documented"
        lede="Folk songs and ballads, accounts of life-cycle and festival ritual, proverbs and riddles, and notes on clan and household practice."
      >
        <div className="prose-archive space-y-4 text-muted-foreground">
          <p>
            Chinnappa collected material across Kodagu over years of work, writing it down in the
            Kannada script. The songs sit at the centre of the compilation: they are the form in
            which much Kodava history, genealogy and ritual instruction was actually carried, and
            many were sung to the beat of the dudi drum.
          </p>
          <p>
            Because the material was gathered from many okkas and villages, the book preserves
            variation rather than flattening it — one reason later writers on Kodava ritual keep
            returning to it.
          </p>
          <SourceRefs ids={["pattole-palame", "pattole-palame-wiki", "sahapedia-kodagu"]} />
        </div>
      </Section>

      <Section
        eyebrow="Reading it"
        title="A source, not a rulebook"
        className="border-y border-border bg-secondary/40"
        level="traditional"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="What it establishes" tone="forest">
            <p>
              That these songs, customs and ritual forms were current in Kodagu in the early
              twentieth century, recorded by a Kodava author with access to the practice.
            </p>
          </InfoPanel>
          <InfoPanel title="What it does not" tone="caution">
            <p>
              The narrative and genealogical content of folk songs is tradition, not verified
              history. Dates, migrations and origins recited in song are evidence of what was
              believed and told, and should not be read as documented fact.
            </p>
          </InfoPanel>
        </div>
        <Pullquote cite="Editorial note">
          The value of Pattole Palame is that it records what Kodavas said about themselves — which
          is a different question from what happened.
        </Pullquote>
      </Section>

      <Section eyebrow="Afterlife" title="Editions, translation and reception">
        <div className="prose-archive space-y-4 text-muted-foreground">
          <p>
            The work was reprinted in later editions and, decades afterwards, translated into
            English by Boverianda Nanjamma and Chinnappa — descendants of the compiler — which
            brought the material to readers outside Kodagu and outside Kannada. Chinnappa is
            remembered alongside Appacha Kavi as a founding figure of Kodava letters.
          </p>
          <SourceRefs
            ids={["boverianda-wiki", "pattole-palame-wiki", "sahapedia-appacha", "appacha-kavi-wiki"]}
          />
        </div>
        <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
          <li className="archive-card p-5">
            <Link to="/language" className="font-semibold text-primary hover:underline">
              Kodava Takk
            </Link>
            <p className="mt-1 text-muted-foreground">Classification, script and speakers.</p>
          </li>
          <li className="archive-card p-5">
            <Link to="/culture" className="font-semibold text-primary hover:underline">
              Sacred traditions
            </Link>
            <p className="mt-1 text-muted-foreground">Ancestors, Karana and kaimada.</p>
          </li>
        </ul>
      </Section>
    </main>
  );
}

import { documents } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { Download } from "lucide-react";

export const metadata = {
  title: "Téléchargements",
};

export default function DownloadsPage() {
  return (
    <div className="space-y-12 bg-night pb-24 pt-10">
      <section className="mx-auto max-w-5xl px-6 text-foreground">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Documents officiels
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-4xl font-heading">
            Plaquette, certifications, fiches société à télécharger.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, index) => (
            <Reveal delay={index * 0.05} key={doc.title}>
              <div className="glass-panel flex items-center justify-between p-6">
                <div>
                  <p className="text-xl font-heading text-foreground">{doc.title}</p>
                  <p className="text-muted-foreground">{doc.description}</p>
                </div>
                <Link
                  href={doc.file}
                  target="_blank"
                  className="rounded-full border border-border p-3 text-foreground transition hover:border-primary hover:text-primary"
                >
                  <Download />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}







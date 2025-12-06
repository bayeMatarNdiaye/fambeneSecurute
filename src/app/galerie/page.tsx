import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Galerie",
};

export default function GaleriePage() {
  return (
    <div className="space-y-12 bg-night pb-24 pt-10">
      <section className="mx-auto max-w-5xl px-6 text-white">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Réalisations
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-4xl font-heading">
            Agents en action, dispositifs techniques et interventions terrain.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <GalleryGrid />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass-panel overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/iYJgFM0_V0Y"
                title="Video surveillance FAMBENE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}


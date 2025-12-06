import { directorMessage, timeline, guarantees } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "À propos",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 bg-night pb-24 pt-10 text-white">
      <section className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            ADN & mission
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-4xl font-heading">
            FAMBENE SÉCURITÉ s’engage pour une protection humaine renforcée par
            la technologie.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-white/70">
            Créée par des experts issus de la sûreté aéroportuaire et de la
            cybersécurité, l’entreprise conçoit des dispositifs évolutifs pour
            les secteurs énergie, finance, infrastructures publiques et luxe.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-panel p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Mission
              </p>
              <p className="mt-3 text-lg text-white/80">
                Garantir la continuité d’activité de nos clients en neutralisant
                les menaces physiques, techniques et humaines.
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-primary">
                Valeurs
              </p>
              <ul className="mt-3 space-y-2 text-white/70">
                <li>• Exigence opérationnelle</li>
                <li>• Transparence & reporting</li>
                <li>• Approche humaine & inclusive</li>
                <li>• Innovation pragmatique</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-panel overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80"
                  alt="Directeur FAMBENE"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">
                  Mot du Directeur Général
                </p>
                <p className="mt-4 text-white/80">{directorMessage}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-3xl font-heading text-white">Historique</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {timeline.map((event, index) => (
            <Reveal delay={index * 0.05} key={event.year}>
              <div className="glass-panel p-5">
                <p className="text-primary">{event.year}</p>
                <p className="text-xl font-heading text-white">{event.title}</p>
                <p className="text-white/70">{event.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="text-2xl font-heading text-white">
                Plaquette commerciale
              </h3>
              <p className="mt-2 text-white/70">
                Présentation détaillée de nos pôles, certifications, références,
                procédures d’urgence et dispositifs mobiles.
              </p>
              <Button asChild className="mt-6">
                <Link href="/docs/plaquette.pdf" target="_blank">
                  Télécharger en PDF
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-panel p-6">
              <h4 className="text-xl font-heading text-white">Garanties</h4>
              <ul className="mt-4 space-y-2 text-white/70">
                {guarantees.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}





import Link from "next/link";
import { services, stats, guarantees, timeline, directorMessage } from "@/lib/data";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,33,33,0.35),_transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-32 lg:flex-row lg:items-center">
          <div className="space-y-6 lg:w-1/2">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
                Sécurité premium
                <span className="h-2 w-2 rounded-full bg-primary" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-heading font-bold leading-tight text-white lg:text-5xl">
                Gardiennage humain + technologies intelligentes pour vos sites
                stratégiques.
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-white/70">
                FAMBENE SÉCURITÉ déploie agents certifiés, télésurveillance 24/7,
                contrôle d’accès et réponse rapide pour les industriels, sièges
                corporate et événements sensibles à travers l’Afrique de l’Ouest.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/devis-express">Demander un devis</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">Voir nos services</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex items-center gap-6 text-sm text-white/60">
                <div>
                  <p className="text-3xl font-heading text-white">12+</p>
                  <p>Années de terrain</p>
                </div>
                <div>
                  <p className="text-3xl font-heading text-white">4 min</p>
                  <p>Temps moyen de réponse</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:w-1/2">
            <div className="glass-panel relative overflow-hidden p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                SOC 24/7
              </p>
              <p className="mt-3 text-2xl font-heading font-semibold text-white">
                Monitoring temps réel, rondes connectées, rapports live.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center text-white/70">
                <div>
                  <p className="text-3xl font-heading text-white">18</p>
                  <p className="text-xs uppercase">Opérateurs</p>
                </div>
                <div>
                  <p className="text-3xl font-heading text-white">2</p>
                  <p className="text-xs uppercase">Backups</p>
                </div>
                <div>
                  <p className="text-3xl font-heading text-white">ISO</p>
                  <p className="text-xs uppercase">18788</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-onyx">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Offres
              </p>
              <h2 className="red-underline inline-block text-3xl font-heading text-white">
                Services modulaires, activables en moins de 30 jours.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal delay={index * 0.05} key={service.title}>
                <div className="glass-panel group flex h-full flex-col gap-4 p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <service.icon className="h-10 w-10 text-primary transition duration-500 group-hover:scale-110" />
                  <h3 className="text-xl font-heading text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-night bg-grid">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary">
                  Garanties
                </p>
                <h2 className="mt-4 text-3xl font-heading text-white">
                  Engagements contractuels & indicateurs partagés.
                </h2>
                <ul className="mt-6 space-y-4 text-white/70">
                  {guarantees.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-panel p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">
                  Chiffres clés
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 p-4">
                      <p className="text-4xl font-heading text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="section-padding relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Parallax Watch
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-heading">
              Ronde digitale + levée de doute vidéo partout au Sénégal.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/80">
              Nos équipes mobiles disposent de tablettes sécurisées pour
              synchroniser rondes, photos, audio et rapports en temps réel.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Planifier une démonstration</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/galerie">Voir les équipes</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-night">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">
                  Mot du Directeur
                </p>
                <p className="text-lg text-white/80">{directorMessage}</p>
                <div className="rounded-3xl border border-white/10 p-6">
                  <p className="text-sm text-white/60">Historique</p>
                  <div className="mt-4 space-y-5">
                    {timeline.map((event) => (
                      <div key={event.year}>
                        <p className="text-primary">{event.year}</p>
                        <p className="text-white">{event.title}</p>
                        <p className="text-white/60">{event.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-2xl font-heading text-white">
                  Demande de devis sécurisé
                </h3>
                <p className="mt-2 text-white/70">
                  Recevez une proposition structurée avec planning, effectifs et
                  budget détaillé sous 48h.
                </p>
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

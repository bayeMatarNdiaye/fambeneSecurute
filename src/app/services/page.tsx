import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 bg-night pb-24 pt-10">
      <section className="mx-auto max-w-5xl px-6 text-foreground">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Catalogue
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-4xl font-heading">
            Solutions opérationnelles & digitales prêtes à déployer.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-muted-foreground">
            Chaque offre est packagée avec SLA, reporting et pilotes dédiés.
            Nous mixons agents terrain, technologies IoT et monitoring pour
            obtenir une couverture 360°.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal delay={index * 0.05} key={service.title}>
              <div className="glass-panel group h-full p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                <service.icon className="h-12 w-12 text-primary transition duration-500 group-hover:scale-110" />
                <h3 className="mt-4 text-2xl font-heading text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <Button className="mt-6" asChild>
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              <h2 className="text-3xl font-heading text-foreground">
                Méthodologie d’engagement
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>Audit flash (site, risques, procédures existantes)</li>
                <li>Design opérationnel + dimensionnement des équipes</li>
                <li>Onboarding agents & protocole d’intervention</li>
                <li>Rapports digitaux + KPI partagés chaque semaine</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm compact />
          </Reveal>
        </div>
      </section>
    </div>
  );
}


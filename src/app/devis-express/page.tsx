import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export const metadata = {
  title: "Devis express",
};

export default function DevisExpressPage() {
  return (
    <div className="space-y-12 bg-night pb-24 pt-10">
      <section className="mx-auto max-w-5xl px-6 text-white">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Devis express
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-4xl font-heading">
            Décrivez votre besoin, recevez un budget prévisionnel en 2 heures.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass-panel p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Ce que vous recevez
            </p>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>• Dimensionnement agents & équipements</li>
              <li>• Planning de déploiement</li>
              <li>• Budget HT détaillé</li>
              <li>• Options technologiques recommandées</li>
            </ul>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <div key={service.title} className="rounded-2xl border border-white/10 p-4">
                  <service.icon className="h-6 w-6 text-primary" />
                  <p className="text-white">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm variant="EXPRESS" compact />
        </Reveal>
      </section>
    </div>
  );
}





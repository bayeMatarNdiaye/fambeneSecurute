import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact",
};

const contacts = [
  {
    icon: Phone,
    label: "Support 24/7",
    value: "+221 77 393 68 64",
    href: "tel:+221773936864",
  },
  {
    icon: Mail,
    label: "Email général",
    value: "matarndiayelhadji@gmail.com",
    href: "mailto:matarndiayelhadji@gmail.com",
  },
  {
    icon: MapPin,
    label: "Siège",
    value: "3 Bis Yoff Thongor, Dakar BP: 1547 • Sénégal",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-12 bg-background pb-24 pt-10">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-heading text-foreground">
              Un chargé d’affaires répond sous 2 heures.
            </h1>
          </Reveal>
          <div className="mt-8 space-y-4">
            {contacts.map((item, index) => (
              <Reveal delay={index * 0.05} key={item.label}>
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-border p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8 flex-1">
            <div className="glass-panel h-full w-full overflow-hidden border border-white/10">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=14.759592256715369,-17.482804576677164&z=15&output=embed"
                title="Localisation Fambene Sécurité"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <LeadForm />
        </Reveal>
      </section>


    </div>
  );
}





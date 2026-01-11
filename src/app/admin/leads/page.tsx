import { AdminLeadsDashboard } from "@/components/admin/AdminLeadsDashboard";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Admin Leads",
};

export default function AdminLeadsPage() {
  return (
    <div className="space-y-8 bg-night pb-24 pt-10">
      <section className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-3xl font-heading text-white">
            CRM interne - Demandes clients
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/60">
            Authentification par clef partagée (paramètre ADMIN_DASHBOARD_KEY).
            Export CSV, suppression et suivi statut.
          </p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-6">
        <AdminLeadsDashboard />
      </section>
    </div>
  );
}







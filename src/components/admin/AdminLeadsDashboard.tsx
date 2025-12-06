"use client";

import { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

type Lead = {
  id: string;
  createdAt: string;
  fullName: string;
  company: string | null;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  type: "CONTACT" | "EXPRESS";
  status: "NEW" | "LU" | "ARCHIVE";
  hasAttachment: boolean;
};

const STATUSES: Lead["status"][] = ["NEW", "LU", "ARCHIVE"];

export function AdminLeadsDashboard() {
  const [key, setKey] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);

  // Lecture locale après hydratation uniquement.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    const stored = localStorage.getItem("fambene-admin-key");
    if (stored) {
      setKey(stored);
      setInputKey(stored);
    }
  }, []);

  const fetchLeads = useCallback(async () => {
    if (!key) return;
    setLoading(true);
    const response = await fetch("/api/leads", {
      headers: { "x-admin-key": key },
    });
    if (!response.ok) {
      toast.error("Clef invalide");
      setLoading(false);
      return;
    }
    const payload = await response.json();
    setLeads(payload.leads ?? []);
    setLoading(false);
  }, [key]);

  // Lancement auto après récupération de la clé (setState volontaire).
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleConnect = () => {
    setKey(inputKey);
    localStorage.setItem("fambene-admin-key", inputKey);
  };

  const updateStatus = async (id: string, status: Lead["status"]) => {
    const response = await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": key,
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      toast.error("Mise à jour impossible");
      return;
    }
    fetchLeads();
  };

  const deleteLead = async (id: string) => {
    const response = await fetch(`/api/leads/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": key },
    });
    if (!response.ok) {
      toast.error("Suppression impossible");
      return;
    }
    toast.success("Lead supprimé");
    fetchLeads();
  };

  const downloadAttachment = async (id: string) => {
    const response = await fetch(`/api/leads/${id}/attachment`, {
      headers: { "x-admin-key": key },
    });
    if (!response.ok) {
      toast.error("Aucune pièce jointe");
      return;
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "piece-jointe";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const exportCsv = async () => {
    const response = await fetch(`/api/leads/export?key=${key}`);
    if (!response.ok) {
      toast.error("Export impossible");
      return;
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "leads.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  if (!key) {
    return (
      <div className="glass-panel mx-auto mt-12 max-w-lg space-y-4 p-6">
        <h2 className="text-xl font-heading text-white">Connexion admin</h2>
        <input
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm"
          placeholder="Clef transmise par la direction"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
        />
        <Button onClick={handleConnect} className="w-full">
          Accéder au CRM
        </Button>
        <p className="text-xs text-white/40">
          Cette clef est stockée en local uniquement (localStorage).
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <Button onClick={fetchLeads} variant="outline">
          Rafraîchir
        </Button>
        <Button onClick={exportCsv} variant="outline">
          Export CSV
        </Button>
        <p className="text-sm text-white/60">
          {loading ? "Chargement..." : `${leads.length} leads`}
        </p>
      </div>

      <div className="grid gap-4">
        {leads.map((lead) => (
          <div key={lead.id} className="glass-panel p-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="font-heading text-lg text-white">
                  {lead.fullName}
                </p>
                <p className="text-sm text-white/60">
                  {lead.company ?? "—"} • {lead.email} • {lead.phone ?? "—"}
                </p>
              </div>
              <div className="text-right text-xs text-white/50">
                <p>{lead.type}</p>
                <p>
                  {format(new Date(lead.createdAt), "dd MMM yyyy HH:mm", {
                    locale: fr,
                  })}
                </p>
              </div>
            </div>

            <div className="py-4 text-white/80">
              <p className="text-sm text-white/60">{lead.subject}</p>
              <p className="mt-2 whitespace-pre-line text-base">{lead.message}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm"
                value={lead.status}
                onChange={(event) =>
                  updateStatus(lead.id, event.target.value as Lead["status"])
                }
              >
                {STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              {lead.hasAttachment && (
                <Button
                  variant="outline"
                  onClick={() => downloadAttachment(lead.id)}
                >
                  Télécharger PJ
                </Button>
              )}
              <Button variant="outline" onClick={() => deleteLead(lead.id)}>
                Supprimer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


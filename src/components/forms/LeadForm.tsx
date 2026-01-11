"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadPayload } from "@/lib/validators";
import { services, contactSubjects } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import { useEffect, useState } from "react";

type Props = {
  variant?: "CONTACT" | "EXPRESS";
  compact?: boolean;
};

const subjectOptions = contactSubjects;

export function LeadForm({ variant = "CONTACT", compact = false }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    control,
  } = useForm<LeadPayload>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      type: variant,
      subject:
        variant === "EXPRESS" ? services[0].title : subjectOptions[0],
    },
  });

  useEffect(() => {
    setValue(
      "subject",
      variant === "EXPRESS" ? services[0].title : subjectOptions[0],
    );
    setValue("type", variant);
  }, [setValue, variant]);

  const onSubmit = async (values: LeadPayload) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (!value) return;
      if (key === "attachment" && value instanceof File) {
        formData.append("attachment", value);
      } else {
        formData.append(key, value as string);
      }
    });

    const response = await fetch("/api/leads", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      toast.error("Impossible d'envoyer la demande");
      return;
    }

    toast.success("Demande envoyée avec succès");
    setFileName(null);
    setValue("attachment", undefined);
    reset({
      type: variant,
      subject: variant === "EXPRESS" ? services[0].title : subjectOptions[0],
    } as LeadPayload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel space-y-4 p-6"
    >
      <input type="hidden" value={variant} {...register("type")} />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-muted-foreground">Prénom & Nom *</label>
          <input
            className="mt-2 w-full rounded-2xl border border-border bg-onyx px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Ex : Aminata Ndiaye"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-primary">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Entreprise</label>
          <input
            className="mt-2 w-full rounded-2xl border border-border bg-onyx px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Nom de l'organisation"
            {...register("company")}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-muted-foreground">Email *</label>
          <input
            type="email"
            className="mt-2 w-full rounded-2xl border border-border bg-onyx px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="contact@entreprise.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-primary">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Téléphone *</label>
          <input
            inputMode="tel"
            className="mt-2 w-full rounded-2xl border border-border bg-onyx px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="+221 77 123 45 67"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-primary">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm text-muted-foreground">Objet *</label>
        {variant === "EXPRESS" ? (
          <select
            className="mt-2 w-full rounded-2xl border border-border bg-onyx px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
            {...register("subject")}
          >
            {services.slice(0, 5).map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        ) : (
          <select
            className="mt-2 w-full rounded-2xl border border-border bg-onyx px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
            {...register("subject")}
          >
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {errors.subject && (
          <p className="mt-1 text-xs text-primary">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-muted-foreground">Message *</label>
        <textarea
          rows={compact ? 4 : 6}
          className="mt-2 w-full rounded-2xl border border-border bg-onyx px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          placeholder="Décrivez votre besoin..."
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-primary">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">
          Pièce jointe (brief, cahier des charges)
        </label>
        <Controller
          control={control}
          name="attachment"
          render={({ field }) => (
            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-border bg-onyx px-4 py-3 text-sm text-muted-foreground">
              <input
                type="file"
                className="hidden"
                onBlur={field.onBlur}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setFileName(file ? file.name : null);
                  field.onChange(file);
                }}
              />
              <span>{fileName ?? "Glisser-déposer ou parcourir"}</span>
              <span className="text-xs text-muted-foreground/60">PDF • DOC • 5 Mo max</span>
            </label>
          )}
        />
        {errors.attachment && (
          <p className="mt-1 text-xs text-primary">
            {errors.attachment.message as string}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground/60">
          Vos données sont stockées de façon sécurisée (DB chiffrée + email).
        </p>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </Button>
      </div>
    </form>
  );
}


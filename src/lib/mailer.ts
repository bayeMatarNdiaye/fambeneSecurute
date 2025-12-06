import nodemailer from "nodemailer";
import type { Lead } from "@prisma/client";

export async function sendLeadEmail(lead: Lead) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    SMTP_SECURE,
    NOTIFY_EMAIL_FROM,
    NOTIFY_EMAIL_TO,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASSWORD ||
    !NOTIFY_EMAIL_FROM ||
    !NOTIFY_EMAIL_TO
  ) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: NOTIFY_EMAIL_FROM,
    to: NOTIFY_EMAIL_TO,
    subject: `[Lead ${lead.type}] ${lead.subject}`,
    html: `
      <h2>Nouvelle demande ${lead.type === "EXPRESS" ? "Devis express" : "Contact"}</h2>
      <p><strong>Nom</strong> : ${lead.fullName}</p>
      <p><strong>Entreprise</strong> : ${lead.company ?? "—"}</p>
      <p><strong>Email</strong> : ${lead.email}</p>
      <p><strong>Téléphone</strong> : ${lead.phone ?? "—"}</p>
      <p><strong>Message</strong> : ${lead.message}</p>
      <p><strong>Date</strong> : ${lead.createdAt.toLocaleString()}</p>
    `,
    attachments: lead.attachmentData
      ? [
          {
            filename: lead.attachmentName ?? "piece-jointe",
            content: Buffer.from(lead.attachmentData),
            contentType: lead.attachmentType ?? "application/octet-stream",
          },
        ]
      : undefined,
  });

  await transporter.sendMail({
    from: NOTIFY_EMAIL_FROM,
    to: lead.email,
    subject: "Nous avons bien reçu votre demande",
    html: `
      <p>Bonjour ${lead.fullName},</p>
      <p>Merci pour votre confiance. Notre équipe FAMBENE SÉCURITÉ revient vers vous très rapidement.</p>
      <p><strong>Objet :</strong> ${lead.subject}</p>
      <p>— L'équipe FAMBENE SÉCURITÉ</p>
    `,
  });
}


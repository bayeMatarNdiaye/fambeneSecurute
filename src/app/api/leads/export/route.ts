import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorizeRequest } from "@/lib/auth";

export async function GET(request: Request) {
  if (!authorizeRequest(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const rows = [
    [
      "Date",
      "Nom complet",
      "Entreprise",
      "Email",
      "Téléphone",
      "Objet",
      "Message",
      "Type",
      "Statut",
    ],
    ...leads.map((lead) => [
      lead.createdAt.toISOString(),
      `"${lead.fullName}"`,
      `"${lead.company ?? ""}"`,
      lead.email,
      lead.phone ?? "",
      `"${lead.subject}"`,
      `"${lead.message.replace(/"/g, '""')}"`,
      lead.type,
      lead.status,
    ]),
  ];

  const csv = rows.map((row) => row.join(";")).join("\n");

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=leads-${Date.now()}.csv`,
    },
  });
}





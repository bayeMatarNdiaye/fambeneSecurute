import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorizeRequest } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!authorizeRequest(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const lead = await prisma.lead.findUnique({
    where: { id: params.id },
  });

  if (!lead?.attachmentData) {
    return NextResponse.json({ error: "Aucune pièce jointe" }, { status: 404 });
  }

  return new NextResponse(Buffer.from(lead.attachmentData), {
    status: 200,
    headers: {
      "Content-Type": lead.attachmentType ?? "application/octet-stream",
      "Content-Disposition": `attachment; filename="${lead.attachmentName ?? "piece-jointe"}"`,
    },
  });
}







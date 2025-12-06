import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorizeRequest } from "@/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!authorizeRequest(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const { status } = body;

  if (!["NEW", "LU", "ARCHIVE"].includes(status)) {
    return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
  }

  const lead = await prisma.lead.update({
    where: { id: params.id },
    data: { status },
  });

  return NextResponse.json(lead);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!authorizeRequest(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  await prisma.lead.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}


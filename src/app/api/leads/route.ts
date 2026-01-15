import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validators";
import { sendLeadEmail } from "@/lib/mailer";
import { authorizeRequest } from "@/lib/auth";

export async function GET(request: Request) {
  if (!authorizeRequest(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      leads: leads.map((lead) => ({
        ...lead,
        attachmentData: undefined,
        hasAttachment: Boolean(lead.attachmentData),
      })),
    });
  } catch (error) {
    console.error("❌ Database error on GET /api/leads:", error);
    return NextResponse.json(
      { error: "Erreur de base de données" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    type: (formData.get("type")?.toString().toUpperCase() ?? "CONTACT") as
      | "CONTACT"
      | "EXPRESS",
    fullName: formData.get("fullName")?.toString() ?? "",
    company: formData.get("company")?.toString(),
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    subject: formData.get("subject")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    attachment: formData.get("attachment"),
  };

  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    console.error("❌ Validation failed:", parsed.error.flatten().fieldErrors);
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { attachment, ...rest } = parsed.data;
  let fileBuffer: Buffer | undefined = undefined;

  if (attachment && attachment.size > 0) {
    const arrayBuffer = await attachment.arrayBuffer();
    fileBuffer = Buffer.from(arrayBuffer);
  }

  try {
    const lead = await prisma.lead.create({
      data: {
        ...rest,
        type: rest.type,
        attachmentName: attachment?.name,
        attachmentType: attachment?.type,
        attachmentSize: attachment?.size,
        attachmentData: fileBuffer,
      },
    });

    console.log("✅ Lead created successfully:", lead.id);
    sendLeadEmail(lead).catch((err) => {
      console.error("⚠️ Email sending failed:", err);
    });

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("❌ Database error on POST /api/leads:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement" },
      { status: 500 },
    );
  }
}


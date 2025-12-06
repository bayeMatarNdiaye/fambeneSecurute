"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const fallbackNumber = "+221000000000";

export function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackNumber;
  const url = `https://wa.me/${number.replace(/\D/g, "")}`;

  return (
    <Link
      href={url}
      aria-label="Discuter sur WhatsApp"
      target="_blank"
      className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-600/60 transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}





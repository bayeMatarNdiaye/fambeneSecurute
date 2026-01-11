import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-10 text-sm text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-white">FAMBENE SÉCURITÉ</p>
          <p className="text-white/60">
            Protection globale - Gardiennage - Technologies
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Link href="tel:+221773936864" className="hover:text-white transition-colors">
            +221 77 393 68 64
          </Link>
          <Link href="mailto:matarndiayelhadji@gmail.com" className="hover:text-white transition-colors">
            matarndiayelhadji@gmail.com
          </Link>
        </div>
        <p className="text-white/40">
          © {new Date().getFullYear()} FAMBENE SÉCURITÉ. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}




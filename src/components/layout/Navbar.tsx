"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/galerie", label: "Galerie" },
  { href: "/telechargements", label: "Documents" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-heading font-semibold text-foreground">
          FAMBENE SÉCURITÉ<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-muted-foreground transition hover:text-foreground",
                pathname === link.href && "text-foreground",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 block h-0.5 w-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild className="shadow-glow">
            <Link href="/devis-express">Devis express</Link>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Ouvrir la navigation"
        >
          {open ? <X className="text-foreground" /> : <Menu className="text-foreground" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-night/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-base text-white/80",
                  pathname === link.href && "text-white font-semibold",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full" onClick={() => setOpen(false)} asChild>
              <Link href="/devis-express">Devis express</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}





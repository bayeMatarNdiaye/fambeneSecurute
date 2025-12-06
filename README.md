## FAMBENE SÉCURITÉ – Stack web

Site vitrine + CRM léger pour les demandes de devis des clients.

### Pile technique

- Next.js 16 (App Router) + React 19
- Tailwind CSS 3.4 + animations Framer Motion
- Prisma + SQLite (dev) / PostgreSQL (prod conseillé)
- API routes sécurisées (clé admin)
- Nodemailer (alertes email)

### Démarrage

```bash
npm install

# générer Prisma + base locale
$env:DATABASE_URL="file:./prisma/dev.db"
npx prisma generate
npx prisma db push

npm run dev
```

Le site tourne sur http://localhost:3000.

### Variables d’environnement

Créer un fichier `.env.local` en vous inspirant des clés ci-dessous :

```
DATABASE_URL="file:./prisma/dev.db"
ADMIN_DASHBOARD_KEY="change-me"
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASSWORD=""
SMTP_SECURE="true"
NOTIFY_EMAIL_FROM=""
NOTIFY_EMAIL_TO=""
NEXT_PUBLIC_WHATSAPP_NUMBER="+221770000000"
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=""
NEXT_PUBLIC_HOTJAR_ID=""
```

### Fonctionnalités livrées

- Navigation complète : Accueil, Services, À propos, Galerie, Documents, Contact, Devis express.
- Formulaire avancé (PJ, stockage Prisma, email, toasts) + version express.
- CRM admin `/admin/leads` : authentification par clé, mise à jour statut, suppression, téléchargement PJ, export CSV.
- Assets téléchargeables (`public/docs/*`), galerie responsive, bouton WhatsApp sticky, animations reveal.
- Scripts Analytics / Hotjar optionnels, bouton thème clair/sombre.

### Tests / Qualité

- `npm run lint` pour ESLint
- Prisma type-safe, Tailwind purgé

### Déploiement

1. Basculer `DATABASE_URL` sur PostgreSQL.
2. `npx prisma migrate deploy`
3. Déployer (Vercel/Render) en exposant les variables ci-dessus.

### Aller plus loin

- Brancher un SMTP réel (Sendinblue, Mailersend…).
- Remplacer les PDF placeholders dans `public/docs`.
- Ajouter authentification forte (NextAuth, Clerk…) pour l’admin si nécessaire.

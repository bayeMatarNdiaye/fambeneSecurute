import {
  AlarmClock,
  Flame,
  Headphones,
  LucideIcon,
  MonitorSmartphone,
  ScanLine,
  Shield,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Gardiennage & Sécurité physique",
    description:
      "Agents formés, plans de ronde intelligents et dispositifs dissuasifs pour sécuriser vos sites sensibles en continu.",
    icon: Shield,
  },
  {
    title: "Vidéo-surveillance intelligente",
    description:
      "Déploiement caméra 4K, enregistrement cloud chiffré et analyse d'anomalies assistée par IA.",
    icon: MonitorSmartphone,
  },
  {
    title: "Télésurveillance 24/7",
    description:
      "Monitoring en temps réel, levée de doute vidéo et déclenchement des forces d’intervention en quelques secondes.",
    icon: AlarmClock,
  },
  {
    title: "Contrôle d’accès",
    description:
      "Badges biométriques, gestion visiteurs et auditorat complet des accès critiques.",
    icon: ScanLine,
  },
  {
    title: "Sécurité incendie & prévention",
    description:
      "Équipes SSIAP, plans d’évacuation, maintenance extincteurs et exercices de crise accompagnés.",
    icon: Flame,
  },
  {
    title: "Opérations événementielles",
    description:
      "Cellules mobiles pour salons, concerts ou visites officielles avec coordination radio sécurisée.",
    icon: Headphones,
  },
];

export const stats = [
  { label: "Agents certifiés", value: "250+" },
  { label: "Sites protégés", value: "180" },
  { label: "Temps de réponse moyen", value: "4 min" },
  { label: "Clients satisfaits", value: "98%" },
];

export const guarantees = [
  "Protocoles alignés sur les référentiels ISO 18788 & APSAD",
  "Supervision SOC 24/7 avec double redondance énergétique",
  "Agents contrôlés (badge, contrôle anti-dopage, casier)",
  "Assurance responsabilité civile professionnelle incluse",
  "Audits qualité trimestriels partagés avec le client",
];

export const galleryItems = [
  {
    title: "Brigade mobile",
    category: "Intervention",
    image:
      "/images/gallery/brigade-mobile.png",
  },
  {
    title: "Poste de contrôle",
    category: "Monitoring",
    image:
      "/images/gallery/poste-controle.jpg",
  },
  {
    title: "Protection événementielle",
    category: "Événementiel",
    image:
      "/images/gallery/protection-evenementielle.jpg",
  },
  {
    title: "Maintenance technique",
    category: "Support",
    image:
      "/images/gallery/maintenance-technique.png",
  },
  {
    title: "Centre de télésurveillance",
    category: "SOC",
    image:
      "/images/gallery/centre-telesurveillance.png",
  },
  {
    title: "Agents cynophiles",
    category: "Gardiennage",
    image:
      "/images/gallery/agents-cynophiles.jpg",
  },
];

export const documents = [
  {
    title: "Plaquette commerciale",
    description: "Vision stratégique, offres et références clés FAMBENE SÉCURITÉ.",
    file: "/docs/plaquette.pdf",
  },
  {
    title: "Certifications & agréments",
    description: "Document officiel attestant des licences et assurances en vigueur.",
    file: "/docs/certifications.pdf",
  },
  {
    title: "Fiche entreprise",
    description: "Données administratives, RIB, contacts cellule achats.",
    file: "/docs/fiche-entreprise.pdf",
  },
];

export const timeline = [
  {
    year: "2012",
    title: "Création & premières équipes",
    content:
      "Déploiement des premiers agents sur des sites industriels et collectivités locales.",
  },
  {
    year: "2017",
    title: "Lancement SOC 24/7",
    content:
      "Mise en service de notre centre de télésurveillance et adoption d'outils de supervision temps réel.",
  },
  {
    year: "2021",
    title: "Digitalisation CRM",
    content:
      "Automatisation des rapports de ronde, portail client et intégration d'API partenaires.",
  },
  {
    year: "2024",
    title: "Extension Afrique de l’Ouest",
    content:
      "Nouvelles bases logistiques pour accompagner nos clients dans 6 pays supplémentaires.",
  },
];

export const directorMessage =
  "Notre ambition est simple : sécuriser vos actifs critiques avec une exigence opérationnelle et humaine irréprochable. Nous combinons intelligence terrain, technologie et reporting transparent pour devenir votre partenaire sécurité à long terme.";

export const contactSubjects = [
  "Demande de devis complet",
  "Audit de sécurité",
  "Renfort agents temporaires",
  "Installation vidéo-surveillance",
  "Autre besoin",
];


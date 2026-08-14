import { publicAsset } from "@/lib/publicAsset";

export type ExperiencePartner = {
  id: string;
  name: string;
  logo: string;
  fit?: "square" | "standard" | "wide";
  assetKind?: "official" | "name-mark" | "initials";
};

export const experiencePartners: ExperiencePartner[] = [
  {
    id: "iocl",
    name: "Indian Oil Corporation",
    logo: publicAsset("/images/experience/iocl.png"),
    fit: "square",
    assetKind: "official",
  },
  {
    id: "eil",
    name: "Engineers India Limited",
    logo: publicAsset("/images/experience/eil.png"),
    fit: "square",
    assetKind: "official",
  },
  {
    id: "mecon",
    name: "MECON Limited",
    logo: publicAsset("/images/experience/mecon.png"),
    fit: "standard",
    assetKind: "official",
  },
  {
    id: "iggl",
    name: "Indradhanush Gas Grid Limited",
    logo: publicAsset("/images/experience/iggl.webp"),
    fit: "square",
    assetKind: "official",
  },
  {
    id: "meil",
    name: "MEIL — Megha Engineering & Infrastructures Ltd.",
    logo: publicAsset("/images/experience/meil.png"),
    fit: "wide",
    assetKind: "official",
  },
  {
    id: "hppcl",
    name: "Himachal Pradesh Power Corporation Limited",
    logo: publicAsset("/images/experience/hppcl-wordmark.svg"),
    fit: "wide",
    assetKind: "name-mark",
  },
  {
    id: "gaurs-group",
    name: "Gaurs Group",
    logo: publicAsset("/images/experience/gaurs-group.png"),
    fit: "wide",
    assetKind: "official",
  },
  {
    id: "apex-builders",
    name: "Apex Builders",
    logo: publicAsset("/images/experience/apex-builders-monogram.svg"),
    fit: "wide",
    assetKind: "initials",
  },
  {
    id: "tarun-art-gallery",
    name: "Tarun Art Gallery",
    logo: publicAsset("/images/experience/tarun-art-gallery.jpg"),
    fit: "square",
    assetKind: "official",
  },
  {
    id: "mcd",
    name: "Municipal Corporation of Delhi",
    logo: publicAsset("/images/experience/mcd.webp"),
    fit: "square",
    assetKind: "official",
  },
  {
    id: "kautilya-infratech",
    name: "Kautilya Infratech",
    logo: publicAsset("/images/experience/kautilya-infratech-monogram.svg"),
    fit: "wide",
    assetKind: "initials",
  },
  {
    id: "prestige-group",
    name: "Prestige Group",
    logo: publicAsset("/images/experience/prestige-group.webp"),
    fit: "square",
    assetKind: "official",
  },
  {
    id: "teron-engineering",
    name: "Teron Engineering",
    logo: publicAsset("/images/experience/teron-engineering.png"),
    fit: "wide",
    assetKind: "official",
  },
];

export const experienceSectionHeading =
  "Professional Exposure Across Diverse Projects and Organisations";

export const experienceSectionDescription =
  "Organisations and project environments associated with our professional exposure.";

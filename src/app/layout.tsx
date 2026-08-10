import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Casa Renders | Interior Design & Structural Engineering",
    template: "%s | Casa Renders",
  },
  description:
    "Casa Renders brings interior design, visualisation, project coordination and structural-engineering support together for residential, commercial and hospitality spaces.",
  metadataBase: new URL("https://www.casarenders.com"),
  openGraph: {
    title: "Casa Renders | Interiors · Structures · Visualisation",
    description:
      "Beautifully considered spaces, grounded in structural clarity.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b7d6e1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

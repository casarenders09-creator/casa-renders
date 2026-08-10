"use client";

import { useEffect, useState } from "react";
import { siteConfig, getWhatsAppHref } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const [hidden, setHidden] = useState(false);
  const href = getWhatsAppHref(
    siteConfig.contact.whatsapp,
    "Hello Casa Renders, I would like to discuss an interior design or structural engineering project.",
  );

  useEffect(() => {
    const targets = ["offers", "quote"]
      .map((id) => document.getElementById(id))
      .filter((item): item is HTMLElement => Boolean(item));
    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (footer) targets.push(footer);

    const visibility = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
        setHidden(Array.from(visibility.values()).some(Boolean));
      },
      { threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("whatsapp-fab", hidden && "is-hidden")}
      aria-label="Chat with Casa Renders on WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <WhatsAppIcon />
      <span>Chat</span>
    </a>
  );
}

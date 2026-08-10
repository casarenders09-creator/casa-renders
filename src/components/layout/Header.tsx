"use client";

import { useEffect, useState } from "react";
import { navigationItems, primaryNavigationItems } from "@/content/navigation";
import { cn, scrollToSection } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sections = primaryNavigationItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((item): item is HTMLElement => Boolean(item));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: [0.05, 0.2, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <Logo />

          <nav className="desktop-navigation" aria-label="Primary navigation">
            {primaryNavigationItems.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => navigate(item.href)}
                className={cn("desktop-navigation__link", activeSection === item.href && "is-active")}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="site-header__actions">
            <Button
              href="#quote"
              size="sm"
              onClick={(event) => {
                event.preventDefault();
                navigate("#quote");
              }}
            >
              Get an estimate
            </Button>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn("mobile-navigation-backdrop", mobileOpen && "is-open")}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <aside id="mobile-navigation" className={cn("mobile-navigation", mobileOpen && "is-open")} aria-hidden={!mobileOpen}>
        <div className="mobile-navigation__top">
          <Logo />
          <button type="button" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigationItems.map((item, index) => (
            <button key={item.href} type="button" onClick={() => navigate(item.href)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
              <b aria-hidden="true">↗</b>
            </button>
          ))}
        </nav>
        <Button
          href="#quote"
          size="lg"
          className="mobile-navigation__cta"
          onClick={(event) => {
            event.preventDefault();
            navigate("#quote");
          }}
        >
          Start your project
        </Button>
      </aside>
    </>
  );
}

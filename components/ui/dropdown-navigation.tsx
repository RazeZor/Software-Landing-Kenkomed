'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine as ChevronDown, RiArrowRightLine as ArrowRight } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type NavSubItem = {
  label: string;
  description?: string;
  icon?: React.ElementType;
  href?: string;
  badge?: string;
};

export type NavItem = {
  id: number;
  label: string;
  columns?: 1 | 2;
  footerLink?: {
    label: string;
    href: string;
  };
  subMenus?: {
    title?: string;
    items: NavSubItem[];
  }[];
  link?: string;
};

type Props = {
  navItems: NavItem[];
};

export function DropdownNavigation({ navItems }: Props) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);
  const containerRef = useRef<HTMLUListElement>(null);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  // Cerrar con Escape o clic fuera (accesibilidad teclado y tablets)
  useEffect(() => {
    if (!openMenu) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openMenu]);

  const isRouteActive = (href?: string) => {
    if (!href) return false;
    const baseHref = href.split("#")[0];
    if (!baseHref || baseHref === "/") return pathname === "/";
    return pathname === baseHref || pathname.startsWith(`${baseHref}/`);
  };

  const isNavItemActive = (item: NavItem) => {
    if (item.link) return isRouteActive(item.link);
    return item.subMenus?.some((sub) => sub.items.some((s) => isRouteActive(s.href))) ?? false;
  };

  return (
    <ul ref={containerRef} className="relative flex items-center gap-0.5">
      {navItems.map((navItem) => {
        const active = isNavItemActive(navItem);
        const isOpen = openMenu === navItem.label;
        const isTwoCol = navItem.columns === 2;

        return (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => setOpenMenu(navItem.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            {navItem.link ? (
              <Link
                href={navItem.link}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex cursor-pointer items-center justify-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand",
                  active
                    ? "font-semibold text-brand"
                    : "text-foreground/80 hover:text-foreground"
                )}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {active && (
                  <span
                    className="relative z-10 h-1.5 w-1.5 rounded-full bg-emerald"
                    aria-hidden="true"
                  />
                )}
                {isHover === navItem.id && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full rounded-lg bg-foreground/[0.045]"
                  />
                )}
              </Link>
            ) : (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setOpenMenu(isOpen ? null : navItem.label)}
                className={cn(
                  "group relative flex cursor-pointer items-center justify-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand",
                  active || isOpen
                    ? "font-semibold text-brand"
                    : "text-foreground/80 hover:text-foreground"
                )}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "relative z-10 h-4 w-4 text-foreground-muted transition-transform duration-200",
                      isOpen ? "rotate-180 text-brand" : ""
                    )}
                  />
                )}
                {(isHover === navItem.id || isOpen) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full rounded-lg bg-foreground/[0.045]"
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {isOpen && navItem.subMenus && (
                <div className="absolute left-1/2 top-full z-[100] w-auto -translate-x-1/2 pt-2.5">
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-border/90 bg-card shadow-[0_24px_60px_-20px_rgba(10,35,64,0.22)]"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                  >
                    <div className="p-3.5 sm:p-4">
                      {navItem.subMenus.map((sub, idx) => (
                        <div
                          key={sub.title || idx}
                          className={cn(
                            isTwoCol ? "w-[540px] max-w-[88vw]" : "w-[310px]"
                          )}
                        >
                          {sub.title && (
                            <p className="mb-2.5 px-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                              {sub.title}
                            </p>
                          )}
                          <ul
                            className={cn(
                              isTwoCol ? "grid grid-cols-2 gap-1" : "space-y-1"
                            )}
                          >
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              const subActive = isRouteActive(item.href);

                              return (
                                <li key={item.label}>
                                  <Link
                                    href={item.href || "#"}
                                    onClick={() => setOpenMenu(null)}
                                    className={cn(
                                      "group flex items-start gap-3 rounded-xl p-2.5 transition-colors duration-150",
                                      subActive
                                        ? "bg-brand/[0.06]"
                                        : "hover:bg-slate-50"
                                    )}
                                  >
                                    {Icon && (
                                      <div
                                        className={cn(
                                          "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors",
                                          subActive
                                            ? "border-brand/25 bg-brand/10 text-brand"
                                            : "border-border/70 bg-surface text-brand group-hover:border-brand/25 group-hover:bg-brand/10"
                                        )}
                                      >
                                        <Icon size={16} aria-hidden="true" />
                                      </div>
                                    )}
                                    <div className="min-w-0 flex-1 leading-tight">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-brand">
                                          {item.label}
                                        </span>
                                        {item.badge && (
                                          <span className="rounded-full bg-emerald/15 px-2 py-0.5 text-[10px] font-bold text-emerald-dark">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="mt-1 text-xs leading-snug text-foreground-muted">
                                          {item.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {navItem.footerLink && (
                      <div className="border-t border-border/70 bg-surface/80 px-4 py-2.5">
                        <Link
                          href={navItem.footerLink.href}
                          onClick={() => setOpenMenu(null)}
                          className="inline-flex w-full items-center justify-between text-xs font-bold text-brand hover:underline"
                        >
                          <span>{navItem.footerLink.label}</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

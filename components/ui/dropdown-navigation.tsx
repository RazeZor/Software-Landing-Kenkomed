'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine as ChevronDown } from "react-icons/ri";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type NavItem = {
  id: number;
  label: string;
  subMenus?: {
    title?: string;
    items: {
      label: string;
      description?: string;
      icon?: React.ElementType;
      href?: string;
    }[];
  }[];
  link?: string;
};

type Props = {
  navItems: NavItem[];
};

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  return (
    <ul className="relative flex items-center space-x-1">
      {navItems.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => handleHover(navItem.label)}
          onMouseLeave={() => handleHover(null)}
        >
          {navItem.link ? (
            <Link
              href={navItem.link}
              className="text-sm py-2 px-3.5 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-foreground/80 hover:text-foreground relative"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span className="relative z-10 font-medium">{navItem.label}</span>
              {(isHover === navItem.id) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-foreground/5"
                  style={{ borderRadius: 8 }}
                />
              )}
            </Link>
          ) : (
            <button
              className="text-sm py-2 px-3.5 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1.5 text-foreground/80 hover:text-foreground relative"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span className="relative z-10 font-medium">{navItem.label}</span>
              {navItem.subMenus && (
                <ChevronDown
                  className={cn(
                    "relative z-10 h-4 w-4 text-foreground-muted group-hover:rotate-180 duration-300 transition-transform",
                    openMenu === navItem.label ? "rotate-180 text-foreground" : ""
                  )}
                />
              )}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-foreground/5"
                  style={{ borderRadius: 8 }}
                />
              )}
            </button>
          )}

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="w-auto absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[100]">
                <motion.div
                  className="bg-card border border-border shadow-lg overflow-hidden"
                  style={{ borderRadius: 16 }}
                  layoutId="menu"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="flex p-5 gap-6 w-max">
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout className="min-w-[240px]" key={sub.title || 'sub'}>
                        {sub.title && (
                          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-foreground-muted ml-2">
                            {sub.title}
                          </h3>
                        )}
                        <ul className="space-y-1">
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <Link
                                  href={item.href || "#"}
                                  className="flex items-start space-x-3 group p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200"
                                >
                                  {Icon && (
                                    <div className="mt-0.5 text-foreground group-hover:text-brand transition-colors duration-200">
                                      <Icon size={18} />
                                    </div>
                                  )}
                                  <div className="leading-tight flex-1">
                                    <p className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors duration-200">
                                      {item.label}
                                    </p>
                                    {item.description && (
                                      <p className="text-xs text-foreground-muted mt-1 leading-snug">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Cpu, Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "Tentang" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#organization", label: "Organisasi" },
  { href: "#projects", label: "Proyek" },
  { href: "#skills", label: "Keahlian" },
  { href: "#education", label: "Pendidikan" },
  { href: "#awards", label: "Penghargaan" },
  { href: "#contact", label: "Kontak" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

interface NavbarProps {
  name: string;
  cvUrl: string;
}

export function Navbar({ name, cvUrl }: NavbarProps) {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const map = new Map<string, number>();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => map.set(e.target.id, e.intersectionRatio));
        let best = "about";
        let bestRatio = -1;
        map.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = id; }
        });
        setActive(best);
      },
      { threshold: [0, 0.1, 0.25, 0.5] }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div className="flex items-center justify-between gap-4 rounded-full border border-[var(--border)] bg-[var(--panel)]/80 px-5 py-3 backdrop-blur-xl shadow-xl shadow-black/30">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Cpu className="w-5 h-5 text-[var(--accent)]" />
            <span className="text-sm font-semibold font-[var(--font-sora)] text-[var(--text-primary)] hidden sm:block truncate max-w-[160px]">
              {name.split(" ").slice(0, 2).join(" ")}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 relative">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href.slice(1))}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--accent)]/12 border border-[var(--accent)]/25"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cvUrl}
              download
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-[var(--accent)] text-white hover:brightness-110 transition-all"
            >
              <Download className="w-3.5 h-3.5" /> CV
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--page-bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold font-[var(--font-sora)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={cvUrl}
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              <Download className="w-4 h-4" /> Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

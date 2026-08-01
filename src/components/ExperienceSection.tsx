"use client";
import { motion, useInView } from "framer-motion";
import { Briefcase, Images } from "lucide-react";
import { useRef } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  documentation: string[];
}

interface Props {
  items: ExperienceItem[];
  onOpenGallery: (photos: string[]) => void;
}

function ExpCard({ exp, idx, onOpenGallery }: { exp: ExperienceItem; idx: number; onOpenGallery: (p: string[]) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: idx * 0.12 }}
      className="relative pl-10 md:pl-14"
    >
      {/* Timeline dot */}
      <div className="absolute left-2 md:left-3 top-2 w-4 h-4 rounded-full bg-[var(--panel-elevated)] border-2 border-[var(--accent)] ring-4 ring-[var(--page-bg)] z-10" />

      <motion.div
        whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(5,8,14,0.35)" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="control-card rounded-2xl p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold font-[var(--font-sora)] text-[var(--text-primary)]">{exp.role}</h3>
          <span className="text-xs font-semibold font-[var(--font-jetbrains-mono)] text-[var(--accent)] bg-[var(--accent)]/8 px-2.5 py-1 rounded-md whitespace-nowrap">
            {exp.period}
          </span>
        </div>
        <p className="text-sm font-semibold text-[var(--text-subtle)] mb-0.5">{exp.company}</p>
        <p className="text-xs font-[var(--font-jetbrains-mono)] text-[var(--text-muted)] mb-4">{exp.location}</p>

        <ul className="space-y-2 mb-6">
          {exp.description.map((item, i) => (
            <li key={i} className="text-sm text-[var(--text-subtle)] flex items-start gap-2">
              <span className="text-[var(--accent)] mt-1 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {exp.documentation.length > 0 && (
          <div className="border-t border-[var(--border)] pt-4 flex justify-end">
            <button
              onClick={() => onOpenGallery(exp.documentation)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/8 text-[var(--accent)] text-xs font-semibold hover:bg-[var(--accent)]/15 transition-colors"
            >
              <Images className="w-4 h-4" />
              <span>{exp.documentation.length} Foto Dokumentasi</span>
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function ExperienceSection({ items, onOpenGallery }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-14"
        >
          <div className="p-2 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">
            <Briefcase className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <p className="kicker text-xs text-[var(--accent)] mb-0.5">01</p>
            <h2 className="text-2xl font-bold font-[var(--font-sora)] text-[var(--text-primary)]">Pengalaman Kerja</h2>
          </div>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:left-3 md:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--accent)]/40 before:via-[var(--border)] before:to-transparent">
          {items.map((exp, idx) => (
            <ExpCard key={idx} exp={exp} idx={idx} onOpenGallery={onOpenGallery} />
          ))}
        </div>
      </div>
    </section>
  );
}

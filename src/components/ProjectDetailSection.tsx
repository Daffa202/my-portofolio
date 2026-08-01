"use client";
import { motion, useInView } from "framer-motion";
import { FolderGit2, Images } from "lucide-react";
import { useRef } from "react";

interface Project {
  slug: string;
  title: string;
  description: string;
  detail: string[];
  tags: string[];
  imageGradient: string;
  documentation: string[];
}

interface Props {
  projects: Project[];
  onOpenGallery: (photos: string[]) => void;
}

function ProjectDetailCard({ proj, idx, onOpenGallery }: { proj: Project; idx: number; onOpenGallery: (p: string[]) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const hasDocs = proj.documentation.length > 0;

  return (
    <motion.article
      ref={ref}
      id={`project-${proj.slug}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className="scroll-mt-28 control-card rounded-2xl p-6 lg:p-8"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[var(--border)]">
        <span className="text-3xl font-bold font-[var(--font-jetbrains-mono)] text-[var(--border)] leading-none select-none">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <p className="kicker text-[10px] text-[var(--accent)] mb-1">Project Documentation</p>
          <h3 className="text-xl font-bold font-[var(--font-sora)] text-[var(--text-primary)] leading-snug">{proj.title}</h3>
        </div>
        <div className="flex flex-wrap gap-1.5 max-w-[160px] justify-end">
          {proj.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-semibold border border-[var(--accent)]/30 bg-[var(--accent)]/8 text-[var(--accent)]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6 items-start">
        <div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{proj.description}</p>
          <ul className="space-y-3 mb-6">
            {proj.detail.map((item, i) => (
              <li key={i} className="text-sm text-[var(--text-subtle)] flex items-start gap-2">
                <span className="text-[var(--accent)] shrink-0 mt-0.5">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {proj.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-[var(--panel-elevated)] border border-[var(--border)] text-xs font-medium text-[var(--text-muted)]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image / fallback */}
        {hasDocs ? (
          <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-black">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={proj.documentation[0]} alt={proj.title} className="w-full h-full object-contain p-2" />
            </div>
            {proj.documentation.length > 1 && (
              <div className="p-3 border-t border-[var(--border)] bg-[var(--panel)]/60">
                <button
                  onClick={() => onOpenGallery(proj.documentation)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                >
                  <Images className="w-3.5 h-3.5" /> Lihat semua {proj.documentation.length} foto
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className={`rounded-xl border border-[var(--border)] bg-gradient-to-br ${proj.imageGradient} p-5 min-h-[180px] flex flex-col justify-between`}>
            <span className="inline-flex text-[10px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 bg-white/10 px-2.5 py-1 rounded-full">Overview</span>
            <div>
              <p className="text-lg font-bold text-white mb-1">Automation Focus</p>
              <p className="text-xs text-white/75 leading-relaxed">Sistem yang dirancang untuk meningkatkan efisiensi proses, dokumentasi teknik, dan stabilitas operasional.</p>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectDetailSection({ projects, onOpenGallery }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="project-detail" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-14"
        >
          <div className="p-2 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">
            <FolderGit2 className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <p className="kicker text-xs text-[var(--accent)] mb-0.5">04</p>
            <h2 className="text-2xl font-bold font-[var(--font-sora)] text-[var(--text-primary)]">Detail Proyek</h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((proj, idx) => (
            <ProjectDetailCard key={proj.slug} proj={proj} idx={idx} onOpenGallery={onOpenGallery} />
          ))}
        </div>
      </div>
    </section>
  );
}

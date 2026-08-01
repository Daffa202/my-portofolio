"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FolderGit2, Images } from "lucide-react";
import { useRef, useState } from "react";

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

// Collect all unique tags across projects
function getAllTags(projects: Project[]) {
  const set = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return ["All", ...Array.from(set)];
}

function ProjectCard({ proj, idx, onOpenGallery }: { proj: Project; idx: number; onOpenGallery: (p: string[]) => void }) {
  const hasThumbnail = proj.documentation.length > 0;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: idx * 0.05 }}
      className="group control-card rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Thumbnail / gradient area */}
      <div className="relative overflow-hidden aspect-video">
        {hasThumbnail ? (
          <>
            <img
              src={proj.documentation[0]}
              alt={proj.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${proj.imageGradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
            <FolderGit2 className="w-12 h-12 text-white/30" />
          </div>
        )}
        {/* Tag overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex flex-wrap gap-1">
            {proj.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/60 text-white backdrop-blur-sm">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold font-[var(--font-sora)] text-[var(--text-primary)] mb-2 leading-snug line-clamp-3">{proj.title}</h3>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 flex-1 line-clamp-3">{proj.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--panel-elevated)] border border-[var(--border)] text-[10px] font-medium text-[var(--text-muted)]">{tag}</span>
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-3 flex items-center justify-between">
          <a href={`#project-${proj.slug}`} className="text-[11px] font-semibold text-[var(--accent)] hover:underline">
            Detail Proyek →
          </a>
          {proj.documentation.length > 0 && (
            <button
              onClick={() => onOpenGallery(proj.documentation)}
              className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <Images className="w-3.5 h-3.5" /> {proj.documentation.length}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection({ projects, onOpenGallery }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const allTags = getAllTags(projects);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 border-t border-[var(--border)] bg-[var(--panel)]/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-10"
        >
          <div className="p-2 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">
            <FolderGit2 className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <p className="kicker text-xs text-[var(--accent)] mb-0.5">03</p>
            <h2 className="text-2xl font-bold font-[var(--font-sora)] text-[var(--text-primary)]">Proyek Pilihan</h2>
          </div>
        </motion.div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeFilter === tag
                  ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, idx) => (
              <ProjectCard key={proj.slug} proj={proj} idx={idx} onOpenGallery={onOpenGallery} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

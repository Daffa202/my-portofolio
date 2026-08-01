"use client";
import { motion, useInView } from "framer-motion";
import { Code2 } from "lucide-react";
import { useRef } from "react";

interface SkillGroup {
  category: string;
  items: string[];
}

// High-confidence skills (used in real projects/work)
const HIGH_LEVEL_SKILLS = new Set([
  "PLC Programming", "Sensor Calibration", "Industrial Automation", "Control Systems",
  "Electrical Drawings", "Wiring Diagrams", "Node-RED", "IoT Integration",
  "System Integration", "Data Monitoring", "Process Automation",
  "Technical Documentation", "Root Cause Analysis", "Team Collaboration",
]);

function SkillCard({ group, idx }: { group: SkillGroup; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="control-card rounded-2xl p-6"
    >
      <h3 className="text-sm font-bold font-[var(--font-sora)] text-[var(--text-primary)] mb-5 pb-3 border-b border-[var(--border)]">
        {group.category}
      </h3>
      <div className="space-y-3">
        {group.items.map((skill, sIdx) => {
          const level = HIGH_LEVEL_SKILLS.has(skill) ? 5 : 4;
          return (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + sIdx * 0.05 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-[var(--text-subtle)]">{skill}</span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, d) => (
                    <motion.span
                      key={d}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + sIdx * 0.04 + d * 0.05 }}
                      className={`w-2 h-2 rounded-full ${d < level ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="h-1 rounded-full bg-[var(--border)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(level / 5) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 + sIdx * 0.04, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[#f5b97a]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function SkillsSection({ skillGroups }: { skillGroups: SkillGroup[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-14"
        >
          <div className="p-2 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">
            <Code2 className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <p className="kicker text-xs text-[var(--accent)] mb-0.5">05</p>
            <h2 className="text-2xl font-bold font-[var(--font-sora)] text-[var(--text-primary)]">Keahlian &amp; Stack Teknologi</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <SkillCard key={idx} group={group} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

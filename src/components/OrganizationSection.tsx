"use client";
import { motion, useInView } from "framer-motion";
import { Users } from "lucide-react";
import { useRef } from "react";

interface OrgItem {
  role: string;
  company: string;
  period: string;
  organization: string;
  description: string[];
}

export function OrganizationSection({ items }: { items: OrgItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="organization" className="py-24 border-t border-[var(--border)] bg-[var(--panel)]/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-14"
        >
          <div className="p-2 rounded-lg bg-[var(--secondary)]/10 border border-[var(--secondary)]/20">
            <Users className="w-5 h-5 text-[var(--secondary)]" />
          </div>
          <div>
            <p className="kicker text-xs text-[var(--secondary)] mb-0.5">02</p>
            <h2 className="text-2xl font-bold font-[var(--font-sora)] text-[var(--text-primary)]">Pengalaman Organisasi</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((org, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(5,8,14,0.3)" }}
              className="control-card rounded-2xl p-6 flex flex-col"
            >
              <div className="mb-4">
                <p className="kicker text-[10px] text-[var(--secondary)] mb-2">{org.period}</p>
                <h3 className="text-base font-bold font-[var(--font-sora)] text-[var(--text-primary)]">{org.role}</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">{org.organization}</p>
              </div>
              <p className="text-xs font-semibold text-[var(--accent)] mb-4 border-t border-[var(--border)] pt-3">{org.company}</p>
              <ul className="space-y-2 mt-auto">
                {org.description.map((item, i) => (
                  <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                    <span className="text-[var(--secondary)] mt-0.5 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

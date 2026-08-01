"use client";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, Send, Mail, Phone, Globe, BriefcaseBusiness } from "lucide-react";
import { useRef } from "react";

interface Education { degree: string; institution: string; period: string; details: string; }
interface Props {
  education: Education[];
  certifications: string[];
  awards: string[];
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  name: string;
}

function SectionHeader({ icon, num, title }: { icon: React.ReactNode; num: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="flex items-center gap-3 mb-14"
    >
      <div className="p-2 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">{icon}</div>
      <div>
        <p className="kicker text-xs text-[var(--accent)] mb-0.5">{num}</p>
        <h2 className="text-2xl font-bold font-[var(--font-sora)] text-[var(--text-primary)]">{title}</h2>
      </div>
    </motion.div>
  );
}

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="py-24 border-t border-[var(--border)] bg-[var(--panel)]/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<GraduationCap className="w-5 h-5 text-[var(--accent)]" />} num="06" title="Pendidikan" />
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="control-card rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold font-[var(--font-sora)] text-[var(--text-primary)]">{edu.degree}</h3>
                <span className="text-xs font-semibold font-[var(--font-jetbrains-mono)] text-[var(--accent)] bg-[var(--accent)]/8 px-2.5 py-1 rounded-md whitespace-nowrap">{edu.period}</span>
              </div>
              <p className="text-sm font-semibold text-[var(--text-subtle)] mb-2">{edu.institution}</p>
              <p className="text-sm text-[var(--text-muted)]">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AwardsSection({ certifications, awards }: { certifications: string[]; awards: string[] }) {
  return (
    <section id="awards" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={<Award className="w-5 h-5 text-[var(--accent)]" />} num="07" title="Sertifikasi &amp; Penghargaan" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: "Sertifikasi", items: certifications },
            { label: "Penghargaan", items: awards },
          ].map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
              className="control-card rounded-2xl p-6"
            >
              <h3 className="text-sm font-bold font-[var(--font-sora)] text-[var(--text-primary)] mb-5 pb-3 border-b border-[var(--border)]">{group.label}</h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="text-sm text-[var(--text-subtle)] flex items-start gap-2">
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
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

export function ContactSection({ email, phone, linkedin, location, name }: Pick<Props, "email" | "phone" | "linkedin" | "location" | "name">) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="contact" className="py-24 border-t border-[var(--border)] bg-[var(--panel)]/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="kicker text-xs text-[var(--accent)] mb-4">08</p>
          <h2 className="text-3xl font-bold font-[var(--font-sora)] text-[var(--text-primary)] mb-4">Mari Berdiskusi &amp; Berkolaborasi</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto text-sm">
            Saya siap berkontribusi untuk posisi Automation Engineer, IoT Engineer, maupun Controls Engineer.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href={`mailto:${email}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] hover:brightness-110 text-white font-bold text-sm transition-all shadow-lg shadow-[var(--accent)]/25">
              <Send className="w-4 h-4" /> Kirim Email Langsung
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)]/40 transition-all">
              <BriefcaseBusiness className="w-4 h-4 text-[var(--accent)]" /> LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[var(--accent)]" />{phone}</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[var(--accent)]" />{email}</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[var(--accent)]" />{location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer({ name }: { name: string }) {
  return (
    <footer className="py-8 border-t border-[var(--border)] text-center text-xs text-[var(--text-muted)] font-[var(--font-jetbrains-mono)]">
      <p>© {new Date().getFullYear()} {name}. Built with Next.js &amp; Tailwind CSS.</p>
    </footer>
  );
}

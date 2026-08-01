"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronRight, Download, Globe, Mail, Phone } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  photo: StaticImageData | string;
  name: string;
  tagline: string;
  bio: string;
  phone: string;
  email: string;
  location: string;
  cvUrl: string;
  github: string;
  linkedin: string;
  projectCount: number;
}

function useCountUp(target: number, duration = 1.4, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return count;
}

function MetricChip({ label, value, suffix = "", delay = 0 }: { label: string; value: number | string; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isNum = typeof value === "number";
  const count = useCountUp(isNum ? value : 0, 1.2, inView && isNum);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center px-5 py-3 rounded-2xl border border-[var(--border)] bg-[var(--panel)] min-w-[90px]"
    >
      <span className="text-2xl font-bold font-[var(--font-jetbrains-mono)] text-[var(--accent)]">
        {isNum ? count : value}{suffix}
      </span>
      <span className="text-[10px] text-[var(--text-muted)] mt-0.5 text-center leading-tight">{label}</span>
    </motion.div>
  );
}

// Minimal SVG circuit ambient background
function CircuitBg() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M10 10 L30 10 L30 30" stroke="#edeff2" strokeWidth="0.6" fill="none" />
          <circle cx="30" cy="30" r="2" fill="#edeff2" />
          <path d="M50 10 L70 10 L70 50 L50 50" stroke="#edeff2" strokeWidth="0.6" fill="none" />
          <circle cx="50" cy="50" r="2" fill="#edeff2" />
          <path d="M10 60 L40 60 L40 70" stroke="#edeff2" strokeWidth="0.6" fill="none" />
          <circle cx="40" cy="70" r="2" fill="#edeff2" />
          <path d="M60 40 L60 70 L70 70" stroke="#edeff2" strokeWidth="0.6" fill="none" />
          <circle cx="60" cy="40" r="1.5" fill="#edeff2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

export function HeroSection({ photo, name, tagline, bio, phone, email, location, cvUrl, projectCount }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <CircuitBg />
      {/* subtle teal glow */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[var(--secondary)]/5 blur-[120px] pointer-events-none" />

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Open to opportunities badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/8 text-[var(--secondary)] text-xs font-semibold tracking-wider uppercase mb-6 font-[var(--font-jetbrains-mono)]">
              <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
              Open to Opportunities
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-[var(--font-sora)] leading-tight text-[var(--text-primary)] mb-4">
              Halo, Saya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#f5b97a]">
                {name.split(" ").slice(0, 3).join(" ")}
              </span>
            </h1>

            <p className="text-lg font-medium text-[var(--text-subtle)] mb-3">{tagline}</p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8">{bio}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] hover:brightness-110 text-white font-semibold text-sm transition-all shadow-lg shadow-[var(--accent)]/20">
                Lihat Proyek <ChevronRight className="w-4 h-4" />
              </a>
              <a href={cvUrl} download className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)]/40 transition-all">
                <Download className="w-4 h-4 text-[var(--accent)]" /> Download CV
              </a>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-2 text-sm mb-8">
              {[
                { icon: <Phone className="w-3.5 h-3.5" />, label: phone, href: `tel:${phone}` },
                { icon: <Mail className="w-3.5 h-3.5" />, label: email, href: `mailto:${email}` },
                { icon: <Globe className="w-3.5 h-3.5" />, label: location, href: undefined },
              ].map((c) => (
                <div key={c.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)] text-xs">
                  <span className="text-[var(--accent)]">{c.icon}</span>
                  {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
                </div>
              ))}
            </div>

            {/* Metric chips */}
            <div className="flex flex-wrap gap-3">
              <MetricChip label="Proyek Selesai" value={projectCount} delay={0.1} />
              <MetricChip label="IPK" value={3.48} suffix="" delay={0.2} />
              <div className="flex flex-col items-center px-5 py-3 rounded-2xl border border-[var(--border)] bg-[var(--panel)] min-w-[90px]">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                  <span className="text-xs font-semibold font-[var(--font-jetbrains-mono)] text-[var(--secondary)]">Available</span>
                </motion.div>
                <span className="text-[10px] text-[var(--text-muted)] mt-0.5 text-center">Status Kerja</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Photo with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
            style={{ y: photoY }}
          >
            <div className="relative w-full max-w-[320px]">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[36px] border border-[var(--accent)]/15 pointer-events-none" />
              <div className="absolute -inset-8 rounded-[44px] border border-[var(--accent)]/6 pointer-events-none" />
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[28px] overflow-hidden border border-[var(--border)] shadow-2xl shadow-black/40 bg-[var(--panel)]"
              >
                <Image
                  src={photo}
                  alt="Foto formal Muhammad Daffa Aditya Saputra"
                  width={320}
                  height={440}
                  className="object-cover object-center"
                  style={{ width: "100%", height: "440px" }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

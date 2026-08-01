"use client";

import React, { useState } from "react";
import formalPhoto from "../../fotoformal.jpeg";

// ─── Components ──────────────────────────────────────────────────────────────
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { OrganizationSection } from "@/components/OrganizationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectDetailSection } from "@/components/ProjectDetailSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection, AwardsSection, ContactSection, Footer } from "@/components/BottomSections";
import { GalleryModal } from "@/components/GalleryModal";

// ─── Data ─────────────────────────────────────────────────────────────────────
const PORTFOLIO_DATA = {
  personal: {
    name: "MUHAMMAD DAFFA ADITYA SAPUTRA",
    title: "Automation Engineering Student",
    tagline: "Automation Engineering student with hands-on experience in PLC programming, sensor calibration, and industrial automation projects.",
    bio: "Automation Engineering student with hands-on experience in PLC programming, sensor calibration, and industrial automation projects. Skilled in system integration, electrical documentation, and troubleshooting control systems to improve efficiency and reliability.",
    location: "Surabaya, Indonesia",
    phone: "0857-5806-7147",
    email: "muhammaddaffa158@gmail.com",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/adityadaff22",
    cvUrl: "/files/Muhammad Daffa Aditya Saputra-resume.pdf",
  },
  experience: [
    {
      role: "Internship",
      company: "PT Bernofarm Pharmaceutical Company",
      location: "Sidoarjo, Indonesia",
      period: "Agustus – Desember 2025",
      description: [
        "Merancang dan mengembangkan proyek berbasis IoT dan PLC dengan Node-RED untuk monitoring data, integrasi sistem, dan aplikasi otomasi proses.",
        "Membuat dan memperbarui gambar elektrikal, wiring diagram, serta control schematic untuk memastikan dokumentasi proyek dan implementasi yang akurat.",
        "Berkolaborasi dengan tim engineering dan maintenance untuk menganalisis akar masalah (root cause analysis) dan menerapkan solusi teknis yang efektif.",
        "Melakukan pemrograman PLC dan modifikasi sistem kontrol untuk mendukung proyek otomasi dan meningkatkan keandalan proses manufaktur.",
      ],
      documentation: [
        "/images/magang/magang-1.jpg",
        "/images/magang/magang-2.jpg",
        "/images/magang/magang-3.jpg",
        "/images/magang/magang-4.jpg",
        "/images/magang/magang-5.jpg",
        "/images/magang/magang-6.jpg",
        "/images/magang/magang-7.jpg",
        "/images/magang/magang-8.jpeg",
        "/images/magang/magang-9.jpeg",
        "/images/magang/magang-10.jpeg",
      ],
    },
    {
      role: "Part Time",
      company: "Robot Education",
      location: "Surabaya, Indonesia",
      period: "Desember 2025 – Maret 2026",
      description: [
        "Memprogram robotika dan IoT untuk siswa TK–SMA sebagai bentuk pembelajaran teknologi berbasis praktik.",
        "Membimbing siswa dalam perancangan robotika dan proyek IoT, mulai dari ide, perakitan, hingga pengujian sistem.",
        "Menyusun materi pembelajaran dan tugas praktik untuk meningkatkan pemahaman siswa terhadap otomatisasi, sensor, dan sistem terintegrasi.",
      ],
      documentation: [
        "/images/pengajar/pengajar-1.jpeg",
        "/images/pengajar/pengajar-2.jpeg",
        "/images/pengajar/pengajar-3.jpeg",
        "/images/pengajar/pengajar-4.jpeg",
        "/images/pengajar/pengajar-5.jpeg",
      ],
    },
  ],
  organizations: [
    {
      role: "Staf Ahli",
      company: "Kementerian Administrasi dan Sekretariat",
      period: "2024",
      organization: "BEM PPNS",
      description: [
        "Mengelola dokumen administratif, korespondensi, dan arsip organisasi agar informasi tersampaikan secara rapi dan efisien.",
        "Mendukung penyusunan agenda rapat, notulen, serta kebutuhan administrasi internal organisasi.",
      ],
    },
    {
      role: "Ketua Divisi Mekanik",
      company: "Marine Robotic Community",
      period: "2024",
      organization: "UKM Marine Robotic Community",
      description: [
        "Memimpin divisi mekanik dalam perancangan, perakitan, dan pengujian komponen robot untuk menjaga performa sistem.",
        "Mengembangkan mekanisme robot serta melakukan evaluasi performa agar sistem lebih stabil dan siap digunakan dalam kompetisi.",
      ],
    },
    {
      role: "Staf Divisi Acara",
      company: "Automation Week 6",
      period: "2024",
      organization: "Automation Week 6",
      description: [
        "Mendukung perencanaan dan koordinasi kegiatan acara agar berjalan lancar dan sesuai timeline.",
        "Berperan dalam komunikasi antar divisi serta asistensi pelaksanaan kegiatan teknis dan non-teknis.",
      ],
    },
  ],
  projects: [
    {
      slug: "periodiq-health-chair",
      title: "PERIODIQ: Health Chair with Menstrual Therapy as internet-based Menstrual Pain and Stress Management of Medical Things and Artificial Intellegence (2024)",
      description: "A smart therapy chair designed to relieve menstrual pain and stress using heat therapy, integrated with the Internet of Medical Things (IoMT).",
      detail: [
        "Smart therapy chair designed to relieve menstrual pain and stress through heat therapy as the primary treatment mechanism.",
        "Integrated with the Internet of Medical Things (IoMT) to support connected health monitoring and better user experience.",
        "Combines therapeutic functionality with medical technology concepts and artificial intelligence-based support for modern menstrual pain management.",
      ],
      tags: ["IoMT", "AI", "Menstrual Therapy", "Health Chair", "Medical Thing"],
      imageGradient: "from-blue-600 to-cyan-900",
      documentation: ["/images/projects/periodiq-health-chair-1.png"],
    },
    {
      slug: "air-quality-hepa-iot",
      title: "Air Quality & Temperature Monitoring System with HEPA Filter-Based IoT",
      description: "Developed an IoT-based air quality and room temperature monitoring system integrated with a HEPA filtration unit to support healthier indoor environments.",
      detail: [
        "The system monitors indoor air quality and temperature in real time to help maintain a healthier environment.",
        "A HEPA filtration unit is integrated to improve air purification and reduce airborne contaminants in the monitored room.",
        "This project demonstrates IoT-based environmental monitoring for practical indoor health support and smart room management.",
      ],
      tags: ["IoT", "HEPA", "Air Quality", "Temperature Monitoring", "Smart Environment"],
      imageGradient: "from-emerald-600 to-teal-900",
      documentation: [
        "/images/projects/air-quality-hepa-iot-1.jpeg",
        "/images/projects/air-quality-hepa-iot-2.jpeg",
      ],
    },
    {
      slug: "line-follower-robot",
      title: "Line Follower Robot Project",
      description: "Designed and assembled a line follower robot with autonomous path-tracking capabilities by integrating sensors, actuators, and microcontroller programming to achieve accurate line detection and real-time motion control.",
      detail: [
        "The robot was designed to autonomously follow a path by detecting a line using sensors and processing the input in real time.",
        "Actuators and microcontroller programming were integrated to produce smooth, accurate, and responsive motion control.",
        "This project emphasizes autonomous navigation, embedded system coordination, and practical robotics design skills.",
      ],
      tags: ["Robotics", "Microcontroller", "Automation", "Sensors", "Motion Control"],
      imageGradient: "from-purple-600 to-indigo-900",
      documentation: ["/images/projects/line-follower-robot-1.jpeg"],
    },
    {
      slug: "electronic-component-classification-arm-robot",
      title: "Klasifikasi Komponen Elektronik dengan Robot Arm & Vision Camera",
      description: "Sistem robot arm berbasis vision camera yang mengklasifikasikan dan menyortir komponen elektronik (resistor, relay, crystal, kapasitor) secara otomatis menggunakan deteksi objek YOLOv5.",
      detail: [
        "Robot arm menggunakan 4 unit servo AX-12 sebagai penggerak utama lengan dan servo MG90S sebagai aktuator capit (gripper) untuk mengambil komponen.",
        "Kamera diposisikan tepat di atas area peletakan komponen dan menjalankan model deteksi objek YOLOv5 untuk mengklasifikasikan jenis komponen elektronik yang diletakkan di bawahnya.",
        "Sistem menyediakan 4 slot penempatan berdasarkan hasil klasifikasi: slot A untuk resistor, slot B untuk relay, slot C untuk crystal, dan slot D untuk kapasitor.",
        "Begitu kamera mendeteksi jenis komponen (misalnya relay), robot arm otomatis bergerak, mencapit komponen tersebut, lalu meletakkannya secara presisi di slot yang sesuai (slot B untuk relay).",
        "Proyek ini mengintegrasikan computer vision, kontrol servo multi-aksis, dan logika sorting otomatis dalam satu sistem robotik end-to-end.",
      ],
      tags: ["Robot Arm", "Computer Vision", "YOLOv5", "Servo AX-12", "Object Sorting", "Automation"],
      imageGradient: "from-orange-600 to-amber-900",
      documentation: ["/images/projects/electronic-component-classification-arm-robot-1.jpeg"],
    },
    {
      slug: "krsri-sar-robot",
      title: "Robot KRSRI (Kontes Robot SAR Indonesia)",
      description: "Perancangan dan perakitan robot SAR (Search and Rescue) untuk kompetisi Kontes Robot SAR Indonesia (KRSRI) di bawah naungan Kemendikbudristek/Diktiristek, periode 2023–2024.",
      detail: [
        "Berpartisipasi dalam perancangan dan assembly robot SAR untuk kompetisi tingkat nasional Kontes Robot SAR Indonesia (KRSRI).",
        "Terlibat dalam proses desain mekanik, perakitan komponen fisik robot, hingga persiapan robot untuk mengikuti kompetisi pada periode 2023–2024.",
        "Proyek ini melatih kemampuan kerja tim dalam pengembangan robot kompetisi mulai dari tahap desain hingga robot siap bertanding.",
      ],
      tags: ["Robotics Competition", "Mechanical Design", "Assembly", "Search and Rescue", "KRSRI"],
      imageGradient: "from-red-600 to-rose-900",
      documentation: ["/images/projects/krsri-sar-robot-1.png"],
    },
    {
      slug: "coffeemaker-bean-ripeness-detection",
      title: "Coffeemaker: Deteksi Kematangan Biji Kopi Berbasis Klasifikasi Warna",
      description: "Berkontribusi dalam desain sistem dan pemrograman untuk mendeteksi tingkat kematangan biji kopi secara otomatis berdasarkan klasifikasi warna.",
      detail: [
        "Berkontribusi dalam pembuatan desain sistem dan pemrograman untuk proyek coffeemaker otomatis.",
        "Mengembangkan program deteksi tingkat kematangan biji kopi berdasarkan analisis dan klasifikasi warna biji kopi.",
        "Sistem ini bertujuan membantu proses seleksi biji kopi secara lebih konsisten dan efisien dibanding penyortiran manual.",
      ],
      tags: ["Color Classification", "Image Processing", "Automation", "Coffee Processing"],
      imageGradient: "from-yellow-700 to-amber-950",
      documentation: ["/images/projects/coffeemaker-bean-ripeness-detection-1.png"],
    },
    {
      slug: "hull-inspection-rov",
      title: "Desain Hull Inspection Robot (ROV)",
      description: "Perancangan desain robot ROV (Remotely Operated Vehicle) untuk inspeksi cacat las pada lambung kapal.",
      detail: [
        "Bertanggung jawab dalam pembuatan desain robot ROV yang difungsikan untuk inspeksi lambung kapal.",
        "Robot dirancang untuk mendeteksi cacat hasil pengelasan (weld defect) pada permukaan lambung kapal.",
        "Proyek ini berfokus pada aspek desain mekanik robot bawah air untuk mendukung proses inspeksi maritim yang lebih aman dan efisien.",
      ],
      tags: ["ROV", "Mechanical Design", "Hull Inspection", "Weld Defect Detection", "Marine Robotics"],
      imageGradient: "from-sky-700 to-blue-950",
      documentation: ["/images/projects/hull-inspection-rov-1.png"],
    },
    {
      slug: "scada-boiler-miniature",
      title: "Miniatur SCADA Sistem Boiler",
      description: "Perancangan desain SCADA untuk sistem boiler yang dapat dikontrol secara otomatis maupun manual.",
      detail: [
        "Merancang desain sistem SCADA (Supervisory Control and Data Acquisition) untuk memonitor dan mengontrol miniatur sistem boiler.",
        "Sistem mendukung dua mode operasi: kontrol otomatis dan kontrol manual, sesuai kebutuhan operasional.",
        "Proyek ini menggabungkan desain antarmuka monitoring (HMI/SCADA) dengan logika kontrol proses industri skala kecil.",
      ],
      tags: ["SCADA", "Boiler System", "Process Control", "HMI", "Automation"],
      imageGradient: "from-teal-700 to-cyan-950",
      documentation: ["/images/projects/scada-boiler-miniature-1.png"],
    },
  ],
  skills: [
    {
      category: "Automation & PLC",
      items: ["PLC Programming", "Sensor Calibration", "Industrial Automation", "Control Systems", "Electrical Drawings", "Wiring Diagrams"],
    },
    {
      category: "IoT & Monitoring",
      items: ["Node-RED", "IoT Integration", "System Integration", "Data Monitoring", "Process Automation", "Control Troubleshooting"],
    },
    {
      category: "Documentation & Support",
      items: ["Technical Documentation", "Root Cause Analysis", "Communication", "Team Collaboration", "Maintenance Support", "Operational Efficiency"],
    },
  ],
  education: [
    {
      degree: "Applied Bachelor Degree Automation Engineering",
      institution: "Politeknik Perkapalan Negeri Surabaya",
      period: "2022 – Present",
      details: "IPK: 3.48/4.00. Fokus pada sistem kontrol industri, otomatisasi, dan dokumentasi teknis proses.",
    },
  ],
  certifications: ["TOEIC (skor 595)", "Junior Administrative Assistant"],
  awards: [
    "Juara 2 ENSIGHT Scientific Writing Competition – UPN Veteran Jawa Timur (2023)",
    "Juara 2 Science Project – Sekolah Vokasi UGM (2023)",
    "Juara 3 ICT Business Development – Sekolah Vokasi UGM (2024)",
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (gallery: string[]) => { setActiveGallery(gallery); setActiveIndex(0); };
  const closeGallery = () => { setActiveGallery(null); setActiveIndex(0); };
  const goToPrevious = () => { if (!activeGallery) return; setActiveIndex((p) => (p - 1 + activeGallery.length) % activeGallery.length); };
  const goToNext = () => { if (!activeGallery) return; setActiveIndex((p) => (p + 1) % activeGallery.length); };

  const { personal, experience, organizations, projects, skills, education, certifications, awards } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] antialiased">
      <ScrollProgress />
      <Navbar name={personal.name} cvUrl={personal.cvUrl} />

      <main>
        <HeroSection
          photo={formalPhoto}
          name={personal.name}
          tagline={personal.tagline}
          bio={personal.bio}
          phone={personal.phone}
          email={personal.email}
          location={personal.location}
          cvUrl={personal.cvUrl}
          github={personal.github}
          linkedin={personal.linkedin}
          projectCount={projects.length}
        />
        <ExperienceSection items={experience} onOpenGallery={openGallery} />
        <OrganizationSection items={organizations} />
        <ProjectsSection projects={projects} onOpenGallery={openGallery} />
        <ProjectDetailSection projects={projects} onOpenGallery={openGallery} />
        <SkillsSection skillGroups={skills} />
        <EducationSection education={education} />
        <AwardsSection certifications={certifications} awards={awards} />
        <ContactSection
          email={personal.email}
          phone={personal.phone}
          linkedin={personal.linkedin}
          location={personal.location}
          name={personal.name}
        />
      </main>

      <Footer name={personal.name} />

      {activeGallery && (
        <GalleryModal
          photos={activeGallery}
          activeIndex={activeIndex}
          onClose={closeGallery}
          onPrev={goToPrevious}
          onNext={goToNext}
          onSetIndex={setActiveIndex}
        />
      )}
    </div>
  );
}
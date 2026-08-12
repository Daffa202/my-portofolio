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
    tagline: "Halo , i am Muhammad Daffa Aditya Saputra Automation Engineering graduate with hands-on experience in PLC programming, sensor calibration, electrical drawings and industrial automation projects. Skilled in system integration and control system troubleshooting, with a strong interest in industrial automation and process improvement",
    bio: "Halo , i am Muhammad Daffa Aditya Saputra Automation Engineering graduate with hands-on experience in PLC programming, sensor calibration, electrical drawings and industrial automation projects. Skilled in system integration and control system troubleshooting, with a strong interest in industrial automation and process improvement",
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
      period: "August – December 2025",
      description: [
        "Designed and developed IoT and PLC-based projects using Node-RED for data monitoring, system integration, and process automation applications.",
        "Created and updated electrical drawings, wiring diagrams, and control schematics to ensure accurate project documentation and implementation.",
        "Collaborated with engineering and maintenance teams to analyze root causes and implement effective technical solutions.",
        "Performed PLC programming and control system modifications to support automation projects and improve manufacturing process reliability.",
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
      role: "Part-Time Instructor",
      company: "Robot Education",
      location: "Surabaya, Indonesia",
      period: "December 2025 – March 2026",
      description: [
        "Programmed robotics and IoT for kindergarten to senior high school students as a hands-on technology learning experience.",
        "Guided students through robotics and IoT project design, from concept development and assembly to system testing.",
        "Prepared learning materials and practical assignments to improve students' understanding of automation, sensors, and integrated systems.",
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
      role: "Expert Staff",
      company: "Ministry of Administration and Secretariat",
      period: "2024",
      organization: "BEM PPNS",
      description: [
        "Managed administrative documents, correspondence, and organizational archives to ensure information was delivered clearly and efficiently.",
        "Supported meeting agendas, minutes, and the internal administrative needs of the organization.",
      ],
    },
    {
      role: "Head of Mechanical Division",
      company: "Marine Robotic Community",
      period: "2024",
      organization: "UKM Marine Robotic Community",
      description: [
        "Led the mechanical division in designing, assembling, and testing robot components to maintain system performance.",
        "Developed robot mechanisms and evaluated system performance to improve stability and readiness for competition use.",
      ],
    },
    {
      role: "Event Division Staff",
      company: "Automation Week 6",
      period: "2024",
      organization: "Automation Week 6",
      description: [
        "Supported event planning and coordination to ensure activities ran smoothly and followed the established timeline.",
        "Facilitated communication across divisions and assisted with the execution of both technical and non-technical activities.",
      ],
    },
  ],
  projects: [
    {
      slug: "periodiq-health-chair",
      title: "PERIODIQ: Health Chair with Menstrual Therapy as Internet-Based Menstrual Pain and Stress Management of Medical Things and Artificial Intelligence (2024)",
      description: "A smart therapy chair designed to relieve menstrual pain and stress using heat therapy, integrated with the Internet of Medical Things (IoMT).",
      detail: [
        "Smart therapy chair designed to relieve menstrual pain and stress through heat therapy as the primary treatment mechanism.",
        "Integrated with the Internet of Medical Things (IoMT) to support connected health monitoring and improve user experience.",
        "Combines therapeutic functionality with medical technology concepts and artificial intelligence support for modern menstrual pain management.",
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
      description: "Designed and assembled a line-following robot with autonomous path-tracking capabilities by integrating sensors, actuators, and microcontroller programming to achieve accurate line detection and real-time motion control.",
      detail: [
        "The robot was designed to autonomously follow a path by detecting a line using sensors and processing the input in real time.",
        "Actuators and microcontroller programming were integrated to deliver smooth, accurate, and responsive motion control.",
        "This project emphasizes autonomous navigation, embedded system coordination, and practical robotics design skills.",
      ],
      tags: ["Robotics", "Microcontroller", "Automation", "Sensors", "Motion Control"],
      imageGradient: "from-purple-600 to-indigo-900",
      documentation: ["/images/projects/line-follower-robot-1.jpeg"],
    },
    {
      slug: "electronic-component-classification-arm-robot",
      title: "Electronic Component Classification Using a Robot Arm and Vision Camera",
      description: "A vision-based robot arm system that automatically classifies and sorts electronic components such as resistors, relays, crystals, and capacitors using YOLOv5 object detection.",
      detail: [
        "The robot arm uses four AX-12 servos as the main actuators for the arm and an MG90S servo as the gripper actuator to pick up components.",
        "The camera is positioned directly above the component placement area and runs a YOLOv5 object detection model to classify the electronic parts placed below it.",
        "The system provides four placement slots based on the classification results: slot A for resistors, slot B for relays, slot C for crystals, and slot D for capacitors.",
        "Once the camera detects a component type, such as a relay, the robot arm moves automatically, grasps the part, and places it precisely in the corresponding slot.",
        "This project integrates computer vision, multi-axis servo control, and automated sorting logic in a single end-to-end robotic system.",
      ],
      tags: ["Robot Arm", "Computer Vision", "YOLOv5", "Servo AX-12", "Object Sorting", "Automation"],
      imageGradient: "from-orange-600 to-amber-900",
      documentation: ["/images/projects/electronic-component-classification-arm-robot-1.jpeg"],
    },
    {
      slug: "krsri-sar-robot",
      title: "KRSRI SAR Robot (Indonesian Search and Rescue Robot Contest)",
      description: "Designed and assembled a Search and Rescue (SAR) robot for the Indonesian SAR Robot Contest (KRSRI), held under the supervision of Kemendikbudristek/Diktiristek from 2023 to 2024.",
      detail: [
        "Participated in the design and assembly of a SAR robot for the national-level KRSRI competition.",
        "Contributed to the mechanical design process, physical assembly of robot components, and preparation for competition participation during 2023–2024.",
        "This project strengthened teamwork skills in developing a competition robot from concept design through to full deployment.",
      ],
      tags: ["Robotics Competition", "Mechanical Design", "Assembly", "Search and Rescue", "KRSRI"],
      imageGradient: "from-red-600 to-rose-900",
      documentation: ["/images/projects/krsri-sar-robot-1.png"],
    },
    {
      slug: "coffeemaker-bean-ripeness-detection",
      title: "Coffeemaker: Coffee Bean Ripeness Detection Based on Color Classification",
      description: "Contributed to system design and programming for automatically detecting coffee bean ripeness using color-based classification.",
      detail: [
        "Helped develop the system design and programming for an automated coffeemaker project.",
        "Created a program to detect coffee bean maturity by analyzing and classifying coffee bean color.",
        "The system aims to make coffee bean selection more consistent and efficient than manual sorting.",
      ],
      tags: ["Color Classification", "Image Processing", "Automation", "Coffee Processing"],
      imageGradient: "from-yellow-700 to-amber-950",
      documentation: ["/images/projects/coffeemaker-bean-ripeness-detection-1.png"],
    },
    {
      slug: "hull-inspection-rov",
      title: "Hull Inspection Robot (ROV) Design",
      description: "Designed an ROV (Remotely Operated Vehicle) for inspecting weld defects on ship hulls.",
      detail: [
        "Responsible for creating the ROV design used for ship hull inspection.",
        "The robot was designed to detect welding defects on the hull surface of a vessel.",
        "This project focused on the underwater robot's mechanical design to support a safer and more efficient marine inspection process.",
      ],
      tags: ["ROV", "Mechanical Design", "Hull Inspection", "Weld Defect Detection", "Marine Robotics"],
      imageGradient: "from-sky-700 to-blue-950",
      documentation: ["/images/projects/hull-inspection-rov-1.png"],
    },
    {
      slug: "scada-boiler-miniature",
      title: "Miniature SCADA Boiler System",
      description: "Designed a SCADA system for a boiler that can be controlled both automatically and manually.",
      detail: [
        "Developed a SCADA (Supervisory Control and Data Acquisition) system design to monitor and control a miniature boiler system.",
        "The system supports two operating modes: automatic control and manual control, depending on operational needs.",
        "This project combines monitoring interface design (HMI/SCADA) with process control logic for a small-scale industrial system.",
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
      degree: "Applied Bachelor Degree in Automation Engineering",
      institution: "Politeknik Perkapalan Negeri Surabaya",
      period: "2022 – Present",
      details: "GPA: 3.48/4.00. Focused on industrial control systems, automation, and technical process documentation.",
    },
  ],
  certifications: ["TOEIC (score 595)", "Junior Administrative Assistant"],
  awards: [
    "2nd Place, ENSIGHT Scientific Writing Competition – UPN Veteran Jawa Timur (2023)",
    "2nd Place, Science Project – Sekolah Vokasi UGM (2023)",
    "3rd Place, ICT Business Development – Sekolah Vokasi UGM (2024)",
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
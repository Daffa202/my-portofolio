import { Cpu, Terminal, Globe, LucideIcon } from 'lucide-react';

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  descriptions: string[];
  tech: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  imageGradient: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  documentation: string[];
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "MUHAMMAD DAFFA ADITYA SAPUTRA",
    role: "Automation Engineering Student",
    tagline: "Halo , i am Muhammad Daffa Aditya Saputra Automation Engineering graduate with hands-on experience in PLC programming, sensor calibration, electrical drawings and industrial automation projects. Skilled in system integration and control system troubleshooting, with a strong interest in industrial automation and process improvement",
    bio: "Halo , i am Muhammad Daffa Aditya Saputra Automation Engineering graduate with hands-on experience in PLC programming, sensor calibration, electrical drawings and industrial automation projects. Skilled in system integration and control system troubleshooting, with a strong interest in industrial automation and process improvement",
    status: "Automation Engineering student — Open to opportunities",
    email: "muhammaddaffa158@gmail.com",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/adityadaff22",
    resumeUrl: "/files/Muhammad Daffa Aditya Saputra-resume.pdf",
    location: "Gresik, Indonesia"
  },
  experiences: [
    {
      id: 1,
      role: "Internship",
      company: "PT Bernofarm Pharmaceutical Company",
      period: "Dec 2025",
      location: "Sidoarjo, Indonesia",
      descriptions: [
        "Developed IoT- and PLC-based projects using Node-RED for data monitoring, system integration, and process automation applications.",
        "Created and updated electrical drawings, wiring diagrams, and control schematics to ensure accurate project documentation and implementation.",
        "Collaborated with engineering and maintenance teams to identify root causes of equipment issues and implement effective technical solutions.",
        "Performed PLC programming and control system modifications to support automation projects and improve manufacturing process reliability."
      ],
      tech: ["PLC Programming", "Node-RED", "IoT", "Electrical Drawings", "Control Systems", "Process Automation"]
    },
    {
      id: 2,
      role: "Junior Administrative Assistant",
      company: "Balai Latihan Kerja Surabaya",
      period: "Jun 2022",
      location: "Gresik, Indonesia",
      descriptions: [
        "Combined administrative, communication, and problem-solving abilities to support effective coordination.",
        "Improved documentation accuracy and supported operational efficiency through organized administrative work.",
        "Handled communication and administrative coordination to maintain smooth workflow and information flow."
      ],
      tech: ["Administration", "Documentation", "Communication", "Coordination", "Problem Solving"]
    },
    {
      id: 3,
      role: "Staf Ahli Kementrian Administrasi Kesekretariatan",
      company: "Badan Eksekutif Mahasiswa",
      period: "Dec 2023",
      location: "Surabaya, Indonesia",
      descriptions: [
        "Managed administrative documents, correspondence, and organizational records to ensure accurate documentation and efficient information flow.",
        "Coordinated meeting schedules, prepared agendas, and documented meeting minutes to support effective organizational decision-making.",
        "Supported the administration function of the organization with strong attention to detail and clear communication."
      ],
      tech: ["Administration", "Documentation", "Meeting Coordination", "Communication"]
    },
    {
      id: 4,
      role: "Mechanic",
      company: "UKM Marine Robotic Community",
      period: "Dec 2024 - Present",
      location: "Surabaya, Indonesia",
      descriptions: [
        "Assembled, maintained, and optimized mechanical systems and robot components to ensure reliable performance during development and competition.",
        "Conducted testing, calibration, and performance evaluations to identify design improvements and enhance robot functionality.",
        "Supported system reliability through practical mechanical maintenance and troubleshooting."
      ],
      tech: ["Mechanical Systems", "Calibration", "Testing", "Performance Evaluation", "Troubleshooting"]
    }
  ] as Experience[],
  projects: [
    {
      id: 1,
      slug: "periodiq-health-chair",
      title: "PERIODIQ: Health Chair with Menstrual Therapy as internet-based Menstrual Pain and Stress Management of Medical Things and Artificial Intellegence (2024)",
      category: "Automation / Health Tech",
      description: "A smart therapy chair designed to relieve menstrual pain and stress using heat therapy, integrated with the Internet of Medical Things (IoMT).",
      imageGradient: "from-blue-600 to-cyan-900",
      tags: ["IoMT", "AI", "Menstrual Therapy", "Health Chair", "Medical Thing"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: ["/images/projects/periodiq-health-chair-1.png"]
    },
    {
      id: 2,
      slug: "air-quality-hepa-iot",
      title: "Air Quality & Temperature Monitoring System with HEPA Filter-Based IoT",
      category: "Automation / IoT Project",
      description: "Developed an IoT-based air quality and room temperature monitoring system integrated with a HEPA filtration unit to support healthier indoor environments.",
      imageGradient: "from-emerald-600 to-teal-900",
      tags: ["IoT", "HEPA", "Air Quality", "Temperature Monitoring", "Smart Environment"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: [
        "/images/projects/air-quality-hepa-iot-1.jpeg",
        "/images/projects/air-quality-hepa-iot-2.jpeg"
      ]
    },
    {
      id: 3,
      slug: "line-follower-robot",
      title: "Line Follower Robot Project",
      category: "Robotics / Automation",
      description: "Designed and assembled a line follower robot with autonomous path-tracking capabilities by integrating sensors, actuators, and microcontroller programming to achieve accurate line detection and real-time motion control.",
      imageGradient: "from-purple-600 to-indigo-900",
      tags: ["Robotics", "Microcontroller", "Automation", "Sensors", "Motion Control"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: ["/images/projects/line-follower-robot-1.jpeg"]
    },
    {
      id: 4,
      slug: "electronic-component-classification-arm-robot",
      title: "Klasifikasi Komponen Elektronik dengan Robot Arm & Vision Camera",
      category: "Robotics / Computer Vision",
      description: "Sistem robot arm berbasis vision camera yang mengklasifikasikan dan menyortir komponen elektronik (resistor, relay, crystal, kapasitor) secara otomatis menggunakan deteksi objek YOLOv5.",
      imageGradient: "from-orange-600 to-amber-900",
      tags: ["Robot Arm", "Computer Vision", "YOLOv5", "Servo AX-12", "Object Sorting", "Automation"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: ["/images/projects/electronic-component-classification-arm-robot-1.jpeg"]
    },
    {
      id: 5,
      slug: "krsri-sar-robot",
      title: "Robot KRSRI (Kontes Robot SAR Indonesia)",
      category: "Robotics Competition",
      description: "Perancangan dan perakitan robot SAR (Search and Rescue) untuk kompetisi Kontes Robot SAR Indonesia (KRSRI) di bawah naungan Kemendikbudristek/Diktiristek, periode 2023–2024.",
      imageGradient: "from-red-600 to-rose-900",
      tags: ["Robotics Competition", "Mechanical Design", "Assembly", "Search and Rescue", "KRSRI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: ["/images/projects/krsri-sar-robot-1.png"]
    },
    {
      id: 6,
      slug: "coffeemaker-bean-ripeness-detection",
      title: "Coffeemaker: Deteksi Kematangan Biji Kopi Berbasis Klasifikasi Warna",
      category: "Automation / Image Processing",
      description: "Berkontribusi dalam desain sistem dan pemrograman untuk mendeteksi tingkat kematangan biji kopi secara otomatis berdasarkan klasifikasi warna.",
      imageGradient: "from-yellow-700 to-amber-950",
      tags: ["Color Classification", "Image Processing", "Automation", "Coffee Processing"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: ["/images/projects/coffeemaker-bean-ripeness-detection-1.png"]
    },
    {
      id: 7,
      slug: "hull-inspection-rov",
      title: "Desain Hull Inspection Robot (ROV)",
      category: "Marine Robotics",
      description: "Perancangan desain robot ROV (Remotely Operated Vehicle) untuk inspeksi cacat las pada lambung kapal.",
      imageGradient: "from-sky-700 to-blue-950",
      tags: ["ROV", "Mechanical Design", "Hull Inspection", "Weld Defect Detection", "Marine Robotics"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: ["/images/projects/hull-inspection-rov-1.png"]
    },
    {
      id: 8,
      slug: "scada-boiler-miniature",
      title: "Miniatur SCADA Sistem Boiler",
      category: "Industrial Control / SCADA",
      description: "Perancangan desain SCADA untuk sistem boiler yang dapat dikontrol secara otomatis maupun manual.",
      imageGradient: "from-teal-700 to-cyan-950",
      tags: ["SCADA", "Boiler System", "Process Control", "HMI", "Automation"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      documentation: ["/images/projects/scada-boiler-miniature-1.png"]
    }
  ] as Project[],
  skills: [
    {
      category: "Automation & PLC",
      icon: Cpu,
      skills: ["PLC Programming", "Sensor Calibration", "Industrial Automation", "Control Systems", "Electrical Drawings", "Wiring Diagrams"]
    },
    {
      category: "IoT & Monitoring",
      icon: Terminal,
      skills: ["Node-RED", "IoT Integration", "System Integration", "Data Monitoring", "Process Automation", "Control Troubleshooting"]
    },
    {
      category: "Documentation & Support",
      icon: Globe,
      skills: ["Technical Documentation", "Root Cause Analysis", "Communication", "Team Collaboration", "Maintenance Support", "Operational Efficiency"]
    }
  ] as SkillCategory[],
  education: [
    {
      degree: "Applied Bachelor Degree Automation Engineering",
      institution: "Politeknik Perkapalan Negeri Surabaya",
      period: "2022 - 2025",
      gpa: "3.48/4.00"
    }
  ] as Education[],
  certifications: [
    {
      title: "LKTI Nasional Ensight UPN Veteran Jawa Timur",
      issuer: "Juara 3",
      year: "2024"
    },
    {
      title: "Lomba Futsal Teknik Kelistrikan Kapal Cup",
      issuer: "Participation / Competition",
      year: "2024"
    }
  ] as Certification[]
};

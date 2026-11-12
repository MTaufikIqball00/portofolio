export const siteConfig = {
  name: "Taufik",
  fullName: "M Taufik Iqbal",
  title: "Taufik | Portofolio Rekayasa Perangkat Lunak & AI",
  positioning: "AI Engineer | Software Developer | Antusias Teknologi",
  tagline: "Membangun Sistem Cerdas. Merekayasa Solusi Nyata.",
  heroSubtext:
    "Saya merancang dan membangun perangkat lunak serta sistem cerdas di persimpangan kecerdasan buatan, rekayasa sistem, dan implementasi dunia nyata.",
  githubUsername: "MTaufikIqball00",
  githubUrl: "https://github.com/MTaufikIqball00",
  avatarUrl: "https://avatars.githubusercontent.com/u/110665394?v=4",
  hireable: true,
  email: "taufikschll@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://taufik-portfolio.vercel.app",
  education: {
    institution: "Universitas Komputer Indonesia",
    institutionShort: "UNIKOM",
    thesis: "Autonomous Drone untuk Pemantauan Lahan Pertanian",
    gpa: "3.39",
    maxGpa: "4.00",
    relatedProjectSlug: "harvest_drone",
    description:
      "Pendidikan terakhir diselesaikan di Universitas Komputer Indonesia (UNIKOM) dengan Indeks Prestasi Kumulatif (IPK) 3.39. Mengembangkan sistem Tugas Akhir berupa wahana UAV otonom terpadu (Harvest_Drone) yang mengintegrasikan ROS 2 Jazzy, PX4 Autopilot, sensor LiDAR 2D, dan visualisasi stasiun kendali darat untuk pemantauan lahan pertanian.",
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "Kemendikbud Bandung",
      companyFull: "Kementerian Pendidikan dan Kebudayaan — Bandung",
      period: "2 Bulan",
      project: "Learning Management System (LMS)",
      projectSlug: "lms",
      description:
        "Bekerja sebagai Full Stack Developer selama 2 bulan di Kemendikbud Bandung, merancang dan mengembangkan platform Learning Management System (LMS) berskala enterprise. Bertanggung jawab atas pengembangan antarmuka web reaktif (Next.js/React), arsitektur basis data relasional (PostgreSQL/Supabase), implementasi sistem kontrol akses multi-tenant (RBAC & RLS), serta modul analitik clustering profil mahasiswa.",
      skills: ["Next.js 15", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "K-Means", "RBAC"],
    },
  ],
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Projek", href: "/projects" },
    { label: "Keahlian", href: "/skills" },
    { label: "Kontak", href: "/contact" },
  ],
  verifiedPinnedRepos: [
    "AutomatedGraph",
    "OmniMed-Insight",
    "AI-Algorithmic-Trading-BESS-Arbitrage-Optimizer",
    "Medchain",
    "Harvest_Drone",
    "LLMOps-Evaluasi-Model-End-To-End",
    "LMS",
  ],
};

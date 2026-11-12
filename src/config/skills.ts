export interface SkillItem {
  name: string;
  verifiedIn: string[]; // repository names
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Kecerdasan Buatan & LLMOps",
    description:
      "Arsitektur enterprise RAG, pipeline evaluasi model, explainable AI, dan sistem deep learning vision.",
    skills: [
      {
        name: "GraphRAG & Graf Pengetahuan",
        verifiedIn: ["AutomatedGraph"],
        description: "Graf properti NetworkX, deteksi komunitas Louvain, dan penalaran multi-hop",
      },
      {
        name: "Evaluasi LLM (Ragas & TruLens)",
        verifiedIn: ["LLMOps-Evaluasi-Model-End-To-End"],
        description: "Kesesuaian fakta (faithfulness), relevansi jawaban, presisi konteks, dan skor halusinasi",
      },
      {
        name: "Explainable AI (Grad-CAM & XAI)",
        verifiedIn: ["OmniMed-Insight"],
        description: "Gradient-weighted class activation mapping, entropi Shannon, dan oklusi patch",
      },
      {
        name: "PyTorch & DenseNet",
        verifiedIn: ["OmniMed-Insight"],
        description: "Inferensi citra medis, ekstraksi feature hook, dan operasi tensor",
      },
      {
        name: "Retrieval Leksikal & Vektor (BM25 + Vektor)",
        verifiedIn: ["AutomatedGraph"],
        description: "Embedding vektor dipadukan dengan indeks inverted BM25 dan pelacakan sitasi",
      },
      {
        name: "Machine Learning (Scikit-Learn)",
        verifiedIn: ["LMS", "Harvest_Drone"],
        description: "Clustering K-Means untuk sistem deteksi dini dan segmentasi warna adaptif",
      },
      {
        name: "Visi Komputer & Fotogrametri",
        verifiedIn: ["Harvest_Drone"],
        description: "OpenCV, Rasterio, adaptasi kontras CLAHE, dan orthofoto udara NodeODM",
      },
    ],
  },
  {
    title: "Backend Kinerja Tinggi & Sistem",
    description:
      "Layanan backend asinkron, aman memori, dan berkemampuan tinggi yang dibangun menggunakan Rust dan Python.",
    skills: [
      {
        name: "Rust & Axum",
        verifiedIn: ["OmniMed-Insight", "LLMOps-Evaluasi-Model-End-To-End"],
        description: "Keamanan memori saat kompilasi, runtime asinkron Tokio, dan REST API throughput tinggi",
      },
      {
        name: "Python (FastAPI & Flask)",
        verifiedIn: ["AutomatedGraph", "Harvest_Drone", "OmniMed-Insight", "LMS"],
        description: "Endpoint API asinkron, validasi data Pydantic, dan microservice inferensi AI",
      },
      {
        name: "SQLx & SQLite (ACID)",
        verifiedIn: ["OmniMed-Insight", "LLMOps-Evaluasi-Model-End-To-End", "AutomatedGraph"],
        description: "Penyimpanan tertanam tanpa dependensi eksternal, verifikasi SQL saat kompilasi, dan migrasi",
      },
      {
        name: "PostgreSQL & Supabase",
        verifiedIn: ["Medchain", "LMS", "Harvest_Drone"],
        description: "Pemodelan relasional, isolasi multi-tenant, SSL connection pooling, dan skema JSONB",
      },
      {
        name: "Node.js & Express",
        verifiedIn: ["Medchain"],
        description: "Gateway API off-chain, mesin penandatangan kriptografis, dan penanganan sesi JWT",
      },
    ],
  },
  {
    title: "Sistem Otonom & Robotika",
    description:
      "Middleware robotik, stack penerbangan otonom, perencanaan jalur (path planning), dan simulasi fisika 3D.",
    skills: [
      {
        name: "ROS 2 Jazzy",
        verifiedIn: ["Harvest_Drone"],
        description: "Node ROS 2, arsitektur publisher/subscriber, dan jembatan telemetri WebSocket",
      },
      {
        name: "PX4 Autopilot & MAVLink",
        verifiedIn: ["Harvest_Drone"],
        description: "Perpesanan uORB micro-XRCE-DDS, simulasi SITL, dan kontrol mode penerbangan",
      },
      {
        name: "Gazebo Harmonic",
        verifiedIn: ["Harvest_Drone"],
        description: "Dunia simulasi fisika 3D, medan pertanian, dan sensor LiDAR 2D",
      },
      {
        name: "Perencanaan Jalur & Penghindaran Rintangan",
        verifiedIn: ["Harvest_Drone"],
        description: "Kalkulasi rute A* dan pola survei Boustrophedon untuk operasi lapangan otomatis",
      },
    ],
  },
  {
    title: "Web Enterprise & Sistem Medis Full-Stack",
    description:
      "Aplikasi web modern dengan arsitektur multi-tenant, standar regulasi klinis, dan antarmuka reaktif.",
    skills: [
      {
        name: "Next.js (App Router) & React",
        verifiedIn: ["LMS", "Harvest_Drone", "OmniMed-Insight", "LLMOps-Evaluasi-Model-End-To-End"],
        description: "Komponen server (RSC), streaming SSR, tata letak dinamis, dan optimasi statis",
      },
      {
        name: "TypeScript (Strict Mode)",
        verifiedIn: ["LMS", "Medchain", "Harvest_Drone", "LLMOps-Evaluasi-Model-End-To-End"],
        description: "Kontrak antarmuka end-to-end, type guards, dan skema validasi API generik",
      },
      {
        name: "Tailwind CSS",
        verifiedIn: ["AutomatedGraph", "LMS", "OmniMed-Insight", "LLMOps-Evaluasi-Model-End-To-End", "Harvest_Drone"],
        description: "Tata letak responsif, token desain modern, dan dukungan dark mode bawaan",
      },
      {
        name: "Interoperabilitas HL7 FHIR R4",
        verifiedIn: ["OmniMed-Insight"],
        description: "Standar pertukaran data medis, validasi bundle DiagnosticReport dan ImagingStudy",
      },
      {
        name: "Arsitektur Multi-Tenansi",
        verifiedIn: ["LMS", "AutomatedGraph"],
        description: "Isolasi data antar tenant, kontrol akses berbasis peran (RBAC), dan ACL dokumen",
      },
      {
        name: "Blockchain & Kriptografi",
        verifiedIn: ["Medchain"],
        description: "Chaincode Hyperledger Fabric v2.5, anchor kontrak pintar Ethereum Solidity, AES-256-GCM, HMAC-SHA256",
      },
    ],
  },
  {
    title: "DevOps, Keamanan & Observabilitas",
    description:
      "Automasi infrastruktur, penguatan keamanan (security hardening), dan telemetri metrik sistem.",
    skills: [
      {
        name: "Prometheus & Metrik",
        verifiedIn: ["LLMOps-Evaluasi-Model-End-To-End"],
        description: "Endpoint OpenMetrics, persentil latensi (p50/p95/p99), dan penghitung throughput",
      },
      {
        name: "Distributed Tracing",
        verifiedIn: ["LLMOps-Evaluasi-Model-End-To-End"],
        description: "Pelacakan span waterfall dan pembersihan rahasia otomatis pada payload sensitif",
      },
      {
        name: "Penguatan Keamanan OWASP",
        verifiedIn: ["AutomatedGraph", "OmniMed-Insight", "Medchain", "LMS"],
        description: "Derivasi kunci Argon2id / scrypt, kesetaraan timing-safe, cookie HttpOnly, dan proteksi IDOR",
      },
      {
        name: "Docker & Orkestrasi Kontainer",
        verifiedIn: ["Harvest_Drone", "Medchain", "LLMOps-Evaluasi-Model-End-To-End"],
        description: "Microservice terkontainerisasi, pemrosesan NodeODM, dan spesifikasi beban kerja Kubernetes",
      },
    ],
  },
];

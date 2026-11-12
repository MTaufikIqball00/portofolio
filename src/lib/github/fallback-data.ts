import { Project } from "@/types/project";

/**
 * Snapshot Terverifikasi Proyek Unggulan GitHub Taufik.
 * Top 3 proyek adalah sistem yang telah di-deploy langsung ke Vercel (Live Demo aktif).
 * Seluruh rincian diverifikasi langsung dari kode, arsitektur, dan commit repositori GitHub asli.
 */
export const VERIFIED_FALLBACK_PROJECTS: Project[] = [
  {
    slug: "automatedgraph",
    name: "AutomatedGraph",
    displayName: "AutomatedGraph",
    tagline: "Mesin GraphRAG Berbasis Bukti Nyata dengan Ekstraksi Graf Properti & Retrieval Hibrida",
    description:
      "Arsitektur GraphRAG sadar-struktur tingkat produksi yang mengintegrasikan ekstraksi graf pengetahuan properti (NetworkX, SQLite), retrieval hibrida (vektor dens + BM25), deteksi komunitas Louvain, dan sitasi inline bebas fabrikasi.",
    htmlUrl: "https://github.com/MTaufikIqball00/AutomatedGraph",
    homepageUrl: "https://automated-graph.vercel.app",
    language: "Python",
    languageColor: "#3572A5",
    stars: 2,
    forks: 0,
    updatedAt: "2026-10-30T04:33:21Z",
    createdAt: "2026-10-26T15:26:01Z",
    topics: [
      "graphrag",
      "knowledge-graph",
      "fastapi",
      "hybrid-retrieval",
      "bm25",
      "multi-hop-qa",
      "rbac",
      "python",
      "vercel",
    ],
    isArchived: false,
    isPinned: true,
    category: "AI & LLMOps",
    problemStatement:
      "Sistem RAG berbasis vektor murni sering mengalami fragmentasi konteks, ketidakmampuan menemukan hubungan kausalitas lintas dokumen terpisah, halusinasi relasi entitas, dan kegagalan dalam penalaran multi-hop kompleks.",
    solution:
      "Mesin GraphRAG berbasis bukti nyata yang mengintegrasikan pemotongan dokumen sadar-struktur, ekstraksi entitas/relasi tervalidasi skema, graf properti ACID (NetworkX + SQLite), retrieval hibrida (vektor dens + BM25), deteksi komunitas Louvain, dan sitasi inline anti-fabrikasi yang di-deploy ke Vercel.",
    keyFeatures: [
      "Live deployment di Vercel dengan antarmuka eksplorasi GraphRAG interaktif",
      "Pemotong dokumen sadar-struktur dengan hierarki heading dan chunk hashing SHA-256",
      "Resolver entitas konservatif yang menangani alias, akronim, dan isolasi versi",
      "Penyimpanan graf properti ACID berbasis SQLite dan NetworkX",
      "Retrieval hibrida memadukan embedding vektor dens dengan inverted index BM25",
      "Deteksi komunitas Louvain untuk perangkuman tematik lintas dokumen",
      "Mesin penolakan tegas (abstention) dengan validasi sitasi inline ([1], [2], [G1])",
      "ACL dokumen tingkat enterprise (Tenant-Wide, Restricted, Private)",
    ],
    architecture: {
      overview:
        "Pipeline empat tahap yang memisahkan penyerapan dokumen, ekstraksi entitas tervalidasi skema, penegakan keamanan multi-tenant, dan sintesis inferensi multi-hop.",
      components: [
        {
          title: "1. Penyerapan & Prapemrosesan",
          description:
            "Validator MIME & UTF-8 yang menyuplai chunker sadar-struktur dengan menjaga batas halaman dan heading dokumen.",
        },
        {
          title: "2. Ekstraksi Graf Pengetahuan",
          description:
            "Ekstraksi entitas dan relasi tervalidasi skema ke dalam graf properti ACID SQLite dan indeks vektor semantik.",
        },
        {
          title: "3. Keamanan & Kontrol Akses",
          description:
            "Autentikasi sesi HttpOnly dengan penyaringan ACL tingkat dokumen yang ketat sebelum proses retrieval.",
        },
        {
          title: "4. Retrieval Hibrida & Sintesis Bukti",
          description:
            "Mesin penjelajahan graf + vektor dens + BM25 dengan proteksi injeksi Cypher dan luaran sitasi terverifikasi.",
        },
      ],
    },
    techStack: [
      "Python 3.10+",
      "FastAPI 0.115+",
      "SQLite",
      "NetworkX",
      "BM25",
      "Dense Vector Embeddings",
      "Next.js / Vercel",
      "Tailwind CSS",
      "Pytest",
    ],
    highlights: [
      "Live Demo aktif di Vercel: https://automated-graph.vercel.app",
      "100% verifikasi sitasi inline dengan mekanisme penolakan saat bukti tidak memadai",
      "Waktu pembuatan graf properti tervalidasi dalam hitungan milidetik via SQLite ACID",
      "Pencegahan IDOR dan isolasi multi-tenant tervalidasi penuh",
    ],
  },
  {
    slug: "omnimed-insight",
    name: "OmniMed-Insight",
    displayName: "OmniMed-Insight",
    tagline: "Gateway Diagnostik AI Klinis Berkinerja Tinggi dengan Grad-CAM & Kepatuhan HL7 FHIR R4",
    description:
      "Platform diagnostik medis dwi-runtime tingkat produksi: gateway backend Rust (Axum, Tokio) dengan proteksi IDOR dan derivasi kunci Argon2id, dipadukan dengan modul visi PyTorch DenseNet121, visualisasi peta panas Grad-CAM, dan ekspor HL7 FHIR R4.",
    htmlUrl: "https://github.com/MTaufikIqball00/OmniMed-Insight",
    homepageUrl: "https://omnimed-insight-wheat.vercel.app/",
    language: "Rust",
    languageColor: "#dea584",
    stars: 2,
    forks: 0,
    updatedAt: "2026-10-30T04:33:23Z",
    createdAt: "2026-10-26T15:26:01Z",
    topics: [
      "rust",
      "axum",
      "tokio",
      "pytorch",
      "grad-cam",
      "fhir",
      "xai",
      "medical-imaging",
      "sqlite",
      "vercel",
    ],
    isArchived: false,
    isPinned: true,
    category: "High-Performance Systems",
    problemStatement:
      "Sistem diagnostik AI konvensional seringkali berupa 'kotak hitam' (black box) tanpa transparansi visual, memiliki latensi API tinggi karena beban inferensi, dan tidak mematuhi standar interoperabilitas rumah sakit (HL7 FHIR R4).",
    solution:
      "Gateway dual-runtime menggabungkan Rust (Axum, Tokio) untuk konkurensi asinkron dan otentikasi memori-aman, dengan pipeline inferensi PyTorch DenseNet121 yang menghasilkan peta panas Grad-CAM real-time serta bundle data HL7 FHIR R4, di-deploy siap akses di Vercel.",
    keyFeatures: [
      "Live deployment di Vercel: antarmuka analisis diagnostik medis klinis interaktif",
      "Gateway backend Rust (Axum) berlatensi sub-milidetik dengan isolasi konkurensi Tokio",
      "Inferensi klasifikasi citra medis PyTorch DenseNet121 dengan visualisasi Grad-CAM",
      "Kalkulasi metrik ketidakpastian (Shannon entropy) dan peta oklusi fitur",
      "Ekspor bundle HL7 FHIR R4 (DiagnosticReport, Observation, ImagingStudy)",
      "Penyimpanan SQLite tertanam dengan migrasi skema berbasis SQLx",
      "Otentikasi keamanan tinggi dengan derivasi kunci Argon2id dan cookie HttpOnly",
    ],
    architecture: {
      overview:
        "Pemisahan batas tegas antara gateway backend Rust yang aman memori dengan modul pekerja inferensi deep learning Python.",
      components: [
        {
          title: "1. Gateway Keamanan & API Rust",
          description:
            "Layanan Axum yang menangani verifikasi sesi Argon2id, pencegahan IDOR, dan routing asinkron berkecepatan tinggi.",
        },
        {
          title: "2. Mesin Diagnostik Deep Learning",
          description:
            "Model DenseNet121 yang memproses tensor citra medis dan mengekstraksi aktivasi gradien lapisan konvolusi.",
        },
        {
          title: "3. Pipeline Explainable AI (XAI)",
          description:
            "Generator peta panas Grad-CAM yang menyoroti area fokus patologis pada citra medis untuk verifikasi klinis.",
        },
        {
          title: "4. Lapisan Interoperabilitas FHIR R4",
          description:
            "Pembuat bundle HL7 FHIR R4 yang mengekspor hasil diagnostik ke sistem rumah sakit secara terstandarisasi.",
        },
      ],
    },
    techStack: [
      "Rust (Axum, Tokio, SQLx)",
      "Python 3.11",
      "PyTorch",
      "DenseNet121",
      "SQLite",
      "Next.js / Vercel",
      "HL7 FHIR R4",
    ],
    highlights: [
      "Live Demo aktif di Vercel: https://omnimed-insight-wheat.vercel.app/",
      "Waktu pengiriman data diagnostik sub-milidetik melalui arsitektur Rust Axum",
      "Transparansi interpretasi visual Grad-CAM untuk membantu validasi dokter radiologi",
      "Kepatuhan standar internasional HL7 FHIR R4 siap integrasi PACS/EHR",
    ],
  },
  {
    slug: "ai-algorithmic-trading-bess-arbitrage-optimizer",
    name: "AI-Algorithmic-Trading-BESS-Arbitrage-Optimizer",
    displayName: "AI Algorithmic Trading & BESS Optimizer",
    tagline: "Platform Optimasi Arbitrase BESS Skala Industri dengan Inteligensi Surya (Solar PV) & RL",
    description:
      "Platform terintegrasi skala industri untuk Optimasi Arbitrase & Algorithmic Trading Battery Energy Storage System (BESS) serta Modul Data Science Surya (Solar PV) Intelligence, Predictive Maintenance, dan Co-Located Hybrid Dispatch pada pasar listrik grosir (CAISO, ERCOT, ENTSO-E).",
    htmlUrl: "https://github.com/MTaufikIqball00/AI-Algorithmic-Trading-BESS-Arbitrage-Optimizer",
    homepageUrl: "https://ai-algorithmic-trading-bess-arbitra.vercel.app",
    language: "Python",
    languageColor: "#3572A5",
    stars: 2,
    forks: 0,
    updatedAt: "2026-11-12T02:50:16Z",
    createdAt: "2026-10-29T15:39:36Z",
    topics: [
      "algorithmic-trading",
      "bess",
      "battery-storage",
      "energy-arbitrage",
      "solar-pv",
      "reinforcement-learning",
      "rust",
      "axum",
      "vercel",
    ],
    isArchived: false,
    isPinned: true,
    category: "AI & LLMOps",
    problemStatement:
      "Pasar listrik grosir modern ditandai oleh volatilitas harga ekstrem akibat penetrasi energi terbarukan (Duck Curve), lonjakan harga petang, dan tarif negatif. Operator sistem penyimpanan energi (BESS) menghadapi tantangan degradasi sel baterai elektrokimia nyata, estimasi State of Charge (SoC), serta kebutuhan peramalan daya surya dan eksekusi arbitrase real-time berlatensi rendah.",
    solution:
      "Platform terintegrasi yang menggabungkan pemodelan fisika elektrokimia baterai (SoC, DoD, batasan termal), peramalan daya surya & harga listrik via machine learning (XGBoost & LightGBM), optimasi dispatch berbasis Reinforcement Learning (PPO), mesin backtesting deterministik cepat, backend Rust Axum, dan terminal perdagangan web interaktif yang di-deploy ke Vercel.",
    keyFeatures: [
      "Live deployment di Vercel: Terminal perdagangan web interaktif dengan live charting siap produksi",
      "Peramalan daya surya & harga listrik grosir dengan ensemble LightGBM & XGBoost",
      "Optimasi dispatch arbitrase baterai (BESS) menggunakan Reinforcement Learning (PPO)",
      "Pemodelan fisika degradasi baterai elektrokimia dan batasan termal IEC 61724",
      "Mesin backtesting deterministik berkecepatan tinggi dengan simulasi pasar listrik nyata",
      "Manajemen risiko pre-trade dan circuit breaker otomatis",
    ],
    architecture: {
      overview:
        "Arsitektur terdistribusi multi-layer memisahkan engine data science analitik, model inferensi Reinforcement Learning, backend gateway Rust Axum, dan frontend terminal trading interaktif.",
      components: [
        {
          title: "1. Mesin Data Science & Peramalan (Python)",
          description:
            "Pipeline peramalan harga listrik pasar grosir dan estimasi output solar PV berbasis ensemble tree model (LightGBM/XGBoost).",
        },
        {
          title: "2. Optimizer Arbitrase & Dispatch (RL/PPO)",
          description:
            "Kebijakan Reinforcement Learning Proximal Policy Optimization (PPO) yang memaksimalkan pendapatan arbitrase dengan memperhitungkan degradasi siklus baterai.",
        },
        {
          title: "3. Gateway Backend & Eksekusi (Rust Axum)",
          description:
            "Layanan backend berkecepatan tinggi dalam Rust untuk manajemen risiko pre-trade, validasi order, dan streaming data pasar.",
        },
        {
          title: "4. Terminal Trading Web (React 19 / Vercel)",
          description:
            "Antarmuka analitik dan kontrol dispatch real-time dengan grafik visualisasi pasar interaktif yang di-deploy di Vercel.",
        },
      ],
    },
    techStack: [
      "Python 3.10+",
      "Rust (Axum 0.7)",
      "PyTorch",
      "XGBoost",
      "LightGBM",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel",
    ],
    highlights: [
      "Live Demo aktif di Vercel: https://ai-algorithmic-trading-bess-arbitra.vercel.app",
      "Pemodelan fisika sel baterai presisi tinggi memperhitungkan batasan degradasi dan SoC",
      "Dukungan simulasi pasar grosir listrik (CAISO, ERCOT, ENTSO-E)",
    ],
  },
  {
    slug: "medchain",
    name: "Medchain",
    displayName: "Medchain",
    tagline: "Manajemen Rekam Medis Elektronik (EHR) Terdesentralisasi dengan Audit Kriptografis",
    description:
      "Sistem rekam medis elektronik terdesentralisasi yang menggabungkan Hyperledger Fabric v2.5, kontrak pintar Ethereum, enkripsi AES-256-GCM, dan integrasi standar kesehatan Indonesia (SATUSEHAT & SIMRS).",
    htmlUrl: "https://github.com/MTaufikIqball00/Medchain",
    homepageUrl: null,
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2,
    forks: 0,
    updatedAt: "2026-10-30T04:33:19Z",
    createdAt: "2026-10-26T15:26:01Z",
    topics: [
      "ehr",
      "blockchain",
      "hyperledger-fabric",
      "solidity",
      "satusehat",
      "simrs",
      "aes-256-gcm",
      "typescript",
      "nextjs",
    ],
    isArchived: false,
    isPinned: true,
    category: "Enterprise Web & Healthcare",
    problemStatement:
      "Sistem rekam medis konvensional rentan terhadap akses data tanpa izin, kebocoran data terpusat, modifikasi riwayat medis secara sepihak, serta kesulitan integrasi lintas fasilitas kesehatan di bawah regulasi SATUSEHAT/SIMRS.",
    solution:
      "Arsitektur manajemen EHR terdesentralisasi yang memadukan Hyperledger Fabric untuk audit jejak medis yang tidak dapat dimanipulasi, enkripsi payload data tingkat field (AES-256-GCM), dan gateway interoperabilitas SATUSEHAT/SIMRS.",
    keyFeatures: [
      "Enkripsi payload rekam medis menggunakan AES-256-GCM dengan manajemen kunci terisolasi",
      "Buku besar transaksi Hyperledger Fabric v2.5 dengan audit trail permanen",
      "Anchor smart contract Solidity untuk verifikasi integritas root hash eksternal",
      "Integrasi regulasi SATUSEHAT Kemenkes RI dan adapter SIMRS",
      "Kontrol akses berbasis peran (RBAC) untuk Dokter, Pasien, dan Administrator Rumah Sakit",
      "Persetujuan pasien (consent management) berbasis tanda tangan kriptografi",
    ],
    architecture: {
      overview:
        "Arsitektur berlapis yang memisahkan antarmuka Next.js reaktif, gateway API off-chain berkinerja tinggi, dan jaringan konsorsium blockchain Hyperledger Fabric.",
      components: [
        {
          title: "1. Antarmuka Web Pasien & Klinis",
          description:
            "Aplikasi Next.js dengan dashboard visualisasi rekam medis terenkripsi dan manajemen persetujuan akses.",
        },
        {
          title: "2. Gateway API & Kriptografi",
          description:
            "Layanan API Node.js/TypeScript untuk derivasi kunci, enkripsi field AES-256, dan validasi sesi.",
        },
        {
          title: "3. Jaringan Konsorsium Blockchain",
          description:
            "Peer node Hyperledger Fabric yang menjalankan chaincode Go/TypeScript untuk merekam mutasi data.",
        },
        {
          title: "4. Adapter Standar SATUSEHAT",
          description:
            "Modul transformer data klinis lokal ke dalam format resource HL7 FHIR resmi kementerian kesehatan.",
        },
      ],
    },
    techStack: [
      "TypeScript",
      "Next.js",
      "Hyperledger Fabric v2.5",
      "Solidity",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],
    highlights: [
      "Arsitektur zero-knowledge storage di mana server database tidak dapat membaca rekaman terenkripsi",
      "Kepatuhan regulasi rekam medis elektronik nasional (SATUSEHAT Kemenkes)",
      "Audit trail tamper-proof diuji pada jaringan konsorsium multi-node",
    ],
  },
  {
    slug: "harvest_drone",
    name: "Harvest_Drone",
    displayName: "Harvest_Drone (Tugas Akhir)",
    tagline:
      "Tugas Akhir di Universitas Komputer Indonesia (IPK 3.39) — Sistem Misi UAV Otonom untuk Pertanian Presisi berbasis ROS 2 Jazzy, PX4 & Gazebo",
    description:
      "Sistem kendali misi drone otonom terpadu untuk monitoring lahan pertanian yang dikembangkan sebagai penelitian Tugas Akhir sarjana di Universitas Komputer Indonesia (IPK 3.39). Mengintegrasikan ROS 2 Jazzy, PX4 Autopilot, dunia simulasi fisika Gazebo Harmonic 3D, sensor LiDAR 2D untuk penghindaran rintangan dinamis, dan dashboard Ground Control Station (GCS) berbasis Next.js 15.",
    htmlUrl: "https://github.com/MTaufikIqball00/Harvest_Drone",
    homepageUrl: null,
    language: "Python",
    languageColor: "#3572A5",
    stars: 2,
    forks: 0,
    updatedAt: "2026-10-30T04:33:18Z",
    createdAt: "2026-10-26T15:26:01Z",
    topics: [
      "ros2",
      "px4",
      "gazebo",
      "drone",
      "precision-agriculture",
      "lidar",
      "path-planning",
      "nextjs",
    ],
    isArchived: false,
    isPinned: true,
    category: "Autonomous Systems & Robotics",
    problemStatement:
      "Monitoring lahan pertanian berskala luas secara manual membutuhkan tenaga kerja intensif, lambat, dan tidak akurat dalam mendeteksi degradasi tanaman serta menentukan waktu panen yang optimal.",
    solution:
      "Sistem otonom drone pertanian presisi yang menghubungkan middleware ROS 2 Jazzy dan PX4 Autopilot untuk survei waypoint otomatis (pola Boustrophedon), penghindaran rintangan LiDAR dinamis, serta transmisi telemetri real-time ke web GCS Next.js 15.",
    keyFeatures: [
      "Perencanaan misi penerbangan otomatis dengan pola survei Boustrophedon dan A*",
      "Penghindaran rintangan dinamis real-time menggunakan sensor LiDAR 2D",
      "Integrasi jembatan komunikasi micro-XRCE-DDS antara ROS 2 Jazzy dan PX4 Autopilot",
      "Dunia simulasi fisika 3D Gazebo Harmonic dengan model medan lahan pertanian realistis",
      "Dashboard Ground Control Station (GCS) Next.js 15 dengan peta offline PMTiles",
      "Pipeline estimasi indeks vegetasi (NDVI) dan fotogrametri ortofoto udara",
    ],
    architecture: {
      overview:
        "Arsitektur sistem otonom tiga tingkat: node komputasi on-board drone (ROS 2/PX4), simulator fisika SITL (Gazebo), dan dashboard stasiun kendali darat (Next.js GCS).",
      components: [
        {
          title: "1. Autopilot & Kendali On-board (PX4)",
          description:
            "Firmware pengendali stabilitas wahana, navigasi GPS/IMU, dan eksekusi penerbangan autonomous waypoint.",
        },
        {
          title: "2. Middleware & Sensor Perseptual (ROS 2)",
          description:
            "Node pemrosesan data pointcloud LiDAR 2D, penghindaran tubrukan dinamis, dan kalkulasi jalur A*.",
        },
        {
          title: "3. Simulasi Fisika 3D (Gazebo Harmonic)",
          description:
            "Lingkungan simulasi Software-In-The-Loop (SITL) dengan simulasi dinamika angin dan sensor lidar.",
        },
        {
          title: "4. Ground Control Station (Next.js 15)",
          description:
            "Antarmuka operator web dengan WebSocket telemetry streaming dan visualisasi jalur misi interaktif.",
        },
      ],
    },
    techStack: [
      "Python 3.12",
      "ROS 2 Jazzy",
      "PX4 Autopilot",
      "Gazebo Harmonic",
      "Next.js 15",
      "OpenCV",
      "LiDAR 2D",
    ],
    highlights: [
      "Projek Tugas Akhir (Skripsi) di Universitas Komputer Indonesia dengan perolehan IPK 3.39",
      "Survei waypoint otomatis dengan jangkauan presisi dan toleransi margin keamanan",
      "Penghindaran rintangan LiDAR dinamis dengan latensi responsif di bawah 50ms",
      "Stasiun kendali darat mandiri dengan dukungan peta offline untuk area perkebunan terpencil",
    ],
  },
  {
    slug: "llmops-evaluasi-model-end-to-end",
    name: "LLMOps-Evaluasi-Model-End-To-End",
    displayName: "LLMOps Control Center",
    tagline: "Pipeline Evaluasi End-to-End LLM untuk Pengukuran Halusinasi & Observabilitas Model",
    description:
      "Pusat kontrol dan pipeline evaluasi komprehensif untuk Large Language Models. Mengukur tingkat halusinasi, relevansi jawaban, dan kesesuaian konteks menggunakan framework Ragas dan TruLens, didukung metrik performa Prometheus, tracing span terdistribusi, dan backend Rust Axum.",
    htmlUrl: "https://github.com/MTaufikIqball00/LLMOps-Evaluasi-Model-End-To-End",
    homepageUrl: null,
    language: "Rust",
    languageColor: "#dea584",
    stars: 2,
    forks: 0,
    updatedAt: "2026-10-31T08:42:04Z",
    createdAt: "2026-10-26T15:26:01Z",
    topics: [
      "llmops",
      "ragas",
      "trulens",
      "rust",
      "axum",
      "prometheus",
      "evaluation",
      "ai-safety",
      "typescript",
    ],
    isArchived: false,
    isPinned: true,
    category: "AI & LLMOps",
    problemStatement:
      "Penerapan LLM dalam produksi seringkali menghadapi risiko halusinasi, regresi performa saat pembaruan prompt/model, serta ketiadaan metrik kuantitatif yang objektif untuk mengevaluasi kualitas output sebelum dirilis ke pengguna.",
    solution:
      "Pipeline evaluasi LLMOps otomatis end-to-end yang memvalidasi output model terhadap skor faithfulness, relevansi konteks, dan toksisitas menggunakan Ragas dan TruLens, dilengkapi sistem observabilitas metrik Prometheus dan gateway Rust Axum.",
    keyFeatures: [
      "Scoring halusinasi dan kesesuaian fakta otomatis (Faithfulness & Answer Relevance)",
      "Pengukuran presisi dan recall konteks dokumen retrieval RAG",
      "Backend analitik Rust Axum dengan pemrosesan metrik berkecepatan tinggi",
      "Dashboard observabilitas dengan integrasi Prometheus dan OpenMetrics",
      "Distributed tracing untuk memvisualisasikan waterfall latency tiap tahapan rantai inferensi",
      "Sistem regression testing otomatis yang menggagalkan pipeline CI/CD jika akurasi model menurun",
    ],
    architecture: {
      overview:
        "Arsitektur evaluasi end-to-end yang menghubungkan harness benchmarking evaluasi, server analitik Rust, dan dashboard visualisasi performa model.",
      components: [
        {
          title: "1. Harness Evaluasi (Ragas & TruLens)",
          description:
            "Modul penilai yang membandingkan pasangan pertanyaan, konteks referensi, dan jawaban model secara objektif.",
        },
        {
          title: "2. Server Agregasi Metrik (Rust Axum)",
          description:
            "Layanan backend berkinerja tinggi yang mengumpulkan skor evaluasi, menghitung persentil, dan mengekspos OpenMetrics.",
        },
        {
          title: "3. Mesin Observabilitas (Prometheus)",
          description:
            "Penyimpanan time-series yang memantau tren latensi (p50/p95/p99), token consumption, dan rasio halusinasi model.",
        },
        {
          title: "4. Dashboard Monitoring LLMOps",
          description:
            "Antarmuka web interaktif untuk membandingkan performa berbagai model (model staging) dan versi prompt.",
        },
      ],
    },
    techStack: [
      "Rust (Axum)",
      "Python",
      "Ragas",
      "TruLens",
      "Prometheus",
      "TypeScript",
      "Next.js",
    ],
    highlights: [
      "Pencegahan regresi model otomatis melalui quality gates terukur pada pipeline CI/CD",
      "Dukungan multi-model benchmarking untuk membandingkan efisiensi biaya dan akurasi",
      "Observabilitas performa latensi dan akurasi berbasis standar OpenMetrics",
    ],
  },
  {
    slug: "lms",
    name: "LMS",
    displayName: "LMS (Kemendikbud Bandung)",
    tagline:
      "Pengalaman Kerja di Kemendikbud Bandung (Full Stack Developer, 2 Bulan) — LMS Enterprise dengan Profiling Mahasiswa (K-Means) & Multi-Tenansi",
    description:
      "Platform Learning Management System tingkat enterprise yang dikembangkan selama masa kerja 2 bulan sebagai Full Stack Developer di Kemendikbud Bandung. Dibangun menggunakan Next.js 15, PostgreSQL, dan Supabase dengan sistem peringatan dini berbasis clustering K-Means untuk memetakan keterlibatan mahasiswa, arsitektur multi-tenant, dan kuis interaktif.",
    htmlUrl: "https://github.com/MTaufikIqball00/LMS",
    homepageUrl: null,
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2,
    forks: 0,
    updatedAt: "2026-10-31T06:40:51Z",
    createdAt: "2026-10-26T15:26:01Z",
    topics: [
      "nextjs",
      "typescript",
      "supabase",
      "postgresql",
      "kmeans",
      "machine-learning",
      "rbac",
      "lms",
    ],
    isArchived: false,
    isPinned: true,
    category: "Enterprise Web & Healthcare",
    problemStatement:
      "Platform LMS standar seringkali tidak memiliki analitik prediktif untuk mendeteksi penurunan kinerja mahasiswa sejak dini, serta kesulitan mengelola ribuan pengguna dengan peran berbeda secara terisolasi.",
    solution:
      "Arsitektur LMS modern berbasis Next.js 15 dan Supabase PostgreSQL yang mengintegrasikan algoritma clustering K-Means untuk memetakan risiko akademik mahasiswa secara otomatis, didukung kontrol akses multi-tenant yang ketat.",
    keyFeatures: [
      "Sistem peringatan dini (early warning) mahasiswa berbasis algoritma clustering K-Means",
      "Kontrol akses berbasis peran (RBAC) terperinci untuk Dosen, Mahasiswa, dan Administrator",
      "Pelacakan kemajuan materi kursus, absensi terotomatisasi, dan sistem kuis interaktif",
      "Penyimpanan berkas tugas terenkripsi dengan link unduhan bertanda tangan aman",
      "Dashboard analitik performa kelas interaktif dengan visualisasi data real-time",
    ],
    architecture: {
      overview:
        "Arsitektur Next.js 15 App Router modern yang memanfaatkan Server Components untuk render cepat dan Supabase PostgreSQL untuk persistensi data relasional terisolasi.",
      components: [
        {
          title: "1. Lapisan Presentasi & Server Components",
          description:
            "Halaman antarmuka Next.js 15 dengan optimasi streaming dan layout terisolasi berdasarkan peran pengguna.",
        },
        {
          title: "2. Mesin Analisis K-Means (Python/API)",
          description:
            "Modul pemroses data yang menghitung metrik keaktifan, skor kuis, dan keterlambatan tugas ke dalam cluster risiko.",
        },
        {
          title: "3. Basis Data & Row-Level Security",
          description:
            "PostgreSQL dengan kebijakan Row Level Security (RLS) guna mencegah kebocoran data antar kelas atau institusi.",
        },
        {
          title: "4. Penyimpanan Media & Aset",
          description:
            "Bucket penyimpanan Supabase dengan URL berbatas waktu (signed URLs) untuk proteksi berkas tugas.",
        },
      ],
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Scikit-Learn (K-Means)",
    ],
    highlights: [
      "Projek dikembangkan selama masa kerja 2 bulan sebagai Full Stack Developer di Kemendikbud Bandung",
      "Clustering K-Means otomatis untuk mendeteksi mahasiswa yang membutuhkan intervensi akademik",
      "Keamanan Row Level Security (RLS) PostgreSQL untuk isolasi hak akses data",
      "Dukungan multi-peran dengan navigasi responsif dan ramah perangkat bergerak",
    ],
  },
];

export const VERIFIED_PINNED_SLUGS = VERIFIED_FALLBACK_PROJECTS.map((p) => p.slug);

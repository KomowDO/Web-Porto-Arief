// src/data.ts

const base = import.meta.env.BASE_URL;

export const personalInfo = {
  name: "Muhammad Arief Wicaksono P. S.",
  role: "Mobile UI/Frontend Developer",
  bio: "Lulusan D3 Teknik Informatika PENS yang memiliki minat mendalam pada pengembangan Mobile (Kotlin/Dart) serta sistem Internet of Things (IoT) yang berfokus pada bidang akuakultur (ikan) dan tanaman. Berpengalaman membangun aplikasi mobile interaktif serta mengintegrasikan perangkat keras untuk otomatisasi dan pemantauan data secara real-time.",
  contact: {
    email: "arief.bogaro@gmail.com",
    github: "https://github.com/KomowDO",
  },
};

export const skills = [
  "Flutter, Dart, Kotlin, Mobile Dev",
  "React & TypeScript",
  "Node.js, Express.js, REST API",
  "MongoDB, Redis, PostgreSQL, MySQL",
  "CodeIgniter 4, PHP",
  "IoT (ESP32, MQTT, WebSocket, C++)",
  "Figma, UI/UX Design",
  "Git, GitHub, Notion",
];

export const projects = [
  {
    id: 1,
    title: "Smart Aquarium dengan Automated Adaptive Water Change",
    role: "Tugas Akhir (2026)",
    description:
      "Mengembangkan aplikasi mobile dan arsitektur IoT untuk pemantauan kualitas air akuarium secara real-time serta otomatisasi pengurasan air adaptif.\n\nMengintegrasikan mikrokontroler ESP32 untuk memproses data dari 4 sensor monitoring (pH, TDS, kekeruhan, suhu) secara real-time melalui protokol MQTT dan WebSocket.\n\nInfrastruktur backend menggunakan Node.js, Express.js, MongoDB, dan Redis.",
    tech: ["Flutter", "ESP32", "Node.js", "MongoDB", "Redis", "MQTT"],
    image: `${base}images/iot-1.jpeg`,
    mobileUiImages: [
      `${base}images/iotui-1.png`,
      `${base}images/iotui-2.png`,
      `${base}images/iotui-3.png`,
    ],
    hardwareImages: [`${base}images/iot-1.jpeg`],
  },
  {
    id: 2,
    title: "Aplikasi Pangkas (Manajemen RT/RW)",
    role: "Mobile UI Developer Intern - Diskominfo (2025)",
    description:
      "Merancang dan mengembangkan antarmuka aplikasi mobile Flutter secara mandiri dengan prinsip 'simplicity first' tanpa ketergantungan pada Figma.\n\nKarena pengguna melibatkan perangkat pengurus RT/RW yang beragam, desain antarmuka dibuat sangat ringkas, intuitif, dan ramah pengguna awam (termasuk orang tua atau pengguna gaptek). Memuat fitur pencarian warga berbasis NIK yang dioptimalkan serta modul integrasi langsung ke nomor WhatsApp untuk mempercepat koordinasi.",
    tech: ["Flutter", "Dart", "RESTful API", "Dio", "Provider", "UI/UX Design"],
    image: `${base}images/pangkas-main.png`,
    mobileUiImages: [
      `${base}images/pangkas-main.svg`,
      `${base}images/pangkas-1.jpeg`,
      `${base}images/pangkas-2.svg`,
      `${base}images/pangkas-3.svg`,
    ],
    hardwareImages: [],
  },
  {
    id: 3,
    title: "Aplikasi Paten (Manajemen THL)",
    role: "Mobile UI Developer Intern - Diskominfo (2025)",
    description:
      "Merancang tata letak dan antarmuka mobile secara mandiri untuk manajemen data Tenaga Harian Lepas (THL) dengan kebebasan penuh dalam eksplorasi desain.\n\nMenerapkan prinsip desain yang bersih, navigasi lugas, dan tombol aksi yang jelas guna memastikan kemudahan operasional bagi pengguna dari berbagai kalangan usia. Mengintegrasikan formulir pendaftaran anggota THL baru yang divalidasi dengan nomor nomenklatur resmi melalui jaringan API aman.",
    tech: ["Flutter", "Dart", "RESTful API", "Dio", "Provider", "UI/UX Design"],
    image: `${base}images/paten-main.png`,
    mobileUiImages: [
      `${base}images/paten-main.svg`,
      `${base}images/paten-2.svg`,
      `${base}images/paten-3.svg`,
    ],
    hardwareImages: [],
  },
  {
    id: 4,
    title: "Portal Web Dinas Kesehatan Kota Tangerang",
    role: "Frontend Web Developer (2025)",
    description:
      "Merancang dan membangun komponen antarmuka portal informasi kesehatan daerah menggunakan ekosistem React dan TypeScript.\n\nMenerjemahkan prototipe visual dari Figma menjadi kode web siap pakai, berfokus pada kelancaran menu navigasi, struktur tata letak responsif, serta penataan fungsionalitas bagian liputan video instansi.",
    tech: ["React", "TypeScript", "Figma", "UI Slicing"],
    image: `${base}images/dinkes.jpeg`,
    mobileUiImages: [`${base}images/dinkes.jpeg`],
    hardwareImages: [],
  },
  {
    id: 5,
    title: "Aplikasi Workout Woreps",
    role: "Tim Pengembang (2025)",
    description:
      "Mengembangkan antarmuka aplikasi mobile Flutter yang responsif dari prototipe visual grafis yang kompleks di Figma.\n\nMengimplementasikan fitur lokal pengingat jadwal olahraga (local workout reminder notifications) memanfaatkan paket Awesome Notifications dalam pengerjaan kolaboratif bersama rekan kuliah.",
    tech: ["Flutter", "Awesome Notifications", "Git", "Figma"],
    image: `${base}images/woreps-main.jpg`,
    mobileUiImages: [
      `${base}images/woreps-1.jpg`,
      `${base}images/woreps-2.jpg`,
    ],
    hardwareImages: [],
  },
];

export const hobbies = [
  "Merawat ikan hias (Channa maru & limbata)",
  "Paleontologi (Model ilmiah Dinosaurus)",
  "Game Development & Survival PvP",
];

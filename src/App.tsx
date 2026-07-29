// src/App.tsx
import { useState } from "react";
import { personalInfo, projects, skills } from "./data";

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  tech: string[];
  image?: string;
  mobileUiImages?: string[];
  hardwareImages?: string[];
}

function App() {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getNavClass = (tabName: string) => {
    return activeTab === tabName
      ? "text-sky-400 font-bold cursor-pointer transition-colors"
      : "text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors";
  };

  const getFilterClass = (filterName: string) => {
    return activeFilter === filterName
      ? "text-sky-400 font-medium cursor-pointer transition-colors"
      : "text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors";
  };

  const filteredProjects = (projects as Project[]).filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "IoT")
      return project.tech.includes("ESP32") || project.tech.includes("MQTT");
    if (activeFilter === "Web development")
      return (
        project.tech.includes("React") ||
        project.tech.includes("Web Technologies")
      );
    if (activeFilter === "Applications")
      return (
        project.tech.includes("Flutter") && !project.tech.includes("ESP32")
      );
    return true;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setActiveTab("ProjectDetail");
  };

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-300 font-sans p-4 md:p-10 flex justify-center relative">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SIDEBAR (Kiri) */}
        <aside className="lg:col-span-3 bg-[#1e1e1f] rounded-3xl p-6 border border-zinc-800 flex flex-col items-center h-fit xl:sticky xl:top-10">
          <div className="bg-[#2b2b2c] w-32 h-32 rounded-3xl mb-6 flex items-center justify-center overflow-hidden border border-zinc-700">
            <img
              src="/images/1.png"
              alt="Foto Profil"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold text-zinc-50 mb-2 text-center leading-tight">
            {personalInfo.name}
          </h1>
          <span className="bg-[#2b2b2c] text-xs px-4 py-1.5 rounded-lg mb-6 text-zinc-300">
            {personalInfo.role}
          </span>

          <div className="w-full border-t border-zinc-800 my-4"></div>

          <div className="w-full space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] p-3 rounded-xl text-sky-400 shadow-sm border border-zinc-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.53 4.518a2 2 0 002.94 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-zinc-500 uppercase font-semibold">
                  Email
                </p>
                <p className="text-sm text-zinc-200 truncate">
                  {personalInfo.contact.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] p-3 rounded-xl text-sky-400 shadow-sm border border-zinc-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold">
                  Lokasi
                </p>
                <p className="text-sm text-zinc-200">Surabaya, Indonesia</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] p-3 rounded-xl text-sky-400 shadow-sm border border-zinc-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold">
                  GitHub
                </p>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-200 hover:text-sky-400 transition-colors"
                >
                  github.com/KomowDO
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* KONTEN UTAMA (Kanan) */}
        <main className="lg:col-span-9 bg-[#1e1e1f] rounded-3xl border border-zinc-800 relative min-h-[700px] overflow-hidden">
          <nav className="absolute top-0 right-0 bg-[#2b2b2c] rounded-bl-3xl border-b border-l border-zinc-800 px-8 py-5 hidden md:block z-10">
            <ul className="flex gap-8 text-sm font-medium">
              <li
                className={getNavClass("About")}
                onClick={() => setActiveTab("About")}
              >
                About
              </li>
              <li
                className={getNavClass("Resume")}
                onClick={() => setActiveTab("Resume")}
              >
                Resume
              </li>
              <li
                className={getNavClass("Portfolio")}
                onClick={() => setActiveTab("Portfolio")}
              >
                Portfolio
              </li>
              <li
                className={getNavClass("Contact")}
                onClick={() => setActiveTab("Contact")}
              >
                Contact
              </li>
            </ul>
          </nav>

          <nav className="md:hidden bg-[#2b2b2c] border-b border-zinc-800 px-6 py-4">
            <ul className="flex justify-between text-sm font-medium">
              <li
                className={getNavClass("About")}
                onClick={() => setActiveTab("About")}
              >
                About
              </li>
              <li
                className={getNavClass("Resume")}
                onClick={() => setActiveTab("Resume")}
              >
                Resume
              </li>
              <li
                className={getNavClass("Portfolio")}
                onClick={() => setActiveTab("Portfolio")}
              >
                Portfolio
              </li>
              <li
                className={getNavClass("Contact")}
                onClick={() => setActiveTab("Contact")}
              >
                Contact
              </li>
            </ul>
          </nav>

          <div className="p-8 md:p-10 md:pt-20">
            {/* TAB ABOUT */}
            {activeTab === "About" && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-zinc-50 mb-4 inline-block relative">
                    About Me
                    <div className="absolute -bottom-2 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></div>
                  </h2>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-10 text-sm md:text-base">
                  {personalInfo.bio}
                </p>

                <h3 className="text-2xl font-bold text-zinc-50 mb-6">
                  What I'm Doing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#2b2b2c] p-6 rounded-2xl border border-zinc-800 flex gap-4">
                    <div className="text-sky-400 flex-shrink-0">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-zinc-50 font-bold mb-2">
                        Mobile Apps
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Pengembangan aplikasi lintas platform responsif dengan
                        Flutter.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#2b2b2c] p-6 rounded-2xl border border-zinc-800 flex gap-4">
                    <div className="text-sky-400 flex-shrink-0">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-zinc-50 font-bold mb-2">
                        Internet of Things
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Integrasi perangkat keras ESP32 dan pemrosesan sensor
                        via MQTT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB RESUME */}
            {activeTab === "Resume" && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-zinc-50 mb-4 inline-block relative">
                    Resume
                    <div className="absolute -bottom-2 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></div>
                  </h2>
                </div>

                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#2b2b2c] p-3 rounded-xl text-sky-400 border border-zinc-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-50">
                      Education
                    </h3>
                  </div>

                  <div className="relative border-l border-zinc-700 ml-5 pb-2">
                    <div className="relative pl-8 mb-8">
                      <div className="absolute w-3 h-3 bg-sky-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
                      <h4 className="text-lg font-bold text-zinc-50">
                        Politeknik Elektronika Negeri Surabaya (PENS)
                      </h4>
                      <p className="text-zinc-300 mb-2">
                        D3 - Teknik Informatika
                      </p>
                      <span className="text-sky-400 text-sm font-medium block">
                        2023 — 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#2b2b2c] p-3 rounded-xl text-sky-400 border border-zinc-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-50">
                      Experience
                    </h3>
                  </div>

                  <div className="relative border-l border-zinc-700 ml-5 pb-2">
                    <div className="relative pl-8 mb-8">
                      <div className="absolute w-3 h-3 bg-sky-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
                      <h4 className="text-lg font-bold text-zinc-50">
                        Mobile UI/Frontend Developer Intern
                      </h4>
                      <p className="text-zinc-300 mb-2">
                        Dinas Komunikasi Dan Informatika Kota Tangerang
                      </p>
                      <span className="text-sky-400 text-sm font-medium block mb-3">
                        Jul 2025 — Des 2025
                      </span>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        • Mengembangkan purwarupa mobile terpisah untuk Pangkas
                        (RT/RW) dan Paten (THL).
                        <br />• Mentranslasikan struktur data web menjadi
                        antarmuka mobile yang ringkas menggunakan Flutter.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-50 mb-6">
                    Tech Stack & Skills
                  </h3>
                  <div className="bg-[#2b2b2c] p-6 rounded-2xl border border-zinc-800 shadow-lg">
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-[#1e1e1f] text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB PORTFOLIO LIST */}
            {activeTab === "Portfolio" && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-zinc-50 mb-4 inline-block relative">
                    Portfolio
                    <div className="absolute -bottom-2 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></div>
                  </h2>
                </div>

                <ul className="flex gap-6 text-sm mb-8 overflow-x-auto pb-2">
                  <li
                    className={getFilterClass("All")}
                    onClick={() => setActiveFilter("All")}
                  >
                    All
                  </li>
                  <li
                    className={getFilterClass("Applications")}
                    onClick={() => setActiveFilter("Applications")}
                  >
                    Applications
                  </li>
                  <li
                    className={getFilterClass("Web development")}
                    onClick={() => setActiveFilter("Web development")}
                  >
                    Web development
                  </li>
                  <li
                    className={getFilterClass("IoT")}
                    onClick={() => setActiveFilter("IoT")}
                  >
                    IoT
                  </li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => handleProjectClick(project)}
                      className="bg-[#2b2b2c] rounded-2xl border border-zinc-800 overflow-hidden cursor-pointer group hover:border-sky-400 transition-colors shadow-lg flex flex-col"
                    >
                      <div className="h-44 bg-[#1e1e1f] flex items-center justify-center relative border-b border-zinc-800 overflow-hidden shrink-0">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 duration-500"
                          />
                        ) : (
                          <div className="text-zinc-600 group-hover:text-sky-400 transition-colors transform group-hover:scale-110 duration-300">
                            <svg
                              className="w-12 h-12"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex-1">
                        <h4 className="text-zinc-50 font-bold text-base mb-1 group-hover:text-sky-400 transition-colors line-clamp-2">
                          {project.title}
                        </h4>
                        <p className="text-zinc-400 text-sm mt-2">
                          {project.tech[0]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB PROJECT DETAIL (HALAMAN BARU) */}
            {activeTab === "ProjectDetail" && selectedProject && (
              <div className="animate-fade-in">
                <button
                  onClick={() => setActiveTab("Portfolio")}
                  className="mb-8 flex items-center gap-2 text-zinc-400 hover:text-sky-400 transition-colors font-medium bg-[#2b2b2c] px-4 py-2 rounded-xl border border-zinc-800 w-fit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                  Kembali ke Portfolio
                </button>

                <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3 leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-sky-400 font-medium mb-10 text-lg">
                  {selectedProject.role}
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-zinc-50 mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-sky-400 rounded-full"></div>
                    Deskripsi Proyek
                  </h3>
                  <p className="text-zinc-300 leading-relaxed whitespace-pre-line text-justify md:text-left">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-xl font-bold text-zinc-50 mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-sky-400 rounded-full"></div>
                    Teknologi
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-[#2b2b2c] text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GALERI 1: UI MOBILE */}
                {selectedProject.mobileUiImages &&
                  selectedProject.mobileUiImages.length > 0 && (
                    <div className="mb-12">
                      <h3 className="text-xl font-bold text-zinc-50 mb-6 flex items-center gap-2">
                        <div className="w-2 h-6 bg-sky-400 rounded-full"></div>
                        Tampilan Antarmuka (UI) Mobile
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.mobileUiImages.map(
                          (pic: string, idx: number) => (
                            <div
                              key={idx}
                              className="bg-[#2b2b2c] rounded-2xl border border-zinc-800 overflow-hidden shadow-lg"
                            >
                              <img
                                src={pic}
                                alt={`Mobile UI ${idx + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                {/* GALERI 2: HARDWARE / PERANGKAT KERAS */}
                {selectedProject.hardwareImages &&
                  selectedProject.hardwareImages.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-zinc-50 mb-6 flex items-center gap-2">
                        <div className="w-2 h-6 bg-sky-400 rounded-full"></div>
                        Dokumentasi Perangkat Keras (Hardware & PCB)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.hardwareImages.map(
                          (pic: string, idx: number) => (
                            <div
                              key={idx}
                              className="bg-[#2b2b2c] rounded-2xl border border-zinc-800 overflow-hidden shadow-lg"
                            >
                              <img
                                src={pic}
                                alt={`Hardware ${idx + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
              </div>
            )}

            {/* TAB CONTACT */}
            {activeTab === "Contact" && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-zinc-50 mb-4 inline-block relative">
                    Contact
                    <div className="absolute -bottom-2 left-0 w-12 h-1.5 bg-sky-400 rounded-full"></div>
                  </h2>
                </div>

                <div className="bg-[#2b2b2c] p-8 rounded-2xl border border-zinc-800">
                  <h3 className="text-xl font-bold text-zinc-50 mb-6">
                    Get in Touch
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-[#1e1e1f] text-zinc-300 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-[#1e1e1f] text-zinc-300 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="w-full bg-[#1e1e1f] text-zinc-300 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400"
                    ></textarea>
                    <button
                      type="button"
                      className="bg-sky-400 text-[#111111] font-bold px-8 py-3 rounded-xl hover:bg-sky-300 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

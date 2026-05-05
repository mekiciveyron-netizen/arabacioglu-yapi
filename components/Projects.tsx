"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    id: "01",
    title: "La Perla",
    category: "Karma Kullanım",
    year: "2022",
    location: "Efeler / Aydın",
    photo: "https://arabaciogluyapi.com/img/laperla-1.jpg",
    alt: "La Perla — Efeler dış cephe",
    tall: true,
  },
  {
    id: "02",
    title: "Fors Zeybek",
    category: "Rezidans",
    year: "2022",
    location: "Efeler / Aydın",
    photo: "https://arabaciogluyapi.com/img/fors-1.jpg",
    alt: "Fors Zeybek Rezidans dış görünüm",
    tall: false,
  },
  {
    id: "03",
    title: "Arabacıoğlu Villalar",
    category: "Konut",
    year: "2021",
    location: "Efeler / Aydın",
    photo: "https://arabaciogluyapi.com/img/villalarresim.jpg",
    alt: "Arabacıoğlu Villalar projesi",
    tall: false,
  },
  {
    id: "04",
    title: "La Perla Presidential",
    category: "Çatı Dairesi",
    year: "2022",
    location: "Efeler / Aydın",
    photo: "https://arabaciogluyapi.com/img/latest-project-5.png",
    alt: "La Perla Presidential çatı dairesi iç mekan",
    tall: false,
  },
  {
    id: "05",
    title: "Fors Zeybek Rezidans",
    category: "Rezidans",
    year: "2022",
    location: "Efeler / Aydın",
    photo: "https://arabaciogluyapi.com/img/latest-project-1.png",
    alt: "Fors Zeybek Rezidans detay görünüm",
    tall: true,
  },
];

function ProjectCard({
  project,
  delay = 0,
}: {
  project: (typeof projects)[0];
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="group cursor-pointer">
        {/* Image container — fixed height on mobile, taller on desktop */}
        <div
          className={`relative w-full overflow-hidden ${
            project.tall
              ? "h-64 sm:h-80 md:h-[480px]"
              : "h-56 sm:h-72 md:h-[340px]"
          }`}
        >
          <Image
            src={project.photo}
            alt={project.alt}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          <span className="absolute top-4 left-4 font-sans text-[10px] tracking-[0.3em] text-white/60 bg-black/25 px-2 py-1">
            {project.id}
          </span>
        </div>

        <div className="pt-4 pb-2 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-lg md:text-xl font-semibold text-stone-900 leading-snug">
              {project.title}
            </h3>
            <span className="font-sans text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1 block">
              {project.category} · {project.location}
            </span>
          </div>
          <span className="font-sans text-[11px] text-stone-400 mt-1 shrink-0">
            {project.year}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projeler" className="py-14 md:py-40 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col gap-3 mb-10 md:flex-row md:items-end md:justify-between md:mb-20">
          <FadeIn>
            <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-3">
              Seçili Çalışmalar
            </span>
            <h2 className="font-serif font-bold text-stone-900 text-3xl md:text-5xl lg:text-6xl leading-tight">
              Projeler
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-[13px] leading-relaxed text-stone-500 max-w-xs font-light">
              Her proje, mekânın ruhunu keşfetme ve özgün bir dil oluşturma sürecidir.
            </p>
          </FadeIn>
        </div>

        {/*
          Mobile  → single column, all cards full width
          md      → asymmetric two-column grid
          No col-start / negative offsets that could bleed on mobile
        */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Left col: project 1 full height + project 4 below */}
          <div className="flex flex-col gap-6 md:gap-8">
            <ProjectCard project={projects[0]} delay={0} />
            <ProjectCard project={projects[3]} delay={0.1} />
          </div>

          {/* Right col: offset down on md, project 2 + 3 stacked */}
          <div className="flex flex-col gap-6 md:gap-8 md:mt-20">
            <ProjectCard project={projects[1]} delay={0.05} />
            <ProjectCard project={projects[2]} delay={0.15} />
          </div>
        </div>

        {/* Full-width 5th project */}
        <div className="mt-6 md:mt-8">
          <ProjectCard project={projects[4]} delay={0} />
        </div>

        <FadeIn className="mt-12 flex justify-center">
          <button className="group flex items-center gap-4 font-sans font-semibold text-[11px] tracking-[0.3em] uppercase text-stone-500 hover:text-stone-900 transition-colors duration-300 py-3 min-h-[44px]">
            Tüm Projeler
            <span className="w-8 h-[1px] bg-stone-400 group-hover:w-14 group-hover:bg-stone-900 transition-all duration-500" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

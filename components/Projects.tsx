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
    alt: "La Perla Presidential çatı dairesi",
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
        <div
          className={`relative w-full overflow-hidden ${
            project.tall ? "h-64 sm:h-80 md:h-[500px]" : "h-56 sm:h-72 md:h-[360px]"
          }`}
        >
          <Image
            src={project.photo}
            alt={project.alt}
            fill
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
          {/* Dark overlay always present, lighter on hover */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
          {/* Gold accent bottom line on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          <span className="absolute top-4 left-4 font-sans text-[10px] tracking-[0.3em] text-[#C9A96E] bg-black/40 px-2.5 py-1 font-bold">
            {project.id}
          </span>
        </div>

        <div className="pt-5 pb-2 flex items-start justify-between gap-2 border-b border-zinc-900">
          <div>
            <h3 className="font-serif text-base md:text-lg font-bold text-white leading-snug tracking-wide">
              {project.title}
            </h3>
            <span className="font-sans text-[10px] tracking-[0.25em] text-zinc-600 uppercase mt-1.5 block font-medium">
              {project.category} · {project.location}
            </span>
          </div>
          <span className="font-sans text-[11px] text-zinc-700 mt-1 shrink-0 font-medium">
            {project.year}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projeler" className="py-24 md:py-44 px-4 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col gap-4 mb-14 md:flex-row md:items-end md:justify-between md:mb-24">
          <FadeIn>
            <span className="block font-sans text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4 font-semibold">
              Seçili Çalışmalar
            </span>
            <h2 className="font-serif font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
              Projeler
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-sans text-sm leading-relaxed text-zinc-500 max-w-xs font-medium">
              Her proje, mekânın ruhunu keşfetme ve özgün bir dil oluşturma sürecidir.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-6 md:gap-10">
            <ProjectCard project={projects[0]} delay={0} />
            <ProjectCard project={projects[3]} delay={0.1} />
          </div>
          <div className="flex flex-col gap-6 md:gap-10 md:mt-24">
            <ProjectCard project={projects[1]} delay={0.08} />
            <ProjectCard project={projects[2]} delay={0.16} />
          </div>
        </div>

        <div className="mt-6 md:mt-10">
          <ProjectCard project={projects[4]} delay={0} />
        </div>

        <FadeIn className="mt-16 flex justify-center">
          <button className="group flex items-center gap-5 font-sans font-bold text-sm tracking-[0.3em] uppercase text-zinc-600 hover:text-[#C9A96E] transition-colors duration-500 py-3 min-h-[44px]">
            Tüm Projeler
            <span className="w-8 h-[1px] bg-current group-hover:w-14 transition-all duration-500" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

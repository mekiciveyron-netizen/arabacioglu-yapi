"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    id: "01",
    title: "Boğaz Villası",
    category: "Konut",
    year: "2024",
    location: "İstanbul",
    size: "large",
    photo: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85&auto=format&fit=crop",
    alt: "Modern beyaz villa dış cephe",
  },
  {
    id: "02",
    title: "Orman Evi",
    category: "Konut",
    year: "2024",
    location: "Bolu",
    size: "small",
    photo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85&auto=format&fit=crop",
    alt: "Doğaya uyumlu modern orman evi",
  },
  {
    id: "03",
    title: "Anadolu Rezidans",
    category: "Çok Katlı",
    year: "2023",
    location: "Ankara",
    size: "medium",
    photo: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=85&auto=format&fit=crop",
    alt: "Modern rezidans apartman dış görünüm",
  },
  {
    id: "04",
    title: "Sahil Butik Otel",
    category: "Ticari",
    year: "2023",
    location: "Bodrum",
    size: "small",
    photo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85&auto=format&fit=crop",
    alt: "Sahil butik otel havuz alanı",
  },
  {
    id: "05",
    title: "Şehir Ofis Kulesi",
    category: "Ticari",
    year: "2022",
    location: "İzmir",
    size: "medium",
    photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=85&auto=format&fit=crop",
    alt: "Modern ofis kulesi cam cephe",
  },
];

// Responsive height classes per size, applied with Tailwind
const heightClass = {
  large:  "h-64 sm:h-80 md:h-[520px]",
  medium: "h-56 sm:h-72 md:h-[400px]",
  small:  "h-48 sm:h-64 md:h-[300px]",
};

function ProjectCard({
  project,
  delay = 0,
}: {
  project: (typeof projects)[0];
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="group relative overflow-hidden cursor-pointer">
        <div className={`relative overflow-hidden ${heightClass[project.size as keyof typeof heightClass]}`}>
          <Image
            src={project.photo}
            alt={project.alt}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500 z-10" />
          <span className="absolute top-4 left-4 z-20 font-sans text-[10px] tracking-[0.3em] text-white/60 bg-black/20 px-2 py-1">
            {project.id}
          </span>
        </div>

        <div className="pt-4 pb-2 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-lg md:text-xl font-light text-stone-900 leading-tight">
              {project.title}
            </h3>
            <span className="font-sans text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1 block">
              {project.category} · {project.location}
            </span>
          </div>
          <span className="font-sans text-[11px] text-stone-400 mt-1 shrink-0">{project.year}</span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projeler" className="py-16 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-20 gap-4">
        <FadeIn>
          <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-3">
            Seçili Çalışmalar
          </span>
          <h2 className="font-serif font-light text-stone-900 leading-tight text-4xl md:text-5xl lg:text-6xl">
            Projeler
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-stone-500 max-w-xs font-light">
            Her proje, mekânın ruhunu keşfetme ve özgün bir dil oluşturma sürecidir.
          </p>
        </FadeIn>
      </div>

      {/* Mobile: single column stack — Tablet+: asymmetric 12-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
        <div className="md:col-span-7">
          <ProjectCard project={projects[0]} delay={0} />
        </div>
        <div className="md:col-span-5 md:mt-24">
          <ProjectCard project={projects[1]} delay={0.1} />
        </div>

        <div className="md:col-span-4 md:col-start-2">
          <ProjectCard project={projects[3]} delay={0.1} />
        </div>
        <div className="md:col-span-6">
          <ProjectCard project={projects[2]} delay={0.2} />
        </div>

        <div className="md:col-span-8 md:col-start-3">
          <ProjectCard project={projects[4]} delay={0} />
        </div>
      </div>

      <FadeIn className="mt-12 flex justify-center">
        <button className="group flex items-center gap-4 font-sans text-[11px] tracking-[0.3em] uppercase text-stone-500 hover:text-stone-900 transition-colors duration-300 py-3">
          Tüm Projeler
          <span className="w-8 h-[1px] bg-stone-400 group-hover:w-16 group-hover:bg-stone-900 transition-all duration-500" />
        </button>
      </FadeIn>
    </section>
  );
}

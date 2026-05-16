import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "../data/projects";
import { useEffect, useState, useCallback } from "react";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close on Escape, navigate with arrow keys
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null || !project) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % project.gallery.length : null,
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + project.gallery.length) % project.gallery.length
            : null,
        );
    },
    [lightboxIndex, project],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-slate-200">
            Project Not Found
          </h1>
          <p className="text-zinc-400">
            The project you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-2 mt-4 font-medium transition-colors bg-blue-600 rounded-full hover:bg-blue-500"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null
        ? (i - 1 + project.gallery.length) % project.gallery.length
        : null,
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % project.gallery.length : null,
    );

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Scrollable inner container */}
            <div
              className="relative w-full max-w-5xl max-h-screen px-4 mx-auto my-8 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="fixed p-2 text-white transition-colors border rounded-full top-4 right-4 z-60 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-sm border-zinc-700/50"
                aria-label="Close lightbox"
              >
                <X size={22} />
              </button>

              {/* Image counter */}
              {project.gallery.length > 1 && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-60 px-4 py-1.5 rounded-full bg-zinc-800/80 backdrop-blur-sm text-zinc-300 text-sm font-medium border border-zinc-700/50">
                  {lightboxIndex + 1} / {project.gallery.length}
                </div>
              )}

              {/* Main image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={project.gallery[lightboxIndex]}
                alt={`${project.name} screenshot ${lightboxIndex + 1}`}
                className="w-auto h-full m-auto mt-12 mb-4 shadow-2xl rounded-2xl"
              />
            </div>

            {/* Prev / Next arrows (only when more than 1 image) */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="fixed p-3 text-white transition-colors -translate-y-1/2 border rounded-full left-4 top-1/2 z-60 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-sm border-zinc-700/50"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="fixed p-3 text-white transition-colors -translate-y-1/2 border rounded-full right-4 top-1/2 z-60 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-sm border-zinc-700/50"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="px-6 py-32 sm:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-12 transition-colors text-zinc-400 hover:text-white group"
          >
            <div className="p-2 transition-colors rounded-full glass-panel group-hover:bg-zinc-800">
              <ArrowLeft size={20} />
            </div>
            <span className="font-semibold">Back to Portfolio</span>
          </Link>

          {/* Header Hero Section */}
          <div
            className={`grid gap-12 items-start mb-24 ${
              project.gallery && project.gallery.length > 0
                ? "lg:grid-cols-2"
                : "max-w-3xl"
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div
                  className={`p-4 rounded-2xl bg-linear-to-br ${project.color} bg-opacity-10 w-24 h-24 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(59,130,246,0.15)]`}
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-200">
                  {project.name}
                </h1>
              </div>

              <p className="text-xl font-medium leading-relaxed text-zinc-300">
                {project.desc}
              </p>

              {project.longDesc && (
                <p className="text-lg leading-relaxed text-zinc-500">
                  {project.longDesc}
                </p>
              )}

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 text-sm font-semibold border rounded-full text-zinc-200 bg-zinc-800/80 border-zinc-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Visit Project
                  <ExternalLink size={18} />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 text-sm font-medium select-none">
                  <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse" />
                  Private / Unreleased Project
                </div>
              )}
            </div>

            {/* Featured showcase image */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative p-2 overflow-hidden glass-panel rounded-2xl group cursor-zoom-in"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={project.gallery[0]}
                  alt={`${project.name} showcase`}
                  className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none bg-linear-to-t from-zinc-950/60 to-transparent group-hover:opacity-100" />
                {/* Zoom hint */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-zinc-300 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Click to expand
                </div>
              </motion.div>
            )}
          </div>

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mt-20">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                  Project Gallery
                </h2>
                <div className="flex-1 h-px bg-linear-to-r from-blue-500/50 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.gallery.slice(1).map((imgUrl, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx}
                    className="relative overflow-hidden glass-panel rounded-2xl group cursor-zoom-in"
                    onClick={() => openLightbox(idx + 1)}
                  >
                    <img
                      src={imgUrl}
                      alt={`Screenshot ${idx + 2}`}
                      className="object-cover object-top w-full h-64 transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                      <div className="px-4 py-2 text-sm font-medium text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
                        View Full Image
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.main>
    </>
  );
}

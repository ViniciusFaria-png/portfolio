import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section id="HERO">
          {/* title */}
          <div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-snug flex flex-wrap gap-x-2">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 blur-2xl opacity-30"></span>
                <span className="relative bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_8px-rgba(255,255,255,5,0.6)]">
                  Full Stack
                </span>
              </span>
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#f16363] to-[#ff0000] blur-2xl opacity-30"></span>
                <span className="relative bg-gradient-to-r from-[#f16363] to-[#ff0000] bg-clip-text text-transparent drop-shadow-[0_0_8px-rgba(255,255,255,5,0.6)]">
                  Developer
                </span>
              </span>
            </h1>
          </div>
          {/* text */}
          <p className="text-sm sm:text-base md:tex-lg text-gray-400 max-w-xl leading-relaxed font-light">
            Transformo ideias em solucoes tecnológicas robustas e escaláveis.
          </p>
          {/* skills */}
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors">
              Node.js
            </span>
            <span className="px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors">
              JavaScript
            </span>
            <span className="px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors">
              TypeScript
            </span>
            <span className="px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors">
              PostgreSQL
            </span>
            <span className="px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors">
              MongoDB
            </span>
            <span className="px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors">
              Python
            </span>
            <span className="px-3 py-1.5 sm:block rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-400 hover:bg-white/30 transition-colors">
              Java
            </span>
          </div>
          {/* buttons */}
          <div className="flex flex-row gap-3 mt-5  flex-wrap">
            <a href="#PORTFOLIO">
              <Button>Projeto</Button>
            </a>
            <a href="#CONTATO">
              <Button>Contato</Button>
            </a>
          </div>

          <div className="flex flex-row gap-3 mt-5 flex-wrap">
            <a href="https://github.com/ViniciusFaria-png" target="_blank">
              <Button>Github</Button>
            </a>
            <a
              href="https://www.linkedin.com/in/viniciusrofifaria/"
              target="_blank"
            >
              <Button>LinkedIn</Button>
            </a>
          </div>
        </section>
        <section id="ABOUT">
          <p>Sobre mim</p>
        </section>
        <section id="EDUCATION">
          <p>Educação</p>
        </section>
        <section id="TECHNICAL EXPERTISE">
          <p>Expertise técnica</p>
        </section>
        <section id="EXPERIENCE">
          <p>Experiência</p>
        </section>
        <section id="PORTFOLIO">
          <p>Portfolio</p>
        </section>
        <section id="SKILLS">
          <p>Skills</p>
        </section>
        <section id="CONTATO">
          <p>Contato</p>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

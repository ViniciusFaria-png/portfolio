import Button from "@/components/atoms/Button";
import SkillBanner from "@/components/atoms/SkillBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section
          className="hero grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          id="HERO"
        >
          {/* COL 1 */}
          <div>
            {/* title */}
            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-snug flex flex-wrap gap-x-2 mb-4">
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
            <p className="text-sm sm:text-base md:tex-lg text-gray-400 max-w-xl leading-relaxed font-light mb-6">
              Transformo ideias em solucoes tecnológicas robustas e escaláveis.
              Acredito que tecnologia deve simplificar a vida das pessoas. Por
              isso, dedico-me a criar soluções que não apenas funcionem, mas que
              sejam intuitivas, seguras e preparadas para crescer junto com o
              negócio.
            </p>
            {/* skills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <SkillBanner>Node.js</SkillBanner>
              <SkillBanner>JavaScript</SkillBanner>
              <SkillBanner>TypeScript</SkillBanner>
              <SkillBanner>PostgreSQL</SkillBanner>
              <SkillBanner>MongoDB</SkillBanner>
              <SkillBanner>Python</SkillBanner>
              <SkillBanner>Java</SkillBanner>
            </div>
            {/* buttons */}
            <div className="flex flex-row gap-3 flex-wrap mb-6">
              <a href="#PORTFOLIO">
                <Button>Projeto</Button>
              </a>
              <a href="#CONTATO">
                <Button>Contato</Button>
              </a>
              <a href="">
                <Button>Currículo</Button>
              </a>
            </div>
            {/* buttons */}
            <div className="flex flex-row gap-3 flex-wrap">
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
          </div>
          {/* Col 2 */}
          <div>
            {/* image */}
            <div className="hidden lg:block">
              <Image
                src="/images/programming-guy.svg"
                alt="Developer illustration"
                width={500}
                height={300}
                className="w-full"
              />
            </div>
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

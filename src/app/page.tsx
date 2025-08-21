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
                <Button>Projetos</Button>
              </a>
              <a href="#CONTATO">
                <Button>Contato</Button>
              </a>
              <a
                href="/cv/vinicius.pdf"
                download="vinicius_faria-cv"
                target="_blank"
              >
                <Button>Currículo</Button>
              </a>
            </div>
            {/* buttons */}
            <div className="flex flex-row gap-3 flex-wrap">
              <a
                href="https://www.linkedin.com/in/viniciusrofifaria/"
                target="_blank"
              >
                <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </div>
              </a>
              <a href="https://github.com/ViniciusFaria-png" target="_blank">
                <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg
                    role="img"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
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

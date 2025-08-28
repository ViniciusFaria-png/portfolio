import Hero from "@/pages/HeroSection";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero></Hero>
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

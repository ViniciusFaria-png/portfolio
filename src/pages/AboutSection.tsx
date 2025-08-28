import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="about-section grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      id="ABOUT"
    >
      {/* COL 1 */}
      <div className="flex flex-col gap-4">
        <Image
          src="/images/Eu.jpeg"
          alt="Vinícius Faria"
          width={300}
          height={150}
          className="w-full rounded-full border-4 bg-gradient-to-r from-[#f16363] to-[#ff0000] shadow-lg"
        ></Image>
      </div>

      {/* COL 2 */}
      <div>
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-snug flex flex-wrap gap-x-2 mb-4">
          <span className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_8px-rgba(255,255,255,5,0.6)]">
              Sobre
            </span>
          </span>
        </h2>
        <p className="text-sm sm:text-base md:tex-lg text-gray-400 max-w-xl leading-relaxed font-light mb-6">
          Desenvolvedor Full Stack, bacharelado em Ciência da Computação,
          pós-graduando em desenvolvimento Full Stack e graduando em Sistemas
          para Internet. Com experiência em Suporte Técnico e Desenvolvimento
          Web, possuo habilidades em diversas tecnologias como Node.js,
          JavaScript, TypeScript, PostgreSQL, MongoDB, Python, Java. Além de
          React, Next.js e TailwindCSS. Apaixonado por tecnologia desde a
          infância, estou sempre em busca de novos desafios e oportunidades para
          aprender e crescer profissionalmente. Meu objetivo é contribuir para o
          sucesso de projetos inovadores, entregando soluções tecnológicas
          eficientes e de alta qualidade.
        </p>
      </div>
    </section>
  );
}

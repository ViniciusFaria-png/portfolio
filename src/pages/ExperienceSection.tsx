import Image from "next/image";
export default function ExperienceSection() {
  const experienceData = [
    {
      id: 1,
      company: "Vega Solutions",
      logo: "/images/VEGA-SOLUTIONS.png",
      position: "Desenvolvedor Front-end",
      period: "Setembro 2025 - Presente",
    },
    {
      id: 2,
      company: "Freelancer",
      logo: "/images/Freelancer.png",
      position: "Desenvolvedor Web",
      period: "Julho 2024 - Presente",
    },
    {
      id: 3,
      company: "Interativa Treinamentos",
      logo: "/images/interativa.jpg",
      position: "Intrutor de Informática",
      period: "Maio 2023 - Setembro 2023",
    },
    {
      id: 4,
      company: "Comércio de Balanças São Roque",
      logo: "/images/Balanças.png",
      position: "Analista de Suporte",
      period: "Janeiro 2021 - Março 2022",
    },
  ];

  return (
    <section id="EDUCATION" className="p-8">
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-snug flex flex-wrap gap-x-2 mb-4">
        <span className="relative inline-block">
          <span className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 blur-2xl opacity-30"></span>
          <span className="relative bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_8px-rgba(255,255,255,5,0.6)]">
            Experiência
          </span>
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {experienceData.map((experience) => (
          <article
            key={experience.id}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex-shrink-0">
                <Image
                  src={experience.logo}
                  alt={`Logo da ${experience.company}`}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white/20 shadow-lg"
                  priority={experience.id === 1}
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {experience.position}
                </h3>
                <p className="text-blue-200 font-medium mb-1">
                  {experience.company}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-300">
                  <time dateTime={experience.period}>{experience.period}</time>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

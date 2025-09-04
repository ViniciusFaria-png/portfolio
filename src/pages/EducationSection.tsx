import Image from "next/image";
export default function EducationSection() {
  const educationData = [
    {
      id: 1,
      institution: "Universidade Presbiteriana Mackenzie",
      logo: "/images/mackenzie-logo.jpg",
      course: "Bacharelado em Ciência da Computação",
      period: "Janeiro 2020 - Julho 2024",
      status: "Concluído",
    },
    {
      id: 2,
      institution: "FIAP",
      logo: "/images/fiap-logo.png",
      course: "Pós-graduação em Desenvolvimento Full Stack",
      period: "Fevereiro 2025 - Dezembro 2025",
      status: "Em andamento",
    },
    {
      id: 3,
      institution: "FATEC",
      logo: "/images/fatec-logo.jpg",
      course: "Tecnólogo em Sistemas para Internet",
      period: "Agosto 2025 - Julho 2028",
      status: "Em andamento",
    },
  ];
  return (
    <section id="EDUCATION" className="p-8">
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-snug flex flex-wrap gap-x-2 mb-4">
        <span className="relative inline-block">
          <span className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 blur-2xl opacity-30"></span>
          <span className="relative bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_8px-rgba(255,255,255,5,0.6)]">
            Educação
          </span>
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {educationData.map((education) => (
          <article
            key={education.id}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex-shrink-0">
                <Image
                  src={education.logo}
                  alt={`Logo da ${education.institution}`}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white/20 shadow-lg"
                  priority={education.id === 1}
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {education.course}
                </h3>
                <p className="text-blue-200 font-medium mb-1">
                  {education.institution}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-300">
                  <time dateTime={education.period}>{education.period}</time>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      education.status === "Concluído"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {education.status}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

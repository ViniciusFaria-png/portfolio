import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="about-section grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      id="ABOUT"
    >
      {/* COL 1 */}
      <div>
        <h2 className="">Sobre Mim</h2>
        <Image
          src="/images/Eu.jpeg"
          alt="Vinícius Faria"
          width={500}
          height={300}
          className="w-full rounded-full border-4 border-blue-200 shadow-lg"
        ></Image>
      </div>

      {/* COL 2 */}
      <div>
        <p className="text-sm sm:text-base md:tex-lg text-gray-400 max-w-xl leading-relaxed font-light mb-6">
          Transformo ideias em solucoes tecnológicas robustas e escaláveis.
          Acredito que tecnologia deve simplificar a vida das pessoas. Por isso,
          dedico-me a criar soluções que não apenas funcionem, mas que sejam
          intuitivas, seguras e preparadas para crescer junto com o negócio.
        </p>
      </div>
    </section>
  );
}

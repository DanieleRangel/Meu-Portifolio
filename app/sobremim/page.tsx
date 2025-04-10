'use client';
import { motion } from "framer-motion";
import { ParticleCanvas } from "@/hooks/particle";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function SobreMim() {
  return (
    <>
      <main className="relative w-full overflow-x-hidden">
        <Navbar />
        <section
          className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
          id="sobremim"
        >
          <div className="absolute inset-0 -z-10">
            <ParticleCanvas />
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-content mb-4 text-center">
                Sobre mim
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mb-8" />
              <p className="text-lg text-content/80 text-justify max-w-3xl mx-auto">
              Oi! Eu sou a Daniele Rangel, mas pode me chamar de Dani.
              <p> Sou formada em Gestão de Recursos Humanos e, depois de muitos anos trabalhando com pessoas, atendimento e melhoria de processos, decidi seguir um novo caminho: a tecnologia!</p>
              <p> Hoje sou aluna do bootcamp da Generation Brasil, na turma DevAs Java80, onde estou me desenvolvendo como futura desenvolvedora fullstack.</p> 
              <p>Tenho estudado linguagens e ferramentas como Java, Spring Boot, JavaScript, TypeScript, React, HTML, CSS, Tailwind, MySQL e PostgreSQL.</p>
              <p>já participei da criação de projetos como uma aplicação bancária, um blog e um app de carona.</p>
              <p>Sou movida por desafios, curiosidade e pela vontade de fazer a diferença. Acredito que com empatia, dedicação e colaboração, a gente vai longe. </p>
              <p>Meu objetivo é continuar crescendo na área tech, construindo soluções que impactem positivamente a vida das pessoas.</p>
              </p>
              

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-content mb-4 text-center">
                Experiência profissional
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mb-8" />
              <div className="text-content/80 max-w-3xl mx-auto space-y-6">

                <div>
                  <h3 className="text-xl font-semibold">Projetos Freelancers</h3>
                  <p className="text-sm">02/25 - até o momento</p>
                  <p>
                    Desenvolvimento de landing pages utilizando React, TypeScript e TailwindCSS.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

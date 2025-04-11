
'use client';
import { motion } from "framer-motion";
import { FaNode, FaReact, FaAngular, FaJava, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiVite, SiPrimeng, SiMysql, SiSpringboot, SiShadcnui, SiBootstrap } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


const projects = [
    {
        title: "Site Ecommerce",
        description: "Um Site de ecommerce feito com Html e Css",
        url: "https://github.com/DanieleRangel/siteEcommerce",
        tech: [
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            /*
            { name: "Next.js", icon: SiNextdotjs, color: "000000" },
            { name: "Angular", icon: FaAngular, color: "#C50836" },
            { name: "MySQL", icon: SiMysql, color: "#1A6997" }
            { name: "Spring Boot", icon: SiSpringboot, color: "#71B544" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "TS", icon: SiTypescript, color: "#3178C6" },*/
        ],
        image: '/projects/Dashboard2.png'
    },
    {
        title: "loja de ecommerce Fandom",
        description: "Aplicação de e-commerce com carrinho interativo, listagem de produtos e total dinâmico, tudo em um layout responsivo.",
        url: "https://github.com/DanieleRangel/fandom-projeto",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        ],
        image: '/projects/ListaMercado.png'
    },
    {
        title: "Conta Bancária",
        description:"aplicação em Java que simula operações bancárias básicas, como criação de contas, saques, depósitos e saldo disponível, oferece uma interface simples e interativa.",
        url: "https://github.com/DanieleRangel/contabancaria",
        tech: [
            { name: "Java", icon: FaJava, color: "#096CAB" },
        ],
        image: '/projects/Hashbnb.png'
    },
    {
        title: "Cardápio",
        description: "uma site simples que apresenta um menu de pratos de forma organizada e responsiva.",
        url: "https://github.com/DanieleRangel/Cardapio",
        tech: [
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" }
        ],
        image: '/projects/Cozinhacriativa.png'
    },
    {
        title: "Blog Pessoal",
        description: "criar, visualizar e gerenciar postagens em um blog com autenticação de usuários e layout responsivo e integração com back-end.",
        url: "https://github.com/DanieleRangel/BlogPessoal-Front",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4" },
            { name: "TS", icon: SiTypescript, color: "#3178C6" },
            { name: "MySQL", icon: SiMysql, color: "#1A6997" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#71B544" },
        ],
        image: '/projects/PetDev.png'
    },
    {
        title: "Crud_farmacia",
        description: "simula o sistema de uma farmácia, permitindo cadastrar, visualizar, atualizar e remover produtos. Estrutura organizada para o controle de informações, como nome, preço e categoria dos itens.",
        url: "https://github.com/DanieleRangel/Crud_farmacia",
        tech: [
            { name: "Java", icon: FaJava, color: "#096CAB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#71B544" },
        ],
        image: '/projects/LoginPage.png'
    },
]


export default function Main() {
    return (
        <section className=" py-32 relative" id='work'>
            <div className="max-w-7xl mx-auto px-6">
                

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20"
                >

                    <h2 className="text-4xl md:text-5xl font-bold
                    text-content mb-4 text-center">Principais projetos</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary
                    to-tertiary rounded-full"/>

                </motion.div>
                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 relative z-10">

                    {
                        projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}

                                className="group relative h-[500px] rounded-3xl overflow-hidden
                    bg-surface border border-white/10 cursor-pointer"
                            >
                                
                                <motion.div
                                    className="h-[250px] relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>

                                
                                <motion.div
                                    className="p-6 h-[25px] bg-surface"
                                    transition={{ duration: 0.3 }}
                                >

                                    <div className="flex justify-between items-start
                            mb-4 group/title">

                                        <h3 className="text-2xl font-bold text-content">{project.title}</h3>
                                        {project.url && (
                                            <Link href={project.url} target="_blank" rel="noopener noreferrer" title={`Ver ${project.title}`}>
                                                <ArrowUpRightIcon
                                                    className="h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-300"
                                                />
                                            </Link>
                                        )}

                                    </div>
                                    <p className="text-content/80 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">

                                        {
                                            project.tech.map((tech, j) => (
                                                <span
                                                    key={j}
                                                    className="px-3 py-1 rounded-full bg-white/5 text-content/80
                                            text-sm border border-white/5
                                            hover:bg-surface transition-colors flex items-center
                                            gap-1 group/tech"
                                                >
                                                    <tech.icon
                                                        style={{ color: tech.color }}
                                                        className="w-4 h-4 transition-colors" />
                                                    <span className="group-hover/tech:text-content transition-colors">
                                                        {tech.name}
                                                    </span>
                                                </span>
                                            ))
                                        }

                                    </div>

                                </motion.div>
                            </motion.div>
                        ))
                    }


                </div>
                
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-20 relative z-[5]"
                >

                    <button className="relative px-8 py-3 rounded-full bg-surface
                    border border-white/10 hover:border-primary/10 transition-all group">
                        <span className="text-content transition-colors
                        relative z-[1]">
                            Ver mais
                        </span>
                        <div className="absolute inset-0 rounded-full
                        bg-gradient-to-r from-primary/10 to-tertiary/10
                        opacity-0 group-hover:opacity-100 transition-opacity"/>
                    </button>

                </motion.div> */}
            </div>

        </section>
    );
}
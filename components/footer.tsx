import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6
            lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Objetivo</h3>
                        <p className="text-gray-400">
                            Criar experiências digitais modernas com tecnologia atual e design de qualidade.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#projects" className="text-gray-400
                        hover:text-white transition-colors">Projetos</a></li>
                            <li><a href="#about" className="text-gray-400
                        hover:text-white transition-colors">Sobre mim</a></li>
                            <li><a href="#contact" className="text-gray-400
                        hover:text-white transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Redes e contato</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    href="https://github.com/DanieleRangel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/daniele-c-rangel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedInIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://outlook.live.com/mail/0/?login_hint=danielecrangel%40outlook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <EnvelopeIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://wa.me/5511978529090"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="text-gray-400 h-6 w-6 hover:text-white transition-colors" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Daniele Rangel
                        </p>
                    </div>
                </div>

            </div>

        </footer>
    )
}
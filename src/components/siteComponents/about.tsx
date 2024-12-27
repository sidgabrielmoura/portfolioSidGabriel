'use client'
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IconsAbout } from "./iconsAboutPage";
import {  } from 'react-icons'

export function About() {
    const [language, setLanguage] = useState("pt"); // Estado para idioma

    const content: any = {
        pt: {
            name: "Sid Gabriel Barbosa Moura",
            role: "Desenvolvedor Front-End & Designer",
            aboutTitle: "Sobre mim",
            aboutText1: `Sou desenvolvedor frontend e designer de websites, com experiência prática de um ano, atuando como freelancer e contratado. Especialista em transformar layouts em interfaces funcionais e responsivas, domino três linguagens, quatro frameworks e dois componentes de estilização, garantindo soluções modernas e eficazes.`,
            aboutText2: `Com dedicação ao aprendizado desde 2020 e formação em três cursos avançados, entrego projetos com excelência técnica, alinhados às melhores práticas do mercado. Minha prioridade é oferecer resultados que unem desempenho, estética e foco na experiência do usuário.`
        },
        en: {
            name: "Sid Gabriel Barbosa Moura",
            role: "Front-End Developer & Designer",
            aboutTitle: "About Me",
            aboutText1: `I am a frontend developer and website designer with one year of hands-on experience, working as a freelancer and employee. Specialized in transforming layouts into functional and responsive interfaces, I master three languages, four frameworks, and two styling components, ensuring modern and effective solutions.`,
            aboutText2: `With dedication to learning since 2020 and completion of three advanced courses, I deliver projects with technical excellence, aligned with market best practices. My priority is to offer results that combine performance, aesthetics, and user experience focus.`
        }
    };

    const handleLanguageChange = (lang: "pt" | "en") => setLanguage(lang);

    return (
        <>
            <main className="flex flex-col items-center px-2 py-[10px] justify-around gap-5
            lg:px-[50px] lg:py-[25px]">

                <IconsAbout />

                <section className="text-zinc-50 w-full mt-5">
                    <div className="text-zinc-100 flex items-center justify-center">
                        <div className="max-w-4xl w-full space-y-8">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="bg-[url(../assets/profile-image.jpeg)] bg-center bg-cover w-48 h-48 rounded-full border"/>
                                <div className="text-center md:text-left">
                                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-sky-300 to-green-500 bg-clip-text text-transparent animate-gradient">
                                        {content[language].name}
                                    </h1>
                                    <p className="text-xl text-zinc-400">{content[language].role}</p>
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-8 rounded-lg shadow-lg">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-semibold mb-4 text-zinc-200">
                                        {content[language].aboutTitle}
                                    </h2>

                                    <div className="flex gap-1 mb-2">
                                        <button onClick={() => handleLanguageChange("pt")} className="w-8 h-8">
                                            <div className="bg-[url(../assets/flags/brazil.png)] bg-cover bg-center w-full h-full"/>
                                        </button>
                                        <button onClick={() => handleLanguageChange("en")} className="w-8 h-8">
                                            <div className="bg-[url(../assets/flags/usa.png)] bg-cover bg-center w-full h-full"/>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-zinc-300 leading-relaxed">
                                    {content[language].aboutText1}
                                </p>
                                <p className="text-zinc-300 leading-relaxed mt-4">
                                    {content[language].aboutText2}
                                </p>
                            </div>
                        </div>
                        <style jsx global>{`
                            @keyframes gradient {
                                from { background-position: 0%; }
                                to { background-position: 100%; }
                            }
                            .animate-gradient {
                                background-size: 200% auto;
                                animation: gradient 3s ease infinite alternate;
                            }
                        `}</style>
                    </div>
                </section>
            </main>
        </>
    );
}

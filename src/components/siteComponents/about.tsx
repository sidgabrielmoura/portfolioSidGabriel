'use client'
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IconsAbout } from "./iconsAboutPage";
import {  } from 'react-icons'

export function About() {
    const [language, setLanguage] = useState("pt")

    const content: any = {
        pt: {
            name: "Sid Gabriel Barbosa Moura",
            role: "Desenvolvedor Front-End & Designer",
            aboutTitle: "Sobre mim",
            aboutText1: `Sou desenvolvedor frontend e designer, com experiência prática de um ano, atuando tanto como freelancer quanto como contratado. 
                         Especialista em transformar layouts em interfaces funcionais e responsivas, garantindo soluções modernas e eficazes.`,
            aboutText2: `Com experiências sólidas no front-end, entrego projetos com excelência técnica, alinhados às melhores práticas do mercado. 
                         Minha prioridade é oferecer resultados que unem desempenho, estética e foco na experiência do usuário.`
        },
        en: {
            name: "Sid Gabriel Barbosa Moura",
            role: "Front-End Developer & Designer",
            aboutTitle: "About Me",
            aboutText1: `I am a frontend developer and designer with one year of practical experience, working both as a freelancer and an employee. 
                         I specialize in transforming layouts into functional and responsive interfaces, ensuring modern and effective solutions.`,
            aboutText2: `With solid front-end experience, I deliver projects with technical excellence, aligned with the best market practices. 
                         My priority is to provide results that combine performance, aesthetics, and a strong focus on user experience.`
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

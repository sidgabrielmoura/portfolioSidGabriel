import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type CardsElements = {
    hrefGit: string,
    linkGitName: string,
    imageUrl: string,
    projectName: string,
    linkProjectView: string,
    linkProjectName: string,
    tools: string,
    layout: 'bars' | 'category'
}

export const ProjectCards = ({ hrefGit, linkGitName, projectName, linkProjectName, linkProjectView, tools, imageUrl, layout }: CardsElements) => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN

    const fetchGitHubData = async () => {
        const response = await fetch('https://api.github.com/users/sidgabrielmoura/repos?type=owner', {
            headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
        })
        
        if (!response.ok) {
            throw new Error('Erro ao acessar a API')
        }
        
        const data = await response.json()
    }

    useEffect(() => {
        fetchGitHubData()
    }, [])

    return (
        <>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-300 w-full text-[14px] sm:text-[16px]"><FaGithub /><a target="_blank" href={hrefGit} className="flex gap-2 items-center">{linkGitName}<FaExternalLinkAlt className="text-[12px]" /></a></div>

            <div className={`w-full border flex justify-between border-zinc-700 rounded-lg px-[20px] py-4 bg-zinc-900/40 flex-col gap-3 h-full
            md:flex-row`}>

                <div className={`h-full w-full flex items-center gap-3 ${layout === 'category' ? 'flex-col' : ''}`}>

                    <div className={`${imageUrl ? `${imageUrl} bg-cover bg-center rounded-xl hidden md:block ${layout === 'category' ? 'w-full min-h-[200px]' : 'min-w-[250px] h-[120px]'}`
                        : `h-[70px] w-[200px] bg-cover bg-center rounded-xl hidden bg-zinc-400 animate-pulse md:block ${layout === 'category' ? 'w-full min-h-[200px]' : 'min-w-[250px] h-[100px]'}`}`} />

                    <div className={`flex items-start w-full h-full flex-col justify-center ${layout === 'category' ? 'lg:flex-col lg:items-start lg:justify-center' : 'md:flex-row md:items-center md:justify-between'}`}>
                        <div className="flex justify-center flex-col ">
                            <h1 className="text-zinc-50 text-[14px]
                            md:text-[15px]">{projectName}</h1>
                            <p className="text-zinc-500 hover:text-zinc-300
                            transition-colors duration-300 hover:underline underline-offset-2 text-[12px]
                            md:text-[14px]"><a href={linkProjectView} target="_blank" className="flex gap-2 items-center">{linkProjectName} <FaExternalLinkAlt className="text-[12px]" /></a></p>
                        </div>

                        <div className={`flex justify-center flex-col ${layout === 'category' ? 'lg:text-start' : 'md:text-end'}`}>
                            <h1 className="text-zinc-50 text-[14px]
                            md:text-[15px]">tools</h1>
                            <p className={`text-zinc-500 cursor-default transition-colors duration-300 text-[12px]
                            md:text-[14px] ${layout === 'category' ? 'w-full' : 'max-w-[250px]'}`}>{tools}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
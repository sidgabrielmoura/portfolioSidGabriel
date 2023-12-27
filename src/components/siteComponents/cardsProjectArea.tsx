import { FaGithub } from "react-icons/fa";

type CardsElements = {
    hrefGit: string,
    linkGitName: string,
    imageUrl: string,
    projectName: string,
    linkProjectView: string,
    linkProjectName: string,
    tools: string,
}

export const ProjectCards = ({hrefGit, linkGitName, projectName, linkProjectName, linkProjectView, tools, imageUrl}: CardsElements) => {

    return(
        <>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-300"><FaGithub/><a target="_blank" href={hrefGit}>{linkGitName}</a></div>

            <div className={`w-full border flex justify-between border-zinc-700 rounded-lg px-[20px] py-4 bg-zinc-900/40
            md:flex-row
            min-[320px]:flex-col min-[320px]:gap-3`}>
                <div className="h-full flex items-center gap-3">

                    <div className={`${imageUrl ? `${imageUrl} h-[70px] w-[200px] bg-cover bg-center rounded-xl md:block
                    min-[320px]:hidden`
                    : 'h-[70px] w-[200px] bg-cover bg-center rounded-xl md:block min-[320px]:hidden bg-zinc-400 animate-pulse'}`} />

                    <div className="h-full flex justify-center flex-col ">

                        <h1 className="text-zinc-50
                        md:text-[15px]
                        min-[320px]:text-[14px]">{projectName}</h1>
                        <p className="text-zinc-500 hover:text-zinc-300
                        transition-colors duration-300 hover:underline underline-offset-2
                        md:text-[14px]
                        min-[320px]:text-[12px]"><a href={linkProjectView} target="_blank">{linkProjectName}</a></p>

                    </div>

                </div>

                <div className="flex justify-center flex-col">
                    <h1 className="text-zinc-50
                    md:text-[15px]
                    min-[320px]:text-[14px]">tools</h1>
                    <p className="text-zinc-500 cursor-default transition-colors duration-300
                    md:text-[14px]
                    min-[320px]:text-[12px]">{tools}</p>    
                </div>
            </div>
        </>
    )
}
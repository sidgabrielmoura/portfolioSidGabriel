import { FaGithub, FaExternalLinkAlt  } from "react-icons/fa";

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
            <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-300 w-full text-[14px]
            md:w-1/3 sm:text-[16px]"><FaGithub/><a target="_blank" href={hrefGit} className="flex gap-2 items-center">{linkGitName}<FaExternalLinkAlt className="text-[12px]"/></a></div>

            <div className={`w-full border flex justify-between border-zinc-700 rounded-lg px-[20px] py-4 bg-zinc-900/40 flex-col gap-3
            md:flex-row`}>
                
                <div className="h-full flex items-center gap-3">

                    <div className={`${imageUrl ? `${imageUrl} h-[100px] w-[200px] bg-cover bg-center rounded-xl hidden
                    md:block`
                    : 'h-[70px] w-[200px] bg-cover bg-center rounded-xl hidden bg-zinc-400 animate-pulse md:block'}`} />

                    <div className="h-full flex justify-center flex-col ">

                        <h1 className="text-zinc-50 text-[14px]
                        md:text-[15px]">{projectName}</h1>
                        <p className="text-zinc-500 hover:text-zinc-300
                        transition-colors duration-300 hover:underline underline-offset-2 text-[12px]
                        md:text-[14px]"><a href={linkProjectView} target="_blank" className="flex gap-2 items-center">{linkProjectName} <FaExternalLinkAlt className="text-[12px]"/></a></p>

                    </div>

                </div>

                <div className="flex justify-center flex-col">
                    <h1 className="text-zinc-50 text-[14px]
                    md:text-[15px]">tools</h1>
                    <p className="text-zinc-500 cursor-default transition-colors duration-300 max-w-[250px] text-[12px]
                    md:text-[14px]">{tools}</p>    
                </div>
            </div>
        </>
    )
}
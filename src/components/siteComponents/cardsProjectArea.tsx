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
            <div className="flex items-center gap-2 hover:text-zinc-50"><FaGithub/><a target="_blank" href={hrefGit}>{linkGitName}</a></div>

            <div className="w-full border flex justify-between border-zinc-500 bg-zinc-950 rounded-lg px-[20px] h-[16vh]
            md:flex-row
            min-[320px]:flex-col min-[320px]:gap-3">
                <div className="h-full flex items-center gap-3">

                    <div className={`${imageUrl ? `${imageUrl} h-[10vh] w-[10vw] bg-cover bg-center rounded-xl md:block min-[320px]:hidden`
                    : 'h-[10vh] w-[10vw] bg-cover bg-center rounded-xl md:block min-[320px]:hidden bg-zinc-400 animate-pulse'}`} />

                    <div className="h-full flex justify-center flex-col ">

                        <h1 className="text-zinc-50">{projectName}</h1>
                        <p className="text-zinc-500 hover:text-zinc-300
                        transition-colors duration-300 hover:underline"><a href={linkProjectView} target="_blank">{linkProjectName}</a></p>

                    </div>

                </div>

                <div className="h-full flex justify-center flex-col">
                    <h1 className="text-zinc-50">tools</h1>
                    <p className="text-zinc-500 cursor-default transition-colors duration-300 text-[15px]">{tools}</p>    
                </div>
            </div>
        </>
    )
}
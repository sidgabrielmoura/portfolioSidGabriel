'use client';
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select";
import { ProjectCards } from "./cardsProjectArea";
import { LayoutConfigButtons } from "./layoutConfigButtons";

export function ProjectsComp() {
    const smallProjects = [
        {
            hrefGit: "https://github.com/sidgabrielmoura/adverts-cmd",
            linkGitName: "sidgabrielmoura/adverts-cmd",
            imageUrl: "bg-[url(../assets/adverts-cmd.png)]",
            projectName: "adverts-cmd",
            linkProjectView: "https://adverts-cmd.vercel.app",
            linkProjectName: "adverts-cmd.vercel.app",
            tools: "Typescript / Nextjs / Node.js / postgres / API / Tailwindcss / React Hook Form / Zod / Shadcn/ui",
        },
        {
            hrefGit: "https://github.com/sidgabrielmoura/fastCube",
            linkGitName: "sidgabrielmoura/fastCube",
            imageUrl: "bg-[url(../assets/fast-cube-img.png)]",
            projectName: "fastCube",
            linkProjectView: "https://fast-cube.vercel.app",
            linkProjectName: "fast-cube.vercel.app",
            tools: "Tailwindcss / Next / React / TypeScript",
        },
        {
            hrefGit: "https://github.com/sidgabrielmoura/colors-table",
            linkGitName: "sidgabrielmoura/colors-table",
            imageUrl: "bg-[url(../assets/colors-table.png)]",
            projectName: "Colors-Table",
            linkProjectView: "https://colors-table.vercel.app",
            linkProjectName: "colors-table.vercel.app",
            tools: "Next / Tailwindcss / React / Shadcn/ui / TypeScript",
        },
    ]

    const bigProjects = [
        {
            hrefGit: "https://github.com/sidgabrielmoura/Voice-Notes",
            linkGitName: "sidgabrielmoura/Voice-Notes",
            imageUrl: "bg-[url(../assets/voice-notes.png)]",
            projectName: "Voice Notes",
            linkProjectView: "https://voice-notes-lyart.vercel.app",
            linkProjectName: "voice-notes-lyart.vercel.app",
            tools: "Vite / Tailwindcss / React / TypeScript / Speech Recognition API",
        },
    ]

    const [layout, setLayout] = useState<'bars' | 'category'>('bars')
    const [selectedOption, setSelectedOption] = useState<'Small Projects' | 'Big Projects'>('Small Projects')
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        const savedLayout = localStorage.getItem("configLayout") as 'bars' | 'category'
        if (savedLayout) setLayout(savedLayout)
    }, [])

    const updateLayout = (newLayout: 'bars' | 'category') => {
        setLayout(newLayout);
        localStorage.setItem("configLayout", newLayout)
    };

    const [modalIsShowing, setModalIsShowing] = useState(false)
    const toggleModal = () => setModalIsShowing(!modalIsShowing)

    const selectOption = (option: 'Small Projects' | 'Big Projects') => {
        setAnimating(true)
        setTimeout(() => {
            setSelectedOption(option);
            setAnimating(false)
        }, 200)
        toggleModal();
    };

    return (
        <section className="grid gap-3 py-5 lg:px-[50px] lg:py-[25px]">
            {modalIsShowing && <div className="absolute w-[95%] h-[90%] top-0 z-20" onClick={toggleModal} />}
            <div className="flex max-sm:flex-col items-center justify-end w-full md:gap-3 gap-2">
                <LayoutConfigButtons onUpdateLayout={updateLayout} />
                <main className="relative w-full md:w-auto z-[99]">
                    <section
                        className="h-[50px] bg-zinc-100/90 border border-zinc-500 px-8 cursor-pointer rounded-[8px]
                        font-semibold capitalize text-[13px] w-full truncate p-2 flex items-center"
                        onClick={toggleModal}
                    >
                        <div>project dimension</div>
                    </section>
                    {modalIsShowing && (
                        <section
                            className="absolute text-zinc-50 w-full bg-zinc-800 flex flex-col mt-4 rounded-2xl
                            overflow-hidden border border-zinc-600"
                        >
                            {['Small Projects', 'Big Projects'].map((option) => (
                                <div
                                    key={option}
                                    className="cursor-pointer hover:bg-zinc-700 py-3 px-4 flex justify-between items-center"
                                    onClick={() => selectOption(option as 'Small Projects' | 'Big Projects')}
                                >
                                    <span>{option}</span>
                                    {selectedOption === option && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-green-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}
                </main>
            </div>

            {/* Cards */}
            <div
                className={`grid gap-2 mt-1 w-full transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'} ${
                    layout === 'category' ? 'lg:grid-cols-3 md:grid-cols-2' : 'grid-cols-1'
                }`}
            >
                {selectedOption === 'Small Projects' &&
                    smallProjects.map((project, index) => (
                        <section
                            className="text-zinc-200 w-full flex flex-col gap-3 min-h-[200px]"
                            key={index}
                        >
                            <ProjectCards {...project} layout={layout} />
                        </section>
                    ))}

                {selectedOption === 'Big Projects' &&
                    bigProjects.map((project, index) => (
                        <section
                            className="text-zinc-200 w-full flex flex-col gap-3 min-h-[200px]"
                            key={index}
                        >
                            <ProjectCards {...project} layout={layout} />
                        </section>
                    ))}

                {[1, 2].map((_, index) => (
                    <section className="text-zinc-200 w-full flex flex-col gap-3" key={`placeholder-${index}`}>
                        <ProjectCards
                            hrefGit="..."
                            linkGitName="..."
                            imageUrl=""
                            projectName="building..."
                            linkProjectView=""
                            linkProjectName="..."
                            tools="..."
                            layout={layout}
                        />
                    </section>
                ))}
            </div>
        </section>
    );
}

'use client';
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select";
import { ProjectCards } from "./cardsProjectArea";
import { LayoutConfigButtons } from "./layoutConfigButtons";

export function ProjectsComp() {
    const projects = [
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
            hrefGit: "https://github.com/sidgabrielmoura/Voice-Notes",
            linkGitName: "sidgabrielmoura/Voice-Notes",
            imageUrl: "bg-[url(../assets/voice-notes.png)]",
            projectName: "Voice Notes",
            linkProjectView: "https://voice-notes-lyart.vercel.app",
            linkProjectName: "voice-notes-lyart.vercel.app",
            tools: "Vite / Tailwindcss / React / TypeScript / Speech Recognition API",
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
    ];

    const [layout, setLayout] = useState<'bars' | 'category'>('bars');

    useEffect(() => {
        const savedLayout = localStorage.getItem("configLayout") as 'bars' | 'category';
        if (savedLayout) setLayout(savedLayout);
    }, []);

    const updateLayout = (newLayout: 'bars' | 'category') => {
        setLayout(newLayout);
        localStorage.setItem("configLayout", newLayout);
    };

    return (
        <section className="grid gap-3 py-5 lg:px-[50px] lg:py-[25px]">
            <div className="flex max-sm:flex-col items-center justify-end w-full md:gap-3 gap-2">
                <LayoutConfigButtons onUpdateLayout={updateLayout}/>

                <Select disabled>
                    <SelectTrigger className="h-[50px] bg-zinc-100 border border-zinc-500 
                    rounded-[8px] font-semibold capitalize text-[13px] w-full truncate p-2
                    sm:w-1/2 lg:text-[14px] lg:p-3 lg:w-[20vw]">
                        <div>select the project dimension</div>
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900">
                        <SelectGroup className="text-zinc-200">
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="big">Big</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Cards */}
            <div className={`grid grid-cols-1 grid-flow-row gap-5 mt-1 w-full ${layout === 'category' ? 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1' : ''}`}>
                {projects.map((project, index) => (
                    <section className="text-zinc-200 w-full flex flex-col gap-3 min-h-[200px]" key={index}>
                        <ProjectCards {...project} layout={layout}/>
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

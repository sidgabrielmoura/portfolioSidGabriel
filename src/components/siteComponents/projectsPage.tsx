import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select";
import { Navbar } from "./navbar";
import { ProjectCards } from "./cardsProjectArea";
import { ContainerCards } from "./containerCards";
import { ButtonsProjectCards } from "./projectCardsButtonsLayoutConfig";

export function ProjectsComp(){

    return (
        <>
            <Navbar/>
            
                <section className="flex flex-col gap-3 py-[20px]
                lg:px-[50px] lg:py-[25px]">
                    <div className="flex items-center justify-end w-full gap-3">

                        <ButtonsProjectCards/>

                        <Select disabled={true}>
                            <SelectTrigger className="h-[50px] bg-zinc-100 border border-zinc-500 
                            rounded-[8px] font-semibold capitalize text-[13px] w-full truncate p-2
                            sm:w-1/2
                            lg:text-[14px] lg:p-3 lg:w-[20vw]">
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

                    <ContainerCards>

                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            
                            <ProjectCards 
                                hrefGit="https://github.com/sidgabrielmoura/adverts-cmd"
                                linkGitName="sidgabrielmoura/adverts-cmd"
                                imageUrl="bg-[url(../assets/adverts-cmd.png)]"
                                projectName="adverts-cmd"
                                linkProjectView="https://adverts-cmd.vercel.app"
                                linkProjectName="adverts-cmd.vercel.app"
                                tools="Typescript / Nextjs / Node.js / postgres / API / Tailwindcss / React Hook Form / Zod / Shadcn/ui"
                            />

                        </section>


                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <ProjectCards 
                                hrefGit="https://github.com/sidgabrielmoura/fastCube"
                                linkGitName="sidgabrielmoura/fastCube"
                                imageUrl="bg-[url(../assets/fast-cube-img.png)]"
                                projectName="fastCube"
                                linkProjectView="https://fast-cube.vercel.app"
                                linkProjectName="fast-cube.vercel.app"
                                tools="Tailwindcss / Next / React / TypeScript" 
                            />
                        </section>


                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <ProjectCards 
                                hrefGit="https://github.com/sidgabrielmoura/Voice-Notes"
                                linkGitName="sidgabrielmoura/Voice-Notes"
                                imageUrl="bg-[url(../assets/voice-notes.png)]"
                                projectName="Voice Notes"
                                linkProjectView="https://voice-notes-lyart.vercel.app"
                                linkProjectName="voice-notes-lyart.vercel.app"
                                tools="Vite / Tailwindcss / React / TypeScript / Speech Recognition API" 
                                />
                        </section>

                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <ProjectCards 
                                hrefGit="https://github.com/sidgabrielmoura/colors-table"
                                linkGitName="sidgabrielmoura/colors-table"
                                imageUrl="bg-[url(../assets/colors-table.png)]"
                                projectName="Colors-Table"
                                linkProjectView="https://colors-table.vercel.app"
                                linkProjectName="colors-table.vercel.app"
                                tools="Next / Tailwindcss / React / Shadcn/ui / TypeScript" 
                            />
                        </section>

                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <ProjectCards 
                                hrefGit="..."
                                linkGitName="..."
                                imageUrl=""
                                projectName="building..."
                                linkProjectView=""
                                linkProjectName="..."
                                tools="..." 
                            />
                        </section>
                        
                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <ProjectCards 
                                hrefGit="..."
                                linkGitName="..."
                                imageUrl=""
                                projectName="building..."
                                linkProjectView=""
                                linkProjectName="..."
                                tools="..." 
                            />
                        </section>

                    </ContainerCards>

                </section>
            
        </>
    )
}
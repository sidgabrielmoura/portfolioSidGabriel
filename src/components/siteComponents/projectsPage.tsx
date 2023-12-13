import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select";
import { Navbar } from "./navbar";
import { AiOutlineBars } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { ScrollArea } from "../ui/scroll-area";
import { ProjectCards } from "./cardsProjectArea";
import { ContainerCards } from "./containerCards";
import { ButtonsProjectCards } from "./projectCardsButtonsLayoutConfig";

export function ProjectsComp(){

    return (
        <>
            <Navbar/>
            
                <section className="flex flex-col gap-3 
                lg:px-[50px] lg:py-[25px]
                min-[320px]:px-[25px] min-[320px]:py-[20px]">
                    <div className="flex items-center justify-end w-full gap-3">

                        <ButtonsProjectCards/>

                        <Select disabled={true}>
                            <SelectTrigger className="h-[50px] bg-zinc-100 border border-zinc-500 
                            p-3 rounded-[8px] font-semibold capitalize
                            lg:text-[14px] lg:p-3 lg:w-[20vw]
                            min-[320px]:text-[13px] min-[320px]:w-[50%] min-[320px]:truncate min-[320px]:p-2">
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
                                hrefGit="https://github.com/sidgabrielmoura/text-convert"
                                linkGitName="sidgabrielmoura/text-convert"
                                imageUrl="bg-[url(../assets/textConvert.png)]"
                                projectName="Text-Convert"
                                linkProjectView="https://text-convert-henna.vercel.app"
                                linkProjectName="text-convert-henna.vercel.app"
                                tools="JavaScript / Html5 / Css3"
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
                                hrefGit="..."
                                linkGitName="..."
                                imageUrl=""
                                projectName="..."
                                linkProjectView="..."
                                linkProjectName="..."
                                tools="..." 
                                />
                        </section>

                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <ProjectCards 
                                hrefGit="..."
                                linkGitName="..."
                                imageUrl=""
                                projectName="..."
                                linkProjectView="..."
                                linkProjectName="..."
                                tools="..." 
                            />
                        </section>

                    </ContainerCards>

                </section>
            
        </>
    )
}
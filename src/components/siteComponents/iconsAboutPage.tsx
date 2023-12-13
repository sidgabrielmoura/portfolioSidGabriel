import { SiTailwindcss, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit, SiNodedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ScrollArea } from "../ui/scroll-area";

export function IconsAbout(){
    return(
        <>
            <ScrollArea>
                <DivIcons>
                    <SiTailwindcss className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">Tailwindcss</p>
                </DivIcons>
                
                <DivIcons>
                    <FaReact className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">React</p>
                </DivIcons>

                <DivIcons>
                    <SiNextdotjs className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">Next.js</p>
                </DivIcons>

                <DivIcons>
                    <SiJavascript className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">Javascript</p>
                </DivIcons>

                <DivIcons>
                    <SiHtml5 className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">Html5</p>
                </DivIcons>

                <DivIcons>
                    <SiCss3 className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">Css3</p>                                 
                </DivIcons>

                <DivIcons>
                    <SiBootstrap className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">Bootstrap</p>
                </DivIcons>

                <DivIcons>
                    <SiGit className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">Git</p>
                </DivIcons>

                <DivIcons>
                    <SiNodedotjs className="text-[25px] text-zinc-200 hover:text-emerald-500 transition-colors duration-300"/>
                    <p className="text-[15px] text-zinc-400 cursor-default">NodeJs</p>
                </DivIcons>
            </ScrollArea>
        </>
    )
}

type divElements = {
    children: React.ReactNode
}

const DivIcons = ({ children }: divElements) => {
    return(
        <>
            <div className="h-[70px] flex gap-3 text-zinc-300]">
                {children}
            </div>
        </>
    )
}
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select";
import { Navbar } from "./navbar";
import { AiOutlineBars } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { ScrollArea } from "../ui/scroll-area";

export function ProjectsComp(){

    return (
        <>
            <Navbar/>
            
                <section className="flex flex-col gap-3 
                lg:px-[50px] lg:py-[25px]
                min-[320px]:px-[25px] min-[320px]:py-[20px]">
                    <div className="flex items-center justify-end w-full gap-3">
                        <div className="h-[50px] bg-zinc-950 border border-zinc-500 p-1 rounded-[8px] flex
                        lg:w-[100px]
                        min-[320px]:w-[50%]">

                            <div className="transition-colors duration-200 rounded-md w-[50%] h-full hover:text-zinc-100 text-zinc-500 flex items-center justify-center"
                            >
                                <AiOutlineBars/>
                            </div>
                            <div className="transition-colors duration-200 rounded-md w-[50%] h-full hover:text-zinc-100 text-zinc-500 flex items-center justify-center"
                            >
                                <BiCategory/>
                            </div>

                        </div>

                        <Select>
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

                    <div className="flex gap-5 mt-4 w-full flex-col">
                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            
                            <div className="flex items-center gap-2 hover:text-zinc-50"><FaGithub/><a target="_blank" href="https://github.com/sidgabrielmoura/text-convert">sidgabrielmoura/text-convert</a></div>

                            <div className="w-full border flex justify-between border-zinc-500 bg-zinc-950 rounded-lg px-[20px] py-[3vh]
                            md:flex-row
                            min-[320px]:flex-col min-[320px]:gap-3">
                                <div className="h-full flex items-center gap-3">

                                        <div className="bg-[url(../assets/textConvert.png)] h-[10vh] w-[10vw] bg-cover bg-center rounded-xl
                                        md:block
                                        min-[320px]:hidden" />

                                    <div className="h-full flex justify-center flex-col ">

                                        <h1 className="text-zinc-50">Text-Convert</h1>
                                        <p className="text-zinc-500 hover:text-zinc-300
                                        transition-colors duration-300 hover:underline"><a href="https://text-convert-henna.vercel.app" target="_blank">text-convert-henna.vercel.app</a></p>

                                    </div>
                                </div>

                                <div className="h-full flex justify-center flex-col">
                                    <h1 className="text-zinc-50">tools</h1>
                                    <p className="text-zinc-500 cursor-default transition-colors duration-300 text-[15px]">JavaScript / Html5 / Css3</p>    
                                </div>
                            </div>

                        </section>


                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <div className="flex items-center gap-2 hover:text-zinc-50"><FaGithub/><a target="_blank" href="https://github.com/sidgabrielmoura/fastCube">sidgabrielmoura/fastCube</a></div>

                            <div className="w-full border flex justify-between border-zinc-500 bg-zinc-950 rounded-lg px-[20px] py-[3vh]
                            md:flex-row
                            min-[320px]:flex-col min-[320px]:gap-3">
                                <div className="h-full flex items-center gap-3">

                                    <div className="bg-[url(../assets/fast-cube-img.png)] h-[10vh] w-[10vw] bg-cover bg-center rounded-xl
                                        md:block
                                        min-[320px]:hidden"/> 
                                    
                                    <div className="h-full flex justify-center flex-col">
                                        <h1 className="text-zinc-50">FastCube</h1>
                                        <p className="text-zinc-500 hover:text-zinc-300
                                        transition-colors duration-300 hover:underline"><a href="https://fast-cube.vercel.app" target="_blank">fast-cube.vercel.app</a></p>
                                    </div>

                                </div>

                                <div className="h-full flex justify-center flex-col">
                                    <h1 className="text-zinc-50">tools</h1>
                                    <p className="text-zinc-500 cursor-default transition-colors duration-300 text-[15px]">Tailwindcss / Next / React / TypeScript</p>    
                                </div>
                                
                            </div>
                        </section>


                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <div className="flex items-center gap-2 hover:text-zinc-50"><FaGithub/>{/*<a href="" target="_blank">...</a>*/}...</div>

                            <div className="w-full border flex justify-between border-zinc-500 bg-zinc-950 rounded-lg px-[20px] py-[3vh] animate-pulse
                            md:flex-row
                            min-[320px]:flex-col min-[320px]:gap-3">
                                <div className="h-full flex items-center gap-3">

                                    {/* <div className="bg-[url()] bg-cover bg-center w-[30%] h-[100%] rounded-full
                                    md:block
                                    min-[320px]:hidden"/> */}

                                    <div className="h-full flex justify-center flex-col w-[300px]">
                                        <h1 className="text-zinc-50">...</h1>
                                        <p className="text-zinc-500 hover:text-zinc-50
                                        transition-colors duration-300 hover:underline">{/*<a href="" target="_blank">...</a>*/}...</p>
                                    </div>
                                </div>

                                <div className="h-full flex justify-center flex-col">
                                    <h1 className="text-zinc-50">tools</h1>
                                    <p className="text-zinc-500 cursor-default transition-colors duration-300 text-[15px]">...</p>    
                                </div>

                                
                            </div>
                        </section>


                        <section className="text-zinc-200 w-full flex flex-col gap-3">
                            <div className="flex items-center gap-2 hover:text-zinc-50"><FaGithub/>{/*<a href="" target="_blank">...</a>*/}...</div>

                            <div className="w-full border flex justify-between border-zinc-500 bg-zinc-950 rounded-lg px-[20px] py-[3vh] animate-pulse
                            md:flex-row
                            min-[320px]:flex-col min-[320px]:gap-3">
                                <div className="h-full flex items-center gap-3">

                                    {/* <div className="bg-[url()] bg-cover bg-center w-[30%] h-[100%] rounded-full
                                    md:block
                                    min-[320px]:hidden"/> */}

                                    <div className="h-full flex justify-center flex-col w-[300px]">
                                        <h1 className="text-zinc-50">...</h1>
                                        <p className="text-zinc-500 hover:text-zinc-50
                                        transition-colors duration-300 hover:underline">{/*<a href="" target="_blank">...</a>*/}...</p>
                                    </div>
                                </div>

                                <div className="h-full flex justify-center flex-col">
                                    <h1 className="text-zinc-50">tools</h1>
                                    <p className="text-zinc-500 cursor-default transition-colors duration-300 text-[15px]">...</p>    
                                </div>

                                
                            </div>
                        </section>

                    </div>
                </section>
            
        </>
    )
}
import { LiaArrowsAltVSolid } from "react-icons/lia";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

export function Navbar(){
    
    return(
        <>
            <section className="flex gap-4 items-center justify-between w-full">

                <div className="flex items-center 
                lg:gap-3
                min-[320px]:gap-2
                min-[425px]:gap-1">

                    <div className="bg-[url(../assets/vercelLogo.svg)] bg-cover bg-center bg-no-repeat 
                    lg:w-[25px] lg:h-[20px]  
                    md:w-[15px] md:h-[10px]
                    min-[320px]:w-[20px] min-[320px]:h-[11px]"/>
                    <p className="text-[#424242]">/</p>

                    <Avatar className="
                    lg:w-[40px] lg:h-[40px]
                    md:w-[30px] md:h-[30px]
                    min-[320px]:w-[25px] min-[320px]:h-[25px]">
                        <AvatarImage src="https://github.com/sidgabrielmoura.png" />
                        <AvatarFallback className="text-slate-200 bg-black border border-zinc-400">SG</AvatarFallback>
                    </Avatar>

                    <a href="https://github.com/sidgabrielmoura" className="text-slate-300
                    hover:text-slate-50  transition-colors duration-200
                    lg:text-[15px]
                    md:text-[12px]
                    min-[320px]:text-[10px]
                    min-[425px]:text-[11px]">SidGabriel - FrontEnd developer</a>

                    <span className="text-slate-100 px-2 py-1 bg-zinc-800 rounded-full
                    lg:text-[13px]
                    md:text-[10px]
                    min-[320px]:text-[8px]">Available</span>

                    <div className=" text-slate-100 flex items-center justify-center
                        hover:bg-zinc-800 transition-colors duration-200 delay-100
                        lg:w-[30px] lg:h-[40px] lg:rounded-[10px]
                        md:w-[20px] md:h-[30px] md:rounded-[8px]
                        min-[320px]:w-[13px] min-[320px]:h-[20px] min-[320px]:rounded-[6px]">
                        <LiaArrowsAltVSolid/>
                    </div>

                </div>
                <div className="flex items-center text-zinc-300 
                lg:text-[14px] lg:gap-5
                md:text-[12px] md:gap-3
                min-[320px]:gap-3">

                    <div className="flex items-center
                    md:hidden
                    min-[320px]:block">
                        <Popover>
                            <PopoverTrigger>
                                <HiBars3/>
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-col gap-2 text-zinc-200 rounded-[20px] bg-zinc-950 bg-opacity-20">
                                <Link href={""} className="px-4 py-2 border border-dashed border-slate-200 rounded-[10px]
                                hover:bg-zinc-800 transition-colors duration-200">Gmail message</Link>
                                <a href="https://github.com/sidgabrielmoura" className="pl-4 hover:text-zinc-50 transition-colors duration-200" target="_blank">Github</a>
                                <a href="https://www.linkedin.com/in/sid-gabriel-barbosa-moura-347474253/" className="pl-4 hover:text-zinc-50 transition-colors duration-200" target="_blank">LinkedIn</a>
                                <a href="https://wa.me/+558592295470" className="pl-4 hover:text-zinc-50 transition-colors duration-200" target="_blank">WhatsApp</a>
                            </PopoverContent>
                        </Popover>
                    </div>

                        <Link href={""} className="px-4 py-2 border border-dashed border-slate-200 rounded-[10px]
                        hover:bg-zinc-800 transition-colors duration-200
                        md:block
                        min-[320px]:hidden">Gmail message</Link>
                        <a href="https://github.com/sidgabrielmoura" className="hover:text-zinc-50 transition-colors duration-200
                        md:block
                        min-[320px]:hidden" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/sid-gabriel-barbosa-moura-347474253/" className="hover:text-zinc-50 transition-colors duration-200
                        md:block
                        min-[320px]:hidden" target="_blank">LinkedIn</a>
                        <a href="https://wa.me/+558592295470" className="hover:text-zinc-50 transition-colors duration-200
                        md:block
                        min-[320px]:hidden" target="_blank">WhatsApp</a>

                    <Avatar className="
                    lg:w-[30px] lg:h-[30px]
                    md:w-[25px] md:h-[25px]
                    min-[320px]:hidden"> 
                        <AvatarImage src="https://github.com/sidgabrielmoura.png"/>
                        <AvatarFallback className="text-slate-200 bg-black border border-zinc-400">SG</AvatarFallback>
                    </Avatar>
 
                </div>
            </section>

            <section>

            </section>
        </>
    )
}
import { LiaArrowsAltVSolid } from "react-icons/lia";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Separator } from "@/components/ui/separator";
import '../../app/globals.css'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

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
                    min-[320px]:w-[16px] min-[320px]:h-[12px]"/>
                    <p className="text-[#424242]">/</p>

                    <Avatar className="
                    lg:w-[40px] lg:h-[40px]
                    md:w-[30px] md:h-[30px]
                    min-[320px]:w-[28px] min-[320px]:h-[28px]">
                        <AvatarImage src="https://github.com/sidgabrielmoura.png" />
                        <AvatarFallback className="text-slate-200 bg-black border border-zinc-400">SG</AvatarFallback>
                    </Avatar>

                    <a href="https://github.com/sidgabrielmoura" className="text-slate-300
                    hover:text-slate-50  transition-colors duration-200
                    lg:text-[15px]
                    md:text-[12px]
                    min-[320px]:text-[10px]">SidGabriel - FrontEnd developer</a>

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
                                <Sheet>
                                    <SheetTrigger>
                                        <div className="px-4 py-2 border border-dashed border-slate-200 rounded-[10px]
                                        hover:bg-zinc-800 hover:text-zinc-50 transition-colors duration-200">Gmail message</div>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle className="text-zinc-200">Email Area</SheetTitle>
                                            <SheetDescription className="text-zinc-400">Send me a Email</SheetDescription>
                                        </SheetHeader>
                                        <form action="https://formsubmit.co/sidgabrielmoura40@gmail.com" method="post"
                                        className="w-full flex flex-col gap-3 mt-5 text-[13px]">
                                            <input type="text" name="name" required placeholder="type your full name" className="p-3 rounded-md bg-zinc-700 text-zinc-200"/>
                                            <input type="email" name="email" required placeholder="type your email" className="p-3 rounded-md bg-zinc-700 text-zinc-200"/>
                                            <textarea name="message" cols={30} rows={10} placeholder="type your message here" 
                                            className="p-3 rounded-md bg-zinc-700 text-zinc-200 max-h-[150px] min-h-[130px]"/>
                                            
                                            <button type="submit" className="py-3 text-zinc-200 rounded-md border border-zinc-500 hover:border-zinc-300
                                            transition-colors duration-200">Send</button>
                                        
                                            {/*API configurations*/}

                                            <input type="hidden" name="_subject" value={"Novo Contato"} />
                                            <input type="text" name="_honey" className="hidden"/>
                                            <input type="hidden" name="_captcha" value={"false"}/>
                                        </form>

                                    </SheetContent>
                                </Sheet>
                                <a href="https://github.com/sidgabrielmoura" className="pl-4 hover:text-zinc-50 transition-colors duration-200" target="_blank">Github</a>
                                <a href="https://www.linkedin.com/in/sid-gabriel-barbosa-moura-347474253/" className="pl-4 hover:text-zinc-50 transition-colors duration-200" target="_blank">LinkedIn</a>
                                <a href="https://wa.me/+558592295470" className="pl-4 hover:text-zinc-50 transition-colors duration-200" target="_blank">WhatsApp</a>
                            </PopoverContent>
                        </Popover>

                    </div>
                        <Sheet>
                            <SheetTrigger>
                                <div className="px-4 py-2 border border-dashed border-slate-200 rounded-[10px]
                                hover:bg-zinc-800 hover:text-zinc-50 transition-colors duration-200
                                md:block
                                min-[320px]:hidden">Gmail message</div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className="text-zinc-200">Email Area</SheetTitle>
                                    <SheetDescription className="text-zinc-400">Send me a Email</SheetDescription>
                                </SheetHeader>
                                <form action="https://formsubmit.co/sidgabrielmoura40@gmail.com" method="post"
                                className="w-full flex flex-col gap-3 mt-5 text-[13px]">
                                    <input type="text" name="name" required placeholder="type your full name" className="p-3 rounded-md bg-zinc-700 text-zinc-200"/>
                                    <input type="email" name="email" required placeholder="type your email" className="p-3 rounded-md bg-zinc-700 text-zinc-200"/>
                                    <textarea name="message" cols={30} rows={10} placeholder="type your message here" 
                                    className="p-3 rounded-md bg-zinc-700 text-zinc-200 max-h-[150px] min-h-[130px]"/>
                                    
                                    <button type="submit" className="py-3 text-zinc-200 rounded-md border border-zinc-500 hover:border-zinc-300
                                    transition-colors duration-200">Send</button>
                                
                                    {/*API configurations*/}

                                    <input type="hidden" name="_subject" value={"Novo Contato"} />
                                    <input type="text" name="_honey" className="hidden"/>
                                    <input type="hidden" name="_captcha" value={"false"}/>
                                </form>

                            </SheetContent>
                        </Sheet>

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
                    md:w-[25px] md:h-[25px] md:block
                    min-[320px]:hidden"> 
                        <AvatarImage src="https://github.com/sidgabrielmoura.png" id="smallAvatar"/>
                        <AvatarFallback className="text-slate-200 bg-black border border-zinc-400">SG</AvatarFallback>
                    </Avatar>
 
                </div>
            </section>

            <section className="flex gap-4 items-center justify-between w-full">
                <div className="flex items-center text-zinc-500 py-2 
                lg:text-[14px]
                md:text-[13px]
                min-[320px]:text-[11px]">
                    <a href={""} className="transition-colors duration-300 delay-75 flex items-center justify-center h-[1.98rem] px-4 rounded-[3px] hover:bg-zinc-900 hover:text-zinc-300">About</a>
                    <a href={""} className="transition-colors duration-300 delay-75 flex items-center justify-center h-[1.98rem] px-4 rounded-[3px] hover:bg-zinc-900 hover:text-zinc-300">Projects</a>
                    <a href={""} className="transition-colors duration-300 delay-75 flex items-center justify-center h-[1.98rem] px-4 rounded-[3px] hover:bg-zinc-900 hover:text-zinc-300">Play here</a>
                </div>
            </section>
            <Separator className="bg-zinc-600"/>
        </>
    )
}
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HiBars3 } from "react-icons/hi2";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import '../../app/globals.css'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ActivedLinks } from "./linksNavBar";

export function Navbar(){
    
    return(
        <>
            <section className="flex gap-4 items-center justify-between w-full mt-2 px-[5px]
            ">

                <div className="flex items-center 
                lg:gap-3
                min-[320px]:gap-2
                min-[425px]:gap-1">

                    <Avatar className="
                    lg:w-[40px] lg:h-[40px]
                    md:w-[30px] md:h-[30px]
                    min-[320px]:w-[28px] min-[320px]:h-[28px]">
                        <AvatarImage src="https://github.com/sidgabrielmoura.png"/>
                        <AvatarFallback className="text-slate-200 bg-black border border-zinc-400">SG</AvatarFallback>
                    </Avatar>

                    <a href="https://github.com/sidgabrielmoura" target="_blank" className="text-slate-300
                    hover:text-slate-50  transition-colors duration-200
                    lg:text-[15px]
                    md:text-[12px]
                    min-[320px]:text-[13px]">SidGabriel - FrontEnd developer</a>

                    <span className="text-slate-100 px-2 py-1 bg-zinc-800 rounded-full
                    lg:text-[13px]
                    md:text-[10px]
                    min-[320px]:text-[10px]">Available</span>

                </div>
                <div className="flex items-center text-zinc-300 
                lg:text-[14px] lg:gap-5
                min-[320px]:gap-3 min-[320px]:text-[12px]">

                    <div className="flex items-center
                    md:hidden
                    min-[320px]:block">

                        <Popover>
                            <PopoverTrigger className="text-[20px]">
                                <HiBars3/>
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-col gap-2 text-zinc-200 rounded-[20px] bg-zinc-950 bg-opacity-90">
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
                                            className="p-3 rounded-md bg-zinc-700 text-zinc-200 max-h-[350px] min-h-[300px]"/>
                                            
                                            <button type="submit" className="py-3 text-zinc-200 rounded-md border border-zinc-500 hover:border-zinc-300
                                            transition-colors duration-200 bg-green-600">Send</button>
                                        
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
                                hover:bg-zinc-800 hover:text-zinc-50 text-zinc-400 transition-colors duration-200
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
                                    className="p-3 rounded-md bg-zinc-700 text-zinc-200 max-h-[350px] min-h-[300px]"/>
                                    
                                    <button type="submit" className="py-3 text-zinc-200 rounded-md border border-zinc-500 hover:border-zinc-300
                                    transition-colors duration-200 bg-green-600">Send</button>
                                
                                    {/*API configurations*/}

                                    <input type="hidden" name="_subject" value={"Novo Contato"} />
                                    <input type="text" name="_honey" className="hidden"/>
                                    <input type="hidden" name="_captcha" value={"false"}/>
                                </form>

                            </SheetContent>
                        </Sheet>

                        <a href="https://github.com/sidgabrielmoura" className="hover:text-zinc-100 text-zinc-400 transition-colors duration-200
                        md:block
                        min-[320px]:hidden" target="_blank" id="socialMidiaLink">Github</a>
                        <a href="https://www.linkedin.com/in/sid-gabriel-barbosa-moura-347474253/" className="hover:text-zinc-100 text-zinc-400 transition-colors duration-200
                        md:block
                        min-[320px]:hidden" target="_blank" id="socialMidiaLink">LinkedIn</a>
                        <a href="https://wa.me/+558592295470" className="hover:text-zinc-100 text-zinc-400 transition-colors duration-200
                        md:block
                        min-[320px]:hidden" target="_blank" id="socialMidiaLink">WhatsApp</a>

                    <Avatar className="
                    lg:w-[30px] lg:h-[30px]
                    md:w-[25px] md:h-[25px] md:block
                    min-[320px]:hidden"> 
                        <AvatarImage src="https://github.com/sidgabrielmoura.png" id="smallAvatar"/>
                        <AvatarFallback className="text-slate-200 bg-black border border-zinc-400">SG</AvatarFallback>
                    </Avatar>
 
                </div>
            </section>

            <section className="z-10 flex gap-4 items-center justify-between w-full mt-2 sticky top-0 
            bg-black">
                <div className="flex items-center text-zinc-500 py-2 gap-2
                lg:text-[14px]
                md:text-[13px]
                min-[320px]:text-[13px]">
                    <ActivedLinks href="/">projects</ActivedLinks>
                    <ActivedLinks href="/about">about me</ActivedLinks>
                </div>
            </section>

            <div id="caixa" className="w-full h-[1px] mt-1"/>
        </>
    )
}
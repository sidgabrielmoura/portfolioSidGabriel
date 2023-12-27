import { IconsAbout } from "./iconsAboutPage";

export function About(){
    return(
        <>
            <main className="flex items-center justify-center h-[80vh]
            lg:px-[50px] lg:py-[25px] lg:flex-row lg:gap-3
            min-[320px]:px-[25px] min-[320px]:py-[20px] min-[320px]:flex-col min-[320px]:justify-around min-[320px]:gap-5">

                <section className="flex justify-center
                lg:h-full lg:flex-col lg:border-r-[1.5px] lg:border-zinc-400 lg:w-[15vw]
                min-[320px]:flex-row min-[320px]:w-full">
                    
                    <IconsAbout/>

                </section>

                <section className="w-full flex justify-center items-center border-dashed border border-zinc-400 rounded-lg
                md:flex-row md:gap-5 md:h-full
                min-[320px]:flex-col min-[320px]:gap-0 min-[320px]:h-[40vh]">

                    <div className="brightness-90 bg-[url(../assets/sidImage.jpeg)] bg-cover bg-center bg-no-repeat
                    md:w-[200px] md:h-[200px] md:rounded-full md:outline md:outline-offset-4 md:outline-zinc-400 md:block
                    min-[320px]:hidden"/>

                    <p className="text-zinc-300 p-[20px] rounded-lg bg-zinc-900 break-words flex items-center z-10
                    md:w-[40vw] md:h-[30vh] md:py-5
                    min-[450px]:text-[15px]
                    min-[320px]:w-full min-[320px]:text-[14px] min-[320px]:h-full">
                       At 18 years old and living in Ceará, I got into frontend programming during high school. I am driven by curiosity, always looking for challenges and passionate about technology. I like to contribute proactively to innovative projects. If you need someone full of energy and creativity for your project, Im ready to come on board!
                    </p>

                </section>

            </main>
        </>
    )
}


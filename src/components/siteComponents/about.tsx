import { IconsAbout } from "./iconsAboutPage";

export function About(){
    return(
        <>
            <main className="flex items-center px-2 py-[20px] justify-around gap-5 flex-col-reverse
            lg:px-[50px] lg:py-[25px] lg:flex-row lg:gap-3 lg:h-[80vh]">

                <section className="flex justify-center w-full flex-row
                lg:h-full lg:flex-col lg:border-r-[1.5px] lg:border-zinc-400 lg:w-[15vw]">
                    
                    <IconsAbout/>

                </section>

                <section className="w-full flex justify-center items-center border-dashed border border-zinc-400 rounded-lg flex-col min-h-[220px]
                md:flex-row md:gap-5 md:h-[300px]">

                    <div className="brightness-90 bg-[url(../assets/sidImage.jpeg)] bg-cover bg-center bg-no-repeat hidden
                    md:w-[200px] md:h-[200px] md:rounded-full md:outline md:outline-offset-4 md:outline-zinc-400 md:block"/>
 
                    <p className="text-zinc-300 p-[20px] rounded-lg bg-zinc-900 break-words flex items-center z-10 h-full text-[14px] w-full min-h-[220px]
                    md:w-[40vw] md:h-[30vh] md:py-5
                    min-[450px]:text-[15px]">
                       At 18 years old and living in Ceará, I got into frontend programming during high school. I am driven by curiosity, always looking for challenges and passionate about technology. I like to contribute proactively to innovative projects. If you need someone full of energy and creativity for your project, Im ready to come on board!
                    </p>

                </section>

            </main>
        </>
    )
}


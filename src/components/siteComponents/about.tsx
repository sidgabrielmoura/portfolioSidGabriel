import { IconsAbout } from "./iconsAboutPage";

export function About(){
    return(
        <>
            <main className="flex gap-3 items-center justify-center h-[80vh]
            lg:px-[50px] lg:py-[25px]
            min-[320px]:px-[25px] min-[320px]:py-[20px]">

                <section className="w-[15vw] h-full flex flex-col border-r-[1.5px] border-zinc-400 justify-center">
                    
                    <IconsAbout/>

                </section>

                <section className="w-full h-full flex justify-center items-center gap-5 border-dashed border border-zinc-400 rounded-lg">
                    <div className="w-[15vw] brightness-75 h-[30vh] rounded-full bg-[url(../assets/sidImage.jpeg)] bg-cover bg-center bg-no-repeat
                    outline outline-offset-4 outline-zinc-400"/>
                    <p className="w-[40vw] text-zinc-300 p-[20px] rounded-lg bg-zinc-900
                    break-words">Com 18 anos e morando no Ceará, entrei de cabeça na programação frontend durante o ensino médio. Sou movido pela curiosidade, sempre em busca de desafios e apaixonado por tecnologia. Gosto de contribuir de forma proativa 
                        em projetos inovadores. Se precisar de alguém cheio de energia e criatividade para seu projeto, tô pronto para embarcar!</p>
                </section>

            </main>
        </>
    )
}


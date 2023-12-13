'use client'
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

export function ButtonsProjectCards(){

    const [corFundo, setCorFundo] = useState("bg-zinc-950")
    
    const handleClick = () => {
        setCorFundo(corFundo === "bg-zinc-950" ? "bg-zinc-800" : "bg-zinc-950")
    }

    return(
        <>                                                                                    {/*flex*/}
            <div className="h-[50px] bg-zinc-950 border border-zinc-500 p-1 rounded-[8px]   hidden
            lg:w-[100px]
            min-[320px]:w-[50%]">

                <button className={`b1 transition-colors duration-200 rounded-md w-[50%] h-full hover:text-zinc-100 text-zinc-500 flex items-center justify-center ${corFundo}`}
                onClick={handleClick}>
                    <AiOutlineBars/>
                </button>
                <button className={`b2 transition-colors duration-200 rounded-md w-[50%] h-full hover:text-zinc-100 text-zinc-500 flex items-center justify-center ${corFundo}`}
                onClick={handleClick}>
                    <BiCategory/>
                </button>

            </div>
        </>
    )

}
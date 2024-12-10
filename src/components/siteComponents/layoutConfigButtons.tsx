'use client';
import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

interface LayoutConfigButtonsProps {
    onUpdateLayout: (newLayout: 'bars' | 'category') => void;
}

export function LayoutConfigButtons({ onUpdateLayout }: LayoutConfigButtonsProps) {
    const [activeButton, setActiveButton] = useState<"bars" | "category">("bars");

    useEffect(() => {
        const savedConfig = localStorage.getItem("configLayout") as "bars" | "category";
        if (savedConfig) {
            setActiveButton(savedConfig);
            onUpdateLayout(savedConfig)
        }
    }, [onUpdateLayout])

    const handleButtonClick = (button: "bars" | "category") => {
        setActiveButton(button);
        localStorage.setItem('configLayout', button)
        onUpdateLayout(button)
    };

    return (
        <div
            className="h-[50px] bg-zinc-950 border border-zinc-500 p-1 rounded-[8px] flex lg:w-[140px] md:w-[200px] w-full"
        >
            <button
                className={`transition-colors duration-200 rounded-md w-[50%] h-full flex items-center justify-center 
                ${activeButton === "bars" ? "bg-zinc-800 text-zinc-100" : "bg-zinc-950 text-zinc-500"}`}
                onClick={() => handleButtonClick("bars")}
            >
                <AiOutlineBars />
            </button>
            <button
                className={`transition-colors duration-200 rounded-md w-[50%] h-full flex items-center justify-center 
                ${activeButton === "category" ? "bg-zinc-800 text-zinc-100" : "bg-zinc-950 text-zinc-500"}`}
                onClick={() => handleButtonClick("category")}
            >
                <BiCategory />
            </button>
        </div>
    );
}

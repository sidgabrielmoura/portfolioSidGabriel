'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type activeLinkProps = {
    href: string,
    children: React.ReactNode,
}

export const ActivedLinks = ({href, children}: activeLinkProps) => {
    const pathName = usePathname()
    const isActive = pathName === href
        
    return(
        <>
            <Link href={href} className={`${isActive ? "transition-colors duration-300 delay-75 flex items-center justify-center h-[1.98rem] px-4 rounded-[3px] bg-zinc-800 text-zinc-200"
            : "transition-colors duration-300 delay-75 flex items-center justify-center h-[1.98rem] px-4 rounded-[3px] hover:bg-zinc-900 hover:text-zinc-300"}`}>
                {children}
            </Link>
        </>
            
        
    )
}
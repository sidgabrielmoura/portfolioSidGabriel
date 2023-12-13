import React from "react"

type Elements = {
    children: React.ReactNode
}

export const ContainerCards = ({ children }: Elements) => {
    return(
        <>
            <div className="flex gap-5 mt-4 w-full flex-col">
                {children}
            </div>
        </>
    )
}
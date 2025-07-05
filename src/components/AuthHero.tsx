"use client"

import { UseWindowSize } from "@/utils/UseWindowSize"

type ImageProps = {
    height?: number
}


export const AuthHero = ({ height }: ImageProps) => {
    return (
        <div className={`authHero h-[${height}px]`}>

        </div>
    )
}
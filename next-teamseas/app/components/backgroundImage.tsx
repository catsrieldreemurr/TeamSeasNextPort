import Image from "next/image";
import { chdir } from "process";
import React, { ReactNode } from "react";

type BackgroundChildren = {
    src:string;
    alt:string;
}

export default function BackgroundImage(props:BackgroundChildren){
    return(
    <div className="h-screen w-screen opacity-[.6] absolute inset-0 z-[-5] bg-ts-blue">
        <Image src={props.src} fill alt={props.alt || "lazy bum"} className="h-full w-full pointer-events-none object-cover bg-ts-blue"></Image>
    </div>
    )
}
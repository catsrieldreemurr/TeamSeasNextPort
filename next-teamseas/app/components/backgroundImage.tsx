import Image from "next/image";
import { chdir } from "process";
import React, { ReactNode } from "react";

type BackgroundChildren = {
    src:string;
    alt:string;
}

export default function BackgroundImage(props:BackgroundChildren){
    return(
    <div className="h-screen w-screen absolute inset-0 z-[-5] bg-ts-blue">
        <Image src={props.src} fill alt={props.alt || "lazy bum"} className="h-full w-full pointer-events-none object-cover bg-ts-blue opacity-[0.6]"></Image>
    </div>
    )
}
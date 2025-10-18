import React, { ReactNode } from "react";

type contrastChildren = {
    children?:ReactNode;
}

export default function ContrastTextbox(props:contrastChildren){
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-black/75 p-5 rounded-2xl w-[90%] sm:w-1/2 transform -translate-y-60 p-10">
                {props.children}
            </div>
        </div>
    )
}
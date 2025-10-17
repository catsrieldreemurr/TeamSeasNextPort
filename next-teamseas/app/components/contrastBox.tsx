import React, { ReactNode } from "react";

type contrastChildren = {
    children?:ReactNode;
}

export default function ContrastTextbox(props:contrastChildren){
    return(
        <div className="flex justify-center items-center">
            <div className="bg-black/75 p-5 rounded-2xl w-1/2">
                {props.children}
            </div>
        </div>
    )
}
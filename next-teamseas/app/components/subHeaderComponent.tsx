import React, { ReactNode } from "react";

type propTypes = {
    children?:ReactNode
}

export default function SubHeader(props:propTypes){
    return(
        <h2 className="text-xl">{props.children}</h2>
    )
}
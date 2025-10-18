import React, { Children, ReactNode } from "react";

type PropTypes = {
    children?: ReactNode
}

export default function Header(props:PropTypes){
    return(
        <h1 className="text-4xl font-bold pt-5 pb-6">{props.children}</h1>
    )
}
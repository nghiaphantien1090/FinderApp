import { ReactNode, useEffect, useRef, useState } from "react";
export default function NavigatorWrapper({children,isFade}:{isFade:boolean,children:ReactNode}) {
    return (
        <section className={`h-[680px] ${isFade ? 'fadeNavigator' : ''}`} >
        </section>
    )
}


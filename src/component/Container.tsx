import { ReactNode } from "react";
import '../index.css'
export default function Container({ children,className}: {className?:string, children: ReactNode }) {
    return (
        <div className={className}>
            <div className=" maxWidthContainer">
                {children}
            </div>
        </div>
    )
}
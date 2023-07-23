import { useEffect, useRef, useState } from "react"
import { backgroundImage as listImgs } from "../style"
import Search from "./Search"
export default function SlideBackground(){
    return(
        <div>
            <section className={`   `}>
                <SlideHeros />
            </section>
            <section className=" md:h-bg-hero h-auto max-md:bg-[#62646a]">
                <div className="maxWidthContainer flex flex-col justify-center my-auto h-full">
                    <Search />
                </div>
            </section>
        </div>
    )
}
function SlideHeros(){
    const [hero,setHero] = useState(0)
    useEffect(() => {
        const handleHero = () => {
            const numRand = Math.floor(Math.random()*listImgs.length)
            setHero(numRand)
            console.log(numRand)
        }
        const idIntervalHero = setInterval(handleHero, 10000)
        return () => {
                clearInterval(idIntervalHero)
        }
    }
    , [])
    return(
        <ul>
            {
                listImgs.map((img, index) => {
                    return (
                        <>
                            <li className={` md:absolute  -z-[300] md:h-bg-hero h-auto bg-top max-lg:bg-right-top inset-0 bg-no-repeat transition-all duration-1000 delay-300 ease-in-out ${img} ${index == hero ? 'opacity-100' : 'opacity-0'}`} />
                        </>
                    )
                })
            }
        </ul>
    )
}
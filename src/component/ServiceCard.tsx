import { ReactNode } from "react";
import React from "react";
import { PopularServices} from '../assets/util/Data'
import { ImgWithIntrinsicSize } from "../assets/util/IntrinsicImg";
import { Img } from "../assets/image";
export default React.memo(function ServiceCard({width}:{width:number}) {
    return(
        <div className=" h-auto" style={{ width: width}} >
            <div className="relative w-full border-[1px]">
                <a className="absolute p-4 text-[24px] text-white font-[600] leading-6">
                   <small className="text-white text-[14px] font-[400]">{PopularServices[0].small}</small>
                   <h2>{PopularServices[0].titlte}</h2>
                </a>
                <a>
                    <img className="w-full h-[345px]" src={`${PopularServices[0]?.img}`} />
                </a>
            </div>
        </div>
    )
})
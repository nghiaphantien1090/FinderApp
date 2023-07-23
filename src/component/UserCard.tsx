import { ReactNode } from "react";
import React from "react";
import { RecentViews} from '../assets/util/Data'
import { ImgWithIntrinsicSize } from "../assets/util/IntrinsicImg";
import { Img } from "../assets/image";
export default React.memo(function UserCard({width}:{width:number}) {
    return(
        <div className=" h-auto" style={{ width: width}} >
            <div className="w-full border-[1px]">
                <a>
                    <img className="w-full " src={`${RecentViews[0]?.hrefs[2]}`} />
                </a>
                <div className="px-3">

                    <div className="flex flex-row pt-3 pb-2 gap-3">
                        <div className="my-auto rounded-full ">
                            <ImgWithIntrinsicSize
                                src={Img.avata1} intrinsicSize={{ width: 24, height: 24 }} width={24}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="font-semibold text-[14px]">
                                <a>{'Jame Chan'}</a>
                            </div>
                            <div className="text-slate-400 text-[14px]">
                                <span>{'Level 2 Seller'}</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-[16px] text-black pb-1 h-[48px] ">
                        <a className="cursor-pointer leading-[22px] font-[400] text-black hover:text-[#1dbf73] line-clamp-2" >{'I will develop a web application website in php and mysql'}</a>
                    </h3>
                    <div className=" py-3 flex flex-row gap-1 ">
                        <img className=""  src={Img.star} />
                        <p className="text-yellow-500 text-[14px] font-[700]">{4.9}</p>
                        <span className="text-[14px] text-[#b5b6ba] font-[500] ">{'(30)'}</span>
                    </div>
                </div>
                    <footer className="px-3 flex flex-row justify-between py-2 border-t-[1px]">
                        <div className="my-auto fill-[#b5b6ba]">
                            <img className="fill-[#b5b6ba]" src={Img.save}/>
                        </div>
                        <div className="">
                        <a href="#" className=" cursor-pointer">
                            <small className=" text-[12px] pr-2 font-bold text-[#74767e]">STARTING AT</small>
                            <span className="text-[18px] text-[#404145]">20$</span>
                        </a>
                        </div>
                    </footer>
            </div>
        </div>
    )
})
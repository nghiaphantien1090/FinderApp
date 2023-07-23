import { Categories } from '../assets/util/categories'
import ListCategory from './ListCategories'
import {Img} from '../assets/image/index'
import { useEffect } from 'react'
export default function SideBar({isShow}:{isShow:boolean}){
    useEffect(()=>{
    if(isShow){
       document.body.style.position = 'fixed';
       document.body.style.top = `-${window.scrollY}`;
    }
    },[])
    return(
        <section className={`fixed z-[500] ${isShow?'visible':'hidden'}`}>
            <div className="flex flex-col gap-5  pt-[20px] px-5 text-slate-500 font-[400] fixed w-[272px] h-screen bg-white z-[500] top-0 left-0">
              <button className="primaryBtn py-2 w-2/3"> Join Fiverr</button>
                <a>Sign In</a>
                <div className="">
                    <div className=' flex flex-row justify-between'>
                        <div>
                            Browse Categories
                        </div>
                        <img className=' -rotate-90 opacity-80' src={Img.AccordionIcon} />
                    </div>
                    <ListCategory prop={Categories} />
                </div>
                <div>Explore</div>
                <div>Fiverr Business</div>
                <div className="pt-6 flex flex-col gap-4">
                    <div className=" border-b-[1px] pb-3">General</div>
                    <a href="">Home</a>
                    <div className="flex flex-row gap-2">
                        <div>English</div>
                        <img src={Img.iconLang} />
                    </div>
                    <div>$ USD</div>
                </div>
            </div>
            <div className="fixed overflow-scroll bg-slate-400 opacity-90 w-screen h-screen z-[200] top-0 left-0" ></div>
        </section>
    )
}
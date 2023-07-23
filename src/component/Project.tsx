
import { Img } from "../assets/image"
export default function Project ({width}:{width:number}){
    return (<section className="flex flex-col shadow-lg" style={{width:width}}>
<a>
<img className='w-full h-auto'src={Img.spickex}/>
</a>
<div className=" flex flex-row justify-start gap-4 p-4 text-[14px]">
    <a className="my-auto">
        <img className='w-10 h-10 rounded-full' src={Img.avata1}/>
    </a>
    <div className="flex flex-col">
    <a className=" font-semibold text-slate-700">
        <h5>Flyer Design</h5>
    </a>
    <a className=" text-slate-400 font-[700]">
        <p>by Slickex</p>
    </a>
    </div>


</div>
    </section>)
}
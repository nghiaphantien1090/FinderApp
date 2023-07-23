import {Img} from '../assets/image/index'
import { memo } from 'react'
import React from 'react'
type Direction='up'|'down'|'left'|'right' 
export type DirectionArrow={
    direction:Direction
}
//function TestArrowArr(){
//    return(<div>
//        <ArrowButton dirrr={{direction:'down'}}/>
//    </div>)
//}
export const enum Dir {
    up,
    down,
    left,
    right
}
export default React.memo(function ArrowButton({ dir,isShow,handleClick}: { handleClick:()=>void,dir: Dir ,isShow:boolean}) {
    //const rotate = dir === Dir.right ? 90 : dir===Dir.left ? 270 : dir===Dir.down?180:0 
    let rotate;
    if (dir === Dir.right) {
        rotate = 90
    }
    if (dir === Dir.left) {
        rotate = 270
    }
    if (dir === Dir.down) {
        rotate = 0
    }
    if (dir === Dir.up) {
        rotate = 180
    }
    return (
        <div className={`${isShow ? 'visible' : 'hidden'}`}>
            <button onClick={handleClick} className=" w-[50px] h-[50px] rounded-full bg-slate-100 outline-none hover:shadow-lg shadow-slate-400">
                <img src={Img.arrowSlide} className='w-[40%] h-[40%] m-auto' style={{ transform: `rotate(${rotate}deg)` }} />
            </button>
        </div>)
})
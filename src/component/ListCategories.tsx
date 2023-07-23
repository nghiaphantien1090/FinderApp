import uniqid from 'uniqid'
import {  ReactHTMLElement, ReactNode, useState } from "react";
import {Category } from '../assets/util/type'
import React from "react";
export function CategoryNode({ level,category,children}: { level:number,category:Partial<Category>,  children:ReactNode}) {
    const [show,setShow] = useState(true)
    const handleClick = (e:any)=>{
    setShow(!show)
    }
    return (
        <div className='h-100' >
            <div className="py-1 cursor-pointer h-5 " onClick={handleClick}>
                <div className={`${level == 1 ? 'pl-5' : level == 2 ? 'pl-9' : 'pl-14'}  `} >
                    {category.type}
                </div>
            </div>
            <div className={`${show?'hidden':'h-100'}`} >
                {children}
            </div>
        </div>)
}
export default function ListCategory({ prop,level=1 }: { level?:number,prop:Category[]|undefined}) {
    return (
            <>
                {
                    prop?.map(( cat,index )=> {
                        index++
                        return(
                            < CategoryNode key={uniqid()} level={level} category={cat}>
                                <div className=''>
                                    <ListCategory prop={cat.subCat} level={index + level} />
                                </div>
                            </CategoryNode>
                            )
                    })
                }
            </>
    )
}
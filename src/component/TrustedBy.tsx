import {Company} from '../assets/image/index'
import { ImgWithIntrinsicSize } from '../assets/util/IntrinsicImg'

import uniqid from 'uniqid'
export default function Users(){
    const Logos = Object.values(Company)
    return(
        <div className='bg-slate-50 my-auto mb-24'>
            <section className="flex h-auto maxWidthContainer my-auto py-0 justify-center">
                <span className=' max-lg:hidden my-auto font-semibold text-slate-500 '>Trusted by:</span>
                <ul className="flex flex-wrap justify-center my-auto md:gap-10 sm:gap-5 gap-2  px-2">
                {
                    Logos.map((logo,index)=>{
                        return (
                            <li key={uniqid()} className='flex '>
                                <div className='my-auto'>
                                    <img className=' ' src={logo} />
                                </div>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
        </div>
    )
}
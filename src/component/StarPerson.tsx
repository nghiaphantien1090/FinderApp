import { fiveStar , fiveStar2 } from '../style.js'
export default function StarPerson() {
    return (
    <div className=' max-md:hidden'>
            <div className={`absolute bottom-32 gap-2 text-white flex flex-col  w-full `}>
                <div className={` ${fiveStar2}flex flex-row justify-end w-full  before:bg-no-repeat before:w-[100px] before:h-[15px] `} />
                <div className='flex -flex-row justify-end'>
                    <p>Jason Staham</p>
                </div>
            </div>
            <div className={`absolute bottom-16 gap-2 text-white  flex flex-col  w-full `}>
                <div className='flex flex-row justify-end  '>
                    <div className={` ${fiveStar} flex flex-row justify-end bg-no-repeat w-[100px] h-[15px]`} />
                </div>
                <div className='flex -flex-row justify-end'>
                    <p>Jason Staham</p>
                </div>
            </div>
    </div>
    )
}
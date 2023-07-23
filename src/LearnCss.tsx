import './index.css'
export default function LearnCss(){
    return(
    <>
            <div className='mb-32 bg-blue-200 w-32 h-32 transition  delay-100 duration-1000
                         hover:h-64 hover:w-64 hover:bg-yellow-300 hover:translate-x-20' style={{ transitionProperty: 'all,height,width,background-color' }}>
                Change state of background-color and height
            </div>
            <div className=' bg-blue-200 w-32 h-32 ease-in-out transition  delay-100 duration-300
                         hover:h-64 hover:bg-green-300' style={{ transitionProperty: 'height' }}>
                only change height
            </div>
        </>
    )
}
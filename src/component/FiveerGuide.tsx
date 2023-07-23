import { Img } from "../assets/image"
export default function FiveerGuide(){
    return(<section className="relative my-8">
        <div className="mb-6 ">
            <h2 className="sm:text-[32px] text-[28px] text-[#404145] font-semibold">
                Fiverr guides
            </h2>
        </div> 
        <ul className="grid md:grid-cols-3 lg:gap-8 sm:gap-4 gap-4 sm:grid-cols-2 grid-cols-1">
            <a className="text-[#404145] cursor-pointer w-full  ">
                <img className="hover:opacity-80 mb-4 w-full" src={Img.onlineBusiness} />
                <h6 className="text-[18px] font-bold">Start an online business and work from home</h6>
                <p className="text-[#74767e] font-[500]">A complete guide to starting a small business online</p>
            </a>
            <a className="text-[#404145] cursor-pointer w-full ">
                <img className="hover:opacity-80 mb-4 w-full" src={Img.digitalMarketing} />
                <h6 className="text-[18px] font-bold">Digital marketing made easy</h6>
                <p className="text-[#74767e] font-[500]">A practical guide to understand what is digital marketing</p>
            </a>
            <a className="text-[#404145] cursor-pointer w-full ">
                <img className="hover:opacity-80 mb-4 w-full" src={Img.createLogo} />
                <h6 className="text-[18px] font-bold">Create a logo for your business</h6>
                <p className="text-[#74767e] font-[500]">A step-by-step guide to create a memorable business logo</p>
            </a>
        </ul>
        <div className="md:absolute md:top-3 md:w-full md:flex md:justify-end max-md:mt-5">
            <div className="cursor-pointer flex justify-start gap-2">
                <a className="my-auto text-[#446ee7] text-[16px]">See More Guides</a>
                <svg className='my-auto ' fill="#446ee7" width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg>
            </div>
        </div>
    </section>)
}
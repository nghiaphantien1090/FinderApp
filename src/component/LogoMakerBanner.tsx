import { Img } from "../assets/image"
export default function LogoMakerBanner() {
    return (<div>

        <div className='md:relative text-white bg-[#446ee7]'>
            <div className='max-md:flex max-md:flex-col-reverse'>
                <div className='md:min-h-[270px] max-md:flex max-md:-mt-[150px] 
                                max-[500px]:-mt-[120px] max-sm:-mt-[200px] max-sm:-mr-8 '>
                    <img className=' max-md:hidden  object-fill ' src={Img.logoMakerDesktop} />
                    <img className=' md:hidden max-sm:hidden object-fill' src={Img.logoMakerTablet} />
                    <img className=' sm:hidden object-fill' src={Img.logoMakerMobile} />
                </div>
                <div className='md:absolute sm:min-w-[450px] w-full   inset-0     sm:py-8 py-8 sm:pl-8 z-10'>
                    <div className='pb-4'>
                        <svg width="188" height="26" viewBox="0 0 249 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFFFFF"><path d="M81.6,13.1h-3.1c-2,0-3.1,1.5-3.1,4.1v9.3h-6V13.1h-2.5c-2,0-3.1,1.5-3.1,4.1v9.3h-6V8.1h6v2.8 c1-2.2,2.3-2.8,4.3-2.8h7.3v2.8c1-2.2,2.3-2.8,4.3-2.8h2L81.6,13.1z M56.4,18.7H44c0.3,2.1,1.6,3.2,3.7,3.2 c1.6,0,2.7-0.7,3.1-1.8l5.3,1.5c-1.3,3.2-4.5,5.1-8.4,5.1c-6.5,0-9.5-5.1-9.5-9.5c0-4.3,2.6-9.4,9.1-9.4c6.9,0,9.2,5.2,9.2,9.1 C56.5,17.8,56.5,18.3,56.4,18.7z M50.7,15.2c-0.1-1.6-1.3-3-3.3-3c-1.9,0-3,0.8-3.4,3H50.7z M27.8,26.5H33l6.6-18.3h-6l-3.2,10.7 L27.2,8.1h-6L27.8,26.5z M3.4,26.5h5.9V13.1H15v13.4h5.9V8.1H9.3V7c0-1.2,0.9-2,2.2-2H15V0h-4.4C6.3,0,3.4,2.7,3.4,6.6v1.5H0v5 h3.4L3.4,26.5z"></path><path d="M88.4,0h3.5v26.6h-3.5V0z"></path><path d="M93.6,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C97.5,26.9,93.6,23,93.6,17.5z M108.8,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C106.4,23.8,108.8,21.2,108.8,17.5z"></path><path d="M130.1,28.3c0,3.3-2.1,5.7-5.6,5.7h-5.6c-3.8,0-5.8-2.2-5.8-5.4c0-1.5,0.8-2.9,1.9-3.7 c-0.9-0.7-1.4-1.6-1.4-2.8c0-1.5,0.9-2.5,2.2-3.8c-0.8-1-1.2-2.4-1.2-3.8c0-3.8,3-6.3,7-6.3c1,0,2,0.2,2.9,0.5l2.5-2.9l2.2,2 l-2.2,2.5c1,1.1,1.6,2.6,1.6,4.1c0,3.8-3,6.3-7,6.3c-1.3,0-2.5-0.3-3.5-0.7c-0.7,0.8-1,1.2-1,1.8c0,1,0.9,1.5,2,1.5h5.1 C127.6,23.3,130.1,24.9,130.1,28.3z M126.7,28.5c0-1.7-1.1-2.5-2.9-2.5h-4.2c-0.6,0-1.2,0-1.8-0.1c-0.9,0.7-1.2,1.6-1.2,2.6 c0,1.5,1,2.6,2.5,2.6h5.4C126.1,31.1,126.7,30,126.7,28.5z M117.9,14.4c0,2.2,1.7,3.5,3.7,3.5c2,0,3.7-1.3,3.7-3.5 c0-2.2-1.7-3.5-3.7-3.5C119.6,10.9,117.9,12.2,117.9,14.4z"></path><path d="M130.2,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C134.2,26.9,130.2,23,130.2,17.5z M145.4,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C143.1,23.8,145.4,21.2,145.4,17.5z"></path><path d="M155,8.4h3.5v3.3c0.8-2.1,2.7-3.5,5.4-3.5c3,0,5.2,1.3,5.9,3.7c0.7-2.1,3.1-3.7,5.9-3.7 c3.9,0,6.4,2.7,6.4,6.9v11.6h-3.5V16c0-2.9-1.5-4.8-3.9-4.8c-2.8,0-4.5,2-4.5,4.8v10.6h-3.5V16c0-2.9-1.5-4.8-3.8-4.8 c-2.8,0-4.5,2-4.5,4.8v10.6H155V8.4z"></path><path d="M199.3,14.7v11.9h-3.4v-3c-0.9,2-3.2,3.3-5.9,3.3c-3.7,0-6.2-2.3-6.2-5.5c0-3.7,2.4-5.9,7.1-5.9h3.9 c0.7,0,1.1-0.4,1.1-1v-0.1c0-2.2-2-3.6-4.5-3.6s-4.3,1.6-4.5,3.5h-3.2c0.3-3.6,3.5-6.3,7.6-6.3C195.9,8.1,199.3,10.7,199.3,14.7z M195.9,18.6v-0.5h-4.7c-2.8,0-3.9,1.2-3.9,3.3c0,1.6,1.5,2.8,3.4,2.8C193.9,24.1,195.9,22,195.9,18.6z"></path><path d="M207,17.9l-2.3,2.1v6.6h-3.5V0h3.5v15.6l8-7.2h4.5l-7.7,7.1l8.4,11.1h-4.3L207,17.9z"></path><path d="M243.2,11.4c-3.3,0-4.4,3-4.4,6.9v8.3h-3.5V8.4h3.5v3.5c0.8-2.4,2.3-3.5,4.8-3.5h2.2v3H243.2z"></path><path d="M230.4,20.7c-0.5,2.1-2.2,3.2-4.9,3.2c-3.2,0-5.4-2.4-5.7-5.8h13.9c0-0.3,0.1-0.9,0.1-1.4 c0-4.6-3-8.6-8.6-8.6c-5.6,0-8.8,4.2-8.8,9.3c0,5.1,3.5,9.5,9.2,9.5c4.1,0,7.2-2.1,8.2-5.3L230.4,20.7L230.4,20.7z M225.2,10.9 c3,0,4.9,1.8,5.1,4.6h-10.4C220.5,12.5,222.3,10.9,225.2,10.9z"></path><path d="M248.8,24.6L248.8,24.6c0,0.6-0.2,1.2-0.7,1.7c-0.4,0.4-1,0.7-1.6,0.7c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.4-0.5-0.5-0.7c-0.1-0.3-0.2-0.6-0.2-0.9v0c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7 c0.2-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.6-0.2,0.9-0.2c0.6,0,1.2,0.2,1.6,0.7C248.6,23.4,248.8,24,248.8,24.6z"></path></g></svg>
                    </div>
                    <div className='text-[34px] font-semibold leading-[39px]
                                mb-2 pb-0  '>
                        <h2 className=''>
                            Make an incredible logo
                        </h2>
                        <i className=' fontDomainDisplay'>
                            in minutes
                        </i>
                    </div>
                    <p className='text-[16px] leading-[24px] pb-6'>
                        Pre-designed by top talent. Just add your touch.
                    </p>
                    <button className='primaryBtn'>Try Fiveer Logo Maker</button>
                </div>
            </div>
        </div>
    </div>)
}
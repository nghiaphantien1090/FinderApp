export default function Search(){
    return(
        <section className="z-100 lg:w-[650px] md:w-[560px] lg:flex md:flex justify-start  md:p-0 sm:px-16 sm:py-24 py-16">
            <div>
                <h1 className="lg:text-[48px] sm:text-[40px] text-[32px] text-white font-semibold md:pb-5 pb-4">
                    Find the perfect <span className="italic fontSearch font-normal">&nbsp;freelance </span>services for your business
                </h1>
                <form className=" md:flex flex-row justify-between md:mt-4 mt-2">
                    <div className="grow flex h-12 rounded-[6px] md:rounded-r-[0px] bg-white">
                        <div className="p-2 m-auto"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646A"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg></div>
                        <input className="pl-1 pr-9 w-full " placeholder={`Try "building mobile app" `} />
                    </div>
                    <button className="primaryBtn mt-3 w-full md:w-fit md:mt-0 md:rounded-l-[0px]">Search</button>
                </form >
                <div className="flex flex-row pt-4 text-white max-md:hidden">
                    <div className=" my-auto font-semibold text-white">
                    <p>Popular:</p>
                    </div>
                    <ul className="md:flex md:flex-row hidden">
                        <li className="px-2 mx-1 rounded-full border-red-50 border-[1px]">
                            <a>
                                Website Design
                            </a>
                        </li>
                        <li className="px-2 mx-1 rounded-full border-red-50 border-[1px]">
                            <a>
                                Word Press
                            </a>
                        </li>
                        <li className="px-2 mx-1 rounded-full border-red-50 border-[1px]">
                            <a>
                                Logo Design
                            </a>
                        </li>
                        <li className="px-2 mx-1 rounded-full border-red-50 border-[1px]">
                            <a>
                                AI Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
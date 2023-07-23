import { Img } from "../assets/image"
export default function FindTalent1(){
    return(
        <section className="mt-12 mb-24">
            <div className="relative sm:flex px-30 md:py-20 max-md:py-12 max-md:bg-[#45091b]">
                <img className=" absolute object-cover h-full w-full top-0 max-lg:hidden " src={Img.signUp1400} />
                <img className=" absolute object-cover h-full w-full top-0 right-0  lg:hidden max-md:hidden" src={Img.signUp1160} />
                <div className=" z-10 lg:mx-24 sm:mx-8 m-4 text-white font-[600] lg:max-w-[650px] md:max-w-[550px] leading-11  ">
                    <h2 className="lg:text-[48px] sm:text-[40px] max-sm:text-[32px] mb-6 ">
                        Find the
                        <span className="fontDomainDisplay">
                            <i> talent </i>
                        </span>
                        needed to get your business
                        <span>
                            <i className="fontDomainDisplay"> growing </i>
                        </span>
                    </h2>
                    <button className="primaryBtn">Get Started</button>
                </div>
        </div>
        </section>
    )
}
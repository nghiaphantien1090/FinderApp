import { Img } from "../assets/image";

export default function FindTalent(){
    return(
        <section>
            <div className="relative lg:h-[440px] md:h-[500px] w-[100%] min-h-[300px] max-md:bg-[#45091b]">
                <img className="absolute object-cover h-full inset-0 max-lg:hidden -z-10" src={Img.signUp1400}/>
                <img className="absolute object-scale-down inset-0 h-full lg:hidden -z-10" src={Img.signUp1160}/>
            <div className="absolute top-1/2 -translate-y-1/2 font-[600] lg:max-w-[650px] md:max-w-[550px] leading-11  lg:mx-24 mx-8">
                    <h2 className="lg:text-[48px] sm:text-[40px] max-sm:text-[32px] text-white mb-6">
                        Find the
                        <span className="fontDomainDisplay">
                            <i> talent </i>
                        </span>
                        needed to get your business
                        <span>
                            <i className="fontDomainDisplay">
                                growing
                            </i>
                        </span>
                    </h2>
                <button className="primaryBtn">Get Started</button>
            </div>
            </div>
        </section>
    )
}
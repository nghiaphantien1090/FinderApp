import { Img } from "../assets/image";

export default function DescriptionService(){
    return(
        <section className="flex md:flex-row flex-col  md:py-16 py-12 mb-6">
            <div className="md:pr-6 pr-4 pl-2  text-[#404145] ">
                <h1 className=" leading-12 font-semibold text-[32px] pb-6">
                    A whole world of freelance talent at your fingertips
                </h1>
                <ul>
                    <li className="pb-6">
                        <div className="flex gap-2 pb-2">
                            <img src={Img.checkIcon} width={24} height={24} alt="" />
                            <h6 className=" font-semibold text-[18px]">The best for every budget</h6>
                        </div>
                        <p className="text-[18px]">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                    </li>
                    <li className="pb-6">
                        <div className="flex gap-2 pb-2">
                            <img src={Img.checkIcon} width={24} height={24} alt="" />
                            <h6 className=" font-semibold text-[18px]">Quality work done quickly</h6>
                        </div>
                        <p className="text-[18px]">Find the right freelancer to begin working on your project within minutes.</p>
                    </li>
                    <li className="pb-6">
                        <div className="flex gap-2 pb-2">
                            <img src={Img.checkIcon} width={24} height={24} alt="" />
                            <h6 className=" font-semibold text-[18px]">Protected payments, every time</h6>
                        </div>
                        <p className="text-[18px]">Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                    </li>
                    <li className="pb-6">
                        <div className="flex gap-2 pb-2">
                            <img src={Img.checkIcon} width={24} height={24} alt="" />
                            <h6 className=" font-semibold text-[18px]">24/7 support</h6>
                        </div>
                        <p className="text-[18px]">Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </li>
                </ul>
            </div>
            <div className="px-4">
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" />
            </div>
        </section>
    )
}
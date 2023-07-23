import { Img } from "../assets/image"
export default function Testimonials({width}:{width:number}){
    return (<section className="flex md:flex-row flex-col py-16" style={{width:width}}>
        <div className="md:w-1/2 w-full my-auto">
            <img src={Img.testimonial} />
        </div>
        <div className="md:w-1/2 md:pl-4 w-full">
            <h5 className="pt-6 pb-4 text-slate-500 sm:text-[20px] text-[18px]">Caitlin Tormey, Chief Commercial Officer
                <img className='h-9' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png" loading="lazy"></img>
            </h5>
            <blockquote>
                <i className=" fontDomainDisplay text-[26px] font-[500] leading-[36px] text-[#003912]">
                    "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
                </i>
            </blockquote>
        </div>
    </section>)
}
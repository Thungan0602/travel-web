import Star from "~/assets/images/Star.svg"
import Avata from "~/assets/images/avata.png";
import LogoPlane from "~/assets/images/logo-plane.png"

export function Testimonial() {
    return (
        <div className="relative lg:px-20 lg:py-20 px-5 py-16 bg-[#203B64]">
        <img src={LogoPlane} alt="" className="absolute top-[-3%] right-0"/>
        <p className="text-[#EBF0F8] font-normal">TESTINATIONAL</p>
        <p className="font-serif font-normal lg:text-5xl text-4xl text-[#EBF0F8] pt-6 pb-16">What customers talk about us</p>
        <div className="flex lg:gap-[80px] gap-10">
            <div className="space-y-8 w-2/5">
                <div className="flex gap-3">
                    <img src={Star} alt=""/>
                </div>
                <p className="text-[#EBF0F8] font-normal italic">“ Our trip to da nang was amazing and well planned. our
                    tour guide Quang was also very friendly and the hotel rooms were comfortable. great indian food and
                    flexible “</p>
                <div className="flex gap-4 items-center">
                    <img src={Avata} alt=""/>
                    <p className="text-[#EBF0F8] font-semibold">Nhat Thu <br/> 7 month ago</p>
                </div>
            </div>
            <div className="space-y-8 w-2/5">
                <div className="flex gap-3">
                <img src={Star} alt=""/>
                </div>
                <p className="text-[#EBF0F8] font-normal italic">“ Our trip to da nang was amazing and well planned. our
                    tour guide Quang was also very friendly and the hotel rooms were comfortable. great indian food and
                    flexible “</p>
                <div className="flex gap-4 items-center">
                    <img src={Avata} alt=""/>
                    <p className="text-[#EBF0F8] font-semibold">Nhat Thu <br/> 7 month ago</p>
                </div>
            </div>
            <svg className="text-white absolute top-1/2 right-[2%] " xmlns="http://www.w3.org/2000/svg" width="64"
                height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
            </svg>
        </div>
    </div>
    )
}
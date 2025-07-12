import { useNavigate } from "react-router";
import Clock from "~/assets/images/clock.svg"
import Timeline from "~/assets/images/timeline.svg"

interface TourProps {
    name: string;
    image: string;
    time: string;
    description: string;
    oldPrice: string;
    price: string
}

export function Tour({ name, image, time, description, oldPrice, price }: TourProps) {
    const navigate = useNavigate()

    function handelClick() {
        navigate("/tours")
    }
    return (
        <div onClick={handelClick} className="cursor-pointer">
            <div className="relative shadow-lg rounded-lg px-2 py-2 transition-all duration-300 
              transform hover:-translate-y-2 hover:scale-105">
                <div className="flex gap-[6px] absolute lg:top-3 lg:right-7 top-1 right-[2%]">
                    <div className="bg-[#09873E] round rounded-full text-white lg:px-3 lg:py-2 px-2 py-1 w-fit font-extralight text-sm">
                        Daily tour</div>
                    <div className="bg-[#F07132] round rounded-full text-white px-3 py-2 w-fit font-extralight lg:text-sm text-xs">
                        Promotion</div>
                </div>
                <img src={image} alt="" className="w-full h-full object-cover"/>
                <div className="lg:py-6 py-[16px] lg:space-y-3 space-y-2">
                    <p className="text-[#000000] font-semibold lg:text-2xl text-xl">{name} Tour</p>
                    <div className="flex gap-2">
                        <img src={Clock} alt="" />
                        <p className="text-[##262626] lg:text-base text-sm font-normal">{time}</p>
                    </div>
                    <div className="flex gap-2">
                        <img src={Timeline} alt="" />
                        <p className="text-[##262626] lg:text-base text-sm font-normal">{description}</p>
                    </div>
                    <p className="text-[#9B9B9B] line-through lg:text-xl text-base py-4">{oldPrice}</p>
                    <p className="text-[#101010] font-bold lg:text-3xl text-2xl ">{price}
                        <span className="text-[#101010] font-normal lg:text-lg text-base">/pax</span>
                    </p>
                </div>
                <div className="flex gap-2">
                    <p className="font-medium text-base	">More detail</p>
                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
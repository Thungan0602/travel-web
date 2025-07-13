import { Tour } from "~/widgets/Tour";
import { LinkButton } from "~/shared/ui/atoms/LinkButton"

import Dalat from "~/assets/images/dalat.png";
import Danang from "~/assets/images/danang.png";
import Hue from "~/assets/images/hue.png";
import Hoian from "~/assets/images/hoian.png";
import { useNavigate } from "react-router";

const TOURS = [
    {
        name: "Da Nang",
        image: Danang,
        time: "1 weeks",
        description: "Bà Nà Hill - Sông Hàn - Bãi Rạn - Cầu Tình Yêu - Bãi biển Sơn Trà",
        oldPrice: "$100",
        price: "$40",
    },
    {
        name: "Da Lat",
        image: Dalat,
        time: "1 weeks",
        description: "Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang",
        oldPrice: "$100",
        price: "$40",
    },
    {
        name: "Hoi An",
        image: Hoian,
        time: "4 day",
        description: "Bà Nà Hill - Sông Hàn - Bãi Rạn - Cầu Tình Yêu - Bãi biển Sơn Trà",
        oldPrice: "$100",
        price: "$40",
    },
    {
        name: "Da Lat",
        image: Hue,
        time: "1 weeks",
        description: "Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang",
        oldPrice: "$100",
        price: "$40",
    },
]

export function BestSellerTours() {
    const navigate = useNavigate();
    function onSeeMore() {
        navigate("/tours");
    }
    return (
        <div className="lg:px-20 px-5 lg:py-36 py-16">
            <p className="lg:text-xl text-lg font-normal flex gap-2 mb-8">BEST SELLER TOURS
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plane size-6"
                ><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>
            </p>
            <div className="flex justify-between mb-16">
                <p className="text-[#294D81] lg:text-5xl text-4xl font-normal">Find your place on the coast, in the mountain or in the city.</p>
                <LinkButton text="See more" textColor="text-[#3562A6]" colorItem="text-[#3562A6]" colorClass="bg-none" animation="lg:block hidden" onClick={onSeeMore}/>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:gap-6 gap-2">
                {TOURS.map((tour) => (
                    <Tour
                        name={tour.name}
                        image={tour.image}
                        time={tour.time}
                        description={tour.description}
                        oldPrice={tour.oldPrice}
                        price={tour.price}
                    />
                ))}

            </div>
            <div className="flex justify-between mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6" />
                </svg>
                <div className="gap-5 flex py-[18px]">
                    <p className="round rounded-full bg-[#3562A6] size-4"></p>
                    <p className="round rounded-full bg-[#E9E9E9] size-4"></p>
                    <p className="round rounded-full bg-[#E9E9E9] size-4"></p>
                    <p className="round rounded-full bg-[#E9E9E9] size-4"></p>
                    <p className="round rounded-full bg-[#E9E9E9] size-4"></p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="lucide lucide-chevron-right">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </div>
        </div>
    );
}
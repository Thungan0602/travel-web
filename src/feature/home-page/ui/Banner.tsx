import Banner1 from "~/assets/images/banner.png"
import Party from "~/assets/images/party.svg"
import Message from "~/assets/images/message.svg"

import { LinkButton } from "~/shared/ui/atoms/LinkButton"
import { useNavigate } from "react-router";

export default function Banner() {
    const navigate = useNavigate();
    function onBookNow() {
        navigate("/payment");
    }
    return (
        <div className="relative">
            <img src={Banner1} alt="" className="w-full h-screen object-cover " />
            <div className="lg:px-20 px-5 text-white absolute lg:bottom-[10%] lg:left-0 bottom-[30%]">
                <p className="font-serif lg:text-6xl text-3xl leading-tight lg:pb-[52px] pb-8">A colorful experience <br/> us in Vietnam
                </p>
                <LinkButton text="Book now" textColor="text-white" colorItem="text-white" colorClass="bg-[#3562A6]" animation="flex" onClick={onBookNow} />
            </div>
            <div className="animate-bounce space-y-[13px] absolute lg:bottom-[6%] -bottom-[30%] right-[32px]">
                <div
                    className="bg-[#09873E] round rounded-full lg:flex px-4 py-4 lg:gap-2 w-fit absolute -top-[80%]">
                    <img src={Party} alt="" />
                    <p className="text-white cursor-pointer hidden lg:block">Contact us</p>
                </div>
                <div className="bg-[#3562A6] round rounded-full flex px-4 py-4 gap-2 w-fit">
                    <img src={Message} alt="" />
                    <p className="text-white cursor-pointer hidden lg:block">Promotional Tours</p>
                </div>
            </div>
        </div>
    )
}
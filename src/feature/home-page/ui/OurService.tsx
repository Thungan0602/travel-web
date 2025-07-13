import Our from "~/assets/images/our.png";
import Support from "~/assets/images/support.svg";
import Price from "~/assets/images/price.svg";
import Quality from "~/assets/images/quality.svg";
import Flexible from "~/assets/images/flexible.svg";
import Medal from "~/assets/images/medal.svg";

export function OurService() {
    return (
        <div className="flex bg-[#EBF0F8]">
            <div className="lg:pl-20 lg:pr-10 lg:py-20 px-5 py-10 lg:w-1/2 w-full">
                <div className="space-y-[24px] lg:text-left text-center">
                    <p className="text-[#515151]">OUR SERVICE</p>
                    <p className="text-[#3562A6] font-serif font-normal lg:text-5xl text-4xl">What you can expect from us</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-[32px] lg:pt-20 pt-10">
                    <div className="space-y-4">
                        <img src={Flexible} alt="" />
                        <p className="text-xl font-semibold">24/7 Support</p>
                        <p className="font-normal text-lg">Always ready to support whenever you need to ensure a seamless and
                            colorful experience.</p>
                    </div>
                    <div className="space-y-4">
                        <img src={Support} alt="" />
                        <p className="text-xl font-semibold">Best Price</p>
                        <p className="font-normal text-lg">Whatever your style, enjoy a flawless trip with excellent
                            accommodations at competitive prices.</p>
                    </div>
                    <div className="space-y-4">
                        <img src={Price} alt="" />
                        <p className="text-xl font-semibold">Service Quality</p>
                        <p className="font-normal text-lg">Prioritize our services and stay updated with trends to enhance
                            quality. Trust us for a satisfying trip!</p>
                    </div>
                    <div className="space-y-4">
                        <img src={Quality} alt="" />
                        <p className="text-xl font-semibold">Flexible Service</p>
                        <p className="font-normal text-lg">Personalizing your trip to fit your budget and desires has never
                            easier!</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-auto lg:block hidden">
                <img src={Our} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
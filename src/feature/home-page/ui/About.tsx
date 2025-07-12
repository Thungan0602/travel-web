import LogoTeam from "~/assets/images/team-logo.png"
import {LinkButton} from "~/shared/ui/atoms/LinkButton"

export default function About() {
    return (
        <div className="flex lg:flex-row flex-col">
            <img src={LogoTeam} alt="" className="w-1/2 h-full object-cover"/>
            <div className="w-1/2 bg-[#EBF0F8] space-y-8 lg:py-[82px] lg:px-[80px] px-5 py-[52px]">
                <h1 className="text-[#3562A6] font-serif font-normal lg:text-5xl text-3xl">About Travel Buddy</h1>
                <p className="text-[#515151] font-normal lg:text-base text-sm">Travel Buddy is a young and dynamic DMC in Vietnam
                    founded in September 2023, primarily operating in international and domestic travel and tourism
                    services.</p>
                <p className="text-[#515151] font-normal lg:text-base text-sm"> We possess a young, sensitive workforce with current
                    trends and high expertise, so we are
                    poised to offer more engaging and fulfilling travel experiences than ever.</p>
                <div className="flex lg:gap-[52px] gap-8">
                    <div className="space-y-[6px]">
                        <p className="font-bold lg:text-5xl text-3xl text-[#203B64]">25+</p>
                        <p className="italic">Destinations</p>
                    </div>
                    <div className="space-y-[6px]">
                        <p className="font-bold lg:text-5xl text-3xl text-[#203B64]">2500+</p>
                        <p className="italic">Tourists per year</p>
                    </div>
                    <div className="space-y-[6px]">
                        <p className="font-bold lg:text-5xl text-3xl text-[#203B64]">120+</p>
                        <p className="italic">Partners</p>
                    </div>
                </div>
                <LinkButton text="Read now" textColor="text-white" colorItem="text-white" colorClass="bg-[#3562A6]"  />
            </div>
        </div>
    )
}
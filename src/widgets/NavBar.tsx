import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "~/shared/ui/molecules/Menubar";

const NAV_ITEMS = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Tours",
        link: "/tours",
    },
    {
        title: "Service",
        link: "/services",
        children: [
            {
                title: "Vietnam’s Attraction Tickets",
                link: "/vietnam’s-attraction-tickets",
            },
            {
                title: "Vietnam’s Entrance Tickets",
                link: "/vietnam’s-entrance-tickets",
            },
            {
                title: "Domestic & International Flight Tickets",
                link: "/domestic-international-flight-tickets",
            },
            {
                title: "Hotel Reservation",
                link: "/hotel-reservation",
            },
            {
                title: "Cruise",
                link: "/cruise",
            },
            {
                title: "Airport Shuttle Services",
                link: "/airport-shuttle-services",
            },
            {
                title: "Car Disposal",
                link: "/car-disposal",
            },
            {
                title: "Applying for Visa",
                link: "/applying-for-visa",
            },
        ],
    },
    {
        title: "MICE",
        link: "/mice",
        children: [
            {
                title: "Destination",
                link: "/destination",
            },
            {
                title: "Services",
                link: "/services",
            },
            {
                title: "MICE G.R.O.U.P",
                link: "/mice-group",
            }
        ],
    },
    {
        title: "Blog",
        link: "/blogs",
    },
    {
        title: "About Us",
        link: "/about-us",
        children: [
            {
                title: "Our Story",
                link: "/our-story",
            },
            {
                title: "Our Vision",
                link: "/our-vision",
            },
            {
                title: "Our Mission",
                link: "/our-mission",
            },
            {
                title: "Our Philosophy",
                link: "/our-philosophy",
            },
            {
                title: "Core Value",
                link: "/core-value",
            },
            {
                title: "About Team",
                link: "/about-team",
            },
        ]
    },
    {
        title: "Membership",
        link: "/membership",
    },
];

export function Navbar() {
    return (
        <Menubar className="flex text-[#101010] text-base font-normal border-none shadow-none">
            {NAV_ITEMS.map((item) => (
                <MenubarMenu key={item.title}>
                    <MenubarTrigger className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
                        {item.children ? (
                            <div className="flex items-center">
                                {item.title}
                                <ChevronDown className="size-4 ml-1" />
                            </div>
                        ) : (
                            <Link to={item.link}>{item.title}</Link>
                        )}
                    </MenubarTrigger>

                    {item.children && (
                        <MenubarContent className="bg-white shadow-lg rounded-md">
                            {item.children.map((child) => (
                                <MenubarItem key={child.link} asChild>  
                                {/* asChild giúp bạn truyền Link vào trong MenubarItem */}
                                    <Link to={child.link} className="w-full block px-4 py-2 hover:bg-gray-100">
                                        {child.title}
                                    </Link>
                                </MenubarItem>
                            ))}
                        </MenubarContent>
                    )}
                </MenubarMenu>
            ))}
        </Menubar>
    );
}


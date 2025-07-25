import { useNavigate } from "react-router";
import LogoWhite from "~/assets/images/logo-white.svg"

export function Footer() {
  const navigate = useNavigate()

  function handelTour() {
    navigate("/tours")
  }
  function handelServices() {
    navigate("/services")
  }
  function handelBlog() {
    navigate("/blogs")
  }
  function handelAbout() {
    navigate("/about-us")
  }
  function handelMice() {
    navigate("/mice")
  }
  return (
    <footer className="bg-[#203b64]">
      <div className="lg:px-20 lg:py-20 px-5 py-5">
        <div className=" flex justify-between lg:gap-20 gap-7 ">
          <div>
            <img src={LogoWhite} alt="" className="w-48 h-24 mb-4"/>
            <p className="text-white text-base font-normal">A team of dedicated travel advisors providing personalized services and assistance to ensure that our customers are entirely delighted with their journeys to explore Vietnam’s splendor.</p>
          </div>
          <div className="cursor-pointer ">
            <p className="text-[#6189c5] text-[20px] font-semibold mb-6">MENU</p>
            <div onClick={handelTour} className="hover:underline">
            <p className="text-white text-base font-medium mb-6">Tour</p>
            </div>
            <div onClick={handelServices} className="hover:underline">
              <p className="text-white text-base font-medium mb-6">Services</p>
            </div>
            <div onClick={handelMice} className="hover:underline">
              <p className="text-white text-base font-medium mb-6">MICE</p>
            </div>
            <div onClick={handelBlog} className="hover:underline">
              <p className="text-white text-base font-medium mb-6">Blog</p>
            </div>
            <div onClick={handelAbout} className="hover:underline">
              <p className="text-white text-base font-medium mb-6">About us</p>
            </div>
          </div>
          <div>
            <p className="text-[#6189c5] text-[20px] font-semibold mb-6">CONTACT INFO</p>
            <p className="text-white text-base font-semibold mb-2">Da Nang Office</p>
            <p className="text-white text-base font-normal mb-6">132 Ho Xuan Huong, Khue My Ward, Ngu Hanh Son District, DaNang City</p>
            <p className="text-white text-base font-semibold mb-2">Ho Chi Minh Office</p>
            <p className="text-white text-base font-normal mb-6">88 Le Lai Street, Ben Thanh Ward, District 1, Ho Chi Minh City</p>
            <p className="font-normal text-white text-base mb-2"><span className="font-semibold">Mobile: </span>(+84) 123 456 789</p>
            <p className="font-normal text-white text-base"><span className="font-semibold">Email: </span>info@travelbuddyvn.com</p>
          </div>
          </div>
        <div className="py-0.5 bg-[#3a6cb6] mb-4 mt-8"></div>
        <p className="font-normal text-white text-xs">Copyright © 2024 Travel Buddy Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

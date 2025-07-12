import { OurService } from "~/feature/home-page/ui/OurService";
import { OurDestination } from "~/feature/home-page/ui/OurDestination";      
import { Testimonial } from "~/feature/home-page/ui/Testimonial";
import { OurBlogs } from "~/feature/home-page/ui/OurBlogs";
import  {BestSellerTours} from "~/feature/home-page/ui/BestSellerTours";
import Banner from "~/feature/home-page/ui/Banner";
import About from "~/feature/home-page/ui/About";


export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <BestSellerTours />
      <OurService />
      <OurDestination />
      <Testimonial />
      <OurBlogs />
    </div>
  );
}
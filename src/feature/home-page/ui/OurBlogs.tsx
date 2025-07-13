import { OurBlog } from "~/widgets/OurBlog";
import { LinkButton } from "~/shared/ui/atoms/LinkButton"

import Blog1 from "~/assets/images/blog1.png";
import Blog2 from "~/assets/images/blog2.png";
import Blog3 from "~/assets/images/blog3.png";
import Blog4 from "~/assets/images/blog4.png";

import { useNavigate } from "react-router";

export function OurBlogs() {
    const navigate = useNavigate();
    function onBlog() {
        navigate("/blogs");
    }
    return (
        <div className="lg:px-20 lg:py-36 px-5 py-16">
            <div className="flex justify-between lg:mb-16 mb-6">
                <p className="text-[#294D81] lg:text-5xl text-4xl font-normal">From our blogs</p>
                <LinkButton text="See more" textColor="text-[#3562A6]" colorItem="text-[#3562A6]" colorClass="bg-none" animation="lg:block hidden" onClick={onBlog} />
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-center justify-between lg:mb-16 gap-6">
                <OurBlog
                    blogImage={Blog1}
                    day="Oct 13, 2024"
                    title="10 Most Frequently Asked Questions About Team Retreats"
                    content="Where to host your team retreat, how to plan it, and what activities should you ..."
                />
                <OurBlog
                    blogImage={Blog2}
                    day="Oct 13, 2024"
                    title="10 Most Frequently Asked Questions About Team Retreats"
                    content="Where to host your team retreat, how to plan it, and what activities should you ..."
                />
                <OurBlog
                    blogImage={Blog3}
                    day="Oct 13, 2024"
                    title="10 Most Frequently Asked Questions About Team Retreats"
                    content="Where to host your team retreat, how to plan it, and what activities should you ..."
                />
                <OurBlog
                    blogImage={Blog4}
                    day="Oct 13, 2024"
                    title="10 Most Frequently Asked Questions About Team Retreats"
                    content="Where to host your team retreat, how to plan it, and what activities should you ..."
                />
            </div>
        </div>
    );
}
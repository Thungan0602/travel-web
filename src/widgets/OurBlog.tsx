import {ReadPost} from "~/shared/ui/atoms/ReadPost";

interface OurBlogProps {
    blogImage: string;
    day: string;
    title: string;
    content: string;
}

export function OurBlog({ blogImage, day, title, content }: OurBlogProps) {
    return (
        <div className="px-2 py-10 transition-all duration-300 
              transform hover:-translate-y-2 hover:scale-105 shadow-xl">
            <img src={blogImage} alt="" className="w-full h-full" />
            <p className="text-[#6e6e6e] text-sm font-normal mb-3">{day}</p>
            <p className="text-xl font-semibold mb-3">{title}</p>
            <p className="text-[#6e6e6e] text-sm font-normal mb-8">{content}</p>
            <ReadPost 
                
            />
        </div>
    )
}
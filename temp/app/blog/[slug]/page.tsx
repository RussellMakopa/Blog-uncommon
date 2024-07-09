import { fullBlock } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Banner from "./banner";
import Paragraph from "@/app/components/styled/paragraph";
import Conclusion from "./conclusion";
import MyPortableText from "@/app/components/PortableText";
import BlogsSection from "@/app/components/blogssection";
import { fetchData } from "@/app/components/getAllPosts";

export const revalidate = 30;

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { currentPost, otherPosts } = await fetchData(params.slug);

  // Limit the number of displayed posts to 3 if there are more than 3
  const displayedPosts = otherPosts.slice(0, 3);

  return (
    <>
      <Banner mainImage={urlFor(currentPost.mainImage).url()} title={currentPost.title} date={currentPost.date} tag={currentPost.category} />
      <div className="px-[10%] blog-body">
        <MyPortableText value={currentPost.body} />
      </div>
      <div className="p-[5%] text-justify">
        <Conclusion conclusionText={currentPost.conclusion} />
      </div>
      <h2 className="text-center text-4xl font-bold mb-6 lowercase">Continue Reading</h2>
      <div className="p-[4%]">
        <BlogsSection blogs={displayedPosts} />
      </div>
    </>
  );
}

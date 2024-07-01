import { fullBlock } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Banner from "./banner";
import Paragraph from "@/app/components/styled/paragraph";
import Conclusion from "./conclusion";

async function getData(slug:string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}']{
  "currentSlug":slug.current,
    title,
    content,
    titleImage,
    smallDescription,
    tag,
    "date":_createdAt
} [0]
    `;
    const data = await client.fetch(query);

    return data;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {

    const data: fullBlock = await getData(params.slug);
    
  return (
    <>
      <Banner titleImage={urlFor(data.titleImage).url()} title={data.title} date={data.date} tag={data.tag}  />
      <div className="p-[5%] px-[10%]">
        <Paragraph>{data.smallDescription}</Paragraph>

        <div>
          
        </div>
        <Conclusion />
      </div>
    </>
  );
}

import { fullBlock } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Banner from "./banner";
import Paragraph from "@/app/components/styled/paragraph";
import Conclusion from "./conclusion";
import MyPortableText from "@/app/components/PortableText";

async function getData(slug:string) {
  const query = `
     *[_type == 'post' && slug.current == '${slug}']{
  "currentSlug":slug.current,
    title,
    mainImage,
    author,
    "category":categories[0]->title,
    "date":_createdAt,
    body
}[0]`;

  const data = await client.fetch(query);
  console.log(data);
  return data;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {

    const data: fullBlock = await getData(params.slug);
    
  return (
    <>
      <Banner mainImage={urlFor(data.mainImage).url()} title={data.title} date={data.date} tag={data.category}  />
      <div className="p-[5%] px-[10%] blog-body">
        <MyPortableText value={data.body} />
      </div>
        {/* <div className="p-[5%]">
          
        <Conclusion />
      </div> */}
    </>
  );
}

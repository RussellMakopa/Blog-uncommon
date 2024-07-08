import { fullBlock } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Banner from "./banner";
import Paragraph from "@/app/components/styled/paragraph";
import Conclusion from "./conclusion";
import MyPortableText from "@/app/components/PortableText";

async function getData(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      "currentSlug": slug.current,
      title,
      mainImage,
      author,
      "category": categories[0]->title,
      "date": _createdAt,
      body[]{
        ...,
        _type == "block" => {
          ...,
          children[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "href": @.href
              }
            }
          }
        },
        _type == "image" => {
          ...,
          asset->
        },
        _type == "ul" => {
          ...,
          children[]{
            ...,
            _type == "listItem" => {
              ...,
              children[]{
                ...
              }
            }
          }
        },
        _type == "ol" => {
          ...,
          children[]{
            ...,
            _type == "listItem" => {
              ...,
              children[]{
                ...
              }
            }
          }
        }
      },
      conclusion
    }`;

  const params = { slug };
  const data = await client.fetch(query, params);
  console.log(data);
  return data;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {

  const data: fullBlock = await getData(params.slug);

  return (
    <>
      <Banner mainImage={urlFor(data.mainImage).url()} title={data.title} date={data.date} tag={data.category} />
      <div className="px-[10%] blog-body">
        <MyPortableText value={data.body} />
      </div>
      <div className="p-[5%]">
        <Conclusion conclusionText={data.conclusion} />
      </div>
    </>
  );
}

import Link from 'next/link';
import { simpleBlogCard } from '../lib/interface';
import {client, urlFor} from '../lib/sanity'
import Image from 'next/image';
import {PiArrowUpRightBold} from 'react-icons/pi'
import MyPortableText from './PortableText';

export const revalidate = 30;
async function getData() {
  const query = `
    *[_type == 'post'] | order(_createdAt desc){
  title,
    mainImage,
    "currentSlug":slug.current,
    "date":_createdAt,
    body,
    "category":categories[0]->title
}`;
try {
  const data = await client.fetch(query);
    console.log(data);
    return data;
} catch (error) {
  console.log("error");
  return [];
}
    
}


export const formatDate = (isoDate: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate: string = new Date(isoDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};


export default async function BlogsSection() {
  const data: simpleBlogCard[] = await getData();
  console.log(data)

 

 
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mb-[3%]">
      {data.map((item, i) => {
        return (
          <Link
            key={i}
            href={`/blog/${item.currentSlug}`}
            className="block relative "
          >
            <div
              className={`group hover:cursor-pointer duration-[0.3] ease-in-out hover:shadow-lg transition bg-secondary relative p-4 px-4 rounded-[30px] md:h-[500px]`}
            >
              <div className="relative h-[261px] w-full rounded-[30px] overflow-hidden">
                <Image
                  src={urlFor(item.mainImage).url()}
                  className="w-full h-full object-cover inset-0 absolute "
                  alt={item.title}
                  height={260}
                  quality={100}
                  width={380}
                  priority
                />
            
              </div>

              <div className="flex gap-5 mb-2 mt-7  lg:gap-6 lg:mb-[10px]">
                <div className="absolute blog-category">
                  {item.category}
                </div>
                <h4 className="font-secondary md:text-[22px] lowercase text-[16px] my-3 md:m-0">
                  {item.title}
                </h4>
              </div>
              <div className="blog-body text-sm text-gray-600 mt-2 line-clamp-3">
                    <MyPortableText value={item.body} />
                  </div>
              <span>{formatDate(item.date)}</span>
            </div>
          </Link>

        );
      })}
    </div>
  );
}

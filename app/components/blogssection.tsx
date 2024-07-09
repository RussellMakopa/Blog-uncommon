import Link from 'next/link';
import { simpleBlogCard } from '../lib/interface';
import { client } from '../lib/sanity';
import BlogCard from './BlogCard';

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

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-6">continue reading</h2>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mb-[3%]">
        {data.map((item, i) => (
          <BlogCard
            key={i}
            title={item.title}
            mainImage={item.mainImage}
            currentSlug={item.currentSlug}
            date={item.date}
            body={item.body}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

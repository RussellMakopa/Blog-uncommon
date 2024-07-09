import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import MyPortableText from './PortableText';
import { formatDate } from '../lib/formatDate';

interface BlogCardProps {
  title: string;
  mainImage: any;
  currentSlug: string;
  date: string;
  body: any;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, mainImage, currentSlug, date, body, category }) => {
  return (
    <Link href={`/blog/${currentSlug}`} className="block relative">
      <div className="group hover:cursor-pointer duration-[0.3] ease-in-out hover:shadow-lg transition bg-secondary relative p-4 px-4 rounded-[30px] md:h-[500px]">
        <div className="relative h-[261px] w-full rounded-[30px] overflow-hidden mb-[5%]">
          <Image
            src={urlFor(mainImage).url()}
            className="w-full h-full object-cover inset-0 absolute"
            alt={title}
            height={260}
            quality={100}
            width={380}
            priority
          />
        </div>
        <div className="ml-[3%] mt-[3%] absolute blog-category">
          {category}
        </div>
        <h4 className="font-secondary md:text-[22px] lowercase text-[16px] my-3 md:m-0">
          {title}
        </h4>
        <div className="blog-body text-sm text-gray-600 mt-2 font-primary line-clamp-3 mb-[3%]">
          <MyPortableText value={body} />
        </div>
        <span>{formatDate(date)}</span>
      </div>
    </Link>
  );
};

export default BlogCard;

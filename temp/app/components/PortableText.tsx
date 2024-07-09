import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = value.asset?.url;

      if (!imageUrl) {
        return null; // Or render a placeholder or fallback content
      }

      return (
        <div className="my-4 max-sm:max-h-[300px] max-h-[540px] overflow-hidden rounded-[30px]">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog image'}
            layout="responsive"
            width={800} 
            height={400}
            className="object-cover rounded-[30px] sm:h-60 md:h-72"
          />
        </div>
      );
    },
    button: ({ value }) => (
        <Link href={value.url}>
        <div className="inline-block blog-category mt-[3%] mb-[3%]">
          {value.text}
        </div>
        </Link>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4 mt-[5%] mb-[5%]">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-3 mt-[5%] mb-[5%]">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-2 mt-[5%] mb-[5%]">{children}</h3>,
    normal: ({ children }) => <p className="my-2">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-500 pl-4 my-4">{children}</blockquote>,
    // Handling lists
    ul: ({ children }) => <ul className="list-disc pl-4 my-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-4 my-2">{children}</ol>,
    li: ({ children }) => <li className="my-1">{children}</li>,
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc pl-4 my-1 ml-[5%]">{children}</li>,
    number: ({ children }) => <li className="list-decimal pl-4 my-1 ml-[5%]">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ children, value }) => {
      if (!value.href) {
        return <span>{children}</span>; // Render as plain text if href is missing
      }
      return (
        <Link href={value.href} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      );
    },
  },
};

const MyPortableText = ({ value }: { value: any }) => (
  <PortableText value={value} components={myPortableTextComponents} />
);

export default MyPortableText;

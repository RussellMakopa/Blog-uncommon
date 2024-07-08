import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const width = value.asset?.metadata?.dimensions?.width || 800; // Default width
      const height = value.asset?.metadata?.dimensions?.height || 600; // Default height

      if (!value.asset || !value.asset.url) {
        return null; // Or render a placeholder or fallback content
      }

      return (
        <div className="my-4">
          <Image
            src={value.asset.url}
            alt={value.alt || 'Blog image'}
            layout="responsive"
            width={width}
            height={height}
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-2">{children}</h3>,
    normal: ({ children }) => <p className="my-2">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-500 pl-4 my-4">{children}</blockquote>,
    // Handling lists
    ul: ({ children }) => <ul className="list-disc pl-4 my-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-4 my-2">{children}</ol>,
    li: ({ children }) => <li className="my-1">{children}</li>,
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc pl-4 my-1">{children}</li>,
    number: ({ children }) => <li className="list-decimal pl-4 my-1">{children}</li>,
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

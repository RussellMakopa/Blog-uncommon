// components/PortableText.js
import { PortableText } from '@portabletext/react';

const myPortableTextComponents = {
  types: {
    // Define custom components for specific types if needed
    image: ({ value }) => <img src={value.asset.url} alt={value.alt} />,
  },
  marks: {
    // Define custom components for marks if needed
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const MyPortableText = ({ value }) => (
  <PortableText value={value} components={myPortableTextComponents} />
);

export default MyPortableText;

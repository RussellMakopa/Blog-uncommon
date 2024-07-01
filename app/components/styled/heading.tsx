interface headingProps {
  children?: any;
  extraClasses?: string;
}

export default function Heading({ children, extraClasses }: headingProps) {
  return (
    <h1
      className={`text-3xl md:text-4xl lg:text-6xl xl:text-[65px] font-secondary ${extraClasses}`}
    >
      {children}
    </h1>
  );
}

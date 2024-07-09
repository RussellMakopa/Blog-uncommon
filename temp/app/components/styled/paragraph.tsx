interface paragraphProps {
  children?: any;
  extraClasses?: any;
}

export default function Paragraph({ children, extraClasses }: paragraphProps) {
  return (
    <p
      className={`${extraClasses} font-primary text-sm md:text-md md:text-[17px] leading-snug`}
    >
      {children}
    </p>
  );
}

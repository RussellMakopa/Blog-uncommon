import React from 'react';
import Paragraph from '@/app/components/styled/paragraph';
import { SparklesCore } from '@/app/components/ui/sparkles';
import MyPortableText from '@/app/components/PortableText';
import Image from 'next/image';

interface ConclusionProps {
  conclusionText: string;
}

const Conclusion: React.FC<ConclusionProps> = ({ conclusionText }) => {
  return (
    <div className="text-light p-[5%] py-[10%] md:py-[5%] overflow-hidden bg-primary rounded-[30px] lg:pr-[3.8%] lg:pt-[5%] lg:pl-[3.8%] lg:flex-1 relative mt-[-3%] ml-[5%]">
      <div className="w-full absolute inset-0 h-screen z-[0]">
        <SparklesCore
          id="fsbkjb"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>
      <h4 className='text-3xl font-secondary lowercase'>Conclusion</h4>
      <div className="flex flex-col gap-4 pr-10 sm:pr-28 md:pr-32"> {/* Adjusted right padding for smaller devices */}
        <MyPortableText value={conclusionText} />
      </div>
      <div className="absolute bottom-[5%] right-[1%] transform scale-y-[-1] z-0">
        <Image 
          src="/images/shapes2.png"
          alt="decorative shape"
          className="w-12 sm:w-20 md:w-32" // Tailwind responsive classes
          width={150}
          height={150}
          priority
        />
      </div>
    </div>
  );
};

export default Conclusion;

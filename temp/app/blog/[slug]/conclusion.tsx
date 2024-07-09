import React from 'react';
import Paragraph from '@/app/components/styled/paragraph';
import { SparklesCore } from '@/app/components/ui/sparkles';
import MyPortableText from '@/app/components/PortableText';

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
      <div className="flex flex-col gap-4 pr-28"> {/* Added right padding to wrap text */}
        <MyPortableText value={conclusionText} />
      </div>
      <img 
        src="/images/shapes2.png"  
        className="absolute bottom-[5%] right-[1%] transform scale-y-[-1]" 
        style={{
          width: '200px', // Adjusted size for smaller image
          height: 'auto',
        }}
      />
    </div>
  );
};

export default Conclusion;

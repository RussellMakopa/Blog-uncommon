import Paragraph from '@/app/components/styled/paragraph';
import { SparklesCore } from '@/app/components/ui/sparkles';
import React from 'react'

export default function Conclusion() {
  return (
    <div className="text-light p-[5%] py-[10%] md:py-[5%] overflow-hidden bg-primary rounded-[30px] lg:pr-[3.8%] lg:pt-[6%] lg:pl-[3.8%] lg:flex-1 relative">
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
      <h4>conclusion</h4>
      <div className="flex flex-col gap-4">
        <Paragraph>
          Mastering CSS Grid layouts is a game-changer for web designers seeking
          complete control and flexibility in their designs. With a solid
          understanding of the fundamentals, you can confidently dive into
          building complex and visually stunning layouts.
        </Paragraph>
      </div>
    </div>
  );
}

import Image from 'next/image'
import React from 'react';
import {clsx} from 'clsx';
import { formatDate } from '@/app/lib/formatDate';

export default function Banner({mainImage, title, date, tag}:{mainImage:string, title:string, date:string, tag:string}) {
  const imageUrl = mainImage;

  return (
    <section className="p-[5%] pt-[2%]">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 1) 100%), url('${imageUrl}')`,
        }}
        className={clsx(
          `relative overflow-hidden rounded-[30px] bg-cover bg-right md:bg-center h-[70dvh] md:h-[700px]`
        )}
      >
        <Image
          src="/images/shapes.svg"
          alt="Nedbank Innovation Hub"
          width={238}
          height={197}
          priority
          className="pt-[4%] pl-[4%]"
        />
        <div className="absolute bottom-0 w-full p-5 pl-[4%]">
          <div className="min-w-[130px] w-max px-10 flex items-center justify-center bg-primary text-light rounded-[29px] text-md font-demibold py-3">
            <span>{tag}</span>
          </div>
          <h1 className="text-light text-[35px] md:text-[64px] lowercase font-secondary mb-2 sm:pr-48 md:max-w-[20ch] leading-none">
            {title} <br />
          </h1>
          <span className="text-light font-primary">{formatDate(date)}</span>
        </div>
      </div>
    </section>
  );
}
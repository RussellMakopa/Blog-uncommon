import Image from 'next/image'
import React from 'react';
import {clsx} from 'clsx';
import { formatDate } from '@/app/components/blogssection';

export default function Banner({titleImage, title, date, tag}:{titleImage:string, title:string, date:string, tag:string}) {
  const imageUrl = titleImage;
 
  return (
    <section className="p-[5%] pt-[2%]">
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className={clsx(
          `relative overflow-hidden  rounded-[30px] bg-cover bg-right md:bg-center h-[70dvh] md:h-[700px] bg-[linear-gradient(to_bottom,rgba(49,84,44,0.0),rgba(16,71,52,0))')]`
        )}
      >
        <Image
          src="/images/shapes.svg"
          alt="Nedbank Innovation Hub"
          width={238}
          height={197}
          className="pt-[4%] pl-[4%]"
        />
        <div className="absolute bottom-5 md:bottom-[60px] md:left-[50px] left-5">
          <div className=" min-w-[130px]  w-max px-10 flex items-center justify-center bg-primary text-light rounded-[29px] text-md  font-demibold py-3 ">
            <span>{tag}</span>
          </div>
          <h1 className="text-light text-[35px] md:text-[64px] lowercase font-secondary ">
            {title} <br className="" />
          </h1>
          <span className="font-primary text-light">{formatDate(date)}</span>
        </div>
      </div>
    </section>
  );
}

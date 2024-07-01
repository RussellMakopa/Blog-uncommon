"use client";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function InstagramFeed() {
  const [data, setData] = useState({
    caption: "",
    id: "",
    media_type: "",
    media_url: "",
    permalink: "",
    thumbnail_url: "",
    username: "",
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://graph.instagram.com/me?fields=id,username,account_type,media_count,media{published_at,caption,id,media_type,media_url,permalink,thumbnail_url,username}&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN}`,
      { cache: "no-cache" }
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchedData = data.media.data[0];
        setData(fetchedData);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="bg-secondary w-full h-full flex justify-center items-center rounded-[30px]">
        <div className="spinner"></div>
      </div>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <Link href={data.permalink} className="w-full" target="_blank">
        <div className="w-full object-cover max-h-[525px] overflow-hidden rounded-[30px] flex justify-center items-center">
          {data.media_type === "IMAGE" && (
            <Image
              src={data.media_url}
              className="rounded-[30px] w-full object-contain inset-0 h-full"
              height={300}
              width={300}
              quality={100}
              alt={data.caption}
            />
          )}
          {data.media_type === "VIDEO" && (
            <video
              src={data.media_url}
              controls
              muted
              autoPlay
              className="rounded-[30px] w-full object-cover inset-0 h-full"
            />
          )}
          {data.media_type === "CAROUSEL_ALBUM" && (
            <Image
              src={data.media_url}
              className="rounded-[30px] w-full object-cover inset-0 h-full"
              height={300}
              width={300}
              quality={100}
              alt={data.caption}
            />
          )}
          <RiInstagramFill className="text-light absolute right-5 lg:bottom-7 w-[35px] h-[35px] bottom-5" />
        </div>
      </Link>
    </>
  );
}

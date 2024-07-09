"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SparklesCore } from "./ui/sparkles";
import Headroom from "react-headroom";




const Navigation = () => {
  const [open, setOpen] = useState(false);
  

  const router = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Headroom>
      <header className="flex items-center justify-between w-full z-[99999] bg-light md:bg-light shadow md:shadow-none lg:py-2">
        <Link href="/" className="pl-[5%] lg:translate-x-[0%]">
          <Image
            height={50}
            width={150}
            className={`lg:w-[240px] h-auto`}
            src="/images/hd-logo.svg"
            quality={100}
            priority
            alt="Uncommon Logo"
          />
        </Link>
        <div
          id="hamburger"
          className={
            open
              ? `text-gray-500 w-10 h-10 my-3 mr-[5%] relative transition focus:outline-none  z-[99] md:hidden`
              : `text-gray-500 w-10 h-10 my-3 mr-[5%] relative transition focus:outline-none  z-[99] md:hidden`
          }
          onClick={() => setOpen(!open)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={
                open
                  ? `block bg-light rounded absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45`
                  : "block bg-primary rounded absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5"
              }
            ></span>
            <span
              aria-hidden="true"
              className={
                open
                  ? `block bg-light rounded absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out opacity-0`
                  : "block bg-primary rounded absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
              }
            ></span>
            <span
              aria-hidden="true"
              className={
                open
                  ? `block bg-light rounded absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out -rotate-45`
                  : "block bg-primary rounded absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out translate-y-1.5"
              }
            ></span>
          </div>
        </div>
        <div
          className={
            open
              ? `absolute bg-primary md:bg-[transparent] origin-top-right top-0 duration-[500ms] right-0 h-[100dvh] md:h-full flex items-end transition-all pr-[5%] justify-center flex-col w-full max-w-full md:max-w-[unset] md:relative md:flex-row md:items-center md:gap-5 lg:gap-8`
              : `absolute bg-primary md:bg-[transparent] origin-top-right top-0 duration-[500ms] delay-500 right-0 overflow-hidden h-full flex items-end transition-all justify-center flex-col w-full max-w-0 md:max-w-[unset] md:relative md:flex-row md:items-center md:gap-5 lg:gap-8`
          }
        >
          <ul
            className="flex flex-col gap-5 md:flex-row md:gap-8 md:w-full md:max-w-[unset] items-end md:justify-center"
          >
            <li
              className={
                router === "/our-story"
                  ? "relative z-[99] text-4xl leading-loose w-[max-content] font-demibold text-light md:text-black md:text-[17px]"
                  : " relative z-[99] text-3xl leading-loose w-[max-content]  text-light md:text-black md:text-[17px]"
              }
              onClick={() => setOpen(false)}
            >
              <Link
                href="/our-story"
                className={
                  open
                    ? `scale-1 opacity-1 duration-500 transition-all delay-100 md:opacity-[1]`
                    : `scale-[0.75] delay-300 transition-all translate-x-10 duration-500 opacity-0  md:opacity-[1]`
                }
              >
                Our Story
              </Link>
            </li>
            <li
              className={
                router === "/our-programs"
                  ? "relative z-[99] text-4xl leading-loose w-[max-content] font-demibold text-light md:text-black md:text-[17px]"
                  : " relative z-[99] text-3xl leading-loose w-[max-content]  text-light md:text-black md:text-[17px]"
              }
              onClick={() => setOpen(false)}
            >
              <Link
                href="/our-programs"
                className={
                  open
                    ? `scale-1 opacity-1 duration-500 transition-all delay-150 md:opacity-[1]`
                    : `scale-[0.75] delay-200 transition-all translate-x-10 duration-500 opacity-0 md:opacity-[1] `
                }
              >
                Our Programs
              </Link>
            </li>
            <li
              className={
                router === "/get-involved"
                  ? "relative z-[99] text-4xl leading-loose w-[max-content] font-demibold text-light md:text-black md:text-[17px]"
                  : " relative z-[99] text-3xl leading-loose  w-[max-content] text-light md:text-black md:text-[17px]"
              }
              onClick={() => setOpen(false)}
            >
              <Link
                href="/get-involved"
                className={
                  open
                    ? `scale-1 opacity-1 duration-500 transition-all delay-200 md:opacity-[1]`
                    : `scale-[0.75] delay-150 transition-all translate-x-10 duration-500 opacity-0 md:opacity-[1] `
                }
              >
                Get Involved
              </Link>
            </li>
            <li
              className={
                router === "/donate"
                  ? `block md:hidden relative z-[99] text-4xl leading-loose font-demibold text-light`
                  : "block md:hidden relative z-[99] text-3xl leading-loose text-light"
              }
              onClick={() => setOpen(false)}
            >
              <Link
                href="/donate"
                className={
                  open
                    ? `scale-1 opacity-1  duration-500 transition-all delay-300`
                    : `scale-[0.75] delay-100 transition-all translate-x-10 duration-500 opacity-0 `
                }
              >
                Donate
              </Link>
            </li>
          </ul>
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#ffffff"
            />
          </div>
        </div>
        <Link
          href="/donate"
          className="hidden md:block mr-[5%] bg-primary text-light rounded-[29px] text-md my-3 px-9 font-demibold py-3"
        >
          Donate
        </Link>
      </header>
    </Headroom>
  );
};

export default Navigation;

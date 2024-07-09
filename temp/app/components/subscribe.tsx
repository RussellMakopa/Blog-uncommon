import Image from "next/image";
import Heading from "./styled/heading";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import InstagramFeed from "./styled/instagram";
import SubscribeForm from "./styled/subscribeform";


export default function Subscribe() {
  return (
    <section
      id="subscribe"
      className="p-[5%] pt-[6%] flex flex-col gap-7 lg:flex-row "
    >
      <div className="lg:w-[38.7%] relative">
        <InstagramFeed />
      </div>

      <div className="text-light p-[5%] py-[10%] md:py-[5%] overflow-hidden bg-primary rounded-[30px] lg:pr-[3.8%] lg:pt-[6%] lg:pl-[3.8%] lg:flex-1 relative">
        <div className="w-full absolute inset-0 h-screen z-[0]">
          <SparklesCore
            id="tsparticlesfull"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={200}
            className="w-full h-full"
            particleColor="#ffffff"
          />
        </div>
        <Image
          src="/images/dustwide.webp"
          alt="uncommon dust"
          height={300}
          quality={100}
          width={500}
          className=" h-full object-cover opacity-0 absolute inset-0 top-0 left-0 w-full z-[-2]"
        />
        <div className="text z-[1] relative">
          <span className="font-secondary text-[30px] md:text-[45px] flex gap-5">
            <Link
              href="https://www.instagram.com/the_uncommonorg/"
              className="transition-all hover:scale-[1.1]"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/uncommon-org"
              className="transition-all hover:scale-[1.1]"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </span>
          <Heading extraClasses="mt-5 mb-3 lg:text-[50px] lg:my-[15px] xl:text-[58px] xl:mt-[38px] xl:mb-[32px]">
            subscribe <br className="block" /> to our mailing list
          </Heading>
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}

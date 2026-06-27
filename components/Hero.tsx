import HeroBg from "@/assets/images/hero-bg.png";
import HeroBgSmall from "@/assets/images/small-hero-bg.png";
import Image, { getImageProps } from "next/image";
import OrangeMan from "@/assets/images/orange-man-transparent.webp";

const Hero = () => {
  const commonProps = { alt: "Hero Background", fill: true, priority: true };
  const { props: desktopProps } = getImageProps({
    ...commonProps,
    src: HeroBg,
  });
  const { props: mobileProps } = getImageProps({
    ...commonProps,
    src: HeroBgSmall,
  });
  return (
    <section
      id="hero"
      className="relative h-svh max-h-[1200px] w-full flex flex-col md:flex-row items-center justify-between bg-[#e59832] overflow-hidden pt-30 sm:pt-16 md:pt-0"
    >
      <picture className="absolute inset-0 z-0 pointer-events-none">
        <source media="(min-width: 768px)" srcSet={desktopProps.srcSet} />
        <img
          {...mobileProps}
          className="object-cover w-full h-full"
          style={{ width: "100%", height: "100%" }}
          alt="orage patterned background"
        />
      </picture>

      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start justify-center w-full max-w-[1200px] mx-auto px-0 sm:px-12 md:pl-20">
        <div className="absolute z-0 size-[350px] md:size-[450px] top-1/2 left-1/2 md:left-[20%] lg:left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full blob"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#e8dfd1"
              d="M42.3,-69.1C55.6,-65.5,67.9,-55.9,74.1,-43.4C80.3,-30.9,80.4,-15.4,78,-1.4C75.5,12.6,70.6,25.3,64.9,38.5C59.1,51.8,52.5,65.6,41.5,70.6C30.6,75.5,15.3,71.6,1.9,68.3C-11.5,65,-23,62.4,-37.1,59.3C-51.2,56.1,-67.8,52.4,-75,42.5C-82.1,32.5,-79.8,16.3,-78.3,0.9C-76.9,-14.5,-76.2,-29.1,-69.7,-40.1C-63.1,-51.1,-50.6,-58.6,-38,-62.6C-25.4,-66.6,-12.7,-67.1,0.9,-68.6C14.5,-70.1,28.9,-72.6,42.3,-69.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="relative z-10 text-center md:text-left flex flex-col gap-6 sm:gap-2 items-center md:items-start">
          <h1
            className="space-grotesk-font text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.1] mb-2 sm:mb-6 font-extrabold"
            style={{ WebkitTextStroke: "0.5px #f5d6ad" }}
          >
            Hi, I&apos;m <br /> Binyam
          </h1>
          <p className="bebas-neue-regular text-[22px] sm:text-[28px] md:text-[35px] tracking-widest text-black">
            a web developer.
          </p>
        </div>
      </div>

      <div className="w-full shadow-filter max-w-[380px] md:max-w-[480px] lg:max-w-[564px] h-[300px] sm:h-[443px] relative mt-auto md:absolute md:bottom-0 md:right-[2%] lg:right-[5%] z-20 shrink-0">
        <Image
          src={OrangeMan}
          alt="Binyam"
          priority
          fill
          sizes="(max-width: 768px) 100vw, 564px"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};

export default Hero;

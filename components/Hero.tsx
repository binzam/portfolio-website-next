import HeroBg from "@/assets/images/hero-bg.png";
import HeroMedia from "./VideoHero";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HeroBg.src})`,
      }}
      id="hero"
      className="h-screen flex flex-col sm:flex-row items-center justify-center bg-[#e59832] px-10"
    >
      <div className="overflow-hidden h-full flex items-center justify-center max-w-[800px] relative">
        <svg
          viewBox="0 0 200 200"
          className="absolute z-1 w-[520px] h-[520px] top-1/2 -translate-y-1/2 left-0 blob"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e8dfd1"
            d="M42.3,-69.1C55.6,-65.5,67.9,-55.9,74.1,-43.4C80.3,-30.9,80.4,-15.4,78,-1.4C75.5,12.6,70.6,25.3,64.9,38.5C59.1,51.8,52.5,65.6,41.5,70.6C30.6,75.5,15.3,71.6,1.9,68.3C-11.5,65,-23,62.4,-37.1,59.3C-51.2,56.1,-67.8,52.4,-75,42.5C-82.1,32.5,-79.8,16.3,-78.3,0.9C-76.9,-14.5,-76.2,-29.1,-69.7,-40.1C-63.1,-51.1,-50.6,-58.6,-38,-62.6C-25.4,-66.6,-12.7,-67.1,0.9,-68.6C14.5,-70.1,28.9,-72.6,42.3,-69.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="relative z-10 pl-30 mt-40">
          <h1
            className="space-grotesk-font text-[150px]/30 mb-10 font-extrabold"
            style={{
              WebkitTextStroke: "2px #f5d6ad",
            }}
          >
            Hi, I&apos;m Binyam
          </h1>
          <p className="bebas-neue-regular max-w-200 text-[35px]/11 tracking-widest text-left">
            a web developer.
          </p>
        </div>
      </div>

      <HeroMedia />
    </section>
  );
};

export default Hero;

import OrangeMan from "@/assets/images/orange-man-transparent-small.webp";
import Image from "next/image";
const Nav = () => {
  return (
    <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <ul className="flex items-center gap-3 sm:gap-6 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl relative bebas-neue-regular border border-[#895b1e] shadow-sm">
        <li>
          <a
            href="#hero"
            className="flex items-center text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors"
            aria-label="Home"
          >
            <div className="relative w-7 h-7 sm:w-6 sm:h-6 sm:mr-1.5 overflow-hidden rounded-full border border-[#895b1e]/30 bg-[#e8dfd1]">
              <Image
                src={OrangeMan}
                alt="Binyam"
                fill
                sizes="28px"
                className="object-cover object-top scale-110 mt-1" 
              />
            </div>
            <span className="hidden sm:inline">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#about-me"
            className="text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact-me"
            className="text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

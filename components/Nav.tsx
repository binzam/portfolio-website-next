const Nav = () => {
  return (
    <nav className="fixed top-6 right-6 z-50">
      <ul className="flex gap-6 bg-white px-6 py-3 rounded-2xl relative bebas-neue-regular border border-[#895b1e]">
        <li>
          <a
            href="#hero"
            className="text-lg sm:text-xl tracking-wider hover:text-[#e59832]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about-me"
            className="text-lg sm:text-xl tracking-wider hover:text-[#e59832]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="text-lg sm:text-xl tracking-wider hover:text-[#e59832]"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact-me"
            className="text-lg sm:text-xl tracking-wider hover:text-[#e59832]"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

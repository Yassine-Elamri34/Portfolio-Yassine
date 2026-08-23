import logo from "../../../assets/yassine_logo.svg";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", link: "introduction" },
  { id: 2, name: "About", link: "profile" },
  { id: 4, name: "Portfolio", link: "portfolio" },
  { id: 5, name: "Services", link: "services" },
  { id: 6, name: "Contact", link: "contact" },
];

const Footer = () => {
  return (
    <footer className="pt-25 md:pt-40 content max-2xl:px-3 bg-transparent">
      <div className="flex max-md:flex-col justify-between items-center text-neutral-200">

        {/* Logo → Home */}
        <Link
          to="introduction"
          smooth={true}
          duration={1000}
          offset={-140}
          className="flex items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            className="h-8 sm:h-14 rounded-2xl"
          />

          <span className="text-3xl sm:text-[32px] ms-3 font-semibold">
            Yassine
          </span>
        </Link>

        {/* Footer Links */}
        <nav className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              smooth={true}
              duration={1000}
              offset={-140}
              className="mx-2 group inline-block relative text-[12px] sm:text-[16px] cursor-pointer"
            >
              {item.name}

              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[12px] sm:text-[16px]">
          © {new Date().getFullYear()} Yassine Elamri
        </p>

      </div>
    </footer>
  );
};

export default Footer;
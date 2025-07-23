import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-white font-body text-lg">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-cyan transition duration-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;




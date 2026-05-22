
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      
      <h2 className="text-6xl text-cyan mb-10 border-b-4 border-cyan">
        About Me
      </h2>

      <p className="text-base leading-relaxed max-w-[800px]">
        Hi, I’m Vaibhav Mahajan, a MERN Stack Developer with a strong
        understanding of MongoDB, Express.js, React, and Node.js.

        <br /><br />

        I enjoy building responsive and user-friendly web applications where
        I can work on both frontend interfaces and backend logic. I have built
        personal projects that helped me understand how full-stack applications
        work, including API integration and basic backend development.

        <br /><br />

        I have recently completed my MCA and I am currently focused on
        improving my full-stack development skills by building projects and
        learning real-world development practices. I am actively looking for
        opportunities where I can contribute, learn, and grow as a developer.
      </p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>

    </div>
  );
};

export default AboutMeText;
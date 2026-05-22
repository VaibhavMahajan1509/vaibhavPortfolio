import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { skill: "HTML5", icon: FaHtml5 },
  { skill: "CSS3", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Bootstrap", icon: FaBootstrap },
  { skill: "Tailwind CSS", icon: SiTailwindcss },
  { skill: "Git", icon: FaGitAlt },
  { skill: "GitHub", icon: FaGithub },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 my-12 place-items-center">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", index * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-3">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
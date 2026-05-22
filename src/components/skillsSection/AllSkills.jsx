import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import {
  IoLogoJavascript,
} from "react-icons/io";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss
} from "react-icons/si";

//  (MERN STACK)
const skills = [
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "Express.js", icon: SiExpress },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Tailwind CSS", icon: SiTailwindcss },
  { skill: "Git", icon: FaGitAlt },
  { skill: "GitHub", icon: FaGithub },
];

const AllSkills = () => {
  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6 
      place-items-center 
      max-w-[900px] 
      mx-auto
    ">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", index * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] flex flex-col items-center">
        
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Skills Layout */}
        <div className="w-full mt-16">
          
          {/* Desktop */}
          <div className="hidden lg:block">
            <AllSkills />
          </div>

          {/* Mobile */}
          <div className="block lg:hidden">
            <AllSkillsSM />
          </div>

        </div>

      </div>
    </div>
  );
};

export default SkillsMain;
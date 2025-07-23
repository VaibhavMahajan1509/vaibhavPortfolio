import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* Hexagon as background */}
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
        {/* Spinning Hexagon */}
        <PiHexagonThin className="absolute w-full h-full text-cyan blur-md animate-[spin_20s_linear_infinite]" />

        {/* Image smaller inside */}
        <img
          src="/images/vaibhav.png"
          alt="Vaibhav Mahajan Pic"
          className="w-[120px] h-[150px] md:w-[200px] md:h-[160px] object-contain z-10 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;



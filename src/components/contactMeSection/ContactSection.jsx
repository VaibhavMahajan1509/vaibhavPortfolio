import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto px-4 mt-2 flex flex-col items-center text-center"
    >
      <h2 className="text-5xl border-b-4 border-cyan md:text-6xl font-bold text-cyan mb-10">
        Contact Me
      </h2>

      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-12 p-8 rounded-2xl shadow-lg text-white">
        {/* Left Side: Contact Info Only */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start text-left">
          <div className="flex gap-4 items-center">
            <HiOutlineMail className="text-3xl text-orange" />
            <p className="text-base">Vaibhav.mahajan1509@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <FiPhone className="text-3xl text-orange" />
            <p className="text-base">+91 6267090692</p>
          </div>
          <div className="flex gap-4 items-center">
            <IoLocationOutline className="text-3xl text-orange" />
            <p className="text-base">Indore, Madhya Pradesh</p>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end gap-4 mt-4 lg:mt-0">
          <a
            href="https://www.linkedin.com/in/vaibhav-mahajan-aa6592234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl h-12 w-12 border border-orange text-orange rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/VaibhavMahajan1509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl h-12 w-12 border border-orange text-orange rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;



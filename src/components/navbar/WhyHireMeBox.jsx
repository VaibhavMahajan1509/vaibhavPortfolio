import React from "react";

const WhyHireMeBox = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 bg-black/60">
      <div className="bg-black p-5 sm:p-6 rounded-lg border border-orange-500 text-center w-full max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto animate-fade-in relative">

        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
          Why You Should Hire Me
        </h2>

        <p className="text-sm sm:text-base text-white mb-6 leading-relaxed">
          I am a MERN Stack Developer with a strong foundation in MongoDB,
          Express.js, React, and Node.js. I have built multiple real-world
          projects where I developed full-stack applications, implemented REST
          APIs, handled authentication, and created responsive user interfaces.

          <br /><br />

          I am passionate about writing clean and maintainable code, solving
          problems efficiently, and continuously improving my skills. I am a
          quick learner, adaptable to new technologies, and ready to contribute
          to building scalable and user-focused web applications.
        </p>

        <button
          onClick={onClose}
          className="w-full sm:w-auto px-4 py-2 rounded-full text-white border border-orange-500 hover:bg-orange-500 transition duration-300"
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WhyHireMeBox;
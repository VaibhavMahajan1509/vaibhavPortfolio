import React from "react";

const WhyHireMeBox = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 bg-black/60">
      <div className="bg-black p-4 sm:p-6 rounded-lg border border-orange-500 text-center w-full max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto animate-fade-in relative">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Why You Should Hire Me</h2>
        <p className="text-sm sm:text-base text-white mb-6">
          I believe you should hire me because I have a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React. As a fresher, I bring a lot of enthusiasm and a willingness to learn and grow with the company. I have already built several projects using React, implemented API integrations, used tools like Git and Firebase, and focused on building clean, responsive UIs. I also make sure to write code that is organized, maintainable, and performance-optimized. I may not have industry experience yet, but I’ve worked hard to build a solid portfolio and constantly improve my skills. I am confident, dedicated, and ready to contribute from day one. I’m also looking for an opportunity where I can grow with a team and deliver real-world solutions.
        </p>
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-4 py-2 rounded-full text-white border border-orange-500 hover:bg-orange-500 transition duration-300 z-50"
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WhyHireMeBox;

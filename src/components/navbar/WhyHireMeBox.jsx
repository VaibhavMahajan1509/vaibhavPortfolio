import React from "react";

const WhyHireMeBox = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-0 right-0 z-40 flex justify-center px-4">
      <div className="bg-black p-6 rounded-lg border-orange border text-center max-w-xl w-full animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4">Why You Should Hire Me</h2>
        <p className="text-lg">
          I believe you should hire me because I have a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React. As a fresher, I bring a lot of enthusiasm and a willingness to learn and grow with the company. I have already built several projects using React, implemented API integrations, used tools like Git and Firebase, and focused on building clean, responsive UIs. I also make sure to write code that is organized, maintainable, and performance-optimized. I may not have industry experience yet, but I’ve worked hard to build a solid portfolio and constantly improve my skills. I am confident, dedicated, and ready to contribute from day one. I’m also looking for an opportunity where I can grow with a team and deliver real-world solutions.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded-full text-white border-orange border hover:bg-orange transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WhyHireMeBox;

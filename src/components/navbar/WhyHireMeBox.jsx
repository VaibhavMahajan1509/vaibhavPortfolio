import React from "react";

const WhyHireMeBox = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 bg-black/60">
      <div className="bg-black p-4 sm:p-6 rounded-lg border border-orange-500 text-center w-full max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto animate-fade-in relative">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Why You Should Hire Me</h2>
        <p className="text-sm sm:text-base text-white mb-6">
         I believe you should hire me because I have a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React. During my internship, I gained hands-on experience building real projects, creating responsive user interfaces, and implementing API integrations. This helped me apply my skills in a practical setting and improve my coding abilities.

I am dedicated, eager to learn, and ready to contribute from day one. I’m looking for an opportunity where I can grow further while delivering real-world solutions.
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

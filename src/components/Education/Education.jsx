import React from "react";

const Education = () => {
  return (
    <section id="education" className="text-gray-300 py-16 ]">
      <div className="max-w-[1000px] mx-auto px-4 p-6">
        <h2 className="text-4xl font-bold inline border-b-4 border-cyan text-cyan">
          Education
        </h2>

        <div className="mt-8 space-y-6">
          {/* MCA */}
          <div className="p-6 rounded-md border border-[#233554] shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-cyan">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-sm text-gray-400">Medicare University</p>
            <p className="text-sm text-gray-500">2023 - 2025</p>
          </div>

          {/* BCA */}
          <div className="p-6 rounded-md border border-[#233554] shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-cyan">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-sm text-gray-400">XYZ University</p>
            <p className="text-sm text-gray-500">2020 - 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

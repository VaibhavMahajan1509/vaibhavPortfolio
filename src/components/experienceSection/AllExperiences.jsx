import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";

const experiences = [
  {
    Intership: "Front-End Developer",
    company: "Manishit Technology Pvt Ltd",
    date: "Jan 2025 - Apr 2025",
    responsibilities: [
      "Built responsive UI components using React.js, JavaScript, HTML5, and CSS3.",
      "Learned React Hooks and Context API for state management.",
      "Used Git for version control and team collaboration.",
    ],
  },
  // You can add more experiences like this:
  // {
  //   Intership: "React Intern",
  //   company: "Another Company",
  //   date: "May 2025 - Jul 2025",
  //   responsibilities: [ ... ],
  // },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 flex-wrap">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-4">
          <SingleExperience experience={experience} />
          {/* Show arrow only between items and on large screens */}
          {index < experiences.length - 1 && (
            <FaArrowRightLong className="text-4xl text-orange-500 hidden lg:block" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;



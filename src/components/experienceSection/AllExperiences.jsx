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
  // Add more experiences if needed
];

const AllExperiences = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full px-4">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 w-full md:w-[600px]"
        >
          <SingleExperience experience={experience} />

          {/* Arrow between cards (only show if not last item) */}
          {index < experiences.length - 1 && (
            <FaArrowRightLong className="hidden lg:block text-4xl text-orange-500" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;





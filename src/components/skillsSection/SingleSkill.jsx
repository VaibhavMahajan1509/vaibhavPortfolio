const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="flex flex-col items-center hover:-translate-y-4 transition-all duration-500">
      
      <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full border-4 border-orange hover:scale-105 transition-all duration-500 text-5xl">
        {imgSvg}
      </div>

      <p className="text-white font-bold mt-2">{text}</p>
    </div>
  );
};

export default SingleSkill;

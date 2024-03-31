interface Props {
  title: string;
  year: string;
  description: string;
}

const SkillsItem = ({ title, year, description }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#d3d2d2] py-[0.9rem] font-bold text-sm md:text-[18px] border-[2px] border-[#B266FF]">
        {year}
      </span>
      <h1 className="mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-sm md:text-[17px] opacity-80">
        {description}
      </p>
    </div>
  );
};

export default SkillsItem;

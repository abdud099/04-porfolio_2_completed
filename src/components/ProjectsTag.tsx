const ProjectsTag = ({ name, onClick, isSelected }: any) => {
  const buttonStyles = isSelected
    ? "text-white border-[#954CE2]"
    : "text-[#d3d2d2] border-slate-600 hover:border-[#00005A]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectsTag;

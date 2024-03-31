import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Programmer",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1500,
        "E-Commerce Webs",
        1500,
        "UI/UX Designer",
        1500,
      ]}
      speed={25}
      className="text-[1.5rem] md:text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#3D008E] to-[#954CE2] font-bold"
      repeat={Infinity}
    />
  );
};

export default TextEffect;

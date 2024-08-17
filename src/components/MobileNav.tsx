import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} md:hidden transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-black`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
        <Link href="/">
          <div className="nav-link-mobile uppercase">Home</div>
        </Link>
        <Link href="#about">
          <div className="nav-link-mobile uppercase">About</div>
        </Link>
        <Link href="#service">
          <div className="nav-link-mobile uppercase">Services</div>
        </Link>
        <Link href="#project">
          <div className="nav-link-mobile uppercase">Project</div>
        </Link>
        <Link href="#blog">
          <div className="nav-link-mobile uppercase">Blog</div>
        </Link>
        <Link href="#contact">
          <div className="nav-link-mobile uppercase">Contact</div>
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#954CE2]"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;

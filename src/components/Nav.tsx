import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="w-[100%] fixed z-[1000] top-0 h-[10vh] bg-[#0a0f14] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={130}
              className="hidden md:flex"
            />
            <p className="md:hidden lg:hidden text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A] font-bold">
              ABDUL BASIT
            </p>
          </Link>
        </h1>

        <Link href="/">
          <div className="nav-link uppercase">Home</div>
        </Link>

        <Link href="#about">
          <div className="nav-link uppercase">About</div>
        </Link>

        <Link href="#service">
          <div className="nav-link uppercase">Services</div>
        </Link>

        <Link href="#project">
          <div className="nav-link uppercase">Project</div>
        </Link>

        <Link href="#blog">
          <div className="nav-link uppercase">Blog</div>
        </Link>

        <Link href="#contact">
          <div className="nav-link uppercase">Contact</div>
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#B266FF]" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

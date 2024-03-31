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
              width={150}
              height={150}
              className="hidden md:flex"
            />
            <p className="md:hidden lg:hidden text-[25px] text-white font-bold">
              basit<span className="text-[#FE0039]">Malik</span>
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
        {/* <Link href="#hero">
          <button className="nav-link uppercase">Home</button>
        </Link>
        <Link href="#about">
          <button className="nav-link uppercase">About</button>
        </Link>
        <Link href="#service">
          <button className="nav-link uppercase">Services</button>
        </Link>
        <Link href="#project">
          <button className="nav-link uppercase">Project</button>
        </Link>
        <Link href="#blog">
          <button className="nav-link uppercase">Blog</button>
        </Link>
        <Link href="#contact">
          <button className="nav-link uppercase">Contact</button>
        </Link> */}

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#FE0039]" />
        </div>
      </div>
    </nav>
    //#141c27
  );
};

export default Nav;

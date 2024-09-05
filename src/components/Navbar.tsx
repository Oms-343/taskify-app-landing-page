import Image from "next/image";

import logoImage from "@/public/images/logosaas.png";
import MenuIcon from "@/public/icons/menu.svg";

export default function Navbar() {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="relative">
          <div className="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
          <Image
            src={logoImage}
            alt="logo-image"
            className="relative h-12 w-12 cursor-pointer"
          />
        </div>

        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 md:hidden">
          <MenuIcon className="cursor-pointer text-white" />
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-white/60 transition hover:text-white">
            About
          </a>
          <a href="#" className="text-white/60 transition hover:text-white">
            Features
          </a>
          <a href="#" className="text-white/60 transition hover:text-white">
            Updates
          </a>
          <a href="#" className="text-white/60 transition hover:text-white">
            Help
          </a>
          <a href="#" className="text-white/60 hover:text-white">
            Customers
          </a>
          <button className="rounded-lg bg-white px-4 py-2">
            Get for free
          </button>
        </nav>
      </div>
    </div>
  );
}

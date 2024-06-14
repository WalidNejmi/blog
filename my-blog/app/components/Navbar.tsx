import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";
import Logo from "./Logo";

export default function Navbar() {
  const iconClass = "text-white/90 hover:text-white";
  return (
    <nav className="bg-slate-600 sticky top-0 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex justify-between sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Logo />
        </h1>
        <div className="flex flex-row justify-center items-center sm:justify-evenly gap-4 text-white text-4xl lg:text-5xl">
          <Link className={iconClass} href="">
            <FaYoutube />
          </Link>
          <Link className={iconClass} href="">
            <FaGithub />
          </Link>
          <Link className={iconClass} href="">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}

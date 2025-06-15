import Link from "next/link";
import { Menu } from "lucide-react";

// import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-gray-200 py-5">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row justify-between items-center max-md:hidden">
          <div className=" max-md:flex   hidden ">
            <Menu />
          </div>
          <div className="text-center py-4 max-md:py-0 ">
            <h1 className="max-md:text-[18px] text-4xl font-serif font-bold">
              The Faisalabad Times
            </h1>
          </div>
          <div className="text-xs ">Monday, June 10, 2024</div>
        </div>

        <div className="max-md:flex flex-col items-stretch   hidden">
          <div className="max-md:flex justify-between items-center   hidden ">
            <Menu />
            <div className="text-xs ">Monday, June 10, 2024</div>
          </div>
          <hr className=" my-2 " />
          <div className="text-center py-4 max-md:py-0 ">
            <h1 className="max-md:text-[18px] text-4xl font-serif font-bold">
              The Faisalabad Times
            </h1>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="mt-4 pb-2 max-md:hidden ">
          <ul className="flex flex-wrap justify-center space-x-6 text-sm font-medium  ">
            <li>
              <Link href="/" className="hover:underline">
                Politics
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                F.S.D.
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Business
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Opinion
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Science
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Health
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Sports
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Arts
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Books
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Style
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Food
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Travel
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

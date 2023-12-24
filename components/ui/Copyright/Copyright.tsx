import Link from "next/link";
import { BiSolidHeart } from "react-icons/bi";

const Copyright = () => {
  return (
    <div className="pt-7 mt-7 md:mt-14 md:pt-14 border-t border-t-gray-100 text-gray-500 text-center">
      <p className="text-center items-center mx-auto text-sm">
        &copy; 2023{" "}
        <Link href="/" className="text-violet-600">
          arcraft
        </Link>
        . All rights reserved. Created with{" "}
        <BiSolidHeart
          className="text-red-500 mx-1 inline-block"
          aria-label="heart-icon"
          role="img"
        />{" "}
        by{" "}
        <Link
          href="https://www.linkedin.com/in/vira-mesha/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-blue-500"
        >
          Vira Mesha
        </Link>
      </p>
    </div>
  );
};

export default Copyright;

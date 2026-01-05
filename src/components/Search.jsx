

import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

const SearchBox = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 1040);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth < 1040);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <CiSearch className="ml-2 text-xl text-gray-500" />
      ) : (
        <div className="relative flex items-center w-[520px]">
          <CiSearch className="absolute ml-2 text-xl text-gray-500" />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
          />
        </div>
      )}
    </>
  );
};

export default SearchBox;

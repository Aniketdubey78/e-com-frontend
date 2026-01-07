import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { Searchproduct } from "../features/product/productThunk";
import { useDispatch, useSelector } from "react-redux";
import { clearstate } from "../features/product/productSlice";

const SearchBox = () => {
  const items = useSelector((state) => state.products.items);
  const [open , setopen] = useState(true);
  const searchRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 1040);
  const timeRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setopen(false);
      dispatch(clearstate()); 
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth < 1040);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlesaerch = (e) => {
    const value = e.target.value;

    clearTimeout(timeRef.current);

    if (!value.trim()) return;

    timeRef.current = setTimeout(() => {
      dispatch(Searchproduct(value));
    }, 500);
  };

  return (
    <>
      {isDesktop ? (
  /* small screen */
  <>
    <CiSearch
      className="ml-2 text-xl text-gray-500 cursor-pointer"
      onClick={() => setopen(true)}
    />

    {open && (
      <div
        ref={searchRef}
        className="absolute top-0 left-[250px] mt-2 w-[90vw] max-w-[320px] bg-white z-50 mx-4"
      >
        <div className="relative flex items-center">
          <CiSearch className="absolute ml-2 text-xl text-gray-500" />
          <input
            type="text"
            autoFocus
            className="w-full pl-5 pr-4 py-2 border rounded-lg outline-none"
            onChange={handlesaerch}
          />
        </div>

        {items.length > 0 && (
          <div className="mt-2 shadow-lg border rounded-lg max-h-64 overflow-y-auto">
            {items.map((p) => (
              <div
                key={p._id}
                className="p-3 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {p.name}
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </>
) : (
  /* desktop */
  <div ref={searchRef} className="relative flex items-center w-[520px]">
    <CiSearch className="absolute ml-2 text-xl text-gray-500" />
    <input
      type="text"
      className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
      onChange={handlesaerch}
    />

    {items.length > 0 && (
      <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg border rounded-lg z-50 max-h-64 overflow-y-auto">
        {items.map((p) => (
          <div
            key={p._id}
            className="p-3 hover:bg-gray-100 cursor-pointer text-sm"
          >
            {p.name}
          </div>
        ))}
      </div>
    )}
  </div>
)}

    </>
  );
};

export default SearchBox;

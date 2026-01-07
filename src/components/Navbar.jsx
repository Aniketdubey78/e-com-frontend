import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authslice";
import { getwishlist } from "../features/wishlist/wishlistthunk";
import { getcart } from "../features/Addtocart/cartthunk";
import SearchBox from "./Search";


function Navbars() {
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);
  const Counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  return (
    <>
      <div className="Navbar relative">
        <Navbar fluid rounded>
          <NavbarBrand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
              Urban Attire
            </span>
          </NavbarBrand>

          <NavbarToggle />
          <NavbarCollapse>
            <SearchBox />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " py-2 text-blue-600" : " py-2 text-gray-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " py-2 text-blue-600" : "py-2 text-gray-700"
              }
              to="/products"
            >
              Product
            </NavLink>
            {!isAuthenticated ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " py-2 text-blue-600" : " py-2 text-gray-700"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/wishlist" onClick={() => dispatch(getwishlist())}>
                  <svg
                    class="text-lg  text-red-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                  </svg>
                </NavLink>
                <NavLink to="/Cart">
                  <div className="cart relative  py-2">
                    <FaCartShopping
                      className=" text-xl"
                      onClick={() => dispatch(getcart())}
                    />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-full">
                      {Counter}
                    </span>
                  </div>
                </NavLink>
                <div className="cart-list py-2">
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/login");
                    }}
                    className="cursor-pointer text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </NavbarCollapse>
        </Navbar>
      </div>
    </>
  );
}
export default Navbars;

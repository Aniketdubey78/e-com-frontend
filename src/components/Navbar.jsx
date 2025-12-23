import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { CiSearch } from "react-icons/ci";



function Navbars(){
    return(
        <>
        <div className="Navbar">
        <Navbar fluid rounded>
      <NavbarBrand  href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Urban Attire</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <CiSearch className="text-xl "/>
      </NavbarCollapse>
    </Navbar>
        </div>
        
        
        </>
    )
}
export default Navbars;
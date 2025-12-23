import Component from "./Curesol";
import Navbars from "./Navbar";
import Sizematter from "./Cards";
import HeroQuoteCard from "./Playheader";
import ProductCard from "./ProductCard";
import FooterComponent from "./Footer";


function Mainrendercomponent() {
    return (
        <>
            <div className="container-fluid " >

                <Navbars />
                <div className="magic bg-orange-100  pt-4 mt-4 rounded-md">
                    <HeroQuoteCard/>
                    <Component />
                    <Sizematter />
                    <ProductCard/>
                    <FooterComponent/>
                </div>

            </div>

        </>
    )
}
export default Mainrendercomponent;
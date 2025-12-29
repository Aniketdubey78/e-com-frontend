import Component from "../components/Curesol";
import Navbars from "../components/Navbar";
import Sizematter from "../components/Cards";
import HeroQuoteCard from "../components/Playheader";
import ProductCard from "../components/ProductCard";
import FooterComponent from "../components/Footer";


function Mainrendercomponent() {
    return (
        <>
            <div className="container-fluid " >

               
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
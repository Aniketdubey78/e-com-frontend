import Image1 from "../assets/cardImg.png"
import Image2 from "../assets/CardImg2.png"
import Image3 from "../assets/CardImg3.png"
import Image4 from "../assets/CardImg4.png"
import Image5 from "../assets/CardImg5.png"
import Image6 from "../assets/CardImg6.png"
import Image7 from "../assets/CardImg7.png"
import Image8 from "../assets/CardImg8.png"
import Image9 from "../assets/CardImg9.png"
import Image10 from "../assets/CardImg10.png"
import Image11 from "../assets/CardImg11.png"
import Image12 from "../assets/CardImg12.png"
import Image13 from "../assets/CardImg13.png"
import Image14 from "../assets/CardImg14.png"
import Image15 from "../assets/CardImg15.png"
import view1 from "../assets/viewproduct1.jpg"
import view2 from "../assets/viewproduct2.jpg"
import SpecificaionImg from "../assets/spceciImage1.png"
import Specification1Img from "../assets/specifiImage.png"
import { useState } from "react"


const productDdata = [
  { productImg: Image1, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image2, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image3, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image4, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image5, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image6, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image7, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image8, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image9, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image10, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image11, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image12, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image13, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image14, producthead: "OverSized Sweatrer", productPrice: "56$" },
  { productImg: Image15, producthead: "OverSized Sweatrer", productPrice: "56$" }



]




export default function Sizematter() {
  const sizeChart = {
  S: { chest: "36–38 in", waist: "30–32 in" },
  M: { chest: "38–40 in", waist: "32–34 in" },
  L: { chest: "40–42 in", waist: "34–36 in" },
  XL: { chest: "42–44 in", waist: "36–38 in" },
  XXL: { chest: "44–46 in", waist: "38–40 in" },
};
  const [pos, setpos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const[size,setsize] = useState("S");

  const mouseHandlser = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setpos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
  return (
    <>
      <div className="p-10 mt-2 flex flex-col lg:flex-row gap-6 rounded-md">

        {/* LEFT INFO */}
        <div className="info lg:w-1/2">
          <h5 className="font-bold tracking-tight text-gray-900 dark:text-white text-lg lg:text-3xl">
            Sizing Made Easy
          </h5>

          <p className="text-gray-700 dark:text-gray-400 text-[18px] lg:text-2xl mt-4">
            Our size guide uses your measurements to find the best fit for you
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="sizeform bg-pink-50 p-4 rounded-lg lg:w-1/2 w-full">
          <select className="w-full px-6 py-2 rounded-md"
          onChange={(e)=>setsize(e.target.value)}
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>

          <div className="size-info mt-4">
            <div className="flex justify-between py-2">
              <h4 className="text-sm">Chest</h4>
              <h4 className="text-sm">{sizeChart[size].chest}</h4>
            </div>

            <div className="flex justify-between py-2">
              <h4 className="text-sm">Waist</h4>
              <h4 className="text-sm">{sizeChart[size].waist}</h4>
            </div>
          </div>
        </div>

      </div>

      <div className="ProductCard columns-2 sm:columns-3 lg:columns-5 gap-2 p-6">
        {productDdata.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden relative group  "
          >
            {/* Image */}
            <img
              src={item.productImg}
              alt={item.name}
              className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="Hoveritems absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium translate-y-4 group-hover:translate-y-0 transition-all duration-300"> Add to Bag</button>
            </div>
            {/* Info
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {item.producthead}
            </h2>
            <p className="text-gray-600 font-bold mt-1">
              {item.productPrice}
            </p>

           
          </div> */}
          </div>
        ))}

      </div>

      <div className="productView   grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[2px]  ">

        <div className="showcase1 relative overflow-hidden "
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onMouseMove={mouseHandlser}
        >
          <img src={view1} alt="here is the image" className="w-full h-full  object-cover block opacity-75" />
          {show && (
            <span className="pointer-events-none absolute  px-4 py-2 z-20  bg-black text-white text-sm rounded-full transition-transform duration-75"
              style={{
                left: pos.x,
                top: pos.y,
              }}
            >
              1244 INR
            </span>
          )}
        </div>
        <div className="showcase2 overflow-hidden relative"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onMouseMove={mouseHandlser}
        >
          <img src={view2} alt="here is the image" className="w-full h-full object-cover block opacity-75" />
          {show && (
            <span className="pointer-events-none absolute  px-4 py-2 z-20  bg-black text-white text-sm rounded-full transition-transform duration-75"
              style={{
                left: pos.x,
                top: pos.y,
              }}
            >
              1344 INR
            </span>
          )}
        </div>

      </div>







    </>
  )
}

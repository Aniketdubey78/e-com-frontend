

import { Carousel,Card } from "flowbite-react";
import slide1 from "../assets/curosels1.jpeg"
import slide2 from "../assets/curosels2.jpeg"
import slide3 from "../assets/curosels3.jpeg"



export function Component() {
  
  return (
   
    <div className="h-[600px]">
  <Carousel>

    <div className="h-full w-full">
      <img
        src={slide1}
        alt="slide 1"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="h-full w-full">
      <img
        src={slide2}
        alt="slide 2"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="h-full w-full">
      <img
        src={slide3}
        alt="slide 3"
        className="w-full h-full object-cover"
      />
    </div>

  </Carousel>
</div>

    
  
  
  );
}
export default Component
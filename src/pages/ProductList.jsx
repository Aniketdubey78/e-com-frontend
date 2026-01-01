import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchproduct } from "../features/product/productThunk";
import ProductData from "../components/Productitems";


const ProductList = () => {
    const {loading,products} = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(fetchproduct());
    },[])
    
    if(loading){
      return  <div>Loding...</div>
    }

    return (
         <div className='flex flex-wrap gap-3 justify-center'>
      {products.map((product,index) => (
       
       <ProductData
          id={product._id}
          imageUrl={product.imgUrl}
          name={product.name}
          description={product.description}
          price={product.price}
           key={index}
       />
      ))}
    </div>
    )
}
export default ProductList;
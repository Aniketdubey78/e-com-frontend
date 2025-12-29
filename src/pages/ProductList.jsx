import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchproduct } from "../features/product/productThunk";
import ProductData from "../components/Productitems";


const ProductList = () => {
    const {loading,products} = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(fetchproduct);
    },[])
    
    if(loading){
        <div>Loding...</div>
    }

    return (
         <div className='flex flex-wrap gap-3 justify-center'>
      {products.map(product => (
       <ProductData
          id={product._id}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
       />
      ))}
    </div>
    )
}
export default ProductList;
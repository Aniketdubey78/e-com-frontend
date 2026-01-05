import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct } from "../features/product/productThunk";
import ProductData from "../components/Productitems";
import { BounceLoader } from "react-spinners";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    dispatch(fetchproduct());

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <BounceLoader className=" mx-auto my-60 " />
      ) : (
        <div className="flex flex-wrap gap-3 justify-center">
          {products.map((product, index) => (
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
      )}
    </>
  );
};
export default ProductList;

import { useDispatch, useSelector } from "react-redux"
import { addtowishlist, removefromwishlist } from "../features/wishlist/wishlistthunk";
import { Link } from "react-router-dom";

const ProductData = ({id,imageUrl,name,price}) => {
    const dispatch = useDispatch();
    const iswishlisted = useSelector((state)=>state.wishlist.items.some(
        item => item.id === id
    ));

    const handleWishlist = async () => {
       try {
         if(!iswishlisted){
           await dispatch(addtowishlist(id)).unwrap();
        }else{
           await dispatch(removefromwishlist(id)).unwrap();
        }
       } catch (error) {
        alert(error.message);
       }
    }

    return (
        <div class="w-full max-w-sm bg-neutral-primary-soft p-6 border-default rounded-base hover:shadow-lg">
        <Link to={`/products/${id}`}>
            <img class="rounded-base mb-6" src={imageUrl} alt="product image" />
        </Link>
        <div>
            {/* <div class="flex items-center space-x-3 mb-6">
                <span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">4.8 out of 5</span>
            </div> */}
            <a href="">
                <h5 class="text-xl text-heading font-semibold tracking-tight">{name}</h5>
            </a>
            <div class="flex items-center justify-between mt-6">
                <span class="text-3xl font-extrabold text-heading">${price}</span>
                <div className='flex items-center gap-4'>
                    {iswishlisted ? 
                        <FaHeart className='text-red-600' onClick={handleWishlist} size={30}/> 
                        : <FaRegHeart onClick={handleWishlist} size={30} />
                    }
                    <button type="button" class="inline-flex text-white items-center bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default ProductData;
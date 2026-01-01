import { Button } from "flowbite-react";
import { removefromCart } from "../features/Addtocart/cartthunk";
import { useDispatch, useSelector } from "react-redux";
import { removetoWishlist } from "../features/wishlistcointer";


const Addtocart = () => {
    const cartItems = useSelector(
        (state) => Array.isArray(state.Cart.Carts)
            ? state.Cart.Carts
            : []
    );
    console.log(cartItems);
    const dispatch = useDispatch();

    const handelAddtocart = (id) => {
        try {
            dispatch(removefromCart(id));
            dispatch(removetoWishlist())
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div className="max-w-4xl mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

                {cartItems.map((item) => (
                    <div
                        key={item._id}
                        className="w-full flex items-center justify-between border rounded-lg p-3 mb-3 bg-white"
                    >
                        {/* LEFT: Image + Name */}
                        <div className="flex items-center gap-4">
                            <img
                                src={item.imgUrl}
                                alt={item.name}
                                className="w-14 h-14 object-cover rounded-md"
                            />

                            <div>
                                <h4 className="font-medium text-heading">{item.name}</h4>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                        </div>

                        {/* RIGHT: Price */}
                        <div className="flex items-center gap-6">
                            <span className="text-lg font-semibold">
                                ₹{item.price * item.quantity}
                            </span>
                            <div>
                                <Button onClick={handelAddtocart} className="success">remove from Cart</Button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* TOTAL */}
                <div className="flex justify-between border-t pt-4 mt-4">
                    <h3 className="text-xl font-semibold">Total</h3>
                    {/* <h3 className="text-xl font-semibold">₹{totalAmount}</h3> */}
                </div>
            </div>


        </>
    )
}

export default Addtocart;
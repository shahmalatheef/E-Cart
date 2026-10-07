import { Button, Card } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteItem } from "../redux/Slices/wishlistSlice";
import { addToCart } from "../redux/Slices/cartSlice";

function Wishlist() {
  const wishlist = useSelector(
    (state) => state.wishlistReducer
  );

  const cart = useSelector(
    (state) => state.cartReducer
  );

  const dispatch = useDispatch();

  // Add wishlist product to cart
  const handleAddToCart = (item) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      alert("Product Already in Cart");
    } else {
      dispatch(
        addToCart({
          ...item,
          quantity: 1,
        })
      );

      alert("Product Added To Cart");
    }
  };

  // Remove from wishlist
  const handleRemove = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 px-4 py-10">

      {wishlist.length > 0 ? (

        <div className="max-w-7xl mx-auto">

          {/* =========================
              HEADING
          ========================= */}

          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
            My Wishlist
          </h1>


          {/* =========================
              WISHLIST PRODUCTS
          ========================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {wishlist.map((item) => (

              <Card
                key={item.id}
                className="w-full flex flex-col"
                imgAlt={item.title}
                imgSrc={item.thumbnail}
              >

                {/* PRODUCT TITLE */}

                <h5 className="text-lg font-semibold text-gray-900 dark:text-white  line-clamp-2">
                  {item.title}
                </h5>


                {/* PRICE */}

                <p className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">
                  ₹{item.price}
                </p>


                {/* BUTTONS */}

                <div className="flex flex-col gap-3 mt-3">

                  {/* ADD TO CART */}

                  <Button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-cyan-700 hover:bg-cyan-800"
                  >
                    Add To Cart
                  </Button>


                  {/* REMOVE */}

                  <Button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="w-full bg-red-500 hover:bg-red-600"
                  >
                    Remove From Wishlist
                  </Button>

                </div>

              </Card>

            ))}

          </div>

        </div>

      ) : (

        /* =========================
           EMPTY WISHLIST
        ========================= */

        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">

          <img
            src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
            alt="Empty Wishlist"
            className="w-60 h-60 sm:w-72 sm:h-72 object-contain"
          />


          <p className="mt-6 text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-200">
            YOUR WISHLIST IS EMPTY
          </p>


          <Link to="/products" className="mt-5">

            <Button className="bg-cyan-700 hover:bg-cyan-800 px-6">
              Add Products
            </Button>

          </Link>

        </div>

      )}

    </div>
  );
}

export default Wishlist;
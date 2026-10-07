import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "flowbite-react";

import { addToWishlist } from "../redux/Slices/wishlistSlice";
import { addToCart } from "../redux/Slices/cartSlice";

function View() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const { allProducts } = useSelector(
    (state) => state.productReducer
  );

  const wishlist = useSelector(
    (state) => state.wishlistReducer
  );

  const cart = useSelector(
    (state) => state.cartReducer
  );

  const dispatch = useDispatch();

  // Add to Wishlist
  const handleWishlist = () => {
    const existingProduct = wishlist.find(
      (item) => item.id == product.id
    );

    if (existingProduct) {
      alert("Product Already Existing");
    } else {
      dispatch(addToWishlist(product));
      alert("Product Added To Wishlist");
    }
  };

  // Add to Cart
  const handleCart = () => {
    const existingItem = cart.find(
      (item) => item.id == product.id
    );

    if (existingItem) {
      alert("Product Already Existing");
    } else {
      dispatch(
        addToCart({
          ...product,
          quantity: 1,
        })
      );

      alert("Product Added To Cart");
    }
  };

  // Find product
  useEffect(() => {
    const selectedProduct = allProducts.find(
      (item) => item.id == id
    );

    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [allProducts, id]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">

      <Card className="w-full max-w-5xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE - IMAGE */}
          <div className="flex items-center justify-center p-5 bg-gray-50 dark:bg-gray-800 rounded-xl">

            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="w-full max-w-md h-80  object-contain"
            />

          </div>

          {/* RIGHT SIDE - PRODUCT DETAILS */}
          <div className="flex flex-col justify-center p-4">

            {/* Product Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {product?.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base leading-7 mb-5">
              {product?.description}
            </p>

            {/* Price */}
            <div className="mb-6">

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Price
              </p>

              <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">
                ₹{product?.price}
              </h2>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Add Cart */}
              <Button
                onClick={handleCart}
                className="w-full sm:w-auto bg-cyan-700 hover:bg-cyan-800"
              >
                🛒 Add To Cart
              </Button>

              {/* Wishlist */}
              <Button
                onClick={handleWishlist}
                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700"
              >
                ❤️ Add To Wishlist
              </Button>

            </div>

          </div>

        </div>

      </Card>

    </div>
  );
}

export default View;
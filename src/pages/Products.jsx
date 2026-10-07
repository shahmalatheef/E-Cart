import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/Slices/productSlice";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Products() {
  const { loading, allProducts, error } = useSelector(
    (state) => state.productReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">
          Loading products...
        </p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-xl font-semibold text-red-600">
          Something went wrong!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 px-4 py-10">

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10">
        Our Products
      </h1>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {allProducts?.map((item) => (

          <Card
            key={item.id}
            className="w-full h-full flex flex-col"
            imgAlt={item.title}
            imgSrc={item.thumbnail}
          >

            {/* Product Title */}
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {item.title}
            </h5>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">

              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className="text-yellow-400"
                  size={17}
                />
              ))}

              <span className="ml-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
                5.0
              </span>

            </div>

            {/* Price + Button */}
            <div className="mt-auto pt-5 flex items-center justify-between gap-3">

              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ₹{item.price}
              </span>

              <Link to={`/view/${item.id}`}>
                <Button
                  type="button"
                  className="bg-cyan-700 hover:bg-cyan-800"
                >
                  View Details
                </Button>
              </Link>

            </div>

          </Card>

        ))}

      </div>

    </div>
  );
}

export default Products;
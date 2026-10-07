import React from "react";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  decrementCart,
  emptyCart,
  incrementCart,
  removeItem,
} from "../redux/Slices/cartSlice";

import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

function Cart() {
  const cart = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  // ==============================
  // TOTAL ITEMS
  // ==============================

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ==============================
  // TOTAL AMOUNT
  // ==============================

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ==============================
  // CHECKOUT
  // ==============================

  const handleCheckout = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-[80vh] bg-white px-4 sm:px-8 lg:px-12 py-10">

      {cart.length > 0 ? (

        <div className="max-w-7xl mx-auto">

          {/* ==================================
              PAGE HEADING
          ================================== */}

          <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-14">
            User Cart Summary
          </h1>


          {/* ==================================
              MAIN CONTENT
          ================================== */}

          <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-5 items-start">


            {/* ==================================
                LEFT SIDE - CART TABLE
            ================================== */}

            <div className="border border-gray-200 rounded-lg bg-white shadow-sm">

              <div className="overflow-x-auto">

                <Table>

                  {/* ==============================
                      TABLE HEADER
                  ============================== */}

                  <TableHead>

                    <TableRow>

                      <TableHeadCell className="text-center text-base">
                        #
                      </TableHeadCell>

                      <TableHeadCell className="text-base">
                        Name
                      </TableHeadCell>

                      <TableHeadCell className="text-center text-base">
                        Image
                      </TableHeadCell>

                      <TableHeadCell className="text-center text-base">
                        Quantity
                      </TableHeadCell>

                      <TableHeadCell className="text-center text-base">
                        Price
                      </TableHeadCell>

                      <TableHeadCell className="text-center text-base">
                        ...
                      </TableHeadCell>

                    </TableRow>

                  </TableHead>


                  {/* ==============================
                      TABLE BODY
                  ============================== */}

                  <TableBody className="divide-y">

                    {cart.map((item, index) => (

                      <TableRow
                        key={item.id}
                        className="bg-white"
                      >

                        {/* NUMBER */}

                        <TableCell className="text-center text-gray-700 text-base">
                          {index + 1}
                        </TableCell>


                        {/* NAME */}

                        <TableCell>

                          <span className="text-base text-gray-700 whitespace-nowrap">
                            {item.title}
                          </span>

                        </TableCell>


                        {/* IMAGE */}

                        <TableCell>

                          <div className="flex justify-center items-center">

                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-14 h-14 object-contain"
                            />

                          </div>

                        </TableCell>


                        {/* QUANTITY */}

                        <TableCell>

                          <div className="flex items-center justify-center gap-4">

                            {/* MINUS */}

                            <button
                              type="button"
                              onClick={() =>
                                dispatch(decrementCart(item))
                              }
                              className="text-gray-600 hover:text-red-500 transition"
                            >
                              <FaMinus size={15} />
                            </button>


                            {/* QUANTITY BOX */}

                            <div className="w-16 h-12 border border-gray-200 flex items-center justify-center">

                              <span className="text-gray-700 text-base">
                                {item.quantity}
                              </span>

                            </div>


                            {/* PLUS */}

                            <button
                              type="button"
                              onClick={() =>
                                dispatch(incrementCart(item))
                              }
                              className="text-gray-600 hover:text-green-500 transition"
                            >
                              <FaPlus size={18} />
                            </button>

                          </div>

                        </TableCell>


                        {/* PRICE */}

                        <TableCell className="text-center">

                          <span className="text-base text-gray-700 whitespace-nowrap">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>

                        </TableCell>


                        {/* REMOVE */}

                        <TableCell>

                          <div className="flex justify-center">

                            <button
                              type="button"
                              onClick={() =>
                                dispatch(removeItem(item.id))
                              }
                              className="text-red-500 hover:text-red-700 transition"
                              title="Remove product"
                            >

                              <FaTimes size={20} />

                            </button>

                          </div>

                        </TableCell>

                      </TableRow>

                    ))}

                  </TableBody>

                </Table>

              </div>


              {/* ==================================
                  BOTTOM BUTTONS
              ================================== */}

              <div className="flex justify-center items-center gap-16 py-10">

                {/* EMPTY CART */}

                <Button
                  type="button"
                  onClick={() => dispatch(emptyCart())}
                  className="bg-red-500 hover:bg-red-600 px-6 text-base"
                >
                  EMPTY CART
                </Button>


                {/* SHOP MORE */}

                <Link to="/products">

                  <Button
                    type="button"
                    className="bg-sky-500 hover:bg-sky-600 px-6 text-base"
                  >
                    SHOP MORE
                  </Button>

                </Link>

              </div>

            </div>


            {/* ==================================
                RIGHT SIDE - SUMMARY CARD
            ================================== */}

            <Card className="w-full shadow-lg rounded-lg">

              {/* TOTAL ITEMS */}

              <h2 className="text-3xl font-medium text-gray-700">
                Total {totalItems} Items
              </h2>


              {/* TOTAL AMOUNT */}

              <h2 className="text-3xl font-medium text-gray-700 leading-tight">

                Total Amount:

                <span className="text-red-500 ml-2">
                  ₹{totalAmount.toFixed(2)}
                </span>

              </h2>


              {/* DIVIDER */}

              <hr className="border-gray-300 my-2" />


              {/* CHECKOUT */}

              <Button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-2"
              >

                CHECKOUT

              </Button>

            </Card>

          </div>

        </div>

      ) : (

        /* ==================================
           EMPTY CART
        ================================== */

        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">

          <img
            src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
            alt="Empty Cart"
            className="w-60 h-60 sm:w-72 sm:h-72 object-contain"
          />

          <p className="mt-6 text-xl sm:text-2xl font-bold text-gray-700">
            YOUR CART IS EMPTY
          </p>

          <Link
            to="/products"
            className="mt-5"
          >

            <Button className="bg-sky-500 hover:bg-sky-600 px-6">
              ADD PRODUCTS
            </Button>

          </Link>

        </div>

      )}

    </div>
  );
}

export default Cart;
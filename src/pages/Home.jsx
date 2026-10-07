import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src="https://media.istockphoto.com/id/1439239346/vector/online-shopping-phone-shopping-cart-sale-paper-cut-and-craft-style.jpg?s=170667a&w=0&k=20&c=m0Hi1YJ3BoexpTnOOBcZkUi9Rww2plqqPqVkgbhojd4="
        alt="E-Cart Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to E-Cart
        </h1>

        <p className="text-white text-base md:text-xl mb-6 max-w-2xl">
          Shop the latest fashion, electronics, and more with exciting offers.
        </p>
         
         <Link to={'/products'}>
         <Button className="bg-sky-500 hover:bg-sky-600 px-6 py-2 text-lg">
          Get Started
        </Button>
         </Link>
      </div>
    </div>
  );
}

export default Home;
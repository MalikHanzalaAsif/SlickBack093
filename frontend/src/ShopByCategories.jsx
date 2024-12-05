import React, { useRef } from "react";
import ShopByCategoriesCard from "./components/ShopByCategoriesCard";
import Box from "@mui/joy/Box";
import "./styles/ShopByCategories.css"

export default function ShopByCategories() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <h1 className="text-3xl mt-4 text-center">Shop by Categories</h1>
      <section id="shopByCategories" className="my-12 relative">
        <button
          className="shopScrollButton absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-50"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <Box
          component="ul"
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            p: 0,
            m: 0,
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
          className="no-scrollbar justify-center"
        >
          <ShopByCategoriesCard src={"/img/accessories.jpeg"} name={"Accessories"}/>
          <ShopByCategoriesCard src={"/img/mugs.webp"} name={"Mugs"}/>
          <ShopByCategoriesCard src={"/img/caps.jpg"} name={"Caps"}/>
          <ShopByCategoriesCard src={"/img/watches.webp"} name={"Watches"}/>
        </Box>
        <button
          className="shopScrollButton absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-50"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </section>
    </>
  );
}


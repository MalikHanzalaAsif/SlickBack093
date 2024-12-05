import "./styles/Categories.css";
import { useRef } from "react";

export default function Categories() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, 
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, 
      behavior: "smooth",
    });
  };

  return (
    <section id="categories" className="relative w-full">
      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="scrollButton absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md"
      >
        &lt;
      </button>
      <button
        onClick={scrollRight}
        className="scrollButton absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md"
      >
        &gt;
      </button>

      {/* Scrollable Content */}
      <div className="my-8">
      <h1 className="text-center text-6xl mb-2">For You</h1>
      <p className="text-center text-xl font-mono">Latest Collection</p>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto w-full scroll-smooth relative"
      >
        <div className="categoriesCard flex-shrink-0 m-8 p-4 rounded-md">
          <div className="categoriesCardTitle">
            <h1 className="text-3xl">Seasonal Sweatshirts</h1>
            <p>Best from Us</p>
          </div>
          <div className="categoriesCardImage">
            <img
              src="/img/tShirt.png"
              alt="Sweat Shirts"
              className="h-96 w-96"
            />
          </div>
          <div className="categoriesCardText">
            <button class="cta flex justify-center items-center">
              <span class="hover-underline-animation"> Shop now </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="categoriesCard flex-shrink-0 m-8 p-4 rounded-md">
          <div className="categoriesCardTitle">
            <h1 className="text-3xl">Seasonal Trousers</h1>
            <p>Best from Us</p>
          </div>
          <div className="categoriesCardImage">
            <img src="/img/trouser.png" alt="Trousers" className="h-96 w-96" />
          </div>
          <div className="categoriesCardText">
            <button class="cta flex justify-center items-center">
              <span class="hover-underline-animation"> Shop now </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="categoriesCard flex-shrink-0 m-8 p-4 rounded-md">
          <div className="categoriesCardTitle">
            <h1 className="text-3xl">Seasonal T-Shirts</h1>
            <p>Best from Us</p>
          </div>
          <div className="categoriesCardImage">
            <img
              src="/img/sweatShirt.png"
              alt="T-Shirts"
              className="h-96 w-96"
            />
          </div>
          <div className="categoriesCardText">
            <button class="cta flex justify-center items-center">
              <span class="hover-underline-animation"> Shop now </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

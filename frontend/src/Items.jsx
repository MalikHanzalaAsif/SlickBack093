import "./styles/Items.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Items({ items }) {
  // Initialize state for each item's "liked" status
  const [likedItems, setLikedItems] = useState(
    items.map(() => false) // Initialize all items as not liked
  );

  // Function to handle like toggle for an individual item
  function changeLiking(index) {
    const updatedLikes = [...likedItems]; // Copy the current likedItems state
    updatedLikes[index] = !updatedLikes[index]; // Toggle the "liked" status for the specific item
    setLikedItems(updatedLikes); // Update the state with the new array
  }

  return (
    <div id="items" className="mt-4">
      <h1 className="text-5xl text-center">New Arrivals</h1>
      <p className="text-lg text-center font-mono">
        These are the latest styles. Shop these now at 45% discount.
      </p>
      <div id="itemCards" className="flex w-full flex-wrap justify-center">
        {items.map((item, index) => {
          return (
            <Link to="/contact">
              <div
                key={index}
                className="item m-4 flex flex-col w-full max-w-72 justify-center p-4 cursor-pointer hover:text-black"
                data-aos="fade-up"
              >
                <div className="itemImage flex flex-col bg-gray-100 p-4 mb-2 max-w-96">
                  {likedItems[index] ? (
                    <FavoriteIcon
                      className=""
                      id="heartIcon"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default Link behavior
                        e.stopPropagation(); // Stop event from propagating to Link
                        changeLiking(index); // Toggle the like state
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className=""
                      id="heartIcon"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default Link behavior
                        e.stopPropagation(); // Stop event from propagating to Link
                        changeLiking(index); // Toggle the like state
                      }}
                    />
                  )}


                  <img
                    src={item.image}
                    alt="item image"
                    className="h-60 max-w-56"
                  />
                </div>
                <div className="itemTextBox flex">
                  <div className="itemText">
                    <p className="text-sm m-2 ml-0">{item.title}</p>
                    <b className="m-2 ml-0">${item.price}</b>
                  </div>
                  <div className="arrowIcon m-2">
                    <AddShoppingCartIcon />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="itemsButton flex justify-center">
        <Link to="/shop">
          <button className="showMoreButton mb-4">Show More</button>
        </Link>
      </div>
    </div>
  );
}

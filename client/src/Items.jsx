import "./styles/Items.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Modal, Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CardModal from './components/CardModal';

export default function Items({ items }) {
  // Initialize state for each item's "liked" status
  const [likedItems, setLikedItems] = useState(
    items.map(() => false) // Initialize all items as not liked
  );

  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleColorChange(e){
    setSelectedItem((prev) => ({
      ...prev,
      "image": `/items/${prev.category}${e.target.value}.webp`,
      "color": `${e.target.value}`,
    }))
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


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
            <div
              key={index}
              className="item m-4 flex flex-col w-full max-w-72 justify-center p-4 cursor-pointer hover:text-black"
              data-aos="fade-up"
              onClick={() => handleOpenModal(item)} // Open modal on card click
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
                <div className="h-60 flex flex-col justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto max-w-56"
                  />
                </div>
              </div>
              <div className="itemTextBox flex">
                <div className="itemText">
                  <p className="text-sm m-2 ml-0">{item.description}</p>
                  <b className="m-2 ml-0">${item.price}</b>
                </div>
                <div className="arrowIcon m-2">
                  <AddShoppingCartIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CARD MODAL */}
      <CardModal openModal={openModal} handleCloseModal={handleCloseModal} selectedItem={selectedItem} onColorChange={handleColorChange}/>

      {/* SHOW MORE BUTTON */}
      <div className="itemsButton flex justify-center">
        <Link to="/shop">
          <button className="showMoreButton mb-4">Show More</button>
        </Link>
      </div>
    </div>
  );
}

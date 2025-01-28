import React, { useState, useRef } from 'react';
import "../styles/Shop.css";
import categories from '../utils/categories';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NavigationCategoriesButtons from '../components/NavigationCategoriesButtons';
import BackToTopButton from '../components/BackToTopButton';
import CardModal from '../components/CardModal';

const Shop = () => {
    const [likedItems, setLikedItems] = useState(
        categories.map(() => false) // Initialize all items as not liked
    );
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


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
        <>
            <NavigationCategoriesButtons />
            <BackToTopButton />
            <section id="shop" className="pt-16">
                <h1 className="shopHeadingMain text-5xl font-semibold text-center mb-16">
                    Shop By Categories
                </h1>
                <h2 className="text-4xl font-semibold text-center mb-16">All Items</h2>
                <div className="allCategories flex w-full flex-wrap justify-center">
                    {categories.map((item, index) => (
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
        
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-60 max-w-56"
                          />
                        </div>
                        <div className="itemTextBox flex justify-between">
                          <div className="itemText">
                            <p className="text-sm m-2 ml-0">{item.description}</p>
                            <b className="m-2 ml-0">${item.price}</b>
                          </div>
                          <div className="arrowIcon m-2">
                            <AddShoppingCartIcon />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
            </section>

            {/* CARD MODAL */}
            <CardModal openModal={openModal} handleCloseModal={handleCloseModal} selectedItem={selectedItem} />
        </>
    );
};

export default Shop;

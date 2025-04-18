import React, { useState } from 'react';
import "../styles/Shop.css";
import categories from '../utils/categories';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NavigationCategoriesButtons from '../components/NavigationCategoriesButtons';
import BackToTopButton from '../components/BackToTopButton';
import CardModal from '../components/CardModal';
import NotFound from './NotFound';
import { useLocation } from 'react-router-dom';

const SingleCategory = () => {
    const location = useLocation();
    const categoriesArray = categories.filter((item) => item.category === location.pathname.replace("/shop/", ""));
    if (!categoriesArray || categoriesArray.length === 0) {
        return <NotFound />
    }

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

    const [likedItems, setLikedItems] = useState(
        categoriesArray.map(() => false) // Initialize all items as not liked
    );

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
                <h2 className="text-4xl font-semibold text-center mb-16">{categoriesArray[0].category}</h2>
                <div className="allCategories flex w-full flex-wrap justify-center">
                    {categoriesArray.map((item, index) => (
                        <div
                            key={item.id} // Add a unique key
                            className="allCategoriesCard m-4 flex flex-col w-full max-w-72 justify-center p-4 cursor-pointer hover:text-black"
                            onClick={() => handleOpenModal(item)} // Open modal on card click
                            data-aos="fade-up"
                        >
                            <div className="itemImage flex flex-col bg-gray-100 p-4 mb-2 max-w-96">
                                {likedItems[index] ? (
                                    <FavoriteIcon
                                        className=""
                                        id="heartIcon"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeLiking(index);
                                        }}
                                    />
                                ) : (
                                    <FavoriteBorderIcon
                                        className=""
                                        id="heartIcon"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeLiking(index);
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
            <CardModal openModal={openModal} handleCloseModal={handleCloseModal} selectedItem={selectedItem} onColorChange={handleColorChange}/>
        </>
    );
};

export default SingleCategory;

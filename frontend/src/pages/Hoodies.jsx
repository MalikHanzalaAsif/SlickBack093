import React, { useState } from 'react';
import "../styles/Shop.css";
import categories from '../utils/categories';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NavigationCategoriesButtons from '../components/NavigationCategoriesButtons';
import BackToTopButton from '../components/BackToTopButton';
import { Modal, Box, IconButton, Typography } from "@mui/material";
import Button from '@mui/material/Button';

const Hoodies = () => {
    
    const hoodiesArray = categories.filter((item) => item.category === "hoodie");

    const [openModal, setOpenModal] = useState(false);
        const [selectedItem, setSelectedItem] = useState(null);
    
    
        const handleOpenModal = (item) => {
            setSelectedItem(item);
            setOpenModal(true);
        };
    
        const handleCloseModal = () => {
            setOpenModal(false);
        };

    const [likedItems, setLikedItems] = useState(
        hoodiesArray.map(() => false) // Initialize all items as not liked
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
                <h2 className="text-4xl font-semibold text-center mb-16">Hoodies</h2>
                <div className="allCategories flex w-full flex-wrap justify-center">
                    {hoodiesArray.map((item, index) => (
                        <div
                            key={item.id} // Add a unique key
                            className="allCategoriesCard m-4 flex flex-col w-full max-w-72 justify-center p-4 cursor-pointer hover:text-black"
                            onClick={() => handleOpenModal(item)} // Open modal on card click
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
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-60 max-w-56"
                                />
                            </div>
                            <div className="itemTextBox flex">
                                <div className="itemText">
                                    <p className="text-sm m-2 ml-0">{item.title}</p>
                                    <b className="m-2 ml-0">${item.price}</b>
                                </div>
                                <div className="arrowIcon m-2 relative left-8">
                                    <AddShoppingCartIcon/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {selectedItem && (
                        <>
                            <Typography variant="h6" style={{marginBottom: "1rem"}}>{selectedItem.title}</Typography>
                            <div className='flex justify-center items-center'>
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="h-36 w-36 object-cover mb-4"
                                />

                            </div>
                            <Typography variant="body1" paragraph style={{ fontWeight: "bold" }}>
                                Price: ${selectedItem.price}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {/* Add any other content related to the item */}
                                Description: {selectedItem.description || "No description available."}
                            </Typography>
                            <div>
                                <Button variant="outlined" color="error" onClick={handleCloseModal} style={{marginRight: "1rem"}}>
                                    Close
                                </Button>
                                <Button variant="contained" color="success">
                                    Add to Cart
                                </Button>
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default Hoodies;

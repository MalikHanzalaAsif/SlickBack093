import React from 'react';
import { useState } from 'react';
import { Modal, Box, IconButton, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useCart } from "./CartContext";
import toastEmitter from './ui/toast';
import colors from '../utils/colors.js';
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";

const CardModal = ({ openModal, handleCloseModal, selectedItem, onColorChange }) => {
    const [zoomModalOpen, setZoomModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { cart, setCart } = useCart();

    function updateCart(selectedItem) {
        const modifiedSelectedItem = {
            ...selectedItem,
            id: `${selectedItem.id}${selectedItem.color}`
        };

        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItemIndex = currentCart.findIndex(
            (item) => item.id === modifiedSelectedItem.id
        );

        if (existingItemIndex > -1) {
            currentCart[existingItemIndex].quantity += 1;
        } else {
            currentCart.push(modifiedSelectedItem);
        }

        setCart(currentCart)
        localStorage.setItem("cart", JSON.stringify(currentCart));
    }

    return (
        <>
            {/* Main Product Modal */}
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
                            <Typography variant="h6">{selectedItem.title}</Typography>
                            <p style={{ marginBottom: "1rem", fontSize: "small" }}>{selectedItem.tagline}</p>

                            {/* Clickable Image (Opens Zoom Modal) */}
                            <div className="flex justify-center items-center">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="h-40 w-40 object-cover mb-4 cursor-pointer hover:scale-105 transition"
                                    onClick={() => setZoomModalOpen(true)}
                                />
                            </div>

                            {/* Color Selection */}
                            <label htmlFor="colorSelect" className="mr-2">Select Color: </label>
                            <select id="colorSelect" className="p-2 rounded-lg" defaultValue={"White"} onChange={(e) => onColorChange(e)}>
                                {colors.map((color) => (
                                    <option key={color.hex} value={color.name} className="font-sans">{color.name}</option>
                                ))}
                            </select>

                            {/* Price & Description */}
                            <Typography variant="body1" paragraph style={{ fontWeight: "bold", marginTop: "1rem" }}>
                                Price: ${selectedItem.price}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                <b>Description:</b> {selectedItem.description || "No description available."}
                            </Typography>

                            {/* Buttons */}
                            <div>
                                <Button variant="outlined" color="error" onClick={handleCloseModal} style={{ marginRight: "1rem" }}>
                                    Close
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => {
                                        updateCart(selectedItem);
                                        toastEmitter({
                                            title: "Item added to cart!",
                                            type: "success",
                                        });
                                        handleCloseModal();
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </>
                    )}
                </Box>
            </Modal>

            {/* 🔍 Zoom Modal (Opens When Image Clicked) */}
            <Modal open={zoomModalOpen} onClose={() => setZoomModalOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90vw",  // ✅ Fixed: lowercase "w"
                        height: "90vh", // ✅ Fixed: lowercase "h"
                        minWidth: "90vw", // 🔥 Ensures the modal does not shrink
                        minHeight: "90vh", // 🔥 Ensures full height
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "auto", // 🔥 Prevents content from being cut off
                    }}
                >
                    <IconButton
                        onClick={() => setZoomModalOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "black",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
                        }}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>

                    <img
                        src={selectedItem?.image}
                        alt={selectedItem?.title}
                        className="max-w-full max-h-screen rounded-lg"
                    />
                </Box>
            </Modal>
        </>
    )
}

export default CardModal;
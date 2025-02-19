import React from 'react';
import { Modal, Box, IconButton, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useCart } from "./CartContext";
import toastEmitter from './ui/toast';
import colors from '../utils/colors.js';

const CardModal = ({ openModal, handleCloseModal, selectedItem }) => {
    const { cart, setCart } = useCart();

    function updateCart(selectedItem) {
        const modifiedSelectedItem = {
            ...selectedItem,
            quantity: 1,
        };

        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItemIndex = currentCart.findIndex(
            (item) => item.id === selectedItem.id
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
        <Modal open={openModal} onClose={handleCloseModal} >
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
                        <Typography variant="h6" >{selectedItem.title}</Typography>
                        <p style={{ marginBottom: "1rem", fontSize: "small" }}>{selectedItem.tagline}</p>
                        <div className='flex justify-center items-center'>
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="h-36 w-36 object-cover mb-4"
                            />
                        </div>
                        <label for="colorSelect" className='mr-2'>Select Color: </label>
                        <select id="colorSelect" className="p-2 rounded-lg" defaultValue={"White"}>
                            {colors.map((color)=> <option key={color.hex} value={color.name} className='font-sans'>{color.name}</option> )}
                        </select>
                        <Typography variant="body1" paragraph style={{ fontWeight: "bold", marginTop: "1rem" }}>
                            Price: ${selectedItem.price}
                        </Typography>
                        <Typography variant="body2" paragraph>
                            {/* Add any other content related to the item */}
                            <b>Description:</b> {selectedItem.description || "No description available."}
                        </Typography>
                        <div>
                            <Button variant="outlined" color="error" onClick={handleCloseModal} style={{ marginRight: "1rem" }}>
                                Close
                            </Button>
                            <Button variant="contained" color="success" onClick={() => {
                                updateCart(selectedItem);
                                toastEmitter({
                                    title: "Item added to cart!",
                                    type: "success",
                                });
                                handleCloseModal();
                            }}>
                                Add to Cart
                            </Button>
                        </div>
                    </>
                )}
            </Box>
        </Modal>
    )
}

export default CardModal;
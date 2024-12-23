import React from 'react';
import { Modal, Box, IconButton, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useCart } from "./CartContext";

const CardModal = ({ openModal, handleCloseModal, selectedItem }) => {
    const {cart, setCart} = useCart();
 // Update cart when adding a new item
    function updateCart(selectedItem) {
        const modifiedSelectedItem = {
          ...selectedItem,
          quantity: 1,
          color: "random",
        };
      
        // Get current cart from localStorage
        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
      
        // Check if the item already exists in the cart
        const existingItemIndex = currentCart.findIndex(
          (item) => item.id === selectedItem.id
        );
      
        if (existingItemIndex > -1) {
          // Update the quantity of the existing item
          currentCart[existingItemIndex].quantity += 1;
        } else {
          // Add the new item to the cart
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
                        <Typography variant="h6" style={{ marginBottom: "1rem" }}>{selectedItem.title}</Typography>
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
                            <Button variant="outlined" color="error" onClick={handleCloseModal} style={{ marginRight: "1rem" }}>
                                Close
                            </Button>
                            <Button variant="contained" color="success" onClick={() => {
                                updateCart(selectedItem);
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
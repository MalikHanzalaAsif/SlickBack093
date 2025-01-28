export default function calculateTotalCartPrice(cart) {
    const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
    return parseFloat(total.toFixed(2)); 
};
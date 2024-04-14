
/**
 * This function calculates the total price of a new order
 * @param {Array} cartProducts cartProducts: Array of Objects
 * @returns  {Number} Total price
 */
export const calculateTotal = (cartProducts) => {
    const priceList = cartProducts.map(product => product.price);
    const initialValue = 0;
    const total = priceList.reduce((account, productPrice) => account + productPrice, initialValue);
    return total;
}

/**
 * This function calculates the total price of a new order
 * @param {Array} cartProducts cartProducts: Array of Objects
 * @returns  {Number} Total price
 */
export const totalPrice = (cartProducts) => {
    let sum =0;
    cartProducts.forEach(product => sum += product.price)
    return sum;
}
export function calcChosenSubPrice(product) {
    return product.count * product.item.price
}

export function calcChosenTotalPrice(products) {
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice += product.subPrice
    });
    return totalPrice;
}


export function getChosenCountProductsInCart() {
    let chosen = JSON.parse(localStorage.getItem('chosen'))
    return chosen ? chosen.products.length : 0
}
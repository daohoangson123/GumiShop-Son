export const addToCart = newProduct => {
    return {
        type: 'Add_To_Cart',
        payload: newProduct
    }
}

export const setProductData = data => {
    return {
        type: 'Set_Product_Data',
        payload: data
    }
}

export const removeInCart = productId => {
    return {
        type: 'Remove_In_Cart',
        payload: productId
    }
}
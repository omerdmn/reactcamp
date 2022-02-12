export const AD_TO_CARD = "AD_TO_CARD"
export const REMOVE_FROM_CARD = "REMOVE_FROM_CARD"



export function addToCart(product) {
    return {
        type: AD_TO_CARD,
        payload: product
    }
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CARD,
        payload: product
    }
}
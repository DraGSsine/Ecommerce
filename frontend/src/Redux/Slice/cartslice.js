import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    IsCartOpen: false,
    quantity: 1,
    products: null,
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        closeCart: (state) => {
            if (document.body.style.overflow == "") {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            state.IsCartOpen = !state.IsCartOpen
        },
        increaseQuantity: (state, { payload }) => {
            state.products.map(item => item.itemproduct.id == payload.id ? item.quantity += 1 : item.quantity = item.quantity)
        },
        decreaseQuantity: (state, { payload }) => {
            state.products.map(item => item.itemproduct.id == payload.id ? item.quantity > 1 ? item.quantity -= 1 : item.quantity = 1 : item.quantity = item.quantity)
        },
        addProduct: (state, { payload }) => {
            window.scrollTo(0,0)
            if (state.products != null) {
                const data = state.products.every(item => item.itemproduct.id != payload.itemproduct.id)
                data ? state.products = [...state.products, payload] : state.products = [...state.products]
            } else {
                state.products = [payload]
            }
            if (document.body.style.overflow == "") {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            state.IsCartOpen = !state.IsCartOpen
        },
        removeItem: (state, { payload }) => {
            state.products = state.products.filter(elemnt => (
                elemnt.itemproduct.id != payload.id
            ))
        }
    }
})


export const { closeCart, decreaseQuantity, increaseQuantity, addProduct, removeItem } = cart.actions
export default cart.reducer
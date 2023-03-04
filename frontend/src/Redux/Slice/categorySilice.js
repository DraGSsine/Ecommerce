import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name:'categorySlice',
    initialState:{
        cat:[],
        priceRange:1000,
        sortprice:'asc'
    },
    reducers:{
        categoryReducer:(state,{payload})=>{
            state.cat = payload.isChecked
            ?[...state.cat,payload.value]
            :state.cat.filter((item) => item !== payload.value)
        },
        handlePriceChangeReducer:(state,{payload})=>{
            state.priceRange=payload.value
        },
        handlePriceSortReducer:(state,{payload})=>{
            state.sortprice=payload.sortprice
        }
    }
})

export const {categoryReducer,handlePriceChangeReducer,handlePriceSortReducer} = categorySlice.actions
export default categorySlice.reducer
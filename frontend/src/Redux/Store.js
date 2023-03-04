import { configureStore } from '@reduxjs/toolkit';
import cartreducer from './Slice/cartslice'
import categorySilice from './Slice/categorySilice';
export const store = configureStore({
    reducer:{
        cartreducer,
        categorySilice
    }
})
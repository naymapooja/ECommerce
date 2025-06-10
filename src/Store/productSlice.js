import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {

        add: (state, action) => {
            state.products.push(action.payload);

            const products = JSON.stringify(state.products)
            localStorage.setItem("products", products);
        },
        storeProducts: (state, action) => {
            state.products = action.payload;
        }
        // update:(state,action) =>{
        //     const updateproduct = action.payload
        //     const productIndex = state.products.findIndex((product)=>{
        //         return product.id === updateproduct.id;

        //     })
        //     if(productIndex){
        //         if(updateproduct.image)state.products[productIndex].image = updateproduct.image
        //         if(updateproduct.title)state.products[productIndex].title = updateproduct.title 
        //         if(updateproduct.price)state.products[productIndex].price = updateproduct.price

        //     }
        //     return{
        //         message:"product not found",
        //     }
        // }
    }
})
export const { add, storeProducts } = productSlice.actions;
export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const localStorageData = JSON.parse(localStorage.getItem("loggedInUser") || null)

const cartSlice = createSlice({
    name: "cart",
    initialState:{
             cart:[]
        
      
    },
    reducers:{
        addItem:( state,action )=>{
            const obj = state.cart.find((ele) => ele.id ===action.payload.id)
            if(obj){
            obj.quantity++
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
    
            },
    
                  RemoveItem:( state,action )=>{
    state.cart = state.cart.filter((ele) => ele.id != action.payload)
                
            },
            removeAll :(state)=>{
                state.cart = []
            },
            increaseQuantity: (state, action) => {
                const obj = state.cart.find((ele) => ele.id === action.payload);
                if (obj) {
                  obj.quantity++;
                }
              },
              decreaseQuantity: (state, action) => {
                const obj = state.cart.find((ele) => ele.id === action.payload);
                if (obj.quantity > 1) {
                  obj.quantity--;
                }
              },
    }

})
export const {addItem,RemoveItem,removeAll,increaseQuantity,decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
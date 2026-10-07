import { createSlice } from "@reduxjs/toolkit";
import { deleteItem } from "./wishlistSlice";
 const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // Actions - 
        // addToCart
         addToCart:(state,action)=>{
            const existingItem = state.find(item=>item.id==action.payload.id)
            if(existingItem){
                // Quantity Increment + Update Price
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.price * existingItem.quantity
            }
            else{
                // 
                 state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        // removeCart
        removeItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        // incrementCart
        incrementCart:(state,action)=>{
          const existingItem = state.find(item=>item.id==action.payload.id)
          if(existingItem){
                // Quantity Increment + Update Price
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.price * existingItem.quantity
            }
        },
        // decrementCart
         decrementCart:(state,action)=>{
          const existingItem = state.find(item=>item.id==action.payload.id)
          if(existingItem){
            if(existingItem.quantity>1){
                 // Quantity Increment + Update Price
                existingItem.quantity -= 1
                existingItem.totalPrice = existingItem.price * existingItem.quantity
            }
            }
       },
       // Empty Cart
       emptyCart:(state)=>{
        return []
       }
}
 })

 export const { addToCart , removeItem , incrementCart , decrementCart , emptyCart } = cartSlice.actions

 export default cartSlice.reducer
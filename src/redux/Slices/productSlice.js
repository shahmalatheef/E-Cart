import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Asynchronous action should be dispatched by product component

export const getAllProducts = createAsyncThunk('product/getAllProducts',async()=>{
    const res = await axios.get('https://dummyjson.com/products')
    console.log(res);
    return res.data.products
})

    const productSlice=createSlice({
        name:"products",
        initialState:{
            loading:true,
            allProducts:[],
            error:''
        },
        reducers:{
            // Actions - search,
        },
        extraReducers:(builder)=>{
            // Actions - promise implementation
            builder.addCase(getAllProducts.fulfilled,(state,action)=>{
                state.allProducts=action.payload
                state.loading=false
                state.error=''
            })
            builder.addCase(getAllProducts.pending,(state,action)=>{
                state.allProducts=[]
                state.loading=true
                state.error=''
            })
            builder.addCase(getAllProducts.rejected,(state,action)=>{
                state.allProducts=[]
                state.loading=false
                state.error='API Called Failed'
            })
        }
    })

export default productSlice.reducer


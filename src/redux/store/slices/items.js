import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
    name:"items",
    initialState:{
        items:[],
        individualPrice:0,
        totalAmount:0,
        totalQuantity:0,
    },
    reducers:{
        addItem(state, action){
            state.items.push(action.payload)
            state.individualPrice += Number(action.payload.price)
            state.totalAmount += Number(action.payload.totalPrice)
            state.totalQuantity += Number(action.payload.quantity)
        },
        removeItem(state, action){
            state.items = state.items.filter((task)=>task.id !== action.payload)
            console.log("removed id",action)
        }

    }
})


export default ItemsSlice

export const {addItem,removeItem}  = ItemsSlice.actions
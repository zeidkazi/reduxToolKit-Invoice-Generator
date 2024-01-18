import { createSlice } from "@reduxjs/toolkit";


const ModalSlice =createSlice({
    name:"modal",
    initialState:{
        showModal:false
    },
    reducers:{
        openModal(state,action){
            state.showModal=true
        },
        closeModal(state,action){
            state.showModal=false
        }
    }
})


export default ModalSlice

export const{closeModal,openModal} = ModalSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const InvoiceSlice = createSlice({
    name:"invoice",
    initialState:{
        toName:"",
        fromName:"",
        toEmail:"",
        fromEmail:"",
        toAddress:"",
        fromAddress:"",
        invoiceNumber:"",
        // dueDate:"",

    },
    reducers:{
        addInvoiceDetails(state,action){
            const {toName,fromName,toEmail,fromEmail,toAddress,fromAddress,invoiceNumber} = action.payload
            return{...state,toEmail,fromEmail,toName,fromName,toAddress,fromAddress,invoiceNumber}
        }
    }
    
})

export default InvoiceSlice
export const {addInvoiceDetails} = InvoiceSlice.actions
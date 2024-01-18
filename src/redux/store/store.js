
import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./slices/items";
import ModalSlice from "./slices/Modal";
import InvoiceSlice from "./slices/invoice";

//global store : acces files anywhere from any component
const Store = configureStore({
    reducer: {
        items : ItemsSlice.reducer,
        modal:  ModalSlice.reducer,
        invoice: InvoiceSlice.reducer,

    }


})


export default Store;
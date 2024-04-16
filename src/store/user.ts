import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

const initialState: API2={
    products:[],
    pro:[]
    
}
export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<Products[]>) => {
            state.products=action.payload;
        },

        fil:(state, action: PayloadAction<Products>) =>{
state.products.filter(p=>p==action.payload)
        },
        newUser: (state, action: PayloadAction<Products[]>) => {
            state.pro = action.payload

        },
        fil2: (state, action: PayloadAction<Products>) => {
            state.pro.filter(p => p == action.payload)
        },
    },
});


export const { addUser,fil,fil2,newUser } =
    userSlice.actions;
export const userSelector = (state: RootState) => state;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

interface userData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phonenumber: string;
}

const initailState: userData = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
}

const userSlice = createSlice({
    name: "user",
    initialState: initailState,
    reducers: {
        setSaveEmail:(state,action) => {
            state.email = action.payload;
        }
       
    }
})

export const {setSaveEmail} = userSlice.actions;

export default userSlice.reducer;
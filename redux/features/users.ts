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
       
    }
})

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

interface UserData {
  showbottom: boolean;
  selectedServices: number[]; // Array of IDs for selected services
}

const initialState: UserData = {
  showbottom: false,
  selectedServices: [],
};

const requestBottonSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setShowBotton: (state, action) => {
      state.showbottom = action.payload;
    },
    toggleSelectedService: (state, action) => {
      const serviceId = action.payload;
      if (state.selectedServices.includes(serviceId)) {
        state.selectedServices = state.selectedServices.filter((id) => id !== serviceId);
      } else {
        state.selectedServices.push(serviceId);
      }
      state.showbottom = state.selectedServices.length > 0;
    }
  },
});

export const { setShowBotton, toggleSelectedService} = requestBottonSlice.actions;

export default requestBottonSlice.reducer;

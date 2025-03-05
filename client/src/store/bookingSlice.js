import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;

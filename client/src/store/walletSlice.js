import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  transactions: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addFunds: (state, action) => {
      state.balance += action.payload;
    },
    withdrawFunds: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      }
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addFunds, withdrawFunds, addTransaction } = walletSlice.actions;
export default walletSlice.reducer;

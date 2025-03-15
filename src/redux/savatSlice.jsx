import { createSlice } from '@reduxjs/toolkit';

const savatSlice = createSlice({
  name: 'savat',
  initialState: [],
  reducers: {
    addToSavat: (state, action) => {
      const itemExists = state.find(item => item.nomi === action.payload.nomi);
      if (itemExists) {
        itemExists.miqdor += 1;
      } else {
        state.push({ ...action.payload, miqdor: 1 });
      }
    },
    removeFromSavat: (state, action) => {
      return state.filter(item => item.nomi !== action.payload.nomi);
    },
    changeQuantity: (state, action) => {
      const item = state.find(item => item.nomi === action.payload.nomi);
      if (item) {
        item.miqdor = action.payload.miqdor;
      }
    },
    clearSavat: (state) => {
      return [];
    },
    increment: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item && item.miqdor < 5) {
        item.miqdor + 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item && item.miqdor > 1) {
        item.miqdor - 1;
      }
    },
  }
});

export const { addToSavat, removeFromSavat, changeQuantity, clearSavat, increment, decrement } = savatSlice.actions;
export default savatSlice.reducer;

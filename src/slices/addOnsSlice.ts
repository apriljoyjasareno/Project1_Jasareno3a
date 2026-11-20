import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddOnItem {
  name: string;
  cost: number;
  quantity: number;
  image: string;
}

const initialState: AddOnItem[] = [
  { name: "Projectors", cost: 200, quantity: 0, image: "/images/projectors.jpg" },
  { name: "Speakers", cost: 35, quantity: 0, image: "/images/speakers.jpg" },
  { name: "Microphones", cost: 45, quantity: 0, image: "/images/microphones.jpg" },
  { name: "Whiteboards", cost: 80, quantity: 0, image: "/images/whiteboards.jpg" },
  { name: "Signage", cost: 80, quantity: 0, image: "/images/signage.jpg" },
];

const addOnsSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    incrementAddOn: (state, action: PayloadAction<number>) => {
      state[action.payload].quantity += 1;
    },
    decrementAddOn: (state, action: PayloadAction<number>) => {
      if (state[action.payload].quantity > 0) {
        state[action.payload].quantity -= 1;
      }
    },
  },
});

export const { incrementAddOn, decrementAddOn } = addOnsSlice.actions;
export default addOnsSlice.reducer;
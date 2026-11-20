import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MealItem {
  name: string;
  cost: number;
  selected: boolean;
}

interface MealsState {
  numberOfPeople: number;
  items: MealItem[];
}

const initialState: MealsState = {
  numberOfPeople: 0,
  items: [
    { name: "Breakfast", cost: 50, selected: false },
    { name: "High Tea", cost: 25, selected: false },
    { name: "Lunch", cost: 60, selected: false },
    { name: "Dinner", cost: 70, selected: false },
  ],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleMeal: (state, action: PayloadAction<number>) => {
      state.items[action.payload].selected = !state.items[action.payload].selected;
    },
    setNumberOfPeople: (state, action: PayloadAction<number>) => {
      state.numberOfPeople = action.payload;
    },
  },
});

export const { toggleMeal, setNumberOfPeople } = mealsSlice.actions;
export default mealsSlice.reducer;
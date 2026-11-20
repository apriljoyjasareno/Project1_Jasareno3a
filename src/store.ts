import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./slices/venueSlice";
import addOnsReducer from "./slices/addOnsSlice";
import mealsReducer from "./slices/mealsSlice";

export const store = configureStore({
  reducer: {
    venue: venueReducer,
    addOns: addOnsReducer,
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
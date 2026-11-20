import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VenueItem {
  name: string;
  capacity: number;
  cost: number;
  quantity: number;
  image: string;
}

const initialState: VenueItem[] = [
  { name: "Auditorium Hall", capacity: 200, cost: 5500, quantity: 0, image: "/images/auditorium-hall.jpg" },
  { name: "Conference Room", capacity: 15, cost: 1500, quantity: 0, image: "/images/conference-room.jpg" },
  { name: "Presentation Room", capacity: 50, cost: 3500, quantity: 0, image: "/images/presentation-room.jpg" },
  { name: "Large Meeting Room", capacity: 10, cost: 1000, quantity: 0, image: "/images/large-meeting-room.jpg" },
  { name: "Small Meeting Room", capacity: 5, cost: 800, quantity: 0, image: "/images/small-meeting-room.jpg" },
];

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    incrementVenue: (state, action: PayloadAction<number>) => {
      state[action.payload].quantity += 1;
    },
    decrementVenue: (state, action: PayloadAction<number>) => {
      if (state[action.payload].quantity > 0) {
        state[action.payload].quantity -= 1;
      }
    },
  },
});

export const { incrementVenue, decrementVenue } = venueSlice.actions;
export default venueSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: true,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
  },
});
export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;

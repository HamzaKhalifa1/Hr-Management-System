import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../styles/themeConfig.ts";

interface ThemeState {
  mode: "light" | "dark";
  theme: typeof lightTheme;
}

const initialState: ThemeState = {
  mode: "light",
  theme: lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.theme = state.mode === "light" ? lightTheme : darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

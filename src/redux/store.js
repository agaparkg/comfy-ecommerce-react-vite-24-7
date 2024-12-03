import { configureStore } from "@reduxjs/toolkit";
import comfySlice from "./comfySlice";

const store = configureStore({
  reducer: { comfyState: comfySlice.reducer },
});

export default store;

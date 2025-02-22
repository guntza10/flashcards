import { configureStore } from "@reduxjs/toolkit"
// reducers
import topicsReducer from "../features/topics/topicsSlice"

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
})

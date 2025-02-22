import { createSlice } from "@reduxjs/toolkit"

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: [],
  },
  reducers: {
    addTopic: (state, action) => {
      const { id } = action.payload
      state.topics[id] = {
        ...action.payload,
        quizIds: [],
      }
    },
  },
})

export const { addTopic } = topicsSlice.actions
export const selectTopics = (state) => state.topics.topics
export default topicsSlice.reducer

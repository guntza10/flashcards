import { createSlice } from "@reduxjs/toolkit"

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuize: (state, action) => {
      const { id } = action.payload
      state.quizzes[id] = action.payload
    },
  },
})

export const { addQuize } = quizzesSlice.actions
export const selectQuizzes = (state) => state.quizzes.quizzes
export default quizzesSlice.reducer

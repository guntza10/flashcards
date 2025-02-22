import { createSlice } from "@reduxjs/toolkit"

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: [],
  },
  reducers: {
    addQuize: (state, action) => {
      state.quizzes.push(action.payload)
    },
  },
})

export const { addQuize } = quizzesSlice.actions
export const selectQuizzes = (state) => state.quizzes.quizzes
export default quizzesSlice.reducer

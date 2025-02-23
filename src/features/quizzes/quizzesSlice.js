import { createSlice } from "@reduxjs/toolkit"

const defaultQuizzesState = {
  q1: {
    id: "q1",
    topicId: "t1",
    name: "Algebra Quiz",
    cardIds: ["c1", "c2", "c3"],
  },
  q2: {
    id: "q2",
    topicId: "t1",
    name: "Geometry Quiz",
    cardIds: ["c4", "c5", "c6"],
  },
  q3: {
    id: "q3",
    topicId: "t1",
    name: "Calculus Quiz",
    cardIds: ["c7", "c8", "c9"],
  },
  q4: {
    id: "q4",
    topicId: "t2",
    name: "Physics Quiz",
    cardIds: ["c10", "c11", "c12"],
  },
  q5: {
    id: "q5",
    topicId: "t2",
    name: "Chemistry Quiz",
    cardIds: ["c13", "c14", "c15"],
  },
  q6: {
    id: "q6",
    topicId: "t2",
    name: "Biology Quiz",
    cardIds: ["c16", "c17", "c18"],
  },
  q7: {
    id: "q7",
    topicId: "t3",
    name: "Ancient History Quiz",
    cardIds: ["c19", "c20", "c21"],
  },
  q8: {
    id: "q8",
    topicId: "t3",
    name: "Modern History Quiz",
    cardIds: ["c22", "c23", "c24"],
  },
  q9: {
    id: "q9",
    topicId: "t3",
    name: "World War Quiz",
    cardIds: ["c25", "c26", "c27"],
  },
}

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: defaultQuizzesState,
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

import { createSlice } from "@reduxjs/toolkit"

const defaultTopicsState = {
  t1: {
    id: "t1",
    name: "Mathematics",
    icon: "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg",
    quizIds: ["q1", "q2", "q3"],
  },
  t2: {
    id: "t2",
    name: "Science",
    icon: "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/balloon.svg",
    quizIds: ["q4", "q5", "q6"],
  },
  t3: {
    id: "t3",
    name: "History",
    icon: "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/bird.svg",
    quizIds: ["q7", "q8", "q9"],
  },
}

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: defaultTopicsState,
  },
  reducers: {
    addTopic: (state, action) => {
      const { id } = action.payload
      state.topics[id] = {
        ...action.payload,
        quizIds: [],
      }
    },
    addQuizToTopic: (state, action) => {
      const { id, quizId } = action.payload
      state.topics[id].quizIds.push(quizId)
    },
  },
})

export const { addTopic, addQuizToTopic } = topicsSlice.actions
export const selectTopics = (state) => state.topics.topics
export default topicsSlice.reducer

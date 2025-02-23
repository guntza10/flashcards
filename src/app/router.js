import { Navigate } from "react-router-dom"
import AppLayout from "./AppLayout"
import NewQuizForm from "../components/NewQuizForm"
import NewTopicForm from "../components/NewTopicForm"
import Topics from "../features/topics/Topics"
import Topic from "../features/topics/Topic"
import Quiz from "../features/quizzes/Quiz"
import Quizzes from "../features/quizzes/Quizzes"

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="topics" replace />,
      },
      { path: "topics", element: <Topics /> },
      { path: "topics/new", element: <NewTopicForm /> },
      { path: "topics/:topicId", element: <Topic /> },
      { path: "quizzes", element: <Quizzes /> },
      { path: "quizzes/new", element: <NewQuizForm /> },
      { path: "quizzes/:quizId", element: <Quiz /> },
    ],
  },
]

export default routes

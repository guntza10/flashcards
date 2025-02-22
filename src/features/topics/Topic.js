import React from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import ROUTES from "../../app/routes"

import { useSelector } from "react-redux"
import { selectQuizzes } from "../quizzes/quizzesSlice"
import { selectTopics } from "./topicsSlice"

export default function Topic() {
  // external
  const { topicId } = useParams()

  const topics = useSelector(selectTopics)
  const quizzes = useSelector(selectQuizzes)

  const topic = topics[topicId]

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />
  }

  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId])

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  )
}

import React, { useState } from "react"

import { useSelector } from "react-redux"
import { selectCard } from "./cardsSlice"

export default function Card({ id }) {
  const card = useSelector((state) => selectCard(state, id))
  const [flipped, setFlipped] = useState(false)

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  )
}

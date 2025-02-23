import { createSlice } from "@reduxjs/toolkit"

const defaultCardsState = {
  c1: { id: "c1", front: "2 + 2 = ?", back: "4" },
  c2: { id: "c2", front: "5 x 3 = ?", back: "15" },
  c3: { id: "c3", front: "Square root of 16?", back: "4" },
  c4: { id: "c4", front: "Area of a circle formula?", back: "πr²" },
  c5: { id: "c5", front: "Perimeter of a square formula?", back: "4 x side" },
  c6: { id: "c6", front: "Solve: 12 / 4", back: "3" },
  c7: { id: "c7", front: "Derivative of x²?", back: "2x" },
  c8: { id: "c8", front: "Integral of 1/x dx?", back: "ln|x| + C" },
  c9: { id: "c9", front: "Limit of (1+1/n)^n?", back: "e" },
  c10: { id: "c10", front: "Speed formula?", back: "distance/time" },
  c11: { id: "c11", front: "Force formula?", back: "mass x acceleration" },
  c12: { id: "c12", front: "Energy formula?", back: "mass x c²" },
  c13: { id: "c13", front: "H2O is common name for?", back: "Water" },
  c14: { id: "c14", front: "Atomic number of Oxygen?", back: "8" },
  c15: { id: "c15", front: "Periodic symbol for Sodium?", back: "Na" },
  c16: {
    id: "c16",
    front: "Photosynthesis converts?",
    back: "Light to energy",
  },
  c17: { id: "c17", front: "Largest organ in the human body?", back: "Skin" },
  c18: {
    id: "c18",
    front: "Function of red blood cells?",
    back: "Carry oxygen",
  },
  c19: { id: "c19", front: "Who built the pyramids?", back: "Egyptians" },
  c20: {
    id: "c20",
    front: "Famous ruler of Ancient Rome?",
    back: "Julius Caesar",
  },
  c21: { id: "c21", front: "Ancient Greek philosopher?", back: "Socrates" },
  c22: { id: "c22", front: "Start of the Middle Ages?", back: "5th century" },
  c23: {
    id: "c23",
    front: "Famous Renaissance artist?",
    back: "Leonardo da Vinci",
  },
  c24: {
    id: "c24",
    front: "What is the printing press?",
    back: "A revolutionary invention",
  },
  c25: { id: "c25", front: "When did WW2 end?", back: "1945" },
  c26: { id: "c26", front: "What was D-Day?", back: "Normandy invasion" },
  c27: {
    id: "c27",
    front: "Who was Winston Churchill?",
    back: "British Prime Minister",
  },
}

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: defaultCardsState,
  },
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload
      state.cards[id] = action.payload
    },
  },
})

export const { addCard } = cardsSlice.actions
export const selectCard = (state, cardId) => state.cards.cards[cardId]
export default cardsSlice.reducer

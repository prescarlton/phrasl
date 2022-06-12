import { v4 as uuid } from "uuid"
import { Puzzle } from "../../types/Puzzle"

const puzzleList: Puzzle[] = [
  {
    id: uuid(),
    category: "Phrase",
    value: "I GOT MY WISH",
  },
  {
    id: uuid(),
    category: "Phrase",
    value: "STANDING ROOM ONLY",
  },
  {
    id: uuid(),
    category: "Phrase",
    value: "DEEZ NUTS",
  },
  {
    id: uuid(),
    category: "Phrase",
    value: "I GOT MY FISH",
  },
]
export default puzzleList

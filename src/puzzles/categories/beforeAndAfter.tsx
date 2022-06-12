import { v4 as uuid } from "uuid"
import { Puzzle } from "../../types/Puzzle"

const puzzleList: Puzzle[] = [
  {
    id: uuid(),
    category: "Before & After",
    value: "DELTA DAWN DISHWASHING LIQUID",
  },
  {
    id: uuid(),
    category: "Before & After",
    value: "TRUCK STOP IN THE NAME OF LOVE",
  },
]

export default puzzleList

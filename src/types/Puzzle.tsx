import { PuzzleCategory } from "./PuzzleCategory"
export type Puzzle = {
  id: string
  category: PuzzleCategory["label"]
  value: string
  // not yet implemented; ideally a sum of all numbers
  difficulty?: number
  // not the slightest clue how this will be implemented
  weight?: number | 1
}

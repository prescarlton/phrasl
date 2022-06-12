import { createContext, ReactElement, useState } from "react"
import puzzles from "../puzzles"
import { Puzzle } from "../types/Puzzle"

interface PuzzleContextInterface {
  puzzle: Puzzle
  getPuzzleLetters: () => string[]
  getNewPuzzle: () => void
  getPuzzleWords: () => string[]
  guessedLetters: string[]
}

const PuzzleContext = createContext({} as PuzzleContextInterface)
export default PuzzleContext

export const PuzzleProvider = ({ children }: { children: ReactElement }) => {
  // select a random puzzle to start with
  const initPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)]
  const [puzzle, setPuzzle] = useState<Puzzle>(initPuzzle)

  const getNewPuzzle = () => {
    // get random puzzle from list of puzzles
    const index = Math.floor(Math.random() * puzzles.length)
    setPuzzle(puzzles[index])
  }
  const getPuzzleLetters = () => {
    return Array.from(puzzle.value)
  }
  const getPuzzleWords = () => {
    return puzzle.value.split(" ")
  }

  return (
    <PuzzleContext.Provider
      value={{
        puzzle,
        getNewPuzzle,
        getPuzzleLetters,
        getPuzzleWords,
        guessedLetters: [],
      }}>
      {children}
    </PuzzleContext.Provider>
  )
}

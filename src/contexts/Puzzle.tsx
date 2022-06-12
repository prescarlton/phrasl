import { createContext, ReactElement, useState } from "react"
import puzzles from "../puzzles"
import { Puzzle } from "../types/Puzzle"

type GameStatus = "start" | "playing" | "lost"

interface PuzzleContextInterface {
  puzzle: Puzzle
  getNewPuzzle: () => void
  getPuzzleWords: () => string[]
  guessedLetters: string[]
  guessLetter: (letter: string) => void
  misses: number
  gameStatus: GameStatus
  updateGameStatus: (status: GameStatus) => void
  resetGame: () => void
}
interface DefaultPuzzleState {
  puzzle: Puzzle
  guessedLetters: string[]
  misses: number
  gameStatus: GameStatus
}

const PuzzleContext = createContext({} as PuzzleContextInterface)
export default PuzzleContext

export const PuzzleProvider = ({ children }: { children: ReactElement }) => {
  // select a random puzzle to start with
  const randomPuzzle = () => puzzles[Math.floor(Math.random() * puzzles.length)]

  const defaultStates: DefaultPuzzleState = {
    puzzle: randomPuzzle(),
    guessedLetters: [],
    misses: 0,
    gameStatus: "playing",
  }

  const [puzzle, setPuzzle] = useState<Puzzle>(defaultStates.puzzle)
  const [guessedLetters, setGuessedLetters] = useState<string[]>(
    defaultStates.guessedLetters
  )
  const [misses, setMisses] = useState(defaultStates.misses)
  const [gameStatus, setGameStatus] = useState<GameStatus>(
    defaultStates.gameStatus
  )

  // number of missed letters a player can have
  const maxMisses = 3

  // returns random puzzle from list of puzzles
  const getNewPuzzle = () => {
    const index = Math.floor(Math.random() * puzzles.length)
    setPuzzle(puzzles[index])
  }

  // returns list of all words in the puzzle
  const getPuzzleWords = () => {
    return puzzle.value.split(" ")
  }

  // handle user guessing a letter
  const guessLetter = (letter: string) => {
    // if the letter has already been guessed, do nothing
    if (guessedLetters.includes(letter)) {
      return
    } else {
      // else, add it to the list
      setGuessedLetters([...guessedLetters, letter])
    }
    // if the puzzle doesn't include the letter, inc misses
    if (!puzzle.value.includes(letter)) setMisses(misses + 1)
    // if user hit maxMisses, they lose
    if (misses + 1 >= maxMisses) {
      // if user already guessed maxMisses, end the game
      setGameStatus("lost")
      return
    }
  }

  // handle updating gameStatus
  const updateGameStatus = (status: GameStatus) => {
    setGameStatus(status)
  }

  // handle resetting everything
  const resetGame = () => {
    setPuzzle(defaultStates.puzzle)
    setGuessedLetters(defaultStates.guessedLetters)
    setMisses(defaultStates.misses)
    setGameStatus(defaultStates.gameStatus)
  }

  return (
    <PuzzleContext.Provider
      value={{
        puzzle,
        getNewPuzzle,
        getPuzzleWords,
        guessedLetters,
        guessLetter,
        misses,
        gameStatus,
        updateGameStatus,
        resetGame,
      }}>
      {children}
    </PuzzleContext.Provider>
  )
}

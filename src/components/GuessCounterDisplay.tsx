import { Box } from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../contexts/Puzzle"

const GuessCounterDisplay = () => {
  const { misses, maxGuesses } = useContext(PuzzleContext)
  const filledInColor =
    maxGuesses - misses > 3
      ? "success.light"
      : maxGuesses - misses == 3
      ? "warning.light"
      : "error.light"
  return (
    <Box sx={{ display: "flex", gap: 1, flexDirection: "row-reverse" }}>
      {[...Array(maxGuesses)].map((guess, index) => (
        <Box
          key={index}
          sx={{
            width: 12,
            height: 12,
            border: 3,
            borderRadius: 1,
            borderColor: index >= misses ? filledInColor : "#D5D5D5",
            backgroundColor: index >= misses ? filledInColor : "#D5D5D5",
          }}></Box>
      ))}
    </Box>
  )
}
export default GuessCounterDisplay

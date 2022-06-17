import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import PuzzleContext, { invalidLetters } from "../contexts/Puzzle"

const PuzzleLetter = ({ letter }: { letter: string }) => {
  const { guessedLetters } = useContext(PuzzleContext)
  return (
    <Box
      className="puzzleLetter"
      sx={{
        border: 2.5,
        borderColor: letter ? "#D5D5D5" : "transparent",
        p: 0.75,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: {
          lg: 48,
          xs: 16,
        },
        width: {
          lg: 24,
          xs: 8,
        },
        flex: 1,
        boxSizing: "content-box",
        borderRadius: 1,
      }}>
      <Typography
        sx={{
          fontSize: {
            lg: "2.5rem",
            xs: "1rem",
          },
        }}>
        {(guessedLetters.includes(letter) || invalidLetters.includes(letter)) &&
          letter}
      </Typography>
    </Box>
  )
}

export default PuzzleLetter

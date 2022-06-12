import { Button } from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../contexts/Puzzle"

const KeyboardLetter = ({ letter }: { letter: string }) => {
  const { guessLetter } = useContext(PuzzleContext)
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D5D5D5",
        p: 1,
        borderRadius: 1,
        width: {
          xs: 30,
          lg: 48,
        },
        height: {
          xs: 48,
          lg: 64,
        },
        minWidth: 0,
        userSelect: "none",
        cursor: "pointer",
        color: "black",
        "&:hover": {
          color: "primary.main",
          backgroundColor: "#D5D5D5",
        },
      }}
      onClick={() => guessLetter(letter.toUpperCase())}>
      {letter}
    </Button>
  )
}

export default KeyboardLetter

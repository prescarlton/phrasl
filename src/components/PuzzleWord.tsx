import { Box } from "@mui/material"
import PuzzleLetter from "./PuzzleLetter"

const PuzzleWord = ({ word }: { word: string }) => {
  const letters = word.split("")
  return (
    <Box sx={{ display: "flex", gap: { lg: 1, xs: 0.5 }, maxWidth: "100%" }}>
      {letters.map((letter) => (
        <PuzzleLetter
          key={`${word}-${letters.indexOf(letter)}-${letter}`}
          letter={letter}
        />
      ))}
    </Box>
  )
}

export default PuzzleWord

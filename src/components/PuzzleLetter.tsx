import { Box } from "@mui/material"

const PuzzleLetter = ({ letter }: { letter: string }) => {
  console.log(letter)
  return (
    <Box
      sx={{
        border: 2,
        borderColor: "#D5D5D5",
        p: 1,
        display: "inline-flex",
        width: "1rem",
        height: "2rem",
      }}>
      {letter}
    </Box>
  )
}

export default PuzzleLetter

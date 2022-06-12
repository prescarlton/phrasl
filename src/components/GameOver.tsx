import { Box, Button, Typography } from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../contexts/Puzzle"

const GameOver = () => {
  const { resetGame } = useContext(PuzzleContext)
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h1">Game Over!</Typography>
      <Button variant="contained" color="primary" onClick={resetGame}>
        Play Again
      </Button>
    </Box>
  )
}

export default GameOver

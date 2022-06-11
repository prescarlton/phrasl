import "./styles/global.css"
import { Box, Button, Typography } from "@mui/material"
import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import { Puzzle } from "./types/Puzzle"
import puzzles from "./puzzles"

function App() {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null)

  const getNewPuzzle = () => {
    // get random puzzle from list of puzzles
    const index = Math.floor(Math.random() * puzzles.length)
    setPuzzle(puzzles[index])
  }
  useEffect(getNewPuzzle, [])

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box
        sx={{
          p: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {puzzle && (
          <>
            <Typography variant="h4">{puzzle.category}</Typography>
            <Typography variant="h2">{puzzle.value}</Typography>
          </>
        )}
        {!puzzle && <Typography variant="h2">Loading...</Typography>}
        <Button variant="contained" color="primary" onClick={getNewPuzzle}>
          New Puzzle
        </Button>
      </Box>
    </Box>
  )
}

export default App

import "./styles/global.css"
import { Box, Button, Typography } from "@mui/material"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import PuzzleContext from "./contexts/Puzzle"
import PuzzleDisplay from "./components/PuzzleDisplay"
import TouchKeyboard from "./components/TouchKeyboard"

function App() {
  const puzzleContext = useContext(PuzzleContext)

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box
        sx={{
          mt: 8,
          p: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <PuzzleDisplay />
        <TouchKeyboard />
        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => puzzleContext.getNewPuzzle()}>
          New Puzzle
        </Button> */}
      </Box>
    </Box>
  )
}

export default App

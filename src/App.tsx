import "./styles/global.css"
import { Box, Typography } from "@mui/material"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import PuzzleContext from "./contexts/Puzzle"
import PuzzleDisplay from "./components/PuzzleDisplay"
import TouchKeyboard from "./components/TouchKeyboard"

function App() {
  const { misses } = useContext(PuzzleContext)
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
      <Navbar />
      <Box
        sx={{
          mt: 8,
          p: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}>
        <Typography variant="h2">{3 - misses} guesses left</Typography>
        <PuzzleDisplay />
        <TouchKeyboard />
      </Box>
    </Box>
  )
}

export default App

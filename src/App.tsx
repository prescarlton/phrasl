import "./styles/global.css"
import { Box, Typography } from "@mui/material"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import PuzzleContext from "./contexts/Puzzle"
import PuzzleDisplay from "./components/PuzzleDisplay"
import TouchKeyboard from "./components/TouchKeyboard"
import DialogContext from "./contexts/Dialog"

function App() {
  const { misses, gameStatus } = useContext(PuzzleContext)
  const { showGameOverDialog } = useContext(DialogContext)
  if (gameStatus === "lost") showGameOverDialog()
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
